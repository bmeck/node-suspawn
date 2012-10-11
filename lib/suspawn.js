var spawn = require('child_process').spawn;

module.exports = function (command, args, options) {
  if (!Array.isArray(args)) {
    options = args;
    args = [];
  }
  if (!options) {
    options = {};
  }
  if (!args) {
    args = [];
  }
  args = [command].concat(args);
  if (options.env) {
    args = Object.keys(options.env).map(function (key) {
      return key.replace(/\W/,'\\$&')+'='+(options.env[key]+'').replace(/\W/,'\\$&');
    }).concat(args);
    options.env = {
      PATH: process.env.PATH
    };
  }
  if (options.uid) {
    args.unshift('-u');
    args.unshift(options.uid);
  }
  if (options.gid) {
    args.unshift('-g');
    args.unshift(options.gid);
  }
  return spawn('sudo', args, options);
}

