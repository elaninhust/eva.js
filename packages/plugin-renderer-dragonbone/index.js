'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/plugin-renderer-dragonbone.cjs.prod.js');
} else {
  module.exports = require('./dist/plugin-renderer-dragonbone.cjs.js');
}
