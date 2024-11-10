import * as migration_20241110_083610 from './20241110_083610';

export const migrations = [
  {
    up: migration_20241110_083610.up,
    down: migration_20241110_083610.down,
    name: '20241110_083610'
  },
];
