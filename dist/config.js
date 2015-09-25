'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodEnvironment = require('@nod/environment');

var configConsole = new _nodEnvironment.Environment({
  root: _path2['default'].resolve('.')
}).config,
    configRoot = new _nodEnvironment.Environment().config;

var config = _Object$assign({
  console: {}
}, configRoot, configConsole);

exports.config = config;
config.console = _Object$assign(config.console, configRoot.console, configConsole.console);

exports['default'] = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdXJrYW50dW5hbGkvU2l0ZXMvX1NhbmRib3gvTk9EL2NvbnNvbGUvc3JjL2NvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSyxrQkFBa0I7O0FBRTlDLElBQ0UsYUFBYSxHQUFHLEFBQUMsZ0NBQWdCO0FBQy9CLE1BQUksRUFBRyxrQkFBSyxPQUFPLENBQUMsR0FBRyxDQUFDO0NBQ3pCLENBQUMsQ0FBRSxNQUFNO0lBQ1YsVUFBVSxHQUFHLEFBQUMsaUNBQWlCLENBQUUsTUFBTSxDQUFDOztBQUVuQyxJQUFJLE1BQU0sR0FBRyxlQUFjO0FBQ2hDLFNBQU8sRUFBRyxFQUFFO0NBQ2IsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7OztBQUU5QixNQUFNLENBQUMsT0FBTyxHQUFHLGVBQ2YsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQzFELENBQUM7O3FCQUVhLE1BQU0iLCJmaWxlIjoiL1VzZXJzL2Z1cmthbnR1bmFsaS9TaXRlcy9fU2FuZGJveC9OT0QvY29uc29sZS9zcmMvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuXG5sZXRcbiAgY29uZmlnQ29uc29sZSA9IChuZXcgRW52aXJvbm1lbnQoe1xuICAgIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKVxuICB9KSkuY29uZmlnLFxuICBjb25maWdSb290ID0gKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWc7XG5cbmV4cG9ydCBsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gIGNvbnNvbGUgOiB7fVxufSwgY29uZmlnUm9vdCwgY29uZmlnQ29uc29sZSk7XG5cbmNvbmZpZy5jb25zb2xlID0gT2JqZWN0LmFzc2lnbihcbiAgY29uZmlnLmNvbnNvbGUsIGNvbmZpZ1Jvb3QuY29uc29sZSwgY29uZmlnQ29uc29sZS5jb25zb2xlXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=