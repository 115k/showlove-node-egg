'use strict';
module.exports = {
  rouerEach(arg, func) {
    // arg = map.resource || map.custom
    if (typeof arg === 'object') {
      for (const key in arg) {
        if (typeof arg[key] === 'object') {
          // map.custom.v3 = arg[key]
          for (const subkey in arg[key]) {
            // arg[key][subkey] 如
            func.call(this, arg[key][subkey], subkey, key);
          }
        }
      }
    }
  },
}
