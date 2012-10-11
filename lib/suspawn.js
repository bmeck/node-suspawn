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
  args.unshift(command);
  if (options.env) {
    Object.keys(options.env).forEach(function (key) {
      args.unshift(key.replace(/\W/,'\\$&')+'='+(options.env[key]+'').replace(/\W/,'\\$&'));
    });
    // We should reset the env to avoid some odd behavior
    // use spawnOptions to send things to `sudo` 
    options.env = process.env;
  }
  if (options.uid) {
    args.unshift('-u');
    args.unshift(options.uid);
  }
  if (options.gid) {
    args.unshift('-g');
    args.unshift(options.gid);
  }
  if (options.spawnOptions && options.spawnOptions.env) {
    options.env = options.spawnOptions.env;
  }
  return spawn('sudo', args, options);
}

