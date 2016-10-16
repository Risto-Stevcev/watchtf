#!/usr/bin/env node

var spawn = require('child_process').spawn
var chokidar = require('chokidar')
var process = require('process')

var argv = require('yargs')
    .options({
      'f': {
        alias: 'files',
        demand: true,
        describe: 'one or more glob patterns to watch',
        type: 'array'
      },
      'c': {
        alias: 'command',
        demand: true,
        describe: 'the command to run',
        type: 'string'
      }
    })
    .argv

var cmd = argv.c.split(/\s+/)

var spawnCmd = function() {
  spawn(cmd[0], cmd.slice(1), { stdio: 'inherit' })
}

var watcher = chokidar.watch(argv.f, { ignoreInitial: true })
    
;['add', 'change', 'unlink'].forEach(function(event) {
  watcher.on(event, spawnCmd)
})

console.log('Watching glob(s):', argv.f)
