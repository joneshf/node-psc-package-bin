'use strict';

const {EOL} = require('os');
const fs = require('fs');
const {join} = require('path');
const {spawn} = require('child_process');

const binBuild = require('bin-build');
const concatStream = require('concat-stream');
const rimraf = require('rimraf');
const test = require('tape');

const {bin} = require('./package.json');
const {SOURCE_URL} = require('./lib');
const VERSION = '0.3.1';
const allowDifferentUserFlag = ' --allow-different-user'.repeat(Number(process.platform !== 'win32'));

test('The package entry point', t => {
  t.plan(1);

  spawn(require('.'), ['--help'])
  .stdout.setEncoding('utf8').pipe(concatStream({encoding: 'string'}, msg => {
    t.ok(
      msg.startsWith('Usage: psc-package'),
      'should expose a path to `psc-package` binary.'
    );
  }));
});

test('`psc-package` command', t => {
  t.plan(1);

  spawn('node', [join(__dirname, bin[Object.keys(bin)[0]]), '--version'])
  .stdout
  .setEncoding('utf8')
  .pipe(concatStream({encoding: 'string'}, version => {
    t.strictEqual(version, VERSION + EOL, 'should run `psc-package` binary.');
  }));
});

test('Build script', t => {
  t.plan(2);

  const tmpDir = join(__dirname, 'tmp');

  rimraf.sync(tmpDir);
  fs.mkdirSync(tmpDir);

  binBuild()
  .src(SOURCE_URL)
  .cmd(`stack setup${allowDifferentUserFlag}`)
  .cmd(`stack install${allowDifferentUserFlag} --local-bin-path ${tmpDir}`)
  .run(runErr => {
    /* istanbul ignore if */
    if (runErr) {
      process.stderr.write(runErr.stack);
      t.fail(runErr);
      return;
    }

    fs.readdir(tmpDir, (readErr, filePaths) => {
      t.strictEqual(readErr, null, 'should create a directory.');

      t.ok(filePaths.indexOf('psc-package') !== -1, 'should compile `psc-package` binary.');
    });
  });
});
