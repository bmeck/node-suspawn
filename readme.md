# SuSpawn

## example

```node.js
require('suspawn')('env', {
  env: {
    VARBLOCKEDBYSUDOERSNORMALLY: 'BUT NOT NOW!'
  }
}).stdout.pipe(process.stdout);
```

## suspawn(command[, args][, options])

### options.spawnOptions.env

Environmental variables to pass to the `sudo` command.

### options.env

Environmental variables to pass through to the spawned command.

### options.uid

User to spawn as.

### options.gid

Group to spawn as.

