// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4UKJc":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "043affa210fd5d10be6d99797cacc1f4";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3rfh7":[function(require,module,exports) {
var _d = require("d3");
var _topojsonClient = require("topojson-client");
var _communities = require("./communities");
var _stats = require("./stats");
const spainjson = require("./spain.json");
const d3Composite = require("d3-composite-projections");
const maxAffected = s => {
  const max = s.reduce((max, item) => item.value > max ? item.value : max, 0);
  return max;
};
const calculateRadiusBasedOnAffectedCases = (comunidad, s) => {
  const entry = s.find(item => item.name === comunidad);
  const affectedRadiusScale = _d.scaleLinear().domain([0, maxAffected(s)]).range([0, 50]);
  return entry ? affectedRadiusScale(entry.value) : 0;
};
const aProjection = d3Composite.geoConicConformalSpain().scale(3300).translate([500, 400]);
const geoPath = _d.geoPath().projection(aProjection);
const geojson = _topojsonClient.feature(spainjson, spainjson.objects.ESP_adm1);
const svg = _d.select("body").append("svg").attr("width", 1024).attr("height", 800).attr("style", "background-color: #FBFAF0");
svg.selectAll("path").data(geojson["features"]).enter().append("path").attr("class", "country").attr("d", geoPath);
svg.selectAll("circle").data(_communities.latLongCommunities).enter().append("circle").attr("class", "affected-marker").attr("r", d => calculateRadiusBasedOnAffectedCases(d.name, _stats.statsIni)).attr("cx", d => aProjection([d.long, d.lat])[0]).attr("cy", d => aProjection([d.long, d.lat])[1]);
const updateRadius = data => {
  _d.selectAll("circle").data(_communities.latLongCommunities).transition().duration(500).attr("class", "affected-marker").attr("r", d => calculateRadiusBasedOnAffectedCases(d.name, data)).attr("cx", d => aProjection([d.long, d.lat])[0]).attr("cy", d => aProjection([d.long, d.lat])[1]);
};
document.getElementById("Inicio").addEventListener("click", function handlResultsIni() {
  updateRadius(_stats.statsIni);
});
document.getElementById("Final").addEventListener("click", function handlResultsFinal() {
  updateRadius(_stats.statsLast);
});

},{"d3":"3auhl","topojson-client":"7lQtw","./spain.json":"4YFx4","./communities":"2koyP","./stats":"1HPqM","d3-composite-projections":"1dSYS"}],"3auhl":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Array = require('d3-array');
var d3Axis = require('d3-axis');
var d3Brush = require('d3-brush');
var d3Chord = require('d3-chord');
var d3Color = require('d3-color');
var d3Contour = require('d3-contour');
var d3Delaunay = require('d3-delaunay');
var d3Dispatch = require('d3-dispatch');
var d3Drag = require('d3-drag');
var d3Dsv = require('d3-dsv');
var d3Ease = require('d3-ease');
var d3Fetch = require('d3-fetch');
var d3Force = require('d3-force');
var d3Format = require('d3-format');
var d3Geo = require('d3-geo');
var d3Hierarchy = require('d3-hierarchy');
var d3Interpolate = require('d3-interpolate');
var d3Path = require('d3-path');
var d3Polygon = require('d3-polygon');
var d3Quadtree = require('d3-quadtree');
var d3Random = require('d3-random');
var d3Scale = require('d3-scale');
var d3ScaleChromatic = require('d3-scale-chromatic');
var d3Selection = require('d3-selection');
var d3Shape = require('d3-shape');
var d3Time = require('d3-time');
var d3TimeFormat = require('d3-time-format');
var d3Timer = require('d3-timer');
var d3Transition = require('d3-transition');
var d3Zoom = require('d3-zoom');

var version = "6.7.0";

exports.version = version;
Object.keys(d3Array).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Array[k];
		}
	});
});
Object.keys(d3Axis).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Axis[k];
		}
	});
});
Object.keys(d3Brush).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Brush[k];
		}
	});
});
Object.keys(d3Chord).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Chord[k];
		}
	});
});
Object.keys(d3Color).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Color[k];
		}
	});
});
Object.keys(d3Contour).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Contour[k];
		}
	});
});
Object.keys(d3Delaunay).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Delaunay[k];
		}
	});
});
Object.keys(d3Dispatch).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Dispatch[k];
		}
	});
});
Object.keys(d3Drag).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Drag[k];
		}
	});
});
Object.keys(d3Dsv).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Dsv[k];
		}
	});
});
Object.keys(d3Ease).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Ease[k];
		}
	});
});
Object.keys(d3Fetch).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Fetch[k];
		}
	});
});
Object.keys(d3Force).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Force[k];
		}
	});
});
Object.keys(d3Format).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Format[k];
		}
	});
});
Object.keys(d3Geo).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Geo[k];
		}
	});
});
Object.keys(d3Hierarchy).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Hierarchy[k];
		}
	});
});
Object.keys(d3Interpolate).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Interpolate[k];
		}
	});
});
Object.keys(d3Path).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Path[k];
		}
	});
});
Object.keys(d3Polygon).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Polygon[k];
		}
	});
});
Object.keys(d3Quadtree).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Quadtree[k];
		}
	});
});
Object.keys(d3Random).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Random[k];
		}
	});
});
Object.keys(d3Scale).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Scale[k];
		}
	});
});
Object.keys(d3ScaleChromatic).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3ScaleChromatic[k];
		}
	});
});
Object.keys(d3Selection).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Selection[k];
		}
	});
});
Object.keys(d3Shape).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Shape[k];
		}
	});
});
Object.keys(d3Time).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Time[k];
		}
	});
});
Object.keys(d3TimeFormat).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3TimeFormat[k];
		}
	});
});
Object.keys(d3Timer).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Timer[k];
		}
	});
});
Object.keys(d3Transition).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Transition[k];
		}
	});
});
Object.keys(d3Zoom).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return d3Zoom[k];
		}
	});
});

},{"d3-array":"7CLUA","d3-axis":"7GTHy","d3-brush":"3jjNX","d3-chord":"lAb5X","d3-color":"3mmqs","d3-contour":"3GYiM","d3-delaunay":"2ErsE","d3-dispatch":"6ygE0","d3-drag":"5x5QZ","d3-dsv":"6T2lj","d3-ease":"3jKwm","d3-fetch":"3eyo6","d3-force":"1dvpK","d3-format":"3Bu0B","d3-geo":"3nbkI","d3-hierarchy":"3iNG0","d3-interpolate":"6eByj","d3-path":"m838t","d3-polygon":"1ahO8","d3-quadtree":"7scxm","d3-random":"17aL6","d3-scale":"2UZ4X","d3-scale-chromatic":"3ZacZ","d3-selection":"1RFAz","d3-shape":"fW1hY","d3-time":"JGVPX","d3-time-format":"13ygP","d3-timer":"6ZuUH","d3-transition":"ee4oY","d3-zoom":"6HwjU"}],"7CLUA":[function(require,module,exports) {
var define;
// https://d3js.org/d3-array/ v2.12.1 Copyright 2021 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  function bisector(f) {
    let delta = f;
    let compare = f;
    if (f.length === 1) {
      delta = (d, x) => f(d) - x;
      compare = ascendingComparator(f);
    }
    function left(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
      }
      return lo;
    }
    function right(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
      }
      return lo;
    }
    function center(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
      left,
      center,
      right
    };
  }
  function ascendingComparator(f) {
    return (d, x) => ascending(f(d), x);
  }
  function number(x) {
    return x === null ? NaN : +x;
  }
  function* numbers(values, valueof) {
    if (valueof === undefined) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          yield value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
          yield value;
        }
      }
    }
  }
  const ascendingBisect = bisector(ascending);
  const bisectRight = ascendingBisect.right;
  const bisectLeft = ascendingBisect.left;
  const bisectCenter = bisector(number).center;
  function count(values, valueof) {
    let count = 0;
    if (valueof === undefined) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          ++count;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
          ++count;
        }
      }
    }
    return count;
  }
  function length$1(array) {
    return array.length | 0;
  }
  function empty(length) {
    return !(length > 0);
  }
  function arrayify(values) {
    return typeof values !== "object" || ("length" in values) ? values : Array.from(values);
  }
  function reducer(reduce) {
    return values => reduce(...values);
  }
  function cross(...values) {
    const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
    values = values.map(arrayify);
    const lengths = values.map(length$1);
    const j = values.length - 1;
    const index = new Array(j + 1).fill(0);
    const product = [];
    if (j < 0 || lengths.some(empty)) return product;
    while (true) {
      product.push(index.map((j, i) => values[i][j]));
      let i = j;
      while (++index[i] === lengths[i]) {
        if (i === 0) return reduce ? product.map(reduce) : product;
        index[i--] = 0;
      }
    }
  }
  function cumsum(values, valueof) {
    var sum = 0, index = 0;
    return Float64Array.from(values, valueof === undefined ? v => sum += +v || 0 : v => sum += +valueof(v, index++, values) || 0);
  }
  function descending(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }
  function variance(values, valueof) {
    let count = 0;
    let delta;
    let mean = 0;
    let sum = 0;
    if (valueof === undefined) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          delta = value - mean;
          mean += delta / ++count;
          sum += delta * (value - mean);
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
          delta = value - mean;
          mean += delta / ++count;
          sum += delta * (value - mean);
        }
      }
    }
    if (count > 1) return sum / (count - 1);
  }
  function deviation(values, valueof) {
    const v = variance(values, valueof);
    return v ? Math.sqrt(v) : v;
  }
  function extent(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
    return [min, max];
  }
  // https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
  class Adder {
    constructor() {
      this._partials = new Float64Array(32);
      this._n = 0;
    }
    add(x) {
      const p = this._partials;
      let i = 0;
      for (let j = 0; j < this._n && j < 32; j++) {
        const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }
      p[i] = x;
      this._n = i + 1;
      return this;
    }
    valueOf() {
      const p = this._partials;
      let n = this._n, x, y, lo, hi = 0;
      if (n > 0) {
        hi = p[--n];
        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }
        if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }
      return hi;
    }
  }
  function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
      for (let value of values) {
        if (value = +value) {
          adder.add(value);
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if (value = +valueof(value, ++index, values)) {
          adder.add(value);
        }
      }
    }
    return +adder;
  }
  function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? v => adder.add(+v || 0) : v => adder.add(+valueof(v, ++index, values) || 0));
  }
  class InternMap extends Map {
    constructor(entries, key = keyof) {
      super();
      Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: key
        }
      });
      if (entries != null) for (const [key, value] of entries) this.set(key, value);
    }
    get(key) {
      return super.get(intern_get(this, key));
    }
    has(key) {
      return super.has(intern_get(this, key));
    }
    set(key, value) {
      return super.set(intern_set(this, key), value);
    }
    delete(key) {
      return super.delete(intern_delete(this, key));
    }
  }
  class InternSet extends Set {
    constructor(values, key = keyof) {
      super();
      Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: key
        }
      });
      if (values != null) for (const value of values) this.add(value);
    }
    has(value) {
      return super.has(intern_get(this, value));
    }
    add(value) {
      return super.add(intern_set(this, value));
    }
    delete(value) {
      return super.delete(intern_delete(this, value));
    }
  }
  function intern_get({_intern, _key}, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
  }
  function intern_set({_intern, _key}, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
  }
  function intern_delete({_intern, _key}, value) {
    const key = _key(value);
    if (_intern.has(key)) {
      value = _intern.get(value);
      _intern.delete(key);
    }
    return value;
  }
  function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }
  function identity(x) {
    return x;
  }
  function group(values, ...keys) {
    return nest(values, identity, identity, keys);
  }
  function groups(values, ...keys) {
    return nest(values, Array.from, identity, keys);
  }
  function rollup(values, reduce, ...keys) {
    return nest(values, identity, reduce, keys);
  }
  function rollups(values, reduce, ...keys) {
    return nest(values, Array.from, reduce, keys);
  }
  function index(values, ...keys) {
    return nest(values, identity, unique, keys);
  }
  function indexes(values, ...keys) {
    return nest(values, Array.from, unique, keys);
  }
  function unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
  }
  function nest(values, map, reduce, keys) {
    return (function regroup(values, i) {
      if (i >= keys.length) return reduce(values);
      const groups = new InternMap();
      const keyof = keys[i++];
      let index = -1;
      for (const value of values) {
        const key = keyof(value, ++index, values);
        const group = groups.get(key);
        if (group) group.push(value); else groups.set(key, [value]);
      }
      for (const [key, values] of groups) {
        groups.set(key, regroup(values, i));
      }
      return map(groups);
    })(values, 0);
  }
  function permute(source, keys) {
    return Array.from(keys, key => source[key]);
  }
  function sort(values, ...F) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    let [f = ascending] = F;
    if (f.length === 1 || F.length > 1) {
      const index = Uint32Array.from(values, (d, i) => i);
      if (F.length > 1) {
        F = F.map(f => values.map(f));
        index.sort((i, j) => {
          for (const f of F) {
            const c = ascending(f[i], f[j]);
            if (c) return c;
          }
        });
      } else {
        f = values.map(f);
        index.sort((i, j) => ascending(f[i], f[j]));
      }
      return permute(values, index);
    }
    return values.sort(f);
  }
  function groupSort(values, reduce, key) {
    return (reduce.length === 1 ? sort(rollup(values, reduce, key), ([ak, av], [bk, bv]) => ascending(av, bv) || ascending(ak, bk)) : sort(group(values, key), ([ak, av], [bk, bv]) => reduce(av, bv) || ascending(ak, bk))).map(([key]) => key);
  }
  var array = Array.prototype;
  var slice = array.slice;
  function constant(x) {
    return function () {
      return x;
    };
  }
  var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
  function ticks(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    (stop = +stop, start = +start, count = +count);
    if (start === stop && count > 0) return [start];
    if (reverse = stop < start) (n = start, start = stop, stop = n);
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
      let r0 = Math.round(start / step), r1 = Math.round(stop / step);
      if (r0 * step < start) ++r0;
      if (r1 * step > stop) --r1;
      ticks = new Array(n = r1 - r0 + 1);
      while (++i < n) ticks[i] = (r0 + i) * step;
    } else {
      step = -step;
      let r0 = Math.round(start * step), r1 = Math.round(stop * step);
      if (r0 / step < start) ++r0;
      if (r1 / step > stop) --r1;
      ticks = new Array(n = r1 - r0 + 1);
      while (++i < n) ticks[i] = (r0 + i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
  }
  function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }
  function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10) step1 *= 10; else if (error >= e5) step1 *= 5; else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
  }
  function nice(start, stop, count) {
    let prestep;
    while (true) {
      const step = tickIncrement(start, stop, count);
      if (step === prestep || step === 0 || !isFinite(step)) {
        return [start, stop];
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      }
      prestep = step;
    }
  }
  function sturges(values) {
    return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
  }
  function bin() {
    var value = identity, domain = extent, threshold = sturges;
    function histogram(data) {
      if (!Array.isArray(data)) data = Array.from(data);
      var i, n = data.length, x, values = new Array(n);
      for (i = 0; i < n; ++i) {
        values[i] = value(data[i], i, data);
      }
      var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
      // Convert number of thresholds into uniform thresholds, and nice the
      // default domain accordingly.
      if (!Array.isArray(tz)) {
        const max = x1, tn = +tz;
        if (domain === extent) [x0, x1] = nice(x0, x1, tn);
        tz = ticks(x0, x1, tn);
        // If the last threshold is coincident with the domain’s upper bound, the
        // last bin will be zero-width. If the default domain is used, and this
        // last threshold is coincident with the maximum input value, we can
        // extend the niced upper bound by one tick to ensure uniform bin widths;
        // otherwise, we simply remove the last threshold. Note that we don’t
        // coerce values or the domain to numbers, and thus must be careful to
        // compare order (>=) rather than strict equality (===)!
        if (tz[tz.length - 1] >= x1) {
          if (max >= x1 && domain === extent) {
            const step = tickIncrement(x0, x1, tn);
            if (isFinite(step)) {
              if (step > 0) {
                x1 = (Math.floor(x1 / step) + 1) * step;
              } else if (step < 0) {
                x1 = (Math.ceil(x1 * -step) + 1) / -step;
              }
            }
          } else {
            tz.pop();
          }
        }
      }
      // Remove any thresholds outside the domain.
      var m = tz.length;
      while (tz[0] <= x0) (tz.shift(), --m);
      while (tz[m - 1] > x1) (tz.pop(), --m);
      var bins = new Array(m + 1), bin;
      // Initialize bins.
      for (i = 0; i <= m; ++i) {
        bin = bins[i] = [];
        bin.x0 = i > 0 ? tz[i - 1] : x0;
        bin.x1 = i < m ? tz[i] : x1;
      }
      // Assign data to bins by value, ignoring any outside the domain.
      for (i = 0; i < n; ++i) {
        x = values[i];
        if (x0 <= x && x <= x1) {
          bins[bisectRight(tz, x, 0, m)].push(data[i]);
        }
      }
      return bins;
    }
    histogram.value = function (_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
    };
    histogram.domain = function (_) {
      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
    };
    histogram.thresholds = function (_) {
      return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
    };
    return histogram;
  }
  function max(values, valueof) {
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null && (max < value || max === undefined && value >= value)) {
          max = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
          max = value;
        }
      }
    }
    return max;
  }
  function min(values, valueof) {
    let min;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null && (min > value || min === undefined && value >= value)) {
          min = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) {
          min = value;
        }
      }
    }
    return min;
  }
  // Based on https://github.com/mourner/quickselect
  // ISC license, Copyright 2018 Vladimir Agafonkin.
  function quickselect(array, k, left = 0, right = array.length - 1, compare = ascending) {
    while (right > left) {
      if (right - left > 600) {
        const n = right - left + 1;
        const m = k - left + 1;
        const z = Math.log(n);
        const s = 0.5 * Math.exp(2 * z / 3);
        const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
        const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
        quickselect(array, k, newLeft, newRight, compare);
      }
      const t = array[k];
      let i = left;
      let j = right;
      swap(array, left, k);
      if (compare(array[right], t) > 0) swap(array, left, right);
      while (i < j) {
        (swap(array, i, j), ++i, --j);
        while (compare(array[i], t) < 0) ++i;
        while (compare(array[j], t) > 0) --j;
      }
      if (compare(array[left], t) === 0) swap(array, left, j); else (++j, swap(array, j, right));
      if (j <= k) left = j + 1;
      if (k <= j) right = j - 1;
    }
    return array;
  }
  function swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
  function quantile(values, p, valueof) {
    values = Float64Array.from(numbers(values, valueof));
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return min(values);
    if (p >= 1) return max(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
  }
  function quantileSorted(values, p, valueof = number) {
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
  }
  function freedmanDiaconis(values, min, max) {
    return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(count(values), -1 / 3)));
  }
  function scott(values, min, max) {
    return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(count(values), -1 / 3)));
  }
  function maxIndex(values, valueof) {
    let max;
    let maxIndex = -1;
    let index = -1;
    if (valueof === undefined) {
      for (const value of values) {
        ++index;
        if (value != null && (max < value || max === undefined && value >= value)) {
          (max = value, maxIndex = index);
        }
      }
    } else {
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
          (max = value, maxIndex = index);
        }
      }
    }
    return maxIndex;
  }
  function mean(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          (++count, sum += value);
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
          (++count, sum += value);
        }
      }
    }
    if (count) return sum / count;
  }
  function median(values, valueof) {
    return quantile(values, 0.5, valueof);
  }
  function* flatten(arrays) {
    for (const array of arrays) {
      yield* array;
    }
  }
  function merge(arrays) {
    return Array.from(flatten(arrays));
  }
  function minIndex(values, valueof) {
    let min;
    let minIndex = -1;
    let index = -1;
    if (valueof === undefined) {
      for (const value of values) {
        ++index;
        if (value != null && (min > value || min === undefined && value >= value)) {
          (min = value, minIndex = index);
        }
      }
    } else {
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) {
          (min = value, minIndex = index);
        }
      }
    }
    return minIndex;
  }
  function pairs(values, pairof = pair) {
    const pairs = [];
    let previous;
    let first = false;
    for (const value of values) {
      if (first) pairs.push(pairof(previous, value));
      previous = value;
      first = true;
    }
    return pairs;
  }
  function pair(a, b) {
    return [a, b];
  }
  function range(start, stop, step) {
    (start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step);
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while (++i < n) {
      range[i] = start + i * step;
    }
    return range;
  }
  function least(values, compare = ascending) {
    let min;
    let defined = false;
    if (compare.length === 1) {
      let minValue;
      for (const element of values) {
        const value = compare(element);
        if (defined ? ascending(value, minValue) < 0 : ascending(value, value) === 0) {
          min = element;
          minValue = value;
          defined = true;
        }
      }
    } else {
      for (const value of values) {
        if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
          min = value;
          defined = true;
        }
      }
    }
    return min;
  }
  function leastIndex(values, compare = ascending) {
    if (compare.length === 1) return minIndex(values, compare);
    let minValue;
    let min = -1;
    let index = -1;
    for (const value of values) {
      ++index;
      if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
        minValue = value;
        min = index;
      }
    }
    return min;
  }
  function greatest(values, compare = ascending) {
    let max;
    let defined = false;
    if (compare.length === 1) {
      let maxValue;
      for (const element of values) {
        const value = compare(element);
        if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
          max = element;
          maxValue = value;
          defined = true;
        }
      }
    } else {
      for (const value of values) {
        if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
          max = value;
          defined = true;
        }
      }
    }
    return max;
  }
  function greatestIndex(values, compare = ascending) {
    if (compare.length === 1) return maxIndex(values, compare);
    let maxValue;
    let max = -1;
    let index = -1;
    for (const value of values) {
      ++index;
      if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
        maxValue = value;
        max = index;
      }
    }
    return max;
  }
  function scan(values, compare) {
    const index = leastIndex(values, compare);
    return index < 0 ? undefined : index;
  }
  var shuffle = shuffler(Math.random);
  function shuffler(random) {
    return function shuffle(array, i0 = 0, i1 = array.length) {
      let m = i1 - (i0 = +i0);
      while (m) {
        const i = random() * m-- | 0, t = array[m + i0];
        array[m + i0] = array[i + i0];
        array[i + i0] = t;
      }
      return array;
    };
  }
  function sum(values, valueof) {
    let sum = 0;
    if (valueof === undefined) {
      for (let value of values) {
        if (value = +value) {
          sum += value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if (value = +valueof(value, ++index, values)) {
          sum += value;
        }
      }
    }
    return sum;
  }
  function transpose(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  }
  function length(d) {
    return d.length;
  }
  function zip() {
    return transpose(arguments);
  }
  function every(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values) {
      if (!test(value, ++index, values)) {
        return false;
      }
    }
    return true;
  }
  function some(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values) {
      if (test(value, ++index, values)) {
        return true;
      }
    }
    return false;
  }
  function filter(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    const array = [];
    let index = -1;
    for (const value of values) {
      if (test(value, ++index, values)) {
        array.push(value);
      }
    }
    return array;
  }
  function map(values, mapper) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
    return Array.from(values, (value, index) => mapper(value, index, values));
  }
  function reduce(values, reducer, value) {
    if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
    const iterator = values[Symbol.iterator]();
    let done, next, index = -1;
    if (arguments.length < 3) {
      ({done, value} = iterator.next());
      if (done) return;
      ++index;
    }
    while (({done, value: next} = iterator.next(), !done)) {
      value = reducer(value, next, ++index, values);
    }
    return value;
  }
  function reverse(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
  }
  function difference(values, ...others) {
    values = new Set(values);
    for (const other of others) {
      for (const value of other) {
        values.delete(value);
      }
    }
    return values;
  }
  function disjoint(values, other) {
    const iterator = other[Symbol.iterator](), set = new Set();
    for (const v of values) {
      if (set.has(v)) return false;
      let value, done;
      while ({value, done} = iterator.next()) {
        if (done) break;
        if (Object.is(v, value)) return false;
        set.add(value);
      }
    }
    return true;
  }
  function set(values) {
    return values instanceof Set ? values : new Set(values);
  }
  function intersection(values, ...others) {
    values = new Set(values);
    others = others.map(set);
    out: for (const value of values) {
      for (const other of others) {
        if (!other.has(value)) {
          values.delete(value);
          continue out;
        }
      }
    }
    return values;
  }
  function superset(values, other) {
    const iterator = values[Symbol.iterator](), set = new Set();
    for (const o of other) {
      if (set.has(o)) continue;
      let value, done;
      while ({value, done} = iterator.next()) {
        if (done) return false;
        set.add(value);
        if (Object.is(o, value)) break;
      }
    }
    return true;
  }
  function subset(values, other) {
    return superset(other, values);
  }
  function union(...others) {
    const set = new Set();
    for (const other of others) {
      for (const o of other) {
        set.add(o);
      }
    }
    return set;
  }
  exports.Adder = Adder;
  exports.InternMap = InternMap;
  exports.InternSet = InternSet;
  exports.ascending = ascending;
  exports.bin = bin;
  exports.bisect = bisectRight;
  exports.bisectCenter = bisectCenter;
  exports.bisectLeft = bisectLeft;
  exports.bisectRight = bisectRight;
  exports.bisector = bisector;
  exports.count = count;
  exports.cross = cross;
  exports.cumsum = cumsum;
  exports.descending = descending;
  exports.deviation = deviation;
  exports.difference = difference;
  exports.disjoint = disjoint;
  exports.every = every;
  exports.extent = extent;
  exports.fcumsum = fcumsum;
  exports.filter = filter;
  exports.fsum = fsum;
  exports.greatest = greatest;
  exports.greatestIndex = greatestIndex;
  exports.group = group;
  exports.groupSort = groupSort;
  exports.groups = groups;
  exports.histogram = bin;
  exports.index = index;
  exports.indexes = indexes;
  exports.intersection = intersection;
  exports.least = least;
  exports.leastIndex = leastIndex;
  exports.map = map;
  exports.max = max;
  exports.maxIndex = maxIndex;
  exports.mean = mean;
  exports.median = median;
  exports.merge = merge;
  exports.min = min;
  exports.minIndex = minIndex;
  exports.nice = nice;
  exports.pairs = pairs;
  exports.permute = permute;
  exports.quantile = quantile;
  exports.quantileSorted = quantileSorted;
  exports.quickselect = quickselect;
  exports.range = range;
  exports.reduce = reduce;
  exports.reverse = reverse;
  exports.rollup = rollup;
  exports.rollups = rollups;
  exports.scan = scan;
  exports.shuffle = shuffle;
  exports.shuffler = shuffler;
  exports.some = some;
  exports.sort = sort;
  exports.subset = subset;
  exports.sum = sum;
  exports.superset = superset;
  exports.thresholdFreedmanDiaconis = freedmanDiaconis;
  exports.thresholdScott = scott;
  exports.thresholdSturges = sturges;
  exports.tickIncrement = tickIncrement;
  exports.tickStep = tickStep;
  exports.ticks = ticks;
  exports.transpose = transpose;
  exports.union = union;
  exports.variance = variance;
  exports.zip = zip;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"7GTHy":[function(require,module,exports) {
var define;
// https://d3js.org/d3-axis/ v2.1.0 Copyright 2021 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  var slice = Array.prototype.slice;
  function identity(x) {
    return x;
  }
  var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
  function translateX(x) {
    return "translate(" + x + ",0)";
  }
  function translateY(y) {
    return "translate(0," + y + ")";
  }
  function number(scale) {
    return d => +scale(d);
  }
  function center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round()) offset = Math.round(offset);
    return d => +scale(d) + offset;
  }
  function entering() {
    return !this.__axis;
  }
  function axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
    function axis(context) {
      var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([null]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
      path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
      tick = tick.merge(tickEnter);
      line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
      text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
      if (context !== selection) {
        path = path.transition(context);
        tick = tick.transition(context);
        line = line.transition(context);
        text = text.transition(context);
        tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function (d) {
          return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
        });
        tickEnter.attr("opacity", epsilon).attr("transform", function (d) {
          var p = this.parentNode.__axis;
          return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
        });
      }
      tickExit.remove();
      path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
      tick.attr("opacity", 1).attr("transform", function (d) {
        return transform(position(d) + offset);
      });
      line.attr(x + "2", k * tickSizeInner);
      text.attr(x, k * spacing).text(format);
      selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
      selection.each(function () {
        this.__axis = position;
      });
    }
    axis.scale = function (_) {
      return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function () {
      return (tickArguments = slice.call(arguments), axis);
    };
    axis.tickArguments = function (_) {
      return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function (_) {
      return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function (_) {
      return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function (_) {
      return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function (_) {
      return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function (_) {
      return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function (_) {
      return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    axis.offset = function (_) {
      return arguments.length ? (offset = +_, axis) : offset;
    };
    return axis;
  }
  function axisTop(scale) {
    return axis(top, scale);
  }
  function axisRight(scale) {
    return axis(right, scale);
  }
  function axisBottom(scale) {
    return axis(bottom, scale);
  }
  function axisLeft(scale) {
    return axis(left, scale);
  }
  exports.axisBottom = axisBottom;
  exports.axisLeft = axisLeft;
  exports.axisRight = axisRight;
  exports.axisTop = axisTop;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3jjNX":[function(require,module,exports) {
var define;
// https://d3js.org/d3-brush/ v2.1.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dispatch'), require('d3-drag'), require('d3-interpolate'), require('d3-selection'), require('d3-transition')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-dispatch', 'd3-drag', 'd3-interpolate', 'd3-selection', 'd3-transition'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3, global.d3, global.d3, global.d3));
})(this, function (exports, d3Dispatch, d3Drag, d3Interpolate, d3Selection, d3Transition) {
  "use strict";
  var constant = x => () => x;
  function BrushEvent(type, {sourceEvent, target, selection, mode, dispatch}) {
    Object.defineProperties(this, {
      type: {
        value: type,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: sourceEvent,
        enumerable: true,
        configurable: true
      },
      target: {
        value: target,
        enumerable: true,
        configurable: true
      },
      selection: {
        value: selection,
        enumerable: true,
        configurable: true
      },
      mode: {
        value: mode,
        enumerable: true,
        configurable: true
      },
      _: {
        value: dispatch
      }
    });
  }
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  var MODE_DRAG = {
    name: "drag"
  }, MODE_SPACE = {
    name: "space"
  }, MODE_HANDLE = {
    name: "handle"
  }, MODE_CENTER = {
    name: "center"
  };
  const {abs, max, min} = Math;
  function number1(e) {
    return [+e[0], +e[1]];
  }
  function number2(e) {
    return [number1(e[0]), number1(e[1])];
  }
  var X = {
    name: "x",
    handles: ["w", "e"].map(type),
    input: function (x, e) {
      return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];
    },
    output: function (xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function (y, e) {
      return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];
    },
    output: function (xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
    input: function (xy) {
      return xy == null ? null : number2(xy);
    },
    output: function (xy) {
      return xy;
    }
  };
  var cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
  };
  var flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
  };
  var signsX = {
    overlay: +1,
    selection: +1,
    n: null,
    e: +1,
    s: null,
    w: -1,
    nw: -1,
    ne: +1,
    se: +1,
    sw: -1
  };
  var signsY = {
    overlay: +1,
    selection: +1,
    n: -1,
    e: null,
    s: +1,
    w: null,
    nw: -1,
    ne: -1,
    se: +1,
    sw: +1
  };
  function type(t) {
    return {
      type: t
    };
  }
  // Ignore right-click, since that should open the context menu.
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
      svg = svg.viewBox.baseVal;
      return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
    }
    return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
  }
  // Like d3.local, but with the name “__brush” rather than auto-generated.
  function local(node) {
    while (!node.__brush) if (!(node = node.parentNode)) return;
    return node.__brush;
  }
  function empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
  }
  function brushSelection(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
  }
  function brushX() {
    return brush$1(X);
  }
  function brushY() {
    return brush$1(Y);
  }
  function brush() {
    return brush$1(XY);
  }
  function brush$1(dim) {
    var extent = defaultExtent, filter = defaultFilter, touchable = defaultTouchable, keys = true, listeners = d3Dispatch.dispatch("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
      var overlay = group.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
      overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function () {
        var extent = local(this).extent;
        d3Selection.select(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
      });
      group.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
      var handle = group.selectAll(".handle").data(dim.handles, function (d) {
        return d.type;
      });
      handle.exit().remove();
      handle.enter().append("rect").attr("class", function (d) {
        return "handle handle--" + d.type;
      }).attr("cursor", function (d) {
        return cursors[d.type];
      });
      group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function (group, selection) {
      if (group.tween) {
        group.on("start.brush", function (event) {
          emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function (event) {
          emitter(this, arguments).end(event);
        }).tween("brush", function () {
          var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = d3Interpolate.interpolate(selection0, selection1);
          function tween(t) {
            state.selection = t === 1 && selection1 === null ? null : i(t);
            redraw.call(that);
            emit.brush();
          }
          return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
      } else {
        group.each(function () {
          var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
          d3Transition.interrupt(that);
          state.selection = selection1 === null ? null : selection1;
          redraw.call(that);
          emit.start().brush().end();
        });
      }
    };
    brush.clear = function (group) {
      brush.move(group, null);
    };
    function redraw() {
      var group = d3Selection.select(this), selection = local(this).selection;
      if (selection) {
        group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
        group.selectAll(".handle").style("display", null).attr("x", function (d) {
          return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
        }).attr("y", function (d) {
          return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
        }).attr("width", function (d) {
          return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
        }).attr("height", function (d) {
          return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
        });
      } else {
        group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
      }
    }
    function emitter(that, args, clean) {
      var emit = that.__brush.emitter;
      return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
      this.that = that;
      this.args = args;
      this.state = that.__brush;
      this.active = 0;
      this.clean = clean;
    }
    Emitter.prototype = {
      beforestart: function () {
        if (++this.active === 1) (this.state.emitter = this, this.starting = true);
        return this;
      },
      start: function (event, mode) {
        if (this.starting) (this.starting = false, this.emit("start", event, mode)); else this.emit("brush", event);
        return this;
      },
      brush: function (event, mode) {
        this.emit("brush", event, mode);
        return this;
      },
      end: function (event, mode) {
        if (--this.active === 0) (delete this.state.emitter, this.emit("end", event, mode));
        return this;
      },
      emit: function (type, event, mode) {
        var d = d3Selection.select(this.that).datum();
        listeners.call(type, this.that, new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }), d);
      }
    };
    function started(event) {
      if (touchending && !event.touches) return;
      if (!filter.apply(this, arguments)) return;
      var that = this, type = event.target.__data__.type, mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type], signY = dim === X ? null : signsY[type], state = local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [event], t => {
        const i = t.identifier;
        t = d3Selection.pointer(t, that);
        t.point0 = t.slice();
        t.identifier = i;
        return t;
      });
      if (type === "overlay") {
        if (selection) moving = true;
        const pts = [points[0], points[1] || points[0]];
        state.selection = selection = [[w0 = dim === Y ? W : min(pts[0][0], pts[1][0]), n0 = dim === X ? N : min(pts[0][1], pts[1][1])], [e0 = dim === Y ? E : max(pts[0][0], pts[1][0]), s0 = dim === X ? S : max(pts[0][1], pts[1][1])]];
        if (points.length > 1) move();
      } else {
        w0 = selection[0][0];
        n0 = selection[0][1];
        e0 = selection[1][0];
        s0 = selection[1][1];
      }
      w1 = w0;
      n1 = n0;
      e1 = e0;
      s1 = s0;
      var group = d3Selection.select(that).attr("pointer-events", "none");
      var overlay = group.selectAll(".overlay").attr("cursor", cursors[type]);
      d3Transition.interrupt(that);
      var emit = emitter(that, arguments, true).beforestart();
      if (event.touches) {
        emit.moved = moved;
        emit.ended = ended;
      } else {
        var view = d3Selection.select(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
        if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
        d3Drag.dragDisable(event.view);
      }
      redraw.call(that);
      emit.start(event, mode.name);
      function moved(event) {
        for (const p of event.changedTouches || [event]) {
          for (const d of points) if (d.identifier === p.identifier) d.cur = d3Selection.pointer(p, that);
        }
        if (shifting && !lockX && !lockY && points.length === 1) {
          const point = points[0];
          if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1])) lockY = true; else lockX = true;
        }
        for (const point of points) if (point.cur) (point[0] = point.cur[0], point[1] = point.cur[1]);
        moving = true;
        noevent(event);
        move(event);
      }
      function move(event) {
        const point = points[0], point0 = point.point0;
        var t;
        dx = point[0] - point0[0];
        dy = point[1] - point0[1];
        switch (mode) {
          case MODE_SPACE:
          case MODE_DRAG:
            {
              if (signX) (dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx);
              if (signY) (dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy);
              break;
            }
          case MODE_HANDLE:
            {
              if (points[1]) {
                if (signX) (w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1);
                if (signY) (n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1);
              } else {
                if (signX < 0) (dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0); else if (signX > 0) (dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx);
                if (signY < 0) (dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0); else if (signY > 0) (dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy);
              }
              break;
            }
          case MODE_CENTER:
            {
              if (signX) (w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX)));
              if (signY) (n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY)));
              break;
            }
        }
        if (e1 < w1) {
          signX *= -1;
          (t = w0, w0 = e0, e0 = t);
          (t = w1, w1 = e1, e1 = t);
          if ((type in flipX)) overlay.attr("cursor", cursors[type = flipX[type]]);
        }
        if (s1 < n1) {
          signY *= -1;
          (t = n0, n0 = s0, s0 = t);
          (t = n1, n1 = s1, s1 = t);
          if ((type in flipY)) overlay.attr("cursor", cursors[type = flipY[type]]);
        }
        if (state.selection) selection = state.selection;
        // May be set by brush.move!
        if (lockX) (w1 = selection[0][0], e1 = selection[1][0]);
        if (lockY) (n1 = selection[0][1], s1 = selection[1][1]);
        if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
          state.selection = [[w1, n1], [e1, s1]];
          redraw.call(that);
          emit.brush(event, mode.name);
        }
      }
      function ended(event) {
        nopropagation(event);
        if (event.touches) {
          if (event.touches.length) return;
          if (touchending) clearTimeout(touchending);
          touchending = setTimeout(function () {
            touchending = null;
          }, 500);
        } else {
          d3Drag.dragEnable(event.view, moving);
          view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
        }
        group.attr("pointer-events", "all");
        overlay.attr("cursor", cursors.overlay);
        if (state.selection) selection = state.selection;
        // May be set by brush.move (on start)!
        if (empty(selection)) (state.selection = null, redraw.call(that));
        emit.end(event, mode.name);
      }
      function keydowned(event) {
        switch (event.keyCode) {
          case 16:
            {
              // SHIFT
              shifting = signX && signY;
              break;
            }
          case 18:
            {
              // ALT
              if (mode === MODE_HANDLE) {
                if (signX) (e0 = e1 - dx * signX, w0 = w1 + dx * signX);
                if (signY) (s0 = s1 - dy * signY, n0 = n1 + dy * signY);
                mode = MODE_CENTER;
                move();
              }
              break;
            }
          case 32:
            {
              // SPACE; takes priority over ALT
              if (mode === MODE_HANDLE || mode === MODE_CENTER) {
                if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
                if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
                mode = MODE_SPACE;
                overlay.attr("cursor", cursors.selection);
                move();
              }
              break;
            }
          default:
            return;
        }
        noevent(event);
      }
      function keyupped(event) {
        switch (event.keyCode) {
          case 16:
            {
              // SHIFT
              if (shifting) {
                lockX = lockY = shifting = false;
                move();
              }
              break;
            }
          case 18:
            {
              // ALT
              if (mode === MODE_CENTER) {
                if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
                if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
                mode = MODE_HANDLE;
                move();
              }
              break;
            }
          case 32:
            {
              // SPACE
              if (mode === MODE_SPACE) {
                if (event.altKey) {
                  if (signX) (e0 = e1 - dx * signX, w0 = w1 + dx * signX);
                  if (signY) (s0 = s1 - dy * signY, n0 = n1 + dy * signY);
                  mode = MODE_CENTER;
                } else {
                  if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
                  if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
                  mode = MODE_HANDLE;
                }
                overlay.attr("cursor", cursors[type]);
                move();
              }
              break;
            }
          default:
            return;
        }
        noevent(event);
      }
    }
    function touchmoved(event) {
      emitter(this, arguments).moved(event);
    }
    function touchended(event) {
      emitter(this, arguments).ended(event);
    }
    function initialize() {
      var state = this.__brush || ({
        selection: null
      });
      state.extent = number2(extent.apply(this, arguments));
      state.dim = dim;
      return state;
    }
    brush.extent = function (_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
    };
    brush.filter = function (_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
    };
    brush.touchable = function (_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
    };
    brush.handleSize = function (_) {
      return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function (_) {
      return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? brush : value;
    };
    return brush;
  }
  exports.brush = brush;
  exports.brushSelection = brushSelection;
  exports.brushX = brushX;
  exports.brushY = brushY;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-dispatch":"6ygE0","d3-drag":"5x5QZ","d3-interpolate":"6eByj","d3-selection":"1RFAz","d3-transition":"ee4oY"}],"6ygE0":[function(require,module,exports) {
var define;
// https://d3js.org/d3-dispatch/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  var noop = {
    value: () => {}
  };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || (/[\s.]/).test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) (name = t.slice(i + 1), t = t.slice(0, i));
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {
        type: t,
        name: name
      };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function (typename, callback) {
      var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
        return;
      }
      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback); else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
      }
      return this;
    },
    copy: function () {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function (type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for ((t = this._[type], i = 0, n = t.length); i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function (type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };
  function get(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }
  function set(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        (type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1)));
        break;
      }
    }
    if (callback != null) type.push({
      name: name,
      value: callback
    });
    return type;
  }
  exports.dispatch = dispatch;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"5x5QZ":[function(require,module,exports) {
var define;
// https://d3js.org/d3-drag/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dispatch'), require('d3-selection')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-dispatch', 'd3-selection'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3));
})(this, function (exports, d3Dispatch, d3Selection) {
  "use strict";
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  function nodrag(view) {
    var root = view.document.documentElement, selection = d3Selection.select(view).on("dragstart.drag", noevent, true);
    if (("onselectstart" in root)) {
      selection.on("selectstart.drag", noevent, true);
    } else {
      root.__noselect = root.style.MozUserSelect;
      root.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = d3Selection.select(view).on("dragstart.drag", null);
    if (noclick) {
      selection.on("click.drag", noevent, true);
      setTimeout(function () {
        selection.on("click.drag", null);
      }, 0);
    }
    if (("onselectstart" in root)) {
      selection.on("selectstart.drag", null);
    } else {
      root.style.MozUserSelect = root.__noselect;
      delete root.__noselect;
    }
  }
  var constant = x => () => x;
  function DragEvent(type, {sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch}) {
    Object.defineProperties(this, {
      type: {
        value: type,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: sourceEvent,
        enumerable: true,
        configurable: true
      },
      subject: {
        value: subject,
        enumerable: true,
        configurable: true
      },
      target: {
        value: target,
        enumerable: true,
        configurable: true
      },
      identifier: {
        value: identifier,
        enumerable: true,
        configurable: true
      },
      active: {
        value: active,
        enumerable: true,
        configurable: true
      },
      x: {
        value: x,
        enumerable: true,
        configurable: true
      },
      y: {
        value: y,
        enumerable: true,
        configurable: true
      },
      dx: {
        value: dx,
        enumerable: true,
        configurable: true
      },
      dy: {
        value: dy,
        enumerable: true,
        configurable: true
      },
      _: {
        value: dispatch
      }
    });
  }
  DragEvent.prototype.on = function () {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };
  // Ignore right-click, since that should open the context menu.
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(event, d) {
    return d == null ? {
      x: event.x,
      y: event.y
    } : d;
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
  }
  function drag() {
    var filter = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = d3Dispatch.dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
      selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
      if (touchending || !filter.call(this, event, d)) return;
      var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
      if (!gesture) return;
      d3Selection.select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
      nodrag(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }
    function mousemoved(event) {
      noevent(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }
    function mouseupped(event) {
      d3Selection.select(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent(event);
      gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
      if (!filter.call(this, event, d)) return;
      var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation(event);
          gesture("start", event, touches[i]);
        }
      }
    }
    function touchmoved(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent(event);
          gesture("drag", event, touches[i]);
        }
      }
    }
    function touchended(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function () {
        touchending = null;
      }, 500);
      // Ghost clicks are delayed!
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation(event);
          gesture("end", event, touches[i]);
        }
      }
    }
    function beforestart(that, container, event, d, identifier, touch) {
      var dispatch = listeners.copy(), p = d3Selection.pointer(touch || event, container), dx, dy, s;
      if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return function gesture(type, event, touch) {
        var p0 = p, n;
        switch (type) {
          case "start":
            (gestures[identifier] = gesture, n = active++);
            break;
          case "end":
            (delete gestures[identifier], --active);
          case "drag":
            (p = d3Selection.pointer(touch || event, container), n = active);
            break;
        }
        dispatch.call(type, that, new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }), d);
      };
    }
    drag.filter = function (_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), drag) : filter;
    };
    drag.container = function (_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant(_), drag) : container;
    };
    drag.subject = function (_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant(_), drag) : subject;
    };
    drag.touchable = function (_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), drag) : touchable;
    };
    drag.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };
    drag.clickDistance = function (_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
  }
  exports.drag = drag;
  exports.dragDisable = nodrag;
  exports.dragEnable = yesdrag;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-dispatch":"6ygE0","d3-selection":"1RFAz"}],"1RFAz":[function(require,module,exports) {
var define;
// https://d3js.org/d3-selection/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {
      space: namespaces[prefix],
      local: name
    } : name;
  }
  function creatorInherit(name) {
    return function () {
      var document = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }
  function none() {}
  function selector(selector) {
    return selector == null ? none : function () {
      return this.querySelector(selector);
    };
  }
  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if (("__data__" in node)) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }
  function array(x) {
    return typeof x === "object" && ("length" in x) ? x : // Array, TypedArray, NodeList, array-like
    Array.from(x);
  }
  function empty() {
    return [];
  }
  function selectorAll(selector) {
    return selector == null ? empty : function () {
      return this.querySelectorAll(selector);
    };
  }
  function arrayAll(select) {
    return function () {
      var group = select.apply(this, arguments);
      return group == null ? [] : array(group);
    };
  }
  function selection_selectAll(select) {
    if (typeof select === "function") select = arrayAll(select); else select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }
  function matcher(selector) {
    return function () {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }
  var find = Array.prototype.find;
  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selection_selectChild(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }
  var filter = Array.prototype.filter;
  function children() {
    return this.children;
  }
  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }
  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }
  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }
  function sparse(update) {
    return new Array(update.length);
  }
  function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  }
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function (child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function (child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function (selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function (selector) {
      return this._parent.querySelectorAll(selector);
    }
  };
  function constant(x) {
    return function () {
      return x;
    };
  }
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function selection_data(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = constant(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data = array(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  }
  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }
  function selection_merge(selection) {
    if (!(selection instanceof Selection)) throw new Error("invalid merge");
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  }
  function selection_order() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }
  function selection_sort(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }
  function selection_nodes() {
    return Array.from(this);
  }
  function selection_node() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  }
  function selection_size() {
    let size = 0;
    for (const node of this) ++size;
    // eslint-disable-line no-unused-vars
    return size;
  }
  function selection_empty() {
    return !this.node();
  }
  function selection_each(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }
  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name); else this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local); else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function selection_attr(name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }
  function defaultView(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node || // node is a Window
    node.defaultView;
  }
  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name); else this.style.setProperty(name, v, priority);
    };
  }
  function selection_style(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }
  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name]; else this[name] = v;
    };
  }
  function selection_property(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function (name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function (name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function (name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }
  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function selection_classed(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function selection_text(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function selection_html(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }
  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function selection_raise() {
    return this.each(raise);
  }
  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function selection_lower() {
    return this.each(lower);
  }
  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
      return this.appendChild(create.apply(this, arguments));
    });
  }
  function constantNull() {
    return null;
  }
  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name), select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }
  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function selection_remove() {
    return this.each(remove);
  }
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }
  function selection_datum(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }
  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) (name = t.slice(i + 1), t = t.slice(0, i));
      return {
        type: t,
        name: name
      };
    });
  }
  function onRemove(typename) {
    return function () {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if ((o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name)) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i; else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function () {
      var on = this.__on, o, listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {
        type: typename.type,
        name: typename.name,
        value: value,
        listener: listener,
        options: options
      };
      if (!on) this.__on = [o]; else on.push(o);
    };
  }
  function selection_on(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for ((i = 0, o = on[j]); i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }
  function dispatchEvent(node, type, params) {
    var window = defaultView(node), event = window.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) (event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail); else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function selection_dispatch(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }
  function* selection_iterator() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch,
    [Symbol.iterator]: selection_iterator
  };
  function select(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }
  function create(name) {
    return select(creator(name).call(document.documentElement));
  }
  var nextId = 0;
  function local() {
    return new Local();
  }
  function Local() {
    this._ = "@" + (++nextId).toString(36);
  }
  Local.prototype = local.prototype = {
    constructor: Local,
    get: function (node) {
      var id = this._;
      while (!((id in node))) if (!(node = node.parentNode)) return;
      return node[id];
    },
    set: function (node, value) {
      return node[this._] = value;
    },
    remove: function (node) {
      return (this._ in node) && delete node[this._];
    },
    toString: function () {
      return this._;
    }
  };
  function sourceEvent(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  }
  function pointer(event, node) {
    event = sourceEvent(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        (point.x = event.clientX, point.y = event.clientY);
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }
  function pointers(events, node) {
    if (events.target) {
      // i.e., instanceof Event, not TouchList or iterable
      events = sourceEvent(events);
      if (node === undefined) node = events.currentTarget;
      events = events.touches || [events];
    }
    return Array.from(events, event => pointer(event, node));
  }
  function selectAll(selector) {
    return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : array(selector)], root);
  }
  exports.create = create;
  exports.creator = creator;
  exports.local = local;
  exports.matcher = matcher;
  exports.namespace = namespace;
  exports.namespaces = namespaces;
  exports.pointer = pointer;
  exports.pointers = pointers;
  exports.select = select;
  exports.selectAll = selectAll;
  exports.selection = selection;
  exports.selector = selector;
  exports.selectorAll = selectorAll;
  exports.style = styleValue;
  exports.window = defaultView;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"6eByj":[function(require,module,exports) {
var define;
// https://d3js.org/d3-interpolate/ v2.0.1 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-color')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Color) {
  "use strict";
  function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
  }
  function basis$1(values) {
    var n = values.length - 1;
    return function (t) {
      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }
  function basisClosed(values) {
    var n = values.length;
    return function (t) {
      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }
  var constant = x => () => x;
  function linear(a, d) {
    return function (t) {
      return a + t * d;
    };
  }
  function exponential(a, b, y) {
    return (a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
      return Math.pow(a + t * b, y);
    });
  }
  function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }
  var rgb = (function rgbGamma(y) {
    var color = gamma(y);
    function rgb(start, end) {
      var r = color((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
    rgb.gamma = rgbGamma;
    return rgb;
  })(1);
  function rgbSpline(spline) {
    return function (colors) {
      var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
      for (i = 0; i < n; ++i) {
        color = d3Color.rgb(colors[i]);
        r[i] = color.r || 0;
        g[i] = color.g || 0;
        b[i] = color.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color.opacity = 1;
      return function (t) {
        color.r = r(t);
        color.g = g(t);
        color.b = b(t);
        return color + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis$1);
  var rgbBasisClosed = rgbSpline(basisClosed);
  function numberArray(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function (t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }
  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }
  function array(a, b) {
    return (isNumberArray(b) ? numberArray : genericArray)(a, b);
  }
  function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];
    return function (t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }
  function date(a, b) {
    var d = new Date();
    return (a = +a, b = +b, function (t) {
      return (d.setTime(a * (1 - t) + b * t), d);
    });
  }
  function number(a, b) {
    return (a = +a, b = +b, function (t) {
      return a * (1 - t) + b * t;
    });
  }
  function object(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for (k in b) {
      if ((k in a)) {
        i[k] = value(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }
    return function (t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function () {
      return b;
    };
  }
  function one(b) {
    return function (t) {
      return b(t) + "";
    };
  }
  function string(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
    am, // current match in a
    bm, // current match in b
    bs, // string preceding current number in b, if any
    i = -1, // index in s
    s = [], // string constants and placeholders
    q = [];
    // number interpolators
    // Coerce inputs to strings.
    (a = a + "", b = b + "");
    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else // coalesce with previous string
        s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        // numbers in a & b match
        if (s[i]) s[i] += bm; else // coalesce with previous string
        s[++i] = bm;
      } else {
        // interpolate non-matching numbers
        s[++i] = null;
        q.push({
          i: i,
          x: number(am, bm)
        });
      }
      bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else // coalesce with previous string
      s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  function value(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant(b) : (t === "number" ? number : t === "string" ? (c = d3Color.color(b)) ? (b = c, rgb) : string : b instanceof d3Color.color ? rgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : number)(a, b);
  }
  function discrete(range) {
    var n = range.length;
    return function (t) {
      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }
  function hue$1(a, b) {
    var i = hue(+a, +b);
    return function (t) {
      var x = i(t);
      return x - 360 * Math.floor(x / 360);
    };
  }
  function round(a, b) {
    return (a = +a, b = +b, function (t) {
      return Math.round(a * (1 - t) + b * t);
    });
  }
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) (a /= scaleX, b /= scaleX);
    if (skewX = a * c + b * d) (c -= a * skewX, d -= b * skewX);
    if (scaleY = Math.sqrt(c * c + d * d)) (c /= scaleY, d /= scaleY, skewX /= scaleY);
    if (a * d < b * c) (a = -a, b = -b, skewX = -skewX, scaleX = -scaleX);
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  var svgNode;
  /*eslint-disable no-undef*/
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({
          i: i - 4,
          x: number(xa, xb)
        }, {
          i: i - 2,
          x: number(ya, yb)
        });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360;
        // shortest path
        q.push({
          i: s.push(pop(s) + "rotate(", null, degParen) - 2,
          x: number(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }
    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({
          i: s.push(pop(s) + "skewX(", null, degParen) - 2,
          x: number(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({
          i: i - 4,
          x: number(xa, xb)
        }, {
          i: i - 2,
          x: number(ya, yb)
        });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function (a, b) {
      var s = [], // string constants and placeholders
      q = [];
      // number interpolators
      (a = parse(a), b = parse(b));
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null;
      // gc
      return function (t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
  var epsilon2 = 1e-12;
  function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  var zoom = (function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
      // Special case for u0 ≅ u1.
      if (d2 < epsilon2) {
        S = Math.log(w1 / w0) / rho;
        i = function (t) {
          return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
        };
              // General case.
} else // General case.
      {
        var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function (t) {
          var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
        };
      }
      i.duration = S * 1000 * rho / Math.SQRT2;
      return i;
    }
    zoom.rho = function (_) {
      var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
      return zoomRho(_1, _2, _4);
    };
    return zoom;
  })(Math.SQRT2, 2, 4);
  function hsl(hue) {
    return function (start, end) {
      var h = hue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h), s = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(t);
        start.opacity = opacity(t);
        return start + "";
      };
    };
  }
  var hsl$1 = hsl(hue);
  var hslLong = hsl(nogamma);
  function lab(start, end) {
    var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l), a = nogamma(start.a, end.a), b = nogamma(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.l = l(t);
      start.a = a(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  function hcl(hue) {
    return function (start, end) {
      var h = hue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h), c = nogamma(start.c, end.c), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.c = c(t);
        start.l = l(t);
        start.opacity = opacity(t);
        return start + "";
      };
    };
  }
  var hcl$1 = hcl(hue);
  var hclLong = hcl(nogamma);
  function cubehelix(hue) {
    return (function cubehelixGamma(y) {
      y = +y;
      function cubehelix(start, end) {
        var h = hue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h), s = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
        return function (t) {
          start.h = h(t);
          start.s = s(t);
          start.l = l(Math.pow(t, y));
          start.opacity = opacity(t);
          return start + "";
        };
      }
      cubehelix.gamma = cubehelixGamma;
      return cubehelix;
    })(1);
  }
  var cubehelix$1 = cubehelix(hue);
  var cubehelixLong = cubehelix(nogamma);
  function piecewise(interpolate, values) {
    if (values === undefined) (values = interpolate, interpolate = value);
    var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while (i < n) I[i] = interpolate(v, v = values[++i]);
    return function (t) {
      var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
      return I[i](t - i);
    };
  }
  function quantize(interpolator, n) {
    var samples = new Array(n);
    for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
    return samples;
  }
  exports.interpolate = value;
  exports.interpolateArray = array;
  exports.interpolateBasis = basis$1;
  exports.interpolateBasisClosed = basisClosed;
  exports.interpolateCubehelix = cubehelix$1;
  exports.interpolateCubehelixLong = cubehelixLong;
  exports.interpolateDate = date;
  exports.interpolateDiscrete = discrete;
  exports.interpolateHcl = hcl$1;
  exports.interpolateHclLong = hclLong;
  exports.interpolateHsl = hsl$1;
  exports.interpolateHslLong = hslLong;
  exports.interpolateHue = hue$1;
  exports.interpolateLab = lab;
  exports.interpolateNumber = number;
  exports.interpolateNumberArray = numberArray;
  exports.interpolateObject = object;
  exports.interpolateRgb = rgb;
  exports.interpolateRgbBasis = rgbBasis;
  exports.interpolateRgbBasisClosed = rgbBasisClosed;
  exports.interpolateRound = round;
  exports.interpolateString = string;
  exports.interpolateTransformCss = interpolateTransformCss;
  exports.interpolateTransformSvg = interpolateTransformSvg;
  exports.interpolateZoom = zoom;
  exports.piecewise = piecewise;
  exports.quantize = quantize;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-color":"3mmqs"}],"3mmqs":[function(require,module,exports) {
var define;
// https://d3js.org/d3-color/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }
  function Color() {}
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };
  define(Color, color, {
    copy: function (channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function () {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : // #ff0000
    l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) : // #f00
    l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) : // #ff000000
    l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) : // #f000
    null) : // invalid hex
    (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : // rgb(255, 0, 0)
    (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : // rgb(100%, 0%, 0%)
    (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : // rgba(255, 0, 0, 1)
    (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : // rgb(100%, 0%, 0%, 1)
    (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : // hsl(120, 50%, 50%)
    (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : // hsla(120, 50%, 50%, 1)
    named.hasOwnProperty(format) ? rgbn(named[format]) : // eslint-disable-line no-prototype-builtins
    format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }
  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb, extend(Color, {
    brighter: function (k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }
  function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN; else if (l <= 0 || l >= 1) h = s = NaN; else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6; else if (g === max) h = (b - r) / s + 2; else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Hsl, hsl, extend(Color, {
    brighter: function (k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
      var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function () {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function () {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
  }));
  /*From FvD 13.37, CSS Color Module Level 3*/
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }
  const radians = Math.PI / 180;
  const degrees = 180 / Math.PI;
  // https://observablehq.com/@mbostock/lab-and-rgb
  const K = 18, Xn = 0.96422, Yn = 1, Zn = 0.82521, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
  function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) return hcl2lab(o);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b) x = z = y; else {
      x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
      z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
  }
  function gray(l, opacity) {
    return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
  }
  function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
  }
  function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Lab, lab, extend(Color, {
    brighter: function (k) {
      return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function (k) {
      return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function () {
      var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
      x = Xn * lab2xyz(x);
      y = Yn * lab2xyz(y);
      z = Zn * lab2xyz(z);
      return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
  }));
  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }
  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }
  function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
  }
  function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  }
  function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * degrees;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
  }
  function lch(l, c, h, opacity) {
    return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
  }
  function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
  }
  function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
  }
  function hcl2lab(o) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * radians;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  define(Hcl, hcl, extend(Color, {
    brighter: function (k) {
      return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function (k) {
      return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function () {
      return hcl2lab(this).rgb();
    }
  }));
  var A = -0.14861, B = +1.78277, C = -0.29227, D = -0.90649, E = +1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
  function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
    h = s ? Math.atan2(k, bl) * degrees - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
  }
  function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
  }
  function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Cubehelix, cubehelix, extend(Color, {
    brighter: function (k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
      var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
      return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
  }));
  exports.color = color;
  exports.cubehelix = cubehelix;
  exports.gray = gray;
  exports.hcl = hcl;
  exports.hsl = hsl;
  exports.lab = lab;
  exports.lch = lch;
  exports.rgb = rgb;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"ee4oY":[function(require,module,exports) {
var define;
// https://d3js.org/d3-transition/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-selection'), require('d3-dispatch'), require('d3-timer'), require('d3-interpolate'), require('d3-color'), require('d3-ease')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-selection', 'd3-dispatch', 'd3-timer', 'd3-interpolate', 'd3-color', 'd3-ease'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3, global.d3, global.d3, global.d3, global.d3));
})(this, function (exports, d3Selection, d3Dispatch, d3Timer, d3Interpolate, d3Color, d3Ease) {
  "use strict";
  var emptyOn = d3Dispatch.dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {}; else if ((id in schedules)) return;
    create(node, id, {
      name: name,
      index: index,
      // For context during callback.
      group: group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }
  function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = d3Timer.timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);
      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
      var i, j, n, o;
      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;
        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return d3Timer.timeout(start);
        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
                  // Cancel any pre-empted transitions.
} else // Cancel any pre-empted transitions.
        if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      d3Timer.timeout(function () {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return;
      // interrupted
      self.state = STARTED;
      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for ((i = 0, j = -1); i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      }
      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return;
      // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }
  function interrupt(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty) delete node.__transition;
  }
  function selection_interrupt(name) {
    return this.each(function () {
      interrupt(this, name);
    });
  }
  function tweenRemove(id, name) {
    var tween0, tween1;
    return function () {
      var schedule = set(this, id), tween = schedule.tween;
      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error();
    return function () {
      var schedule = set(this, id), tween = schedule.tween;
      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {
          name: name,
          value: value
        }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function transition_tween(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }
  function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function () {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
      return get(node, id).value[name];
    };
  }
  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? d3Interpolate.interpolateNumber : b instanceof d3Color.color ? d3Interpolate.interpolateRgb : (c = d3Color.color(b)) ? (b = c, d3Interpolate.interpolateRgb) : d3Interpolate.interpolateString)(a, b);
  }
  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function transition_attr(name, value) {
    var fullname = d3Selection.namespace(name), i = fullname === "transform" ? d3Interpolate.interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }
  function attrInterpolate(name, i) {
    return function (t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function (t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = d3Selection.namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }
  function delayFunction(id, value) {
    return function () {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id, value) {
    return (value = +value, function () {
      init(this, id).delay = value;
    });
  }
  function transition_delay(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
  }
  function durationFunction(id, value) {
    return function () {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id, value) {
    return (value = +value, function () {
      set(this, id).duration = value;
    });
  }
  function transition_duration(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
  }
  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error();
    return function () {
      set(this, id).ease = value;
    };
  }
  function transition_ease(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
  }
  function easeVarying(id, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error();
      set(this, id).ease = v;
    };
  }
  function transition_easeVarying(value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }
  function transition_filter(match) {
    if (typeof match !== "function") match = d3Selection.matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }
  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error();
    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function (t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set;
    return function () {
      var schedule = sit(this, id), on = schedule.on;
      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function transition_on(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
  }
  function removeFunction(id) {
    return function () {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }
  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }
  function transition_select(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = d3Selection.selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if (("__data__" in node)) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id);
  }
  function transition_selectAll(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = d3Selection.selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id);
  }
  var Selection = d3Selection.selection.prototype.constructor;
  function transition_selection() {
    return new Selection(this._groups, this._parents);
  }
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = d3Selection.style(this, name), string1 = (this.style.removeProperty(name), d3Selection.style(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
      var string0 = d3Selection.style(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = d3Selection.style(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), d3Selection.style(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function () {
      var schedule = set(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? d3Interpolate.interpolateTransformCss : interpolate;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
  }
  function styleInterpolate(name, i, priority) {
    return function (t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }
  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function () {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function transition_text(value) {
    return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
  }
  function textInterpolate(i) {
    return function (t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }
  function transition_transition() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }
  function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function (resolve, reject) {
      var cancel = {
        value: reject
      }, end = {
        value: function () {
          if (--size === 0) resolve();
        }
      };
      that.each(function () {
        var schedule = set(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }
  var id = 0;
  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }
  function transition(name) {
    return d3Selection.selection().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = d3Selection.selection.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: d3Ease.easeCubicInOut
  };
  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id} not found`);
      }
    }
    return timing;
  }
  function selection_transition(name) {
    var id, timing;
    if (name instanceof Transition) {
      (id = name._id, name = name._name);
    } else {
      (id = newId(), (timing = defaultTiming).time = d3Timer.now(), name = name == null ? null : name + "");
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }
    return new Transition(groups, this._parents, name, id);
  }
  d3Selection.selection.prototype.interrupt = selection_interrupt;
  d3Selection.selection.prototype.transition = selection_transition;
  var root = [null];
  function active(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
      name = name == null ? null : name + "";
      for (i in schedules) {
        if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
          return new Transition([[node]], root, name, +i);
        }
      }
    }
    return null;
  }
  exports.active = active;
  exports.interrupt = interrupt;
  exports.transition = transition;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-selection":"1RFAz","d3-dispatch":"6ygE0","d3-timer":"6ZuUH","d3-interpolate":"6eByj","d3-color":"3mmqs","d3-ease":"3jKwm"}],"6ZuUH":[function(require,module,exports) {
var define;
// https://d3js.org/d3-timer/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  var frame = 0, // is an animation frame pending?
  timeout = 0, // is a timeout pending?
  interval = 0, // are any timers active?
  pokeDelay = 1000, // how frequently we check for clock skew
  taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function (callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this; else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function () {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now();
    // Get the current time, if not already set.
    ++frame;
    // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) (clockSkew -= delay, clockLast = now);
  }
  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        (t0 = t1, t1 = t1._next);
      } else {
        (t2 = t1._next, t1._next = null);
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame) return;
    // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) (clockLast = clock.now(), interval = setInterval(poke, pokeDelay));
      (frame = 1, setFrame(wake));
    }
  }
  function timeout$1(callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart(elapsed => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }
  function interval$1(callback, delay, time) {
    var t = new Timer(), total = delay;
    if (delay == null) return (t.restart(callback, delay, time), t);
    t._restart = t.restart;
    t.restart = function (callback, delay, time) {
      (delay = +delay, time = time == null ? now() : +time);
      t._restart(function tick(elapsed) {
        elapsed += total;
        t._restart(tick, total += delay, time);
        callback(elapsed);
      }, delay, time);
    };
    t.restart(callback, delay, time);
    return t;
  }
  exports.interval = interval$1;
  exports.now = now;
  exports.timeout = timeout$1;
  exports.timer = timer;
  exports.timerFlush = timerFlush;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3jKwm":[function(require,module,exports) {
var define;
// https://d3js.org/d3-ease/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  const linear = t => +t;
  function quadIn(t) {
    return t * t;
  }
  function quadOut(t) {
    return t * (2 - t);
  }
  function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }
  function cubicIn(t) {
    return t * t * t;
  }
  function cubicOut(t) {
    return --t * t * t + 1;
  }
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var exponent = 3;
  var polyIn = (function custom(e) {
    e = +e;
    function polyIn(t) {
      return Math.pow(t, e);
    }
    polyIn.exponent = custom;
    return polyIn;
  })(exponent);
  var polyOut = (function custom(e) {
    e = +e;
    function polyOut(t) {
      return 1 - Math.pow(1 - t, e);
    }
    polyOut.exponent = custom;
    return polyOut;
  })(exponent);
  var polyInOut = (function custom(e) {
    e = +e;
    function polyInOut(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut.exponent = custom;
    return polyInOut;
  })(exponent);
  var pi = Math.PI, halfPi = pi / 2;
  function sinIn(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
  }
  function sinOut(t) {
    return Math.sin(t * halfPi);
  }
  function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
  }
  // tpmt is two power minus ten times t scaled to [0,1]
  function tpmt(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
  }
  function expIn(t) {
    return tpmt(1 - +t);
  }
  function expOut(t) {
    return 1 - tpmt(t);
  }
  function expInOut(t) {
    return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
  }
  function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function circleOut(t) {
    return Math.sqrt(1 - --t * t);
  }
  function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }
  var b1 = 4 / 11, b2 = 6 / 11, b3 = 8 / 11, b4 = 3 / 4, b5 = 9 / 11, b6 = 10 / 11, b7 = 15 / 16, b8 = 21 / 22, b9 = 63 / 64, b0 = 1 / b1 / b1;
  function bounceIn(t) {
    return 1 - bounceOut(1 - t);
  }
  function bounceOut(t) {
    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
  }
  function bounceInOut(t) {
    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
  }
  var overshoot = 1.70158;
  var backIn = (function custom(s) {
    s = +s;
    function backIn(t) {
      return (t = +t) * t * (s * (t - 1) + t);
    }
    backIn.overshoot = custom;
    return backIn;
  })(overshoot);
  var backOut = (function custom(s) {
    s = +s;
    function backOut(t) {
      return --t * t * ((t + 1) * s + t) + 1;
    }
    backOut.overshoot = custom;
    return backOut;
  })(overshoot);
  var backInOut = (function custom(s) {
    s = +s;
    function backInOut(t) {
      return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
    backInOut.overshoot = custom;
    return backInOut;
  })(overshoot);
  var tau = 2 * Math.PI, amplitude = 1, period = 0.3;
  var elasticIn = (function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticIn(t) {
      return a * tpmt(- --t) * Math.sin((s - t) / p);
    }
    elasticIn.amplitude = function (a) {
      return custom(a, p * tau);
    };
    elasticIn.period = function (p) {
      return custom(a, p);
    };
    return elasticIn;
  })(amplitude, period);
  var elasticOut = (function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticOut(t) {
      return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
    }
    elasticOut.amplitude = function (a) {
      return custom(a, p * tau);
    };
    elasticOut.period = function (p) {
      return custom(a, p);
    };
    return elasticOut;
  })(amplitude, period);
  var elasticInOut = (function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticInOut(t) {
      return ((t = t * 2 - 1) < 0 ? a * tpmt(-t) * Math.sin((s - t) / p) : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
    }
    elasticInOut.amplitude = function (a) {
      return custom(a, p * tau);
    };
    elasticInOut.period = function (p) {
      return custom(a, p);
    };
    return elasticInOut;
  })(amplitude, period);
  exports.easeBack = backInOut;
  exports.easeBackIn = backIn;
  exports.easeBackInOut = backInOut;
  exports.easeBackOut = backOut;
  exports.easeBounce = bounceOut;
  exports.easeBounceIn = bounceIn;
  exports.easeBounceInOut = bounceInOut;
  exports.easeBounceOut = bounceOut;
  exports.easeCircle = circleInOut;
  exports.easeCircleIn = circleIn;
  exports.easeCircleInOut = circleInOut;
  exports.easeCircleOut = circleOut;
  exports.easeCubic = cubicInOut;
  exports.easeCubicIn = cubicIn;
  exports.easeCubicInOut = cubicInOut;
  exports.easeCubicOut = cubicOut;
  exports.easeElastic = elasticOut;
  exports.easeElasticIn = elasticIn;
  exports.easeElasticInOut = elasticInOut;
  exports.easeElasticOut = elasticOut;
  exports.easeExp = expInOut;
  exports.easeExpIn = expIn;
  exports.easeExpInOut = expInOut;
  exports.easeExpOut = expOut;
  exports.easeLinear = linear;
  exports.easePoly = polyInOut;
  exports.easePolyIn = polyIn;
  exports.easePolyInOut = polyInOut;
  exports.easePolyOut = polyOut;
  exports.easeQuad = quadInOut;
  exports.easeQuadIn = quadIn;
  exports.easeQuadInOut = quadInOut;
  exports.easeQuadOut = quadOut;
  exports.easeSin = sinInOut;
  exports.easeSinIn = sinIn;
  exports.easeSinInOut = sinInOut;
  exports.easeSinOut = sinOut;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"lAb5X":[function(require,module,exports) {
var define;
// https://d3js.org/d3-chord/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-path')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-path'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Path) {
  "use strict";
  var abs = Math.abs;
  var cos = Math.cos;
  var sin = Math.sin;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var tau = pi * 2;
  var max = Math.max;
  var epsilon = 1e-12;
  function range(i, j) {
    return Array.from({
      length: j - i
    }, (_, k) => i + k);
  }
  function compareValue(compare) {
    return function (a, b) {
      return compare(a.source.value + a.target.value, b.source.value + b.target.value);
    };
  }
  function chord() {
    return chord$1(false, false);
  }
  function chordTranspose() {
    return chord$1(false, true);
  }
  function chordDirected() {
    return chord$1(true, false);
  }
  function chord$1(directed, transpose) {
    var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
    function chord(matrix) {
      var n = matrix.length, groupSums = new Array(n), groupIndex = range(0, n), chords = new Array(n * n), groups = new Array(n), k = 0, dx;
      matrix = Float64Array.from({
        length: n * n
      }, transpose ? (_, i) => matrix[i % n][i / n | 0] : (_, i) => matrix[i / n | 0][i % n]);
      // Compute the scaling factor from value to angle in [0, 2pi].
      for (let i = 0; i < n; ++i) {
        let x = 0;
        for (let j = 0; j < n; ++j) x += matrix[i * n + j] + directed * matrix[j * n + i];
        k += groupSums[i] = x;
      }
      k = max(0, tau - padAngle * n) / k;
      dx = k ? padAngle : tau / n;
      // Compute the angles for each group and constituent chord.
      {
        let x = 0;
        if (sortGroups) groupIndex.sort((a, b) => sortGroups(groupSums[a], groupSums[b]));
        for (const i of groupIndex) {
          const x0 = x;
          if (directed) {
            const subgroupIndex = range(~n + 1, n).filter(j => j < 0 ? matrix[~j * n + i] : matrix[i * n + j]);
            if (sortSubgroups) subgroupIndex.sort((a, b) => sortSubgroups(a < 0 ? -matrix[~a * n + i] : matrix[i * n + a], b < 0 ? -matrix[~b * n + i] : matrix[i * n + b]));
            for (const j of subgroupIndex) {
              if (j < 0) {
                const chord = chords[~j * n + i] || (chords[~j * n + i] = {
                  source: null,
                  target: null
                });
                chord.target = {
                  index: i,
                  startAngle: x,
                  endAngle: x += matrix[~j * n + i] * k,
                  value: matrix[~j * n + i]
                };
              } else {
                const chord = chords[i * n + j] || (chords[i * n + j] = {
                  source: null,
                  target: null
                });
                chord.source = {
                  index: i,
                  startAngle: x,
                  endAngle: x += matrix[i * n + j] * k,
                  value: matrix[i * n + j]
                };
              }
            }
            groups[i] = {
              index: i,
              startAngle: x0,
              endAngle: x,
              value: groupSums[i]
            };
          } else {
            const subgroupIndex = range(0, n).filter(j => matrix[i * n + j] || matrix[j * n + i]);
            if (sortSubgroups) subgroupIndex.sort((a, b) => sortSubgroups(matrix[i * n + a], matrix[i * n + b]));
            for (const j of subgroupIndex) {
              let chord;
              if (i < j) {
                chord = chords[i * n + j] || (chords[i * n + j] = {
                  source: null,
                  target: null
                });
                chord.source = {
                  index: i,
                  startAngle: x,
                  endAngle: x += matrix[i * n + j] * k,
                  value: matrix[i * n + j]
                };
              } else {
                chord = chords[j * n + i] || (chords[j * n + i] = {
                  source: null,
                  target: null
                });
                chord.target = {
                  index: i,
                  startAngle: x,
                  endAngle: x += matrix[i * n + j] * k,
                  value: matrix[i * n + j]
                };
                if (i === j) chord.source = chord.target;
              }
              if (chord.source && chord.target && chord.source.value < chord.target.value) {
                const source = chord.source;
                chord.source = chord.target;
                chord.target = source;
              }
            }
            groups[i] = {
              index: i,
              startAngle: x0,
              endAngle: x,
              value: groupSums[i]
            };
          }
          x += dx;
        }
              // Remove empty chords.
}
      // Remove empty chords.
      chords = Object.values(chords);
      chords.groups = groups;
      return sortChords ? chords.sort(sortChords) : chords;
    }
    chord.padAngle = function (_) {
      return arguments.length ? (padAngle = max(0, _), chord) : padAngle;
    };
    chord.sortGroups = function (_) {
      return arguments.length ? (sortGroups = _, chord) : sortGroups;
    };
    chord.sortSubgroups = function (_) {
      return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
    };
    chord.sortChords = function (_) {
      return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
    };
    return chord;
  }
  var slice = Array.prototype.slice;
  function constant(x) {
    return function () {
      return x;
    };
  }
  function defaultSource(d) {
    return d.source;
  }
  function defaultTarget(d) {
    return d.target;
  }
  function defaultRadius(d) {
    return d.radius;
  }
  function defaultStartAngle(d) {
    return d.startAngle;
  }
  function defaultEndAngle(d) {
    return d.endAngle;
  }
  function defaultPadAngle() {
    return 0;
  }
  function defaultArrowheadRadius() {
    return 10;
  }
  function ribbon(headRadius) {
    var source = defaultSource, target = defaultTarget, sourceRadius = defaultRadius, targetRadius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, padAngle = defaultPadAngle, context = null;
    function ribbon() {
      var buffer, s = source.apply(this, arguments), t = target.apply(this, arguments), ap = padAngle.apply(this, arguments) / 2, argv = slice.call(arguments), sr = +sourceRadius.apply(this, (argv[0] = s, argv)), sa0 = startAngle.apply(this, argv) - halfPi, sa1 = endAngle.apply(this, argv) - halfPi, tr = +targetRadius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - halfPi, ta1 = endAngle.apply(this, argv) - halfPi;
      if (!context) context = buffer = d3Path.path();
      if (ap > epsilon) {
        if (abs(sa1 - sa0) > ap * 2 + epsilon) sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap); else sa0 = sa1 = (sa0 + sa1) / 2;
        if (abs(ta1 - ta0) > ap * 2 + epsilon) ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap); else ta0 = ta1 = (ta0 + ta1) / 2;
      }
      context.moveTo(sr * cos(sa0), sr * sin(sa0));
      context.arc(0, 0, sr, sa0, sa1);
      if (sa0 !== ta0 || sa1 !== ta1) {
        if (headRadius) {
          var hr = +headRadius.apply(this, arguments), tr2 = tr - hr, ta2 = (ta0 + ta1) / 2;
          context.quadraticCurveTo(0, 0, tr2 * cos(ta0), tr2 * sin(ta0));
          context.lineTo(tr * cos(ta2), tr * sin(ta2));
          context.lineTo(tr2 * cos(ta1), tr2 * sin(ta1));
        } else {
          context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
          context.arc(0, 0, tr, ta0, ta1);
        }
      }
      context.quadraticCurveTo(0, 0, sr * cos(sa0), sr * sin(sa0));
      context.closePath();
      if (buffer) return (context = null, buffer + "" || null);
    }
    if (headRadius) ribbon.headRadius = function (_) {
      return arguments.length ? (headRadius = typeof _ === "function" ? _ : constant(+_), ribbon) : headRadius;
    };
    ribbon.radius = function (_) {
      return arguments.length ? (sourceRadius = targetRadius = typeof _ === "function" ? _ : constant(+_), ribbon) : sourceRadius;
    };
    ribbon.sourceRadius = function (_) {
      return arguments.length ? (sourceRadius = typeof _ === "function" ? _ : constant(+_), ribbon) : sourceRadius;
    };
    ribbon.targetRadius = function (_) {
      return arguments.length ? (targetRadius = typeof _ === "function" ? _ : constant(+_), ribbon) : targetRadius;
    };
    ribbon.startAngle = function (_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), ribbon) : startAngle;
    };
    ribbon.endAngle = function (_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), ribbon) : endAngle;
    };
    ribbon.padAngle = function (_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), ribbon) : padAngle;
    };
    ribbon.source = function (_) {
      return arguments.length ? (source = _, ribbon) : source;
    };
    ribbon.target = function (_) {
      return arguments.length ? (target = _, ribbon) : target;
    };
    ribbon.context = function (_) {
      return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
    };
    return ribbon;
  }
  function ribbon$1() {
    return ribbon();
  }
  function ribbonArrow() {
    return ribbon(defaultArrowheadRadius);
  }
  exports.chord = chord;
  exports.chordDirected = chordDirected;
  exports.chordTranspose = chordTranspose;
  exports.ribbon = ribbon$1;
  exports.ribbonArrow = ribbonArrow;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-path":"m838t"}],"m838t":[function(require,module,exports) {
var define;
// https://d3js.org/d3-path/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    // end of current subpath
    this._ = "";
  }
  function path() {
    return new Path();
  }
  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function (x, y) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function () {
      if (this._x1 !== null) {
        (this._x1 = this._x0, this._y1 = this._y0);
        this._ += "Z";
      }
    },
    lineTo: function (x, y) {
      this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function (x1, y1, x, y) {
      this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function (x1, y1, x2, y2, x, y) {
      this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function (x1, y1, x2, y2, r) {
      (x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r);
      var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);
      // Is this path empty? Move to (x1,y1).
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
              // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
} else // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      if (!(l01_2 > epsilon)) ; else // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
              // Otherwise, draw an arc!
} else // Otherwise, draw an arc!
      {
        var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
        // If the start tangent is not coincident with (x0,y0), line to.
        if (Math.abs(t01 - 1) > epsilon) {
          this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
        }
        this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function (x, y, r, a0, a1, ccw) {
      (x = +x, y = +y, r = +r, ccw = !!ccw);
      var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);
      // Is this path empty? Move to (x0,y0).
      if (this._x1 === null) {
        this._ += "M" + x0 + "," + y0;
              // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
} else // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      }
      // Is this arc empty? We’re done.
      if (!r) return;
      // Does the angle go the wrong way? Flip the direction.
      if (da < 0) da = da % tau + tau;
      // Is this a complete circle? Draw two arcs to complete the circle.
      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
              // Is this arc non-empty? Draw an arc!
} else // Is this arc non-empty? Draw an arc!
      if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
    },
    rect: function (x, y, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function () {
      return this._;
    }
  };
  exports.path = path;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3GYiM":[function(require,module,exports) {
var define;
// https://d3js.org/d3-contour/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-array')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-array'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Array) {
  "use strict";
  var array = Array.prototype;
  var slice = array.slice;
  function ascending(a, b) {
    return a - b;
  }
  function area(ring) {
    var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
    while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
    return area;
  }
  var constant = x => () => x;
  function contains(ring, hole) {
    var i = -1, n = hole.length, c;
    while (++i < n) if (c = ringContains(ring, hole[i])) return c;
    return 0;
  }
  function ringContains(ring, point) {
    var x = point[0], y = point[1], contains = -1;
    for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
      var pi = ring[i], xi = pi[0], yi = pi[1], pj = ring[j], xj = pj[0], yj = pj[1];
      if (segmentContains(pi, pj, point)) return 0;
      if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
    }
    return contains;
  }
  function segmentContains(a, b, c) {
    var i;
    return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
  }
  function collinear(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
  }
  function within(p, q, r) {
    return p <= q && q <= r || r <= q && q <= p;
  }
  function noop() {}
  var cases = [[], [[[1.0, 1.5], [0.5, 1.0]]], [[[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [0.5, 1.0]]], [[[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 0.5], [1.0, 1.5]]], [[[1.0, 0.5], [0.5, 1.0]]], [[[0.5, 1.0], [1.0, 0.5]]], [[[1.0, 1.5], [1.0, 0.5]]], [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [1.0, 0.5]]], [[[0.5, 1.0], [1.5, 1.0]]], [[[1.0, 1.5], [1.5, 1.0]]], [[[0.5, 1.0], [1.0, 1.5]]], []];
  function contours() {
    var dx = 1, dy = 1, threshold = d3Array.thresholdSturges, smooth = smoothLinear;
    function contours(values) {
      var tz = threshold(values);
      // Convert number of thresholds into uniform thresholds.
      if (!Array.isArray(tz)) {
        var domain = d3Array.extent(values), start = domain[0], stop = domain[1];
        tz = d3Array.tickStep(start, stop, tz);
        tz = d3Array.range(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
      } else {
        tz = tz.slice().sort(ascending);
      }
      return tz.map(function (value) {
        return contour(values, value);
      });
    }
    // Accumulate, smooth contour rings, assign holes to exterior rings.
    // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
    function contour(values, value) {
      var polygons = [], holes = [];
      isorings(values, value, function (ring) {
        smooth(ring, values, value);
        if (area(ring) > 0) polygons.push([ring]); else holes.push(ring);
      });
      holes.forEach(function (hole) {
        for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
          if (contains((polygon = polygons[i])[0], hole) !== -1) {
            polygon.push(hole);
            return;
          }
        }
      });
      return {
        type: "MultiPolygon",
        value: value,
        coordinates: polygons
      };
    }
    // Marching squares with isolines stitched into rings.
    // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
    function isorings(values, value, callback) {
      var fragmentByStart = new Array(), fragmentByEnd = new Array(), x, y, t0, t1, t2, t3;
      // Special case for the first row (y = -1, t2 = t3 = 0).
      x = y = -1;
      t1 = values[0] >= value;
      cases[t1 << 1].forEach(stitch);
      while (++x < dx - 1) {
        (t0 = t1, t1 = values[x + 1] >= value);
        cases[t0 | t1 << 1].forEach(stitch);
      }
      cases[t1 << 0].forEach(stitch);
      // General case for the intermediate rows.
      while (++y < dy - 1) {
        x = -1;
        t1 = values[y * dx + dx] >= value;
        t2 = values[y * dx] >= value;
        cases[t1 << 1 | t2 << 2].forEach(stitch);
        while (++x < dx - 1) {
          (t0 = t1, t1 = values[y * dx + dx + x + 1] >= value);
          (t3 = t2, t2 = values[y * dx + x + 1] >= value);
          cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
        }
        cases[t1 | t2 << 3].forEach(stitch);
      }
      // Special case for the last row (y = dy - 1, t0 = t1 = 0).
      x = -1;
      t2 = values[y * dx] >= value;
      cases[t2 << 2].forEach(stitch);
      while (++x < dx - 1) {
        (t3 = t2, t2 = values[y * dx + x + 1] >= value);
        cases[t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t2 << 3].forEach(stitch);
      function stitch(line) {
        var start = [line[0][0] + x, line[0][1] + y], end = [line[1][0] + x, line[1][1] + y], startIndex = index(start), endIndex = index(end), f, g;
        if (f = fragmentByEnd[startIndex]) {
          if (g = fragmentByStart[endIndex]) {
            delete fragmentByEnd[f.end];
            delete fragmentByStart[g.start];
            if (f === g) {
              f.ring.push(end);
              callback(f.ring);
            } else {
              fragmentByStart[f.start] = fragmentByEnd[g.end] = {
                start: f.start,
                end: g.end,
                ring: f.ring.concat(g.ring)
              };
            }
          } else {
            delete fragmentByEnd[f.end];
            f.ring.push(end);
            fragmentByEnd[f.end = endIndex] = f;
          }
        } else if (f = fragmentByStart[endIndex]) {
          if (g = fragmentByEnd[startIndex]) {
            delete fragmentByStart[f.start];
            delete fragmentByEnd[g.end];
            if (f === g) {
              f.ring.push(end);
              callback(f.ring);
            } else {
              fragmentByStart[g.start] = fragmentByEnd[f.end] = {
                start: g.start,
                end: f.end,
                ring: g.ring.concat(f.ring)
              };
            }
          } else {
            delete fragmentByStart[f.start];
            f.ring.unshift(start);
            fragmentByStart[f.start = startIndex] = f;
          }
        } else {
          fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {
            start: startIndex,
            end: endIndex,
            ring: [start, end]
          };
        }
      }
    }
    function index(point) {
      return point[0] * 2 + point[1] * (dx + 1) * 4;
    }
    function smoothLinear(ring, values, value) {
      ring.forEach(function (point) {
        var x = point[0], y = point[1], xt = x | 0, yt = y | 0, v0, v1 = values[yt * dx + xt];
        if (x > 0 && x < dx && xt === x) {
          v0 = values[yt * dx + xt - 1];
          point[0] = x + (value - v0) / (v1 - v0) - 0.5;
        }
        if (y > 0 && y < dy && yt === y) {
          v0 = values[(yt - 1) * dx + xt];
          point[1] = y + (value - v0) / (v1 - v0) - 0.5;
        }
      });
    }
    contours.contour = contour;
    contours.size = function (_) {
      if (!arguments.length) return [dx, dy];
      var _0 = Math.floor(_[0]), _1 = Math.floor(_[1]);
      if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
      return (dx = _0, dy = _1, contours);
    };
    contours.thresholds = function (_) {
      return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), contours) : threshold;
    };
    contours.smooth = function (_) {
      return arguments.length ? (smooth = _ ? smoothLinear : noop, contours) : smooth === smoothLinear;
    };
    return contours;
  }
  // TODO Optimize edge cases.
  // TODO Optimize index calculation.
  // TODO Optimize arguments.
  function blurX(source, target, r) {
    var n = source.width, m = source.height, w = (r << 1) + 1;
    for (var j = 0; j < m; ++j) {
      for (var i = 0, sr = 0; i < n + r; ++i) {
        if (i < n) {
          sr += source.data[i + j * n];
        }
        if (i >= r) {
          if (i >= w) {
            sr -= source.data[i - w + j * n];
          }
          target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
        }
      }
    }
  }
  // TODO Optimize edge cases.
  // TODO Optimize index calculation.
  // TODO Optimize arguments.
  function blurY(source, target, r) {
    var n = source.width, m = source.height, w = (r << 1) + 1;
    for (var i = 0; i < n; ++i) {
      for (var j = 0, sr = 0; j < m + r; ++j) {
        if (j < m) {
          sr += source.data[i + j * n];
        }
        if (j >= r) {
          if (j >= w) {
            sr -= source.data[i + (j - w) * n];
          }
          target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
        }
      }
    }
  }
  function defaultX(d) {
    return d[0];
  }
  function defaultY(d) {
    return d[1];
  }
  function defaultWeight() {
    return 1;
  }
  function density() {
    var x = defaultX, y = defaultY, weight = defaultWeight, dx = 960, dy = 500, r = 20, // blur radius
    k = 2, // log2(grid cell size)
    o = r * 3, // grid offset, to pad for blur
    n = dx + o * 2 >> k, // grid width
    m = dy + o * 2 >> k, // grid height
    threshold = constant(20);
    function density(data) {
      var values0 = new Float32Array(n * m), values1 = new Float32Array(n * m);
      data.forEach(function (d, i, data) {
        var xi = +x(d, i, data) + o >> k, yi = +y(d, i, data) + o >> k, wi = +weight(d, i, data);
        if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
          values0[xi + yi * n] += wi;
        }
      });
      // TODO Optimize.
      blurX({
        width: n,
        height: m,
        data: values0
      }, {
        width: n,
        height: m,
        data: values1
      }, r >> k);
      blurY({
        width: n,
        height: m,
        data: values1
      }, {
        width: n,
        height: m,
        data: values0
      }, r >> k);
      blurX({
        width: n,
        height: m,
        data: values0
      }, {
        width: n,
        height: m,
        data: values1
      }, r >> k);
      blurY({
        width: n,
        height: m,
        data: values1
      }, {
        width: n,
        height: m,
        data: values0
      }, r >> k);
      blurX({
        width: n,
        height: m,
        data: values0
      }, {
        width: n,
        height: m,
        data: values1
      }, r >> k);
      blurY({
        width: n,
        height: m,
        data: values1
      }, {
        width: n,
        height: m,
        data: values0
      }, r >> k);
      var tz = threshold(values0);
      // Convert number of thresholds into uniform thresholds.
      if (!Array.isArray(tz)) {
        var stop = d3Array.max(values0);
        tz = d3Array.tickStep(0, stop, tz);
        tz = d3Array.range(0, Math.floor(stop / tz) * tz, tz);
        tz.shift();
      }
      return contours().thresholds(tz).size([n, m])(values0).map(transform);
    }
    function transform(geometry) {
      geometry.value *= Math.pow(2, -2 * k);
      // Density in points per square pixel.
      geometry.coordinates.forEach(transformPolygon);
      return geometry;
    }
    function transformPolygon(coordinates) {
      coordinates.forEach(transformRing);
    }
    function transformRing(coordinates) {
      coordinates.forEach(transformPoint);
    }
    // TODO Optimize.
    function transformPoint(coordinates) {
      coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
      coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
    }
    function resize() {
      o = r * 3;
      n = dx + o * 2 >> k;
      m = dy + o * 2 >> k;
      return density;
    }
    density.x = function (_) {
      return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), density) : x;
    };
    density.y = function (_) {
      return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), density) : y;
    };
    density.weight = function (_) {
      return arguments.length ? (weight = typeof _ === "function" ? _ : constant(+_), density) : weight;
    };
    density.size = function (_) {
      if (!arguments.length) return [dx, dy];
      var _0 = +_[0], _1 = +_[1];
      if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
      return (dx = _0, dy = _1, resize());
    };
    density.cellSize = function (_) {
      if (!arguments.length) return 1 << k;
      if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
      return (k = Math.floor(Math.log(_) / Math.LN2), resize());
    };
    density.thresholds = function (_) {
      return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), density) : threshold;
    };
    density.bandwidth = function (_) {
      if (!arguments.length) return Math.sqrt(r * (r + 1));
      if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
      return (r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize());
    };
    return density;
  }
  exports.contourDensity = density;
  exports.contours = contours;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-array":"7CLUA"}],"2ErsE":[function(require,module,exports) {
var define;
// https://github.com/d3/d3-delaunay v5.3.0 Copyright 2020 Mike Bostock
// https://github.com/mapbox/delaunator v4.0.1. Copyright 2019 Mapbox, Inc.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  const EPSILON = Math.pow(2, -52);
  const EDGE_STACK = new Uint32Array(512);
  class Delaunator {
    static from(points, getX = defaultGetX, getY = defaultGetY) {
      const n = points.length;
      const coords = new Float64Array(n * 2);
      for (let i = 0; i < n; i++) {
        const p = points[i];
        coords[2 * i] = getX(p);
        coords[2 * i + 1] = getY(p);
      }
      return new Delaunator(coords);
    }
    constructor(coords) {
      const n = coords.length >> 1;
      if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');
      this.coords = coords;
      // arrays that will store the triangulation graph
      const maxTriangles = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(maxTriangles * 3);
      this._halfedges = new Int32Array(maxTriangles * 3);
      // temporary arrays for tracking the edges of the advancing convex hull
      this._hashSize = Math.ceil(Math.sqrt(n));
      this._hullPrev = new Uint32Array(n);
      // edge to prev edge
      this._hullNext = new Uint32Array(n);
      // edge to next edge
      this._hullTri = new Uint32Array(n);
      // edge to adjacent triangle
      this._hullHash = new Int32Array(this._hashSize).fill(-1);
      // angular edge hash
      // temporary arrays for sorting points
      this._ids = new Uint32Array(n);
      this._dists = new Float64Array(n);
      this.update();
    }
    update() {
      const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} = this;
      const n = coords.length >> 1;
      // populate an array of point indices; calculate input data bbox
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (let i = 0; i < n; i++) {
        const x = coords[2 * i];
        const y = coords[2 * i + 1];
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        this._ids[i] = i;
      }
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      let minDist = Infinity;
      let i0, i1, i2;
      // pick a seed point close to the center
      for (let i = 0; i < n; i++) {
        const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
        if (d < minDist) {
          i0 = i;
          minDist = d;
        }
      }
      const i0x = coords[2 * i0];
      const i0y = coords[2 * i0 + 1];
      minDist = Infinity;
      // find the point closest to the seed
      for (let i = 0; i < n; i++) {
        if (i === i0) continue;
        const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
        if (d < minDist && d > 0) {
          i1 = i;
          minDist = d;
        }
      }
      let i1x = coords[2 * i1];
      let i1y = coords[2 * i1 + 1];
      let minRadius = Infinity;
      // find the third point which forms the smallest circumcircle with the first two
      for (let i = 0; i < n; i++) {
        if (i === i0 || i === i1) continue;
        const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
        if (r < minRadius) {
          i2 = i;
          minRadius = r;
        }
      }
      let i2x = coords[2 * i2];
      let i2y = coords[2 * i2 + 1];
      if (minRadius === Infinity) {
        // order collinear points by dx (or dy if all x are identical)
        // and return the list as a hull
        for (let i = 0; i < n; i++) {
          this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
        }
        quicksort(this._ids, this._dists, 0, n - 1);
        const hull = new Uint32Array(n);
        let j = 0;
        for (let i = 0, d0 = -Infinity; i < n; i++) {
          const id = this._ids[i];
          if (this._dists[id] > d0) {
            hull[j++] = id;
            d0 = this._dists[id];
          }
        }
        this.hull = hull.subarray(0, j);
        this.triangles = new Uint32Array(0);
        this.halfedges = new Uint32Array(0);
        return;
      }
      // swap the order of the seed points for counter-clockwise orientation
      if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
        const i = i1;
        const x = i1x;
        const y = i1y;
        i1 = i2;
        i1x = i2x;
        i1y = i2y;
        i2 = i;
        i2x = x;
        i2y = y;
      }
      const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
      this._cx = center.x;
      this._cy = center.y;
      for (let i = 0; i < n; i++) {
        this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
      }
      // sort the points by distance from the seed triangle circumcenter
      quicksort(this._ids, this._dists, 0, n - 1);
      // set up the seed triangle as the starting hull
      this._hullStart = i0;
      let hullSize = 3;
      hullNext[i0] = hullPrev[i2] = i1;
      hullNext[i1] = hullPrev[i0] = i2;
      hullNext[i2] = hullPrev[i1] = i0;
      hullTri[i0] = 0;
      hullTri[i1] = 1;
      hullTri[i2] = 2;
      hullHash.fill(-1);
      hullHash[this._hashKey(i0x, i0y)] = i0;
      hullHash[this._hashKey(i1x, i1y)] = i1;
      hullHash[this._hashKey(i2x, i2y)] = i2;
      this.trianglesLen = 0;
      this._addTriangle(i0, i1, i2, -1, -1, -1);
      for (let k = 0, xp, yp; k < this._ids.length; k++) {
        const i = this._ids[k];
        const x = coords[2 * i];
        const y = coords[2 * i + 1];
        // skip near-duplicate points
        if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
        xp = x;
        yp = y;
        // skip seed triangle points
        if (i === i0 || i === i1 || i === i2) continue;
        // find a visible edge on the convex hull using edge hash
        let start = 0;
        for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
          start = hullHash[(key + j) % this._hashSize];
          if (start !== -1 && start !== hullNext[start]) break;
        }
        start = hullPrev[start];
        let e = start, q;
        while ((q = hullNext[e], !orient(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]))) {
          e = q;
          if (e === start) {
            e = -1;
            break;
          }
        }
        if (e === -1) continue;
        // likely a near-duplicate point; skip it
        // add the first triangle from the point
        let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
        // recursively flip triangles from the point until they satisfy the Delaunay condition
        hullTri[i] = this._legalize(t + 2);
        hullTri[e] = t;
        // keep track of boundary triangles on the hull
        hullSize++;
        // walk forward through the hull, adding more triangles and flipping recursively
        let n = hullNext[e];
        while ((q = hullNext[n], orient(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]))) {
          t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
          hullTri[i] = this._legalize(t + 2);
          hullNext[n] = n;
          // mark as removed
          hullSize--;
          n = q;
        }
        // walk backward from the other side, adding more triangles and flipping
        if (e === start) {
          while ((q = hullPrev[e], orient(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]))) {
            t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
            this._legalize(t + 2);
            hullTri[q] = t;
            hullNext[e] = e;
            // mark as removed
            hullSize--;
            e = q;
          }
        }
        // update the hull indices
        this._hullStart = hullPrev[i] = e;
        hullNext[e] = hullPrev[n] = i;
        hullNext[i] = n;
        // save the two new edges in the hash table
        hullHash[this._hashKey(x, y)] = i;
        hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
      }
      this.hull = new Uint32Array(hullSize);
      for (let i = 0, e = this._hullStart; i < hullSize; i++) {
        this.hull[i] = e;
        e = hullNext[e];
      }
      // trim typed triangle mesh arrays
      this.triangles = this._triangles.subarray(0, this.trianglesLen);
      this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    _hashKey(x, y) {
      return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }
    _legalize(a) {
      const {_triangles: triangles, _halfedges: halfedges, coords} = this;
      let i = 0;
      let ar = 0;
      // recursion eliminated with a fixed-size stack
      while (true) {
        const b = halfedges[a];
        /*if the pair of triangles doesn't satisfy the Delaunay condition
        * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
        * then do the same check/flip recursively for the new pair of triangles
        *
        *           pl                    pl
        *          /||\                  /  \
        *       al/ || \bl            al/    \a
        *        /  ||  \              /      \
        *       /  a||b  \    flip    /___ar___\
        *     p0\   ||   /p1   =>   p0\---bl---/p1
        *        \  ||  /              \      /
        *       ar\ || /br             b\    /br
        *          \||/                  \  /
        *           pr                    pr
        */
        const a0 = a - a % 3;
        ar = a0 + (a + 2) % 3;
        if (b === -1) {
          // convex hull edge
          if (i === 0) break;
          a = EDGE_STACK[--i];
          continue;
        }
        const b0 = b - b % 3;
        const al = a0 + (a + 1) % 3;
        const bl = b0 + (b + 2) % 3;
        const p0 = triangles[ar];
        const pr = triangles[a];
        const pl = triangles[al];
        const p1 = triangles[bl];
        const illegal = inCircle(coords[2 * p0], coords[2 * p0 + 1], coords[2 * pr], coords[2 * pr + 1], coords[2 * pl], coords[2 * pl + 1], coords[2 * p1], coords[2 * p1 + 1]);
        if (illegal) {
          triangles[a] = p1;
          triangles[b] = p0;
          const hbl = halfedges[bl];
          // edge swapped on the other side of the hull (rare); fix the halfedge reference
          if (hbl === -1) {
            let e = this._hullStart;
            do {
              if (this._hullTri[e] === bl) {
                this._hullTri[e] = a;
                break;
              }
              e = this._hullPrev[e];
            } while (e !== this._hullStart);
          }
          this._link(a, hbl);
          this._link(b, halfedges[ar]);
          this._link(ar, bl);
          const br = b0 + (b + 1) % 3;
          // don't worry about hitting the cap: it can only happen on extremely degenerate input
          if (i < EDGE_STACK.length) {
            EDGE_STACK[i++] = br;
          }
        } else {
          if (i === 0) break;
          a = EDGE_STACK[--i];
        }
      }
      return ar;
    }
    _link(a, b) {
      this._halfedges[a] = b;
      if (b !== -1) this._halfedges[b] = a;
    }
    /*add a new triangle given vertex indices and adjacent half-edge ids*/
    _addTriangle(i0, i1, i2, a, b, c) {
      const t = this.trianglesLen;
      this._triangles[t] = i0;
      this._triangles[t + 1] = i1;
      this._triangles[t + 2] = i2;
      this._link(t, a);
      this._link(t + 1, b);
      this._link(t + 2, c);
      this.trianglesLen += 3;
      return t;
    }
  }
  // monotonically increases with real angle, but doesn't need expensive trigonometry
  function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4;
  }
  function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }
  // return 2d orientation sign if we're confident in it through J. Shewchuk's error bound check
  function orientIfSure(px, py, rx, ry, qx, qy) {
    const l = (ry - py) * (qx - px);
    const r = (rx - px) * (qy - py);
    return Math.abs(l - r) >= 3.3306690738754716e-16 * Math.abs(l + r) ? l - r : 0;
  }
  // a more robust orientation test that's stable in a given triangle (to fix robustness issues)
  function orient(rx, ry, qx, qy, px, py) {
    const sign = orientIfSure(px, py, rx, ry, qx, qy) || orientIfSure(rx, ry, qx, qy, px, py) || orientIfSure(qx, qy, px, py, rx, ry);
    return sign < 0;
  }
  function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;
    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;
    return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
  }
  function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;
    return x * x + y * y;
  }
  function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;
    return {
      x,
      y
    };
  }
  function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
      for (let i = left + 1; i <= right; i++) {
        const temp = ids[i];
        const tempDist = dists[temp];
        let j = i - 1;
        while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
        ids[j + 1] = temp;
      }
    } else {
      const median = left + right >> 1;
      let i = left + 1;
      let j = right;
      swap(ids, median, i);
      if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
      if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
      if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);
      const temp = ids[i];
      const tempDist = dists[temp];
      while (true) {
        do i++; while (dists[ids[i]] < tempDist);
        do j--; while (dists[ids[j]] > tempDist);
        if (j < i) break;
        swap(ids, i, j);
      }
      ids[left + 1] = ids[j];
      ids[j] = temp;
      if (right - i + 1 >= j - left) {
        quicksort(ids, dists, i, right);
        quicksort(ids, dists, left, j - 1);
      } else {
        quicksort(ids, dists, left, j - 1);
        quicksort(ids, dists, i, right);
      }
    }
  }
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function defaultGetX(p) {
    return p[0];
  }
  function defaultGetY(p) {
    return p[1];
  }
  const epsilon = 1e-6;
  class Path {
    constructor() {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null;
      // end of current subpath
      this._ = "";
    }
    moveTo(x, y) {
      this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
      if (this._x1 !== null) {
        (this._x1 = this._x0, this._y1 = this._y0);
        this._ += "Z";
      }
    }
    lineTo(x, y) {
      this._ += `L${this._x1 = +x},${this._y1 = +y}`;
    }
    arc(x, y, r) {
      (x = +x, y = +y, r = +r);
      const x0 = x + r;
      const y0 = y;
      if (r < 0) throw new Error("negative radius");
      if (this._x1 === null) this._ += `M${x0},${y0}`; else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
      if (!r) return;
      this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
    }
    rect(x, y, w, h) {
      this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
    }
    value() {
      return this._ || null;
    }
  }
  class Polygon {
    constructor() {
      this._ = [];
    }
    moveTo(x, y) {
      this._.push([x, y]);
    }
    closePath() {
      this._.push(this._[0].slice());
    }
    lineTo(x, y) {
      this._.push([x, y]);
    }
    value() {
      return this._.length ? this._ : null;
    }
  }
  class Voronoi {
    constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
      if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
      this.delaunay = delaunay;
      this._circumcenters = new Float64Array(delaunay.points.length * 2);
      this.vectors = new Float64Array(delaunay.points.length * 2);
      (this.xmax = xmax, this.xmin = xmin);
      (this.ymax = ymax, this.ymin = ymin);
      this._init();
    }
    update() {
      this.delaunay.update();
      this._init();
      return this;
    }
    _init() {
      const {delaunay: {points, hull, triangles}, vectors} = this;
      // Compute circumcenters.
      const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
      for (let i = 0, j = 0, n = triangles.length, x, y; i < n; (i += 3, j += 2)) {
        const t1 = triangles[i] * 2;
        const t2 = triangles[i + 1] * 2;
        const t3 = triangles[i + 2] * 2;
        const x1 = points[t1];
        const y1 = points[t1 + 1];
        const x2 = points[t2];
        const y2 = points[t2 + 1];
        const x3 = points[t3];
        const y3 = points[t3 + 1];
        const dx = x2 - x1;
        const dy = y2 - y1;
        const ex = x3 - x1;
        const ey = y3 - y1;
        const bl = dx * dx + dy * dy;
        const cl = ex * ex + ey * ey;
        const ab = (dx * ey - dy * ex) * 2;
        if (!ab) {
          // degenerate case (collinear diagram)
          x = (x1 + x3) / 2 - 1e8 * ey;
          y = (y1 + y3) / 2 + 1e8 * ex;
        } else if (Math.abs(ab) < 1e-8) {
          // almost equal points (degenerate triangle)
          x = (x1 + x3) / 2;
          y = (y1 + y3) / 2;
        } else {
          const d = 1 / ab;
          x = x1 + (ey * bl - dy * cl) * d;
          y = y1 + (dx * cl - ex * bl) * d;
        }
        circumcenters[j] = x;
        circumcenters[j + 1] = y;
      }
      // Compute exterior cell rays.
      let h = hull[hull.length - 1];
      let p0, p1 = h * 4;
      let x0, x1 = points[2 * h];
      let y0, y1 = points[2 * h + 1];
      vectors.fill(0);
      for (let i = 0; i < hull.length; ++i) {
        h = hull[i];
        (p0 = p1, x0 = x1, y0 = y1);
        (p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1]);
        vectors[p0 + 2] = vectors[p1] = y0 - y1;
        vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
      }
    }
    render(context) {
      const buffer = context == null ? context = new Path() : undefined;
      const {delaunay: {halfedges, inedges, hull}, circumcenters, vectors} = this;
      if (hull.length <= 1) return null;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j = halfedges[i];
        if (j < i) continue;
        const ti = Math.floor(i / 3) * 2;
        const tj = Math.floor(j / 3) * 2;
        const xi = circumcenters[ti];
        const yi = circumcenters[ti + 1];
        const xj = circumcenters[tj];
        const yj = circumcenters[tj + 1];
        this._renderSegment(xi, yi, xj, yj, context);
      }
      let h0, h1 = hull[hull.length - 1];
      for (let i = 0; i < hull.length; ++i) {
        (h0 = h1, h1 = hull[i]);
        const t = Math.floor(inedges[h1] / 3) * 2;
        const x = circumcenters[t];
        const y = circumcenters[t + 1];
        const v = h0 * 4;
        const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
        if (p) this._renderSegment(x, y, p[0], p[1], context);
      }
      return buffer && buffer.value();
    }
    renderBounds(context) {
      const buffer = context == null ? context = new Path() : undefined;
      context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
      return buffer && buffer.value();
    }
    renderCell(i, context) {
      const buffer = context == null ? context = new Path() : undefined;
      const points = this._clip(i);
      if (points === null || !points.length) return;
      context.moveTo(points[0], points[1]);
      let n = points.length;
      while (points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1) n -= 2;
      for (let i = 2; i < n; i += 2) {
        if (points[i] !== points[i - 2] || points[i + 1] !== points[i - 1]) context.lineTo(points[i], points[i + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    *cellPolygons() {
      const {delaunay: {points}} = this;
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const cell = this.cellPolygon(i);
        if (cell) (cell.index = i, yield cell);
      }
    }
    cellPolygon(i) {
      const polygon = new Polygon();
      this.renderCell(i, polygon);
      return polygon.value();
    }
    _renderSegment(x0, y0, x1, y1, context) {
      let S;
      const c0 = this._regioncode(x0, y0);
      const c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
      } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
        context.moveTo(S[0], S[1]);
        context.lineTo(S[2], S[3]);
      }
    }
    contains(i, x, y) {
      if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
      return this.delaunay._step(i, x, y) === i;
    }
    *neighbors(i) {
      const ci = this._clip(i);
      if (ci) for (const j of this.delaunay.neighbors(i)) {
        const cj = this._clip(j);
        // find the common edge
        if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
          for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
            if (ci[ai] == cj[aj] && ci[ai + 1] == cj[aj + 1] && ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]) {
              yield j;
              break loop;
            }
          }
        }
      }
    }
    _cell(i) {
      const {circumcenters, delaunay: {inedges, halfedges, triangles}} = this;
      const e0 = inedges[i];
      if (e0 === -1) return null;
      // coincident point
      const points = [];
      let e = e0;
      do {
        const t = Math.floor(e / 3);
        points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break;
        // bad triangulation
        e = halfedges[e];
      } while (e !== e0 && e !== -1);
      return points;
    }
    _clip(i) {
      // degenerate case (1 valid point: return the box)
      if (i === 0 && this.delaunay.hull.length === 1) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      const points = this._cell(i);
      if (points === null) return null;
      const {vectors: V} = this;
      const v = i * 4;
      return V[v] || V[v + 1] ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3]) : this._clipFinite(i, points);
    }
    _clipFinite(i, points) {
      const n = points.length;
      let P = null;
      let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
      let c0, c1 = this._regioncode(x1, y1);
      let e0, e1;
      for (let j = 0; j < n; j += 2) {
        (x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1]);
        (c0 = c1, c1 = this._regioncode(x1, y1));
        if (c0 === 0 && c1 === 0) {
          (e0 = e1, e1 = 0);
          if (P) P.push(x1, y1); else P = [x1, y1];
        } else {
          let S, sx0, sy0, sx1, sy1;
          if (c0 === 0) {
            if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
            [sx0, sy0, sx1, sy1] = S;
          } else {
            if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
            [sx1, sy1, sx0, sy0] = S;
            (e0 = e1, e1 = this._edgecode(sx0, sy0));
            if (e0 && e1) this._edge(i, e0, e1, P, P.length);
            if (P) P.push(sx0, sy0); else P = [sx0, sy0];
          }
          (e0 = e1, e1 = this._edgecode(sx1, sy1));
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx1, sy1); else P = [sx1, sy1];
        }
      }
      if (P) {
        (e0 = e1, e1 = this._edgecode(P[0], P[1]));
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      return P;
    }
    _clipSegment(x0, y0, x1, y1, c0, c1) {
      while (true) {
        if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
        if (c0 & c1) return null;
        let x, y, c = c0 || c1;
        if (c & 0b1000) (x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax); else if (c & 0b0100) (x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin); else if (c & 0b0010) (y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax); else (y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin);
        if (c0) (x0 = x, y0 = y, c0 = this._regioncode(x0, y0)); else (x1 = x, y1 = y, c1 = this._regioncode(x1, y1));
      }
    }
    _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
      let P = Array.from(points), p;
      if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
      if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
      if (P = this._clipFinite(i, P)) {
        for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
          (c0 = c1, c1 = this._edgecode(P[j], P[j + 1]));
          if (c0 && c1) (j = this._edge(i, c0, c1, P, j), n = P.length);
        }
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
      }
      return P;
    }
    _edge(i, e0, e1, P, j) {
      while (e0 !== e1) {
        let x, y;
        switch (e0) {
          case 0b0101:
            e0 = 0b0100;
            continue;
          case 0b0100:
            (e0 = 0b0110, x = this.xmax, y = this.ymin);
            break;
          case 0b0110:
            e0 = 0b0010;
            continue;
          case 0b0010:
            (e0 = 0b1010, x = this.xmax, y = this.ymax);
            break;
          case 0b1010:
            e0 = 0b1000;
            continue;
          case 0b1000:
            (e0 = 0b1001, x = this.xmin, y = this.ymax);
            break;
          case 0b1001:
            e0 = 0b0001;
            continue;
          case 0b0001:
            (e0 = 0b0101, x = this.xmin, y = this.ymin);
            break;
        }
        if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
          (P.splice(j, 0, x, y), j += 2);
        }
      }
      if (P.length > 4) {
        for (let i = 0; i < P.length; i += 2) {
          const j = (i + 2) % P.length, k = (i + 4) % P.length;
          if (P[i] === P[j] && P[j] === P[k] || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1]) (P.splice(j, 2), i -= 2);
        }
      }
      return j;
    }
    _project(x0, y0, vx, vy) {
      let t = Infinity, c, x, y;
      if (vy < 0) {
        // top
        if (y0 <= this.ymin) return null;
        if ((c = (this.ymin - y0) / vy) < t) (y = this.ymin, x = x0 + (t = c) * vx);
      } else if (vy > 0) {
        // bottom
        if (y0 >= this.ymax) return null;
        if ((c = (this.ymax - y0) / vy) < t) (y = this.ymax, x = x0 + (t = c) * vx);
      }
      if (vx > 0) {
        // right
        if (x0 >= this.xmax) return null;
        if ((c = (this.xmax - x0) / vx) < t) (x = this.xmax, y = y0 + (t = c) * vy);
      } else if (vx < 0) {
        // left
        if (x0 <= this.xmin) return null;
        if ((c = (this.xmin - x0) / vx) < t) (x = this.xmin, y = y0 + (t = c) * vy);
      }
      return [x, y];
    }
    _edgecode(x, y) {
      return (x === this.xmin ? 0b0001 : x === this.xmax ? 0b0010 : 0b0000) | (y === this.ymin ? 0b0100 : y === this.ymax ? 0b1000 : 0b0000);
    }
    _regioncode(x, y) {
      return (x < this.xmin ? 0b0001 : x > this.xmax ? 0b0010 : 0b0000) | (y < this.ymin ? 0b0100 : y > this.ymax ? 0b1000 : 0b0000);
    }
  }
  const tau = 2 * Math.PI, pow = Math.pow;
  function pointX(p) {
    return p[0];
  }
  function pointY(p) {
    return p[1];
  }
  // A triangulation is collinear if all its triangles have a non-null area
  function collinear(d) {
    const {triangles, coords} = d;
    for (let i = 0; i < triangles.length; i += 3) {
      const a = 2 * triangles[i], b = 2 * triangles[i + 1], c = 2 * triangles[i + 2], cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1]) - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
      if (cross > 1e-10) return false;
    }
    return true;
  }
  function jitter(x, y, r) {
    return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
  }
  class Delaunay {
    static from(points, fx = pointX, fy = pointY, that) {
      return new Delaunay(("length" in points) ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
    }
    constructor(points) {
      this._delaunator = new Delaunator(points);
      this.inedges = new Int32Array(points.length / 2);
      this._hullIndex = new Int32Array(points.length / 2);
      this.points = this._delaunator.coords;
      this._init();
    }
    update() {
      this._delaunator.update();
      this._init();
      return this;
    }
    _init() {
      const d = this._delaunator, points = this.points;
      // check for collinear
      if (d.hull && d.hull.length > 2 && collinear(d)) {
        this.collinear = Int32Array.from({
          length: points.length / 2
        }, (_, i) => i).sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]);
        // for exact neighbors
        const e = this.collinear[0], f = this.collinear[this.collinear.length - 1], bounds = [points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1]], r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
        for (let i = 0, n = points.length / 2; i < n; ++i) {
          const p = jitter(points[2 * i], points[2 * i + 1], r);
          points[2 * i] = p[0];
          points[2 * i + 1] = p[1];
        }
        this._delaunator = new Delaunator(points);
      } else {
        delete this.collinear;
      }
      const halfedges = this.halfedges = this._delaunator.halfedges;
      const hull = this.hull = this._delaunator.hull;
      const triangles = this.triangles = this._delaunator.triangles;
      const inedges = this.inedges.fill(-1);
      const hullIndex = this._hullIndex.fill(-1);
      // Compute an index from each point to an (arbitrary) incoming halfedge
      // Used to give the first neighbor of each point; for this reason,
      // on the hull we give priority to exterior halfedges
      for (let e = 0, n = halfedges.length; e < n; ++e) {
        const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
        if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
      }
      for (let i = 0, n = hull.length; i < n; ++i) {
        hullIndex[hull[i]] = i;
      }
      // degenerate case: 1 or 2 (distinct) points
      if (hull.length <= 2 && hull.length > 0) {
        this.triangles = new Int32Array(3).fill(-1);
        this.halfedges = new Int32Array(3).fill(-1);
        this.triangles[0] = hull[0];
        this.triangles[1] = hull[1];
        this.triangles[2] = hull[1];
        inedges[hull[0]] = 1;
        if (hull.length === 2) inedges[hull[1]] = 0;
      }
    }
    voronoi(bounds) {
      return new Voronoi(this, bounds);
    }
    *neighbors(i) {
      const {inedges, hull, _hullIndex, halfedges, triangles, collinear} = this;
      // degenerate case with several collinear points
      if (collinear) {
        const l = collinear.indexOf(i);
        if (l > 0) yield collinear[l - 1];
        if (l < collinear.length - 1) yield collinear[l + 1];
        return;
      }
      const e0 = inedges[i];
      if (e0 === -1) return;
      // coincident point
      let e = e0, p0 = -1;
      do {
        yield p0 = triangles[e];
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) return;
        // bad triangulation
        e = halfedges[e];
        if (e === -1) {
          const p = hull[(_hullIndex[i] + 1) % hull.length];
          if (p !== p0) yield p;
          return;
        }
      } while (e !== e0);
    }
    find(x, y, i = 0) {
      if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
      const i0 = i;
      let c;
      while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
      return c;
    }
    _step(i, x, y) {
      const {inedges, hull, _hullIndex, halfedges, triangles, points} = this;
      if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
      let c = i;
      let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
      const e0 = inedges[i];
      let e = e0;
      do {
        let t = triangles[e];
        const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
        if (dt < dc) (dc = dt, c = t);
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break;
        // bad triangulation
        e = halfedges[e];
        if (e === -1) {
          e = hull[(_hullIndex[i] + 1) % hull.length];
          if (e !== t) {
            if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc) return e;
          }
          break;
        }
      } while (e !== e0);
      return c;
    }
    render(context) {
      const buffer = context == null ? context = new Path() : undefined;
      const {points, halfedges, triangles} = this;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j = halfedges[i];
        if (j < i) continue;
        const ti = triangles[i] * 2;
        const tj = triangles[j] * 2;
        context.moveTo(points[ti], points[ti + 1]);
        context.lineTo(points[tj], points[tj + 1]);
      }
      this.renderHull(context);
      return buffer && buffer.value();
    }
    renderPoints(context, r = 2) {
      const buffer = context == null ? context = new Path() : undefined;
      const {points} = this;
      for (let i = 0, n = points.length; i < n; i += 2) {
        const x = points[i], y = points[i + 1];
        context.moveTo(x + r, y);
        context.arc(x, y, r, 0, tau);
      }
      return buffer && buffer.value();
    }
    renderHull(context) {
      const buffer = context == null ? context = new Path() : undefined;
      const {hull, points} = this;
      const h = hull[0] * 2, n = hull.length;
      context.moveTo(points[h], points[h + 1]);
      for (let i = 1; i < n; ++i) {
        const h = 2 * hull[i];
        context.lineTo(points[h], points[h + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    hullPolygon() {
      const polygon = new Polygon();
      this.renderHull(polygon);
      return polygon.value();
    }
    renderTriangle(i, context) {
      const buffer = context == null ? context = new Path() : undefined;
      const {points, triangles} = this;
      const t0 = triangles[i *= 3] * 2;
      const t1 = triangles[i + 1] * 2;
      const t2 = triangles[i + 2] * 2;
      context.moveTo(points[t0], points[t0 + 1]);
      context.lineTo(points[t1], points[t1 + 1]);
      context.lineTo(points[t2], points[t2 + 1]);
      context.closePath();
      return buffer && buffer.value();
    }
    *trianglePolygons() {
      const {triangles} = this;
      for (let i = 0, n = triangles.length / 3; i < n; ++i) {
        yield this.trianglePolygon(i);
      }
    }
    trianglePolygon(i) {
      const polygon = new Polygon();
      this.renderTriangle(i, polygon);
      return polygon.value();
    }
  }
  function flatArray(points, fx, fy, that) {
    const n = points.length;
    const array = new Float64Array(n * 2);
    for (let i = 0; i < n; ++i) {
      const p = points[i];
      array[i * 2] = fx.call(that, p, i, points);
      array[i * 2 + 1] = fy.call(that, p, i, points);
    }
    return array;
  }
  function* flatIterable(points, fx, fy, that) {
    let i = 0;
    for (const p of points) {
      yield fx.call(that, p, i, points);
      yield fy.call(that, p, i, points);
      ++i;
    }
  }
  exports.Delaunay = Delaunay;
  exports.Voronoi = Voronoi;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"6T2lj":[function(require,module,exports) {
var define;
// https://d3js.org/d3-dsv/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  var EOL = {}, EOF = {}, QUOTE = 34, NEWLINE = 10, RETURN = 13;
  function objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function (name, i) {
      return JSON.stringify(name) + ": d[" + i + "] || \"\"";
    }).join(",") + "}");
  }
  function customConverter(columns, f) {
    var object = objectConverter(columns);
    return function (row, i) {
      return f(object(row), i, columns);
    };
  }
  // Compute unique columns in order of discovery.
  function inferColumns(rows) {
    var columnSet = Object.create(null), columns = [];
    rows.forEach(function (row) {
      for (var column in row) {
        if (!((column in columnSet))) {
          columns.push(columnSet[column] = column);
        }
      }
    });
    return columns;
  }
  function pad(value, width) {
    var s = value + "", length = s.length;
    return length < width ? new Array(width - length + 1).join(0) + s : s;
  }
  function formatYear(year) {
    return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
  }
  function formatDate(date) {
    var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds = date.getUTCSeconds(), milliseconds = date.getUTCMilliseconds();
    return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear()) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
  }
  function dsv(delimiter) {
    var reFormat = new RegExp("[\"" + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
    function parse(text, f) {
      var convert, columns, rows = parseRows(text, function (row, i) {
        if (convert) return convert(row, i - 1);
        (columns = row, convert = f ? customConverter(row, f) : objectConverter(row));
      });
      rows.columns = columns || [];
      return rows;
    }
    function parseRows(text, f) {
      var rows = [], // output rows
      N = text.length, I = 0, // current character index
      n = 0, // current line number
      t, // current token
      eof = N <= 0, // current token followed by EOF?
      eol = false;
      // current token followed by EOL?
      // Strip the trailing newline.
      if (text.charCodeAt(N - 1) === NEWLINE) --N;
      if (text.charCodeAt(N - 1) === RETURN) --N;
      function token() {
        if (eof) return EOF;
        if (eol) return (eol = false, EOL);
        // Unescape quotes.
        var i, j = I, c;
        if (text.charCodeAt(j) === QUOTE) {
          while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE) ;
          if ((i = I) >= N) eof = true; else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true; else if (c === RETURN) {
            eol = true;
            if (text.charCodeAt(I) === NEWLINE) ++I;
          }
          return text.slice(j + 1, i - 1).replace(/""/g, "\"");
        }
        // Find next delimiter or newline.
        while (I < N) {
          if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true; else if (c === RETURN) {
            eol = true;
            if (text.charCodeAt(I) === NEWLINE) ++I;
          } else if (c !== DELIMITER) continue;
          return text.slice(j, i);
        }
        // Return last token before EOF.
        return (eof = true, text.slice(j, N));
      }
      while ((t = token()) !== EOF) {
        var row = [];
        while (t !== EOL && t !== EOF) (row.push(t), t = token());
        if (f && (row = f(row, n++)) == null) continue;
        rows.push(row);
      }
      return rows;
    }
    function preformatBody(rows, columns) {
      return rows.map(function (row) {
        return columns.map(function (column) {
          return formatValue(row[column]);
        }).join(delimiter);
      });
    }
    function format(rows, columns) {
      if (columns == null) columns = inferColumns(rows);
      return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
    }
    function formatBody(rows, columns) {
      if (columns == null) columns = inferColumns(rows);
      return preformatBody(rows, columns).join("\n");
    }
    function formatRows(rows) {
      return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(value) {
      return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\"" : value;
    }
    return {
      parse: parse,
      parseRows: parseRows,
      format: format,
      formatBody: formatBody,
      formatRows: formatRows,
      formatRow: formatRow,
      formatValue: formatValue
    };
  }
  var csv = dsv(",");
  var csvParse = csv.parse;
  var csvParseRows = csv.parseRows;
  var csvFormat = csv.format;
  var csvFormatBody = csv.formatBody;
  var csvFormatRows = csv.formatRows;
  var csvFormatRow = csv.formatRow;
  var csvFormatValue = csv.formatValue;
  var tsv = dsv("\t");
  var tsvParse = tsv.parse;
  var tsvParseRows = tsv.parseRows;
  var tsvFormat = tsv.format;
  var tsvFormatBody = tsv.formatBody;
  var tsvFormatRows = tsv.formatRows;
  var tsvFormatRow = tsv.formatRow;
  var tsvFormatValue = tsv.formatValue;
  function autoType(object) {
    for (var key in object) {
      var value = object[key].trim(), number, m;
      if (!value) value = null; else if (value === "true") value = true; else if (value === "false") value = false; else if (value === "NaN") value = NaN; else if (!isNaN(number = +value)) value = number; else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
        if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
        value = new Date(value);
      } else continue;
      object[key] = value;
    }
    return object;
  }
  // https://github.com/d3/d3-dsv/issues/45
  const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
  exports.autoType = autoType;
  exports.csvFormat = csvFormat;
  exports.csvFormatBody = csvFormatBody;
  exports.csvFormatRow = csvFormatRow;
  exports.csvFormatRows = csvFormatRows;
  exports.csvFormatValue = csvFormatValue;
  exports.csvParse = csvParse;
  exports.csvParseRows = csvParseRows;
  exports.dsvFormat = dsv;
  exports.tsvFormat = tsvFormat;
  exports.tsvFormatBody = tsvFormatBody;
  exports.tsvFormatRow = tsvFormatRow;
  exports.tsvFormatRows = tsvFormatRows;
  exports.tsvFormatValue = tsvFormatValue;
  exports.tsvParse = tsvParse;
  exports.tsvParseRows = tsvParseRows;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3eyo6":[function(require,module,exports) {
var define;
// https://d3js.org/d3-fetch/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dsv')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-dsv'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Dsv) {
  "use strict";
  function responseBlob(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.blob();
  }
  function blob(input, init) {
    return fetch(input, init).then(responseBlob);
  }
  function responseArrayBuffer(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.arrayBuffer();
  }
  function buffer(input, init) {
    return fetch(input, init).then(responseArrayBuffer);
  }
  function responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
  }
  function text(input, init) {
    return fetch(input, init).then(responseText);
  }
  function dsvParse(parse) {
    return function (input, init, row) {
      if (arguments.length === 2 && typeof init === "function") (row = init, init = undefined);
      return text(input, init).then(function (response) {
        return parse(response, row);
      });
    };
  }
  function dsv(delimiter, input, init, row) {
    if (arguments.length === 3 && typeof init === "function") (row = init, init = undefined);
    var format = d3Dsv.dsvFormat(delimiter);
    return text(input, init).then(function (response) {
      return format.parse(response, row);
    });
  }
  var csv = dsvParse(d3Dsv.csvParse);
  var tsv = dsvParse(d3Dsv.tsvParse);
  function image(input, init) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      for (var key in init) image[key] = init[key];
      image.onerror = reject;
      image.onload = function () {
        resolve(image);
      };
      image.src = input;
    });
  }
  function responseJson(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    if (response.status === 204 || response.status === 205) return;
    return response.json();
  }
  function json(input, init) {
    return fetch(input, init).then(responseJson);
  }
  function parser(type) {
    return (input, init) => text(input, init).then(text => new DOMParser().parseFromString(text, type));
  }
  var xml = parser("application/xml");
  var html = parser("text/html");
  var svg = parser("image/svg+xml");
  exports.blob = blob;
  exports.buffer = buffer;
  exports.csv = csv;
  exports.dsv = dsv;
  exports.html = html;
  exports.image = image;
  exports.json = json;
  exports.svg = svg;
  exports.text = text;
  exports.tsv = tsv;
  exports.xml = xml;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-dsv":"6T2lj"}],"1dvpK":[function(require,module,exports) {
var define;
// https://d3js.org/d3-force/ v2.1.1 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-quadtree'), require('d3-dispatch'), require('d3-timer')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-quadtree', 'd3-dispatch', 'd3-timer'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3, global.d3));
})(this, function (exports, d3Quadtree, d3Dispatch, d3Timer) {
  "use strict";
  function center(x, y) {
    var nodes, strength = 1;
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force() {
      var i, n = nodes.length, node, sx = 0, sy = 0;
      for (i = 0; i < n; ++i) {
        (node = nodes[i], sx += node.x, sy += node.y);
      }
      for ((sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0); i < n; ++i) {
        (node = nodes[i], node.x -= sx, node.y -= sy);
      }
    }
    force.initialize = function (_) {
      nodes = _;
    };
    force.x = function (_) {
      return arguments.length ? (x = +_, force) : x;
    };
    force.y = function (_) {
      return arguments.length ? (y = +_, force) : y;
    };
    force.strength = function (_) {
      return arguments.length ? (strength = +_, force) : strength;
    };
    return force;
  }
  function constant(x) {
    return function () {
      return x;
    };
  }
  function jiggle(random) {
    return (random() - 0.5) * 1e-6;
  }
  function x(d) {
    return d.x + d.vx;
  }
  function y(d) {
    return d.y + d.vy;
  }
  function collide(radius) {
    var nodes, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);
    function force() {
      var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
      for (var k = 0; k < iterations; ++k) {
        tree = d3Quadtree.quadtree(nodes, x, y).visitAfter(prepare);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          (ri = radii[node.index], ri2 = ri * ri);
          xi = node.x + node.vx;
          yi = node.y + node.vy;
          tree.visit(apply);
        }
      }
      function apply(quad, x0, y0, x1, y1) {
        var data = quad.data, rj = quad.r, r = ri + rj;
        if (data) {
          if (data.index > node.index) {
            var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
            if (l < r * r) {
              if (x === 0) (x = jiggle(random), l += x * x);
              if (y === 0) (y = jiggle(random), l += y * y);
              l = (r - (l = Math.sqrt(l))) / l * strength;
              node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
              node.vy += (y *= l) * r;
              data.vx -= x * (r = 1 - r);
              data.vy -= y * r;
            }
          }
          return;
        }
        return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
      }
    }
    function prepare(quad) {
      if (quad.data) return quad.r = radii[quad.data.index];
      for (var i = quad.r = 0; i < 4; ++i) {
        if (quad[i] && quad[i].r > quad.r) {
          quad.r = quad[i].r;
        }
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, node;
      radii = new Array(n);
      for (i = 0; i < n; ++i) (node = nodes[i], radii[node.index] = +radius(node, i, nodes));
    }
    force.initialize = function (_nodes, _random) {
      nodes = _nodes;
      random = _random;
      initialize();
    };
    force.iterations = function (_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function (_) {
      return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function (_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
    };
    return force;
  }
  function index(d) {
    return d.index;
  }
  function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
  }
  function link(links) {
    var id = index, strength = defaultStrength, strengths, distance = constant(30), distances, nodes, count, bias, random, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
      return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
      for (var k = 0, n = links.length; k < iterations; ++k) {
        for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
          (link = links[i], source = link.source, target = link.target);
          x = target.x + target.vx - source.x - source.vx || jiggle(random);
          y = target.y + target.vy - source.y - source.vy || jiggle(random);
          l = Math.sqrt(x * x + y * y);
          l = (l - distances[i]) / l * alpha * strengths[i];
          (x *= l, y *= l);
          target.vx -= x * (b = bias[i]);
          target.vy -= y * b;
          source.vx += x * (b = 1 - b);
          source.vy += y * b;
        }
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])), link;
      for ((i = 0, count = new Array(n)); i < m; ++i) {
        (link = links[i], link.index = i);
        if (typeof link.source !== "object") link.source = find(nodeById, link.source);
        if (typeof link.target !== "object") link.target = find(nodeById, link.target);
        count[link.source.index] = (count[link.source.index] || 0) + 1;
        count[link.target.index] = (count[link.target.index] || 0) + 1;
      }
      for ((i = 0, bias = new Array(m)); i < m; ++i) {
        (link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]));
      }
      (strengths = new Array(m), initializeStrength());
      (distances = new Array(m), initializeDistance());
    }
    function initializeStrength() {
      if (!nodes) return;
      for (var i = 0, n = links.length; i < n; ++i) {
        strengths[i] = +strength(links[i], i, links);
      }
    }
    function initializeDistance() {
      if (!nodes) return;
      for (var i = 0, n = links.length; i < n; ++i) {
        distances[i] = +distance(links[i], i, links);
      }
    }
    force.initialize = function (_nodes, _random) {
      nodes = _nodes;
      random = _random;
      initialize();
    };
    force.links = function (_) {
      return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function (_) {
      return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function (_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function (_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initializeStrength(), force) : strength;
    };
    force.distance = function (_) {
      return arguments.length ? (distance = typeof _ === "function" ? _ : constant(+_), initializeDistance(), force) : distance;
    };
    return force;
  }
  // https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
  const a = 1664525;
  const c = 1013904223;
  const m = 4294967296;
  // 2^32
  function lcg() {
    let s = 1;
    return () => (s = (a * s + c) % m) / m;
  }
  function x$1(d) {
    return d.x;
  }
  function y$1(d) {
    return d.y;
  }
  var initialRadius = 10, initialAngle = Math.PI * (3 - Math.sqrt(5));
  function simulation(nodes) {
    var simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = new Map(), stepper = d3Timer.timer(step), event = d3Dispatch.dispatch("tick", "end"), random = lcg();
    if (nodes == null) nodes = [];
    function step() {
      tick();
      event.call("tick", simulation);
      if (alpha < alphaMin) {
        stepper.stop();
        event.call("end", simulation);
      }
    }
    function tick(iterations) {
      var i, n = nodes.length, node;
      if (iterations === undefined) iterations = 1;
      for (var k = 0; k < iterations; ++k) {
        alpha += (alphaTarget - alpha) * alphaDecay;
        forces.forEach(function (force) {
          force(alpha);
        });
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          if (node.fx == null) node.x += node.vx *= velocityDecay; else (node.x = node.fx, node.vx = 0);
          if (node.fy == null) node.y += node.vy *= velocityDecay; else (node.y = node.fy, node.vy = 0);
        }
      }
      return simulation;
    }
    function initializeNodes() {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        (node = nodes[i], node.index = i);
        if (node.fx != null) node.x = node.fx;
        if (node.fy != null) node.y = node.fy;
        if (isNaN(node.x) || isNaN(node.y)) {
          var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
          node.x = radius * Math.cos(angle);
          node.y = radius * Math.sin(angle);
        }
        if (isNaN(node.vx) || isNaN(node.vy)) {
          node.vx = node.vy = 0;
        }
      }
    }
    function initializeForce(force) {
      if (force.initialize) force.initialize(nodes, random);
      return force;
    }
    initializeNodes();
    return simulation = {
      tick: tick,
      restart: function () {
        return (stepper.restart(step), simulation);
      },
      stop: function () {
        return (stepper.stop(), simulation);
      },
      nodes: function (_) {
        return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
      },
      alpha: function (_) {
        return arguments.length ? (alpha = +_, simulation) : alpha;
      },
      alphaMin: function (_) {
        return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
      },
      alphaDecay: function (_) {
        return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
      },
      alphaTarget: function (_) {
        return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
      },
      velocityDecay: function (_) {
        return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
      },
      randomSource: function (_) {
        return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
      },
      force: function (name, _) {
        return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
      },
      find: function (x, y, radius) {
        var i = 0, n = nodes.length, dx, dy, d2, node, closest;
        if (radius == null) radius = Infinity; else radius *= radius;
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dx = x - node.x;
          dy = y - node.y;
          d2 = dx * dx + dy * dy;
          if (d2 < radius) (closest = node, radius = d2);
        }
        return closest;
      },
      on: function (name, _) {
        return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
      }
    };
  }
  function manyBody() {
    var nodes, node, random, alpha, strength = constant(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
      var i, n = nodes.length, tree = d3Quadtree.quadtree(nodes, x$1, y$1).visitAfter(accumulate);
      for ((alpha = _, i = 0); i < n; ++i) (node = nodes[i], tree.visit(apply));
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, node;
      strengths = new Array(n);
      for (i = 0; i < n; ++i) (node = nodes[i], strengths[node.index] = +strength(node, i, nodes));
    }
    function accumulate(quad) {
      var strength = 0, q, c, weight = 0, x, y, i;
      // For internal nodes, accumulate forces from child quadrants.
      if (quad.length) {
        for (x = y = i = 0; i < 4; ++i) {
          if ((q = quad[i]) && (c = Math.abs(q.value))) {
            (strength += q.value, weight += c, x += c * q.x, y += c * q.y);
          }
        }
        quad.x = x / weight;
        quad.y = y / weight;
              // For leaf nodes, accumulate forces from coincident quadrants.
} else // For leaf nodes, accumulate forces from coincident quadrants.
      {
        q = quad;
        q.x = q.data.x;
        q.y = q.data.y;
        do strength += strengths[q.data.index]; while (q = q.next);
      }
      quad.value = strength;
    }
    function apply(quad, x1, _, x2) {
      if (!quad.value) return true;
      var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
      // Apply the Barnes-Hut approximation if possible.
      // Limit forces for very close nodes; randomize direction if coincident.
      if (w * w / theta2 < l) {
        if (l < distanceMax2) {
          if (x === 0) (x = jiggle(random), l += x * x);
          if (y === 0) (y = jiggle(random), l += y * y);
          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
          node.vx += x * quad.value * alpha / l;
          node.vy += y * quad.value * alpha / l;
        }
        return true;
              // Otherwise, process points directly.
} else // Otherwise, process points directly.
      if (quad.length || l >= distanceMax2) return;
      // Limit forces for very close nodes; randomize direction if coincident.
      if (quad.data !== node || quad.next) {
        if (x === 0) (x = jiggle(random), l += x * x);
        if (y === 0) (y = jiggle(random), l += y * y);
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
      }
      do if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x * w;
        node.vy += y * w;
      } while (quad = quad.next);
    }
    force.initialize = function (_nodes, _random) {
      nodes = _nodes;
      random = _random;
      initialize();
    };
    force.strength = function (_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
    };
    force.distanceMin = function (_) {
      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function (_) {
      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function (_) {
      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
  }
  function radial(radius, x, y) {
    var nodes, strength = constant(0.1), strengths, radiuses;
    if (typeof radius !== "function") radius = constant(+radius);
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force(alpha) {
      for (var i = 0, n = nodes.length; i < n; ++i) {
        var node = nodes[i], dx = node.x - x || 1e-6, dy = node.y - y || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k = (radiuses[i] - r) * strengths[i] * alpha / r;
        node.vx += dx * k;
        node.vy += dy * k;
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      radiuses = new Array(n);
      for (i = 0; i < n; ++i) {
        radiuses[i] = +radius(nodes[i], i, nodes);
        strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function (_) {
      (nodes = _, initialize());
    };
    force.strength = function (_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
    };
    force.radius = function (_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
    };
    force.x = function (_) {
      return arguments.length ? (x = +_, force) : x;
    };
    force.y = function (_) {
      return arguments.length ? (y = +_, force) : y;
    };
    return force;
  }
  function x$2(x) {
    var strength = constant(0.1), nodes, strengths, xz;
    if (typeof x !== "function") x = constant(x == null ? 0 : +x);
    function force(alpha) {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        (node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha);
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      xz = new Array(n);
      for (i = 0; i < n; ++i) {
        strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function (_) {
      nodes = _;
      initialize();
    };
    force.strength = function (_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
    };
    force.x = function (_) {
      return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), initialize(), force) : x;
    };
    return force;
  }
  function y$2(y) {
    var strength = constant(0.1), nodes, strengths, yz;
    if (typeof y !== "function") y = constant(y == null ? 0 : +y);
    function force(alpha) {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        (node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha);
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      yz = new Array(n);
      for (i = 0; i < n; ++i) {
        strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function (_) {
      nodes = _;
      initialize();
    };
    force.strength = function (_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
    };
    force.y = function (_) {
      return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), initialize(), force) : y;
    };
    return force;
  }
  exports.forceCenter = center;
  exports.forceCollide = collide;
  exports.forceLink = link;
  exports.forceManyBody = manyBody;
  exports.forceRadial = radial;
  exports.forceSimulation = simulation;
  exports.forceX = x$2;
  exports.forceY = y$2;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-quadtree":"7scxm","d3-dispatch":"6ygE0","d3-timer":"6ZuUH"}],"7scxm":[function(require,module,exports) {
var define;
// https://d3js.org/d3-quadtree/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  function tree_add(d) {
    const x = +this._x.call(null, d), y = +this._y.call(null, d);
    return add(this.cover(x, y), x, y, d);
  }
  function add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree;
    // ignore invalid points
    var parent, node = tree._root, leaf = {
      data: d
    }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return (tree._root = leaf, tree);
    // Find the existing leaf for the new point, or add it.
    while (node.length) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if ((parent = node, !(node = node[i = bottom << 1 | right]))) return (parent[i] = leaf, tree);
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return (leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree);
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
    return (parent[j] = node, parent[i] = leaf, tree);
  }
  function addAll(data) {
    var d, i, n = data.length, x, y, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // Compute the points and their extent.
    for (i = 0; i < n; ++i) {
      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
      xz[i] = x;
      yz[i] = y;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);
    // Add the new points.
    for (i = 0; i < n; ++i) {
      add(this, xz[i], yz[i], data[i]);
    }
    return this;
  }
  function tree_cover(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this;
    // ignore invalid points
    var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
      x1 = (x0 = Math.floor(x)) + 1;
      y1 = (y0 = Math.floor(y)) + 1;
          // Otherwise, double repeatedly to cover.
} else // Otherwise, double repeatedly to cover.
    {
      var z = x1 - x0 || 1, node = this._root, parent, i;
      while (x0 > x || x >= x1 || y0 > y || y >= y1) {
        i = (y < y0) << 1 | x < x0;
        (parent = new Array(4), parent[i] = node, node = parent, z *= 2);
        switch (i) {
          case 0:
            (x1 = x0 + z, y1 = y0 + z);
            break;
          case 1:
            (x0 = x1 - z, y1 = y0 + z);
            break;
          case 2:
            (x1 = x0 + z, y0 = y1 - z);
            break;
          case 3:
            (x0 = x1 - z, y0 = y1 - z);
            break;
        }
      }
      if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
  }
  function tree_data() {
    var data = [];
    this.visit(function (node) {
      if (!node.length) do data.push(node.data); while (node = node.next);
    });
    return data;
  }
  function tree_extent(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
  }
  function Quad(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
  }
  function tree_find(x, y, radius) {
    var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node) quads.push(new Quad(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity; else {
      (x0 = x - radius, y0 = y - radius);
      (x3 = x + radius, y3 = y + radius);
      radius *= radius;
    }
    while (q = quads.pop()) {
      // Stop searching if this quadrant can’t contain a closer node.
      if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
      // Bisect the current quadrant.
      if (node.length) {
        var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
        quads.push(new Quad(node[3], xm, ym, x2, y2), new Quad(node[2], x1, ym, xm, y2), new Quad(node[1], xm, y1, x2, ym), new Quad(node[0], x1, y1, xm, ym));
        // Visit the closest quadrant first.
        if (i = (y >= ym) << 1 | x >= xm) {
          q = quads[quads.length - 1];
          quads[quads.length - 1] = quads[quads.length - 1 - i];
          quads[quads.length - 1 - i] = q;
        }
              // Visit this point. (Visiting coincident points isn’t necessary!)
} else // Visit this point. (Visiting coincident points isn’t necessary!)
      {
        var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          (x0 = x - d, y0 = y - d);
          (x3 = x + d, y3 = y + d);
          data = node.data;
        }
      }
    }
    return data;
  }
  function tree_remove(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this;
    // ignore invalid points
    var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;
    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while (true) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
      if (!node.length) break;
      if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) (retainer = parent, j = i);
    }
    // Find the point to remove.
    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    // If there are multiple coincident points, remove just the point.
    if (previous) return (next ? previous.next = next : delete previous.next, this);
    // If this is the root point, remove it.
    if (!parent) return (this._root = next, this);
    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];
    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
      if (retainer) retainer[j] = node; else this._root = node;
    }
    return this;
  }
  function removeAll(data) {
    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
    return this;
  }
  function tree_root() {
    return this._root;
  }
  function tree_size() {
    var size = 0;
    this.visit(function (node) {
      if (!node.length) do ++size; while (node = node.next);
    });
    return size;
  }
  function tree_visit(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      }
    }
    return this;
  }
  function tree_visitAfter(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.y0, q.x1, q.y1);
    }
    return this;
  }
  function defaultX(d) {
    return d[0];
  }
  function tree_x(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  }
  function defaultY(d) {
    return d[1];
  }
  function tree_y(_) {
    return arguments.length ? (this._y = _, this) : this._y;
  }
  function quadtree(nodes, x, y) {
    var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }
  function Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
  }
  function leaf_copy(leaf) {
    var copy = {
      data: leaf.data
    }, next = copy;
    while (leaf = leaf.next) next = next.next = {
      data: leaf.data
    };
    return copy;
  }
  var treeProto = quadtree.prototype = Quadtree.prototype;
  treeProto.copy = function () {
    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return (copy._root = leaf_copy(node), copy);
    nodes = [{
      source: node,
      target: copy._root = new Array(4)
    }];
    while (node = nodes.pop()) {
      for (var i = 0; i < 4; ++i) {
        if (child = node.source[i]) {
          if (child.length) nodes.push({
            source: child,
            target: node.target[i] = new Array(4)
          }); else node.target[i] = leaf_copy(child);
        }
      }
    }
    return copy;
  };
  treeProto.add = tree_add;
  treeProto.addAll = addAll;
  treeProto.cover = tree_cover;
  treeProto.data = tree_data;
  treeProto.extent = tree_extent;
  treeProto.find = tree_find;
  treeProto.remove = tree_remove;
  treeProto.removeAll = removeAll;
  treeProto.root = tree_root;
  treeProto.size = tree_size;
  treeProto.visit = tree_visit;
  treeProto.visitAfter = tree_visitAfter;
  treeProto.x = tree_x;
  treeProto.y = tree_y;
  exports.quadtree = quadtree;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3Bu0B":[function(require,module,exports) {
var define;
// https://d3js.org/d3-format/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  function formatDecimal(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
  }
  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimalParts(1.23) returns ["123", 0].
  function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null;
    // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
  }
  function exponent(x) {
    return (x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN);
  }
  function formatGroup(grouping, thousands) {
    return function (value, width) {
      var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }
  function formatNumerals(numerals) {
    return function (value) {
      return value.replace(/[0-9]/g, function (i) {
        return numerals[+i];
      });
    };
  }
  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  // instanceof
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0) i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i]) break out;
          if (i0 > 0) i0 = 0;
          break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }
  var prefixExponent;
  function formatPrefixAuto(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
  }
  function formatRounded(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }
  var formatTypes = {
    "%": (x, p) => (x * 100).toFixed(p),
    "b": x => Math.round(x).toString(2),
    "c": x => x + "",
    "d": formatDecimal,
    "e": (x, p) => x.toExponential(p),
    "f": (x, p) => x.toFixed(p),
    "g": (x, p) => x.toPrecision(p),
    "o": x => Math.round(x).toString(8),
    "p": (x, p) => formatRounded(x * 100, p),
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": x => Math.round(x).toString(16).toUpperCase(),
    "x": x => Math.round(x).toString(16)
  };
  function identity(x) {
    return x;
  }
  var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
      // The "n" type is an alias for ",g".
      if (type === "n") (comma = true, type = "g"); else // The "" type, and any invalid type, is an alias for ".12~g".
      if (!formatTypes[type]) (precision === undefined && (precision = 12), trim = true, type = "g");
      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || fill === "0" && align === "=") (zero = true, fill = "0", align = "=");
      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && (/[boxX]/).test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : (/[%p]/).test(type) ? percent : "";
      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type], maybeSuffix = (/[defgprs%]/).test(type);
      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6 : (/[gprs]/).test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format(value) {
        var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          // Determine the sign. -0 is not less than 0, but 1 / -0 is!
          var valueNegative = value < 0 || 1 / value < 0;
          // Perform the initial formatting.
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);
          // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
          if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            (i = -1, n = value.length);
            while (++i < n) {
              if ((c = value.charCodeAt(i), 48 > c || c > 57)) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);
        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) (value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "");
        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format.toString = function () {
        return specifier + "";
      };
      return format;
    }
    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
      return function (value) {
        return f(k * value) + prefix;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }
  var locale;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = formatLocale(definition);
    exports.format = locale.format;
    exports.formatPrefix = locale.formatPrefix;
    return locale;
  }
  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }
  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }
  function precisionRound(step, max) {
    (step = Math.abs(step), max = Math.abs(max) - step);
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }
  exports.FormatSpecifier = FormatSpecifier;
  exports.formatDefaultLocale = defaultLocale;
  exports.formatLocale = formatLocale;
  exports.formatSpecifier = formatSpecifier;
  exports.precisionFixed = precisionFixed;
  exports.precisionPrefix = precisionPrefix;
  exports.precisionRound = precisionRound;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3nbkI":[function(require,module,exports) {
var define;
// https://d3js.org/d3-geo/ v2.0.1 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-array')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-array'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Array) {
  "use strict";
  var epsilon = 1e-6;
  var epsilon2 = 1e-12;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var quarterPi = pi / 4;
  var tau = pi * 2;
  var degrees = 180 / pi;
  var radians = pi / 180;
  var abs = Math.abs;
  var atan = Math.atan;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var ceil = Math.ceil;
  var exp = Math.exp;
  var hypot = Math.hypot;
  var log = Math.log;
  var pow = Math.pow;
  var sin = Math.sin;
  var sign = Math.sign || (function (x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  });
  var sqrt = Math.sqrt;
  var tan = Math.tan;
  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
  }
  function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
  }
  function haversin(x) {
    return (x = sin(x / 2)) * x;
  }
  function noop() {}
  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }
  var streamObjectType = {
    Feature: function (object, stream) {
      streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function (object, stream) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) streamGeometry(features[i].geometry, stream);
    }
  };
  var streamGeometryType = {
    Sphere: function (object, stream) {
      stream.sphere();
    },
    Point: function (object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function (object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) (object = coordinates[i], stream.point(object[0], object[1], object[2]));
    },
    LineString: function (object, stream) {
      streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function (object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamLine(coordinates[i], stream, 0);
    },
    Polygon: function (object, stream) {
      streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function (object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function (object, stream) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry(geometries[i], stream);
    }
  };
  function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) (coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]));
    stream.lineEnd();
  }
  function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while (++i < n) streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
  }
  function geoStream(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) {
      streamObjectType[object.type](object, stream);
    } else {
      streamGeometry(object, stream);
    }
  }
  var areaRingSum = new d3Array.Adder();
  // hello?
  var areaSum = new d3Array.Adder(), lambda00, phi00, lambda0, cosPhi0, sinPhi0;
  var areaStream = {
    point: noop,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: function () {
      areaRingSum = new d3Array.Adder();
      areaStream.lineStart = areaRingStart;
      areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function () {
      var areaRing = +areaRingSum;
      areaSum.add(areaRing < 0 ? tau + areaRing : areaRing);
      this.lineStart = this.lineEnd = this.point = noop;
    },
    sphere: function () {
      areaSum.add(tau);
    }
  };
  function areaRingStart() {
    areaStream.point = areaPointFirst;
  }
  function areaRingEnd() {
    areaPoint(lambda00, phi00);
  }
  function areaPointFirst(lambda, phi) {
    areaStream.point = areaPoint;
    (lambda00 = lambda, phi00 = phi);
    (lambda *= radians, phi *= radians);
    (lambda0 = lambda, cosPhi0 = cos(phi = phi / 2 + quarterPi), sinPhi0 = sin(phi));
  }
  function areaPoint(lambda, phi) {
    (lambda *= radians, phi *= radians);
    phi = phi / 2 + quarterPi;
    // half the angular distance from south pole
    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos(phi), sinPhi = sin(phi), k = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k * cos(adLambda), v = k * sdLambda * sin(adLambda);
    areaRingSum.add(atan2(v, u));
    // Advance the previous points.
    (lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi);
  }
  function area(object) {
    areaSum = new d3Array.Adder();
    geoStream(object, areaStream);
    return areaSum * 2;
  }
  function spherical(cartesian) {
    return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
  }
  function cartesian(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = cos(phi);
    return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
  }
  function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cartesianCross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  // TODO return a
  function cartesianAddInPlace(a, b) {
    (a[0] += b[0], a[1] += b[1], a[2] += b[2]);
  }
  function cartesianScale(vector, k) {
    return [vector[0] * k, vector[1] * k, vector[2] * k];
  }
  // TODO return d
  function cartesianNormalizeInPlace(d) {
    var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    (d[0] /= l, d[1] /= l, d[2] /= l);
  }
  var lambda0$1, phi0, lambda1, phi1, // bounds
  lambda2, // previous lambda-coordinate
  lambda00$1, phi00$1, // first point
  p0, // previous 3D point
  deltaSum, ranges, range;
  var boundsStream = {
    point: boundsPoint,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function () {
      boundsStream.point = boundsRingPoint;
      boundsStream.lineStart = boundsRingStart;
      boundsStream.lineEnd = boundsRingEnd;
      deltaSum = new d3Array.Adder();
      areaStream.polygonStart();
    },
    polygonEnd: function () {
      areaStream.polygonEnd();
      boundsStream.point = boundsPoint;
      boundsStream.lineStart = boundsLineStart;
      boundsStream.lineEnd = boundsLineEnd;
      if (areaRingSum < 0) (lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90)); else if (deltaSum > epsilon) phi1 = 90; else if (deltaSum < -epsilon) phi0 = -90;
      (range[0] = lambda0$1, range[1] = lambda1);
    },
    sphere: function () {
      (lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90));
    }
  };
  function boundsPoint(lambda, phi) {
    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
  }
  function linePoint(lambda, phi) {
    var p = cartesian([lambda * radians, phi * radians]);
    if (p0) {
      var normal = cartesianCross(p0, p), equatorial = [normal[1], -normal[0], 0], inflection = cartesianCross(equatorial, normal);
      cartesianNormalizeInPlace(inflection);
      inflection = spherical(inflection);
      var delta = lambda - lambda2, sign = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees * sign, phii, antimeridian = abs(delta) > 180;
      if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = inflection[1] * degrees;
        if (phii > phi1) phi1 = phii;
      } else if ((lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda))) {
        phii = -inflection[1] * degrees;
        if (phii < phi0) phi0 = phii;
      } else {
        if (phi < phi0) phi0 = phi;
        if (phi > phi1) phi1 = phi;
      }
      if (antimeridian) {
        if (lambda < lambda2) {
          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
        }
      } else {
        if (lambda1 >= lambda0$1) {
          if (lambda < lambda0$1) lambda0$1 = lambda;
          if (lambda > lambda1) lambda1 = lambda;
        } else {
          if (lambda > lambda2) {
            if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
          } else {
            if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
          }
        }
      }
    } else {
      ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    }
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
    (p0 = p, lambda2 = lambda);
  }
  function boundsLineStart() {
    boundsStream.point = linePoint;
  }
  function boundsLineEnd() {
    (range[0] = lambda0$1, range[1] = lambda1);
    boundsStream.point = boundsPoint;
    p0 = null;
  }
  function boundsRingPoint(lambda, phi) {
    if (p0) {
      var delta = lambda - lambda2;
      deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
      (lambda00$1 = lambda, phi00$1 = phi);
    }
    areaStream.point(lambda, phi);
    linePoint(lambda, phi);
  }
  function boundsRingStart() {
    areaStream.lineStart();
  }
  function boundsRingEnd() {
    boundsRingPoint(lambda00$1, phi00$1);
    areaStream.lineEnd();
    if (abs(deltaSum) > epsilon) lambda0$1 = -(lambda1 = 180);
    (range[0] = lambda0$1, range[1] = lambda1);
    p0 = null;
  }
  // Finds the left-right distance between two longitudes.
  // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
  // the distance between ±180° to be 360°.
  function angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
  }
  function rangeCompare(a, b) {
    return a[0] - b[0];
  }
  function rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
  }
  function bounds(feature) {
    var i, n, a, b, merged, deltaMax, delta;
    phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
    ranges = [];
    geoStream(feature, boundsStream);
    // First, sort ranges by their minimum longitudes.
    if (n = ranges.length) {
      ranges.sort(rangeCompare);
      // Then, merge any ranges that overlap.
      for ((i = 1, a = ranges[0], merged = [a]); i < n; ++i) {
        b = ranges[i];
        if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
          if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
          if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
        } else {
          merged.push(a = b);
        }
      }
      // Finally, find the largest gap between the merged ranges.
      // The final bounding box will be the inverse of this gap.
      for ((deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]); i <= n; (a = b, ++i)) {
        b = merged[i];
        if ((delta = angle(a[1], b[0])) > deltaMax) (deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1]);
      }
    }
    ranges = range = null;
    return lambda0$1 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda0$1, phi0], [lambda1, phi1]];
  }
  var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda00$2, phi00$2, // first point
  x0, y0, z0;
  // previous point
  var centroidStream = {
    sphere: noop,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function () {
      centroidStream.lineStart = centroidRingStart;
      centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function () {
      centroidStream.lineStart = centroidLineStart;
      centroidStream.lineEnd = centroidLineEnd;
    }
  };
  // Arithmetic mean of Cartesian vectors.
  function centroidPoint(lambda, phi) {
    (lambda *= radians, phi *= radians);
    var cosPhi = cos(phi);
    centroidPointCartesian(cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi));
  }
  function centroidPointCartesian(x, y, z) {
    ++W0;
    X0 += (x - X0) / W0;
    Y0 += (y - Y0) / W0;
    Z0 += (z - Z0) / W0;
  }
  function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
  }
  function centroidLinePointFirst(lambda, phi) {
    (lambda *= radians, phi *= radians);
    var cosPhi = cos(phi);
    x0 = cosPhi * cos(lambda);
    y0 = cosPhi * sin(lambda);
    z0 = sin(phi);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidLinePoint(lambda, phi) {
    (lambda *= radians, phi *= radians);
    var cosPhi = cos(phi), x = cosPhi * cos(lambda), y = cosPhi * sin(lambda), z = sin(phi), w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
    W1 += w;
    X1 += w * (x0 + (x0 = x));
    Y1 += w * (y0 + (y0 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidLineEnd() {
    centroidStream.point = centroidPoint;
  }
  // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
  // J. Applied Mechanics 42, 239 (1975).
  function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
  }
  function centroidRingEnd() {
    centroidRingPoint(lambda00$2, phi00$2);
    centroidStream.point = centroidPoint;
  }
  function centroidRingPointFirst(lambda, phi) {
    (lambda00$2 = lambda, phi00$2 = phi);
    (lambda *= radians, phi *= radians);
    centroidStream.point = centroidRingPoint;
    var cosPhi = cos(phi);
    x0 = cosPhi * cos(lambda);
    y0 = cosPhi * sin(lambda);
    z0 = sin(phi);
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidRingPoint(lambda, phi) {
    (lambda *= radians, phi *= radians);
    var cosPhi = cos(phi), x = cosPhi * cos(lambda), y = cosPhi * sin(lambda), z = sin(phi), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = hypot(cx, cy, cz), w = asin(m), // line weight = angle
    v = m && -w / m;
    // area weight multiplier
    X2.add(v * cx);
    Y2.add(v * cy);
    Z2.add(v * cz);
    W1 += w;
    X1 += w * (x0 + (x0 = x));
    Y1 += w * (y0 + (y0 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
  }
  function centroid(object) {
    W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
    X2 = new d3Array.Adder();
    Y2 = new d3Array.Adder();
    Z2 = new d3Array.Adder();
    geoStream(object, centroidStream);
    var x = +X2, y = +Y2, z = +Z2, m = hypot(x, y, z);
    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < epsilon2) {
      (x = X1, y = Y1, z = Z1);
      // If the feature has zero length, fall back to arithmetic mean of point vectors.
      if (W1 < epsilon) (x = X0, y = Y0, z = Z0);
      m = hypot(x, y, z);
      // If the feature still has an undefined ccentroid, then return.
      if (m < epsilon2) return [NaN, NaN];
    }
    return [atan2(y, x) * degrees, asin(z / m) * degrees];
  }
  function constant(x) {
    return function () {
      return x;
    };
  }
  function compose(a, b) {
    function compose(x, y) {
      return (x = a(x, y), b(x[0], x[1]));
    }
    if (a.invert && b.invert) compose.invert = function (x, y) {
      return (x = b.invert(x, y), x && a.invert(x[0], x[1]));
    };
    return compose;
  }
  function rotationIdentity(lambda, phi) {
    return [abs(lambda) > pi ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
  }
  rotationIdentity.invert = rotationIdentity;
  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
  }
  function forwardRotationLambda(deltaLambda) {
    return function (lambda, phi) {
      return (lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi]);
    };
  }
  function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
  }
  function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = cos(deltaPhi), sinDeltaPhi = sin(deltaPhi), cosDeltaGamma = cos(deltaGamma), sinDeltaGamma = sin(deltaGamma);
    function rotation(lambda, phi) {
      var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
      return [atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), asin(k * cosDeltaGamma + y * sinDeltaGamma)];
    }
    rotation.invert = function (lambda, phi) {
      var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
      return [atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), asin(k * cosDeltaPhi - x * sinDeltaPhi)];
    };
    return rotation;
  }
  function rotation(rotate) {
    rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
      return (coordinates[0] *= degrees, coordinates[1] *= degrees, coordinates);
    }
    forward.invert = function (coordinates) {
      coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
      return (coordinates[0] *= degrees, coordinates[1] *= degrees, coordinates);
    };
    return forward;
  }
  // Generates a circle centered at [0°, 0°], with a given radius and precision.
  function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = cos(radius), sinRadius = sin(radius), step = direction * delta;
    if (t0 == null) {
      t0 = radius + direction * tau;
      t1 = radius - step / 2;
    } else {
      t0 = circleRadius(cosRadius, t0);
      t1 = circleRadius(cosRadius, t1);
      if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
    }
    for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
      point = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
      stream.point(point[0], point[1]);
    }
  }
  // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
  function circleRadius(cosRadius, point) {
    (point = cartesian(point), point[0] -= cosRadius);
    cartesianNormalizeInPlace(point);
    var radius = acos(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
  }
  function circle() {
    var center = constant([0, 0]), radius = constant(90), precision = constant(6), ring, rotate, stream = {
      point: point
    };
    function point(x, y) {
      ring.push(x = rotate(x, y));
      (x[0] *= degrees, x[1] *= degrees);
    }
    function circle() {
      var c = center.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
      ring = [];
      rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
      circleStream(stream, r, p, 1);
      c = {
        type: "Polygon",
        coordinates: [ring]
      };
      ring = rotate = null;
      return c;
    }
    circle.center = function (_) {
      return arguments.length ? (center = typeof _ === "function" ? _ : constant([+_[0], +_[1]]), circle) : center;
    };
    circle.radius = function (_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), circle) : radius;
    };
    circle.precision = function (_) {
      return arguments.length ? (precision = typeof _ === "function" ? _ : constant(+_), circle) : precision;
    };
    return circle;
  }
  function clipBuffer() {
    var lines = [], line;
    return {
      point: function (x, y, m) {
        line.push([x, y, m]);
      },
      lineStart: function () {
        lines.push(line = []);
      },
      lineEnd: noop,
      rejoin: function () {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      },
      result: function () {
        var result = lines;
        lines = [];
        line = null;
        return result;
      }
    };
  }
  function pointEqual(a, b) {
    return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
  }
  function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    // another intersection
    this.e = entry;
    // is an entry?
    this.v = false;
    // visited
    this.n = this.p = null;
  }
  // A generalized polygon clipping algorithm: given a polygon that has been cut
  // into its visible line segments, and rejoins the segments by interpolating
  // along the clip edge.
  function clipRejoin(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n;
    segments.forEach(function (segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n], x;
      if (pointEqual(p0, p1)) {
        if (!p0[2] && !p1[2]) {
          stream.lineStart();
          for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
          stream.lineEnd();
          return;
        }
        // handle degenerate cases by moving the point
        p1[0] += 2 * epsilon;
      }
      subject.push(x = new Intersection(p0, segment, null, true));
      clip.push(x.o = new Intersection(p0, null, x, false));
      subject.push(x = new Intersection(p1, segment, null, false));
      clip.push(x.o = new Intersection(p1, null, x, true));
    });
    if (!subject.length) return;
    clip.sort(compareIntersection);
    link(subject);
    link(clip);
    for ((i = 0, n = clip.length); i < n; ++i) {
      clip[i].e = startInside = !startInside;
    }
    var start = subject[0], points, point;
    while (1) {
      // Find first unvisited intersection.
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for ((i = 0, n = points.length); i < n; ++i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  }
  function link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function longitude(point) {
    if (abs(point[0]) <= pi) return point[0]; else return sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
  }
  function polygonContains(polygon, point) {
    var lambda = longitude(point), phi = point[1], sinPhi = sin(phi), normal = [sin(lambda), -cos(lambda), 0], angle = 0, winding = 0;
    var sum = new d3Array.Adder();
    if (sinPhi === 1) phi = halfPi + epsilon; else if (sinPhi === -1) phi = -halfPi - epsilon;
    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length)) continue;
      var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin(phi0), cosPhi0 = cos(phi0);
      for (var j = 0; j < m; (++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1)) {
        var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi1), cosPhi1 = cos(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > pi, k = sinPhi0 * sinPhi1;
        sum.add(atan2(k * sign * sin(absDelta), cosPhi0 * cosPhi1 + k * cos(absDelta)));
        angle += antimeridian ? delta + sign * tau : delta;
        // Are the longitudes either side of the point’s meridian (lambda),
        // and are the latitudes smaller than the parallel (phi)?
        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
          var arc = cartesianCross(cartesian(point0), cartesian(point1));
          cartesianNormalizeInPlace(arc);
          var intersection = cartesianCross(normal, arc);
          cartesianNormalizeInPlace(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }
    // First, determine whether the South pole is inside or outside:
    // 
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    // (counter-clockwise) area.
    // 
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.
    return (angle < -epsilon || angle < epsilon && sum < -epsilon2) ^ winding & 1;
  }
  function clip(pointVisible, clipLine, interpolate, start) {
    return function (sink) {
      var line = clipLine(sink), ringBuffer = clipBuffer(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function () {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function () {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3Array.merge(segments);
          var startInside = polygonContains(polygon, start);
          if (segments.length) {
            if (!polygonStarted) (sink.polygonStart(), polygonStarted = true);
            clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
          } else if (startInside) {
            if (!polygonStarted) (sink.polygonStart(), polygonStarted = true);
            sink.lineStart();
            interpolate(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted) (sink.polygonEnd(), polygonStarted = false);
          segments = polygon = null;
        },
        sphere: function () {
          sink.polygonStart();
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };
      function point(lambda, phi) {
        if (pointVisible(lambda, phi)) sink.point(lambda, phi);
      }
      function pointLine(lambda, phi) {
        line.point(lambda, phi);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      function pointRing(lambda, phi) {
        ring.push([lambda, phi]);
        ringSink.point(lambda, phi);
      }
      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();
        var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        // No intersections.
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m = segment.length - 1) > 0) {
            if (!polygonStarted) (sink.polygonStart(), polygonStarted = true);
            sink.lineStart();
            for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
            sink.lineEnd();
          }
          return;
        }
        // Rejoin connected segments.
        // TODO reuse ringBuffer.rejoin()?
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(validSegment));
      }
      return clip;
    };
  }
  function validSegment(segment) {
    return segment.length > 1;
  }
  // Intersections are sorted along the clip edge. For both antimeridian cutting
  // and circle clipping, the same comparison is used.
  function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
  }
  var clipAntimeridian = clip(function () {
    return true;
  }, clipAntimeridianLine, clipAntimeridianInterpolate, [-pi, -halfPi]);
  // Takes a line and cuts into visible segments. Return values: 0 - there were
  // intersections or the line was empty; 1 - no intersections; 2 - there were
  // intersections, and the first and last segments should be rejoined.
  function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean;
    // no intersections
    return {
      lineStart: function () {
        stream.lineStart();
        clean = 1;
      },
      point: function (lambda1, phi1) {
        var sign1 = lambda1 > 0 ? pi : -pi, delta = abs(lambda1 - lambda0);
        if (abs(delta - pi) < epsilon) {
          // line crosses a pole
          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          stream.point(lambda1, phi0);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi) {
          // line crosses antimeridian
          if (abs(lambda0 - sign0) < epsilon) lambda0 -= sign0 * epsilon;
          // handle degeneracies
          if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          clean = 0;
        }
        stream.point(lambda0 = lambda1, phi0 = phi1);
        sign0 = sign1;
      },
      lineEnd: function () {
        stream.lineEnd();
        lambda0 = phi0 = NaN;
      },
      clean: function () {
        return 2 - clean;
      }
    };
  }
  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = sin(lambda0 - lambda1);
    return abs(sinLambda0Lambda1) > epsilon ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1) - sin(phi1) * (cosPhi0 = cos(phi0)) * sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
  }
  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
      phi = direction * halfPi;
      stream.point(-pi, phi);
      stream.point(0, phi);
      stream.point(pi, phi);
      stream.point(pi, 0);
      stream.point(pi, -phi);
      stream.point(0, -phi);
      stream.point(-pi, -phi);
      stream.point(-pi, 0);
      stream.point(-pi, phi);
    } else if (abs(from[0] - to[0]) > epsilon) {
      var lambda = from[0] < to[0] ? pi : -pi;
      phi = direction * lambda / 2;
      stream.point(-lambda, phi);
      stream.point(0, phi);
      stream.point(lambda, phi);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function clipCircle(radius) {
    var cr = cos(radius), delta = 6 * radians, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon;
    // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
      circleStream(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi) {
      return cos(lambda) * cos(phi) > cr;
    }
    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
      var point0, // previous point
      c0, // code for previous point
      v0, // visibility of previous point
      v00, // visibility of first point
      clean;
      // no intersections
      return {
        lineStart: function () {
          v00 = v0 = false;
          clean = 1;
        },
        point: function (lambda, phi) {
          var point1 = [lambda, phi], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
          if (!point0 && (v00 = v0 = v)) stream.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) point1[2] = 1;
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              // outside going in
              stream.lineStart();
              point2 = intersect(point1, point0);
              stream.point(point2[0], point2[1]);
            } else {
              // inside going out
              point2 = intersect(point0, point1);
              stream.point(point2[0], point2[1], 2);
              stream.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            // If the codes for two points are different, or are both zero,
            // and there this segment intersects with the small circle.
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
              } else {
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
                stream.lineStart();
                stream.point(t[0][0], t[0][1], 3);
              }
            }
          }
          if (v && (!point0 || !pointEqual(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          (point0 = point1, v0 = v, c0 = c);
        },
        lineEnd: function () {
          if (v0) stream.lineEnd();
          point0 = null;
        },
        // Rejoin first and last segments if there were intersections and the first
        // and last points were visible.
        clean: function () {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
      var pa = cartesian(a), pb = cartesian(b);
      // We have two planes, n1.p = d1 and n2.p = d2.
      // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
      var n1 = [1, 0, 0], // normal
      n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], // cartesianDot(n1, n2),
      determinant = n2n2 - n1n2 * n1n2;
      // Two polar points.
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A = cartesianScale(n1, c1), B = cartesianScale(n2, c2);
      cartesianAddInPlace(A, B);
      // Solve |p(t)|^2 = 1.
      var u = n1xn2, w = cartesianDot(A, u), uu = cartesianDot(u, u), t2 = w * w - uu * (cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = sqrt(t2), q = cartesianScale(u, (-w - t) / uu);
      cartesianAddInPlace(q, A);
      q = spherical(q);
      if (!two) return q;
      // Two intersection points.
      var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
      if (lambda1 < lambda0) (z = lambda0, lambda0 = lambda1, lambda1 = z);
      var delta = lambda1 - lambda0, polar = abs(delta - pi) < epsilon, meridian = polar || delta < epsilon;
      if (!polar && phi1 < phi0) (z = phi0, phi0 = phi1, phi1 = z);
      // Check that the first point is between a and b.
      if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
        var q1 = cartesianScale(u, (-w + t) / uu);
        cartesianAddInPlace(q1, A);
        return [q, spherical(q1)];
      }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
      var r = smallRadius ? radius : pi - radius, code = 0;
      if (lambda < -r) code |= 1; else // left
      if (lambda > r) code |= 2;
      // right
      if (phi < -r) code |= 4; else // below
      if (phi > r) code |= 8;
      // above
      return code;
    }
    return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
  }
  function clipLine(a, b, x0, y0, x1, y1) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dx > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }
    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dx > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dy > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dy > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }
    if (t0 > 0) (a[0] = ax + t0 * dx, a[1] = ay + t0 * dy);
    if (t1 < 1) (b[0] = ax + t1 * dx, b[1] = ay + t1 * dy);
    return true;
  }
  var clipMax = 1e9, clipMin = -clipMax;
  // TODO Use d3-polygon’s polygonContains here for the ring check?
  // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?
  function clipRectangle(x0, y0, x1, y1) {
    function visible(x, y) {
      return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
      var a = 0, a1 = 0;
      if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
        do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0); while ((a = (a + direction + 4) % 4) !== a1);
      } else {
        stream.point(to[0], to[1]);
      }
    }
    function corner(p, direction) {
      return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compareIntersection(a, b) {
      return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function (stream) {
      var activeStream = stream, bufferStream = clipBuffer(), segments, polygon, ring, x__, y__, v__, // first point
      x_, y_, v_, // previous point
      first, clean;
      var clipStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: polygonStart,
        polygonEnd: polygonEnd
      };
      function point(x, y) {
        if (visible(x, y)) activeStream.point(x, y);
      }
      function polygonInside() {
        var winding = 0;
        for (var i = 0, n = polygon.length; i < n; ++i) {
          for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
            (a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1]);
            if (a1 <= y1) {
              if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
            } else {
              if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
          }
        }
        return winding;
      }
      // Buffer geometry within a polygon and then clip it en masse.
      function polygonStart() {
        (activeStream = bufferStream, segments = [], polygon = [], clean = true);
      }
      function polygonEnd() {
        var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = d3Array.merge(segments)).length;
        if (cleanInside || visible) {
          stream.polygonStart();
          if (cleanInside) {
            stream.lineStart();
            interpolate(null, null, 1, stream);
            stream.lineEnd();
          }
          if (visible) {
            clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
          }
          stream.polygonEnd();
        }
        (activeStream = stream, segments = polygon = ring = null);
      }
      function lineStart() {
        clipStream.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      // TODO rather than special-case polygons, simply handle them separately.
      // Ideally, coincident intersection points should be jittered to avoid
      // clipping issues.
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferStream.rejoin();
          segments.push(bufferStream.result());
        }
        clipStream.point = point;
        if (v_) activeStream.lineEnd();
      }
      function linePoint(x, y) {
        var v = visible(x, y);
        if (polygon) ring.push([x, y]);
        if (first) {
          (x__ = x, y__ = y, v__ = v);
          first = false;
          if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
          }
        } else {
          if (v && v_) activeStream.point(x, y); else {
            var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
            if (clipLine(a, b, x0, y0, x1, y1)) {
              if (!v_) {
                activeStream.lineStart();
                activeStream.point(a[0], a[1]);
              }
              activeStream.point(b[0], b[1]);
              if (!v) activeStream.lineEnd();
              clean = false;
            } else if (v) {
              activeStream.lineStart();
              activeStream.point(x, y);
              clean = false;
            }
          }
        }
        (x_ = x, y_ = y, v_ = v);
      }
      return clipStream;
    };
  }
  function extent() {
    var x0 = 0, y0 = 0, x1 = 960, y1 = 500, cache, cacheStream, clip;
    return clip = {
      stream: function (stream) {
        return cache && cacheStream === stream ? cache : cache = clipRectangle(x0, y0, x1, y1)(cacheStream = stream);
      },
      extent: function (_) {
        return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
      }
    };
  }
  var lengthSum, lambda0$2, sinPhi0$1, cosPhi0$1;
  var lengthStream = {
    sphere: noop,
    point: noop,
    lineStart: lengthLineStart,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop
  };
  function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
  }
  function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = noop;
  }
  function lengthPointFirst(lambda, phi) {
    (lambda *= radians, phi *= radians);
    (lambda0$2 = lambda, sinPhi0$1 = sin(phi), cosPhi0$1 = cos(phi));
    lengthStream.point = lengthPoint;
  }
  function lengthPoint(lambda, phi) {
    (lambda *= radians, phi *= radians);
    var sinPhi = sin(phi), cosPhi = cos(phi), delta = abs(lambda - lambda0$2), cosDelta = cos(delta), sinDelta = sin(delta), x = cosPhi * sinDelta, y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta, z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
    lengthSum.add(atan2(sqrt(x * x + y * y), z));
    (lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi);
  }
  function length(object) {
    lengthSum = new d3Array.Adder();
    geoStream(object, lengthStream);
    return +lengthSum;
  }
  var coordinates = [null, null], object = {
    type: "LineString",
    coordinates: coordinates
  };
  function distance(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return length(object);
  }
  var containsObjectType = {
    Feature: function (object, point) {
      return containsGeometry(object.geometry, point);
    },
    FeatureCollection: function (object, point) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
      return false;
    }
  };
  var containsGeometryType = {
    Sphere: function () {
      return true;
    },
    Point: function (object, point) {
      return containsPoint(object.coordinates, point);
    },
    MultiPoint: function (object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPoint(coordinates[i], point)) return true;
      return false;
    },
    LineString: function (object, point) {
      return containsLine(object.coordinates, point);
    },
    MultiLineString: function (object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsLine(coordinates[i], point)) return true;
      return false;
    },
    Polygon: function (object, point) {
      return containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function (object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
      return false;
    },
    GeometryCollection: function (object, point) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) if (containsGeometry(geometries[i], point)) return true;
      return false;
    }
  };
  function containsGeometry(geometry, point) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
  }
  function containsPoint(coordinates, point) {
    return distance(coordinates, point) === 0;
  }
  function containsLine(coordinates, point) {
    var ao, bo, ab;
    for (var i = 0, n = coordinates.length; i < n; i++) {
      bo = distance(coordinates[i], point);
      if (bo === 0) return true;
      if (i > 0) {
        ab = distance(coordinates[i], coordinates[i - 1]);
        if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2 * ab) return true;
      }
      ao = bo;
    }
    return false;
  }
  function containsPolygon(coordinates, point) {
    return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
  }
  function ringRadians(ring) {
    return (ring = ring.map(pointRadians), ring.pop(), ring);
  }
  function pointRadians(point) {
    return [point[0] * radians, point[1] * radians];
  }
  function contains(object, point) {
    return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
  }
  function graticuleX(y0, y1, dy) {
    var y = d3Array.range(y0, y1 - epsilon, dy).concat(y1);
    return function (x) {
      return y.map(function (y) {
        return [x, y];
      });
    };
  }
  function graticuleY(x0, x1, dx) {
    var x = d3Array.range(x0, x1 - epsilon, dx).concat(x1);
    return function (y) {
      return x.map(function (x) {
        return [x, y];
      });
    };
  }
  function graticule() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3Array.range(ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3Array.range(ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3Array.range(ceil(x0 / dx) * dx, x1, dx).filter(function (x) {
        return abs(x % DX) > epsilon;
      }).map(x)).concat(d3Array.range(ceil(y0 / dy) * dy, y1, dy).filter(function (y) {
        return abs(y % DY) > epsilon;
      }).map(y));
    }
    graticule.lines = function () {
      return lines().map(function (coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function () {
      return {
        type: "Polygon",
        coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
      };
    };
    graticule.extent = function (_) {
      if (!arguments.length) return graticule.extentMinor();
      return graticule.extentMajor(_).extentMinor(_);
    };
    graticule.extentMajor = function (_) {
      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
      (X0 = +_[0][0], X1 = +_[1][0]);
      (Y0 = +_[0][1], Y1 = +_[1][1]);
      if (X0 > X1) (_ = X0, X0 = X1, X1 = _);
      if (Y0 > Y1) (_ = Y0, Y0 = Y1, Y1 = _);
      return graticule.precision(precision);
    };
    graticule.extentMinor = function (_) {
      if (!arguments.length) return [[x0, y0], [x1, y1]];
      (x0 = +_[0][0], x1 = +_[1][0]);
      (y0 = +_[0][1], y1 = +_[1][1]);
      if (x0 > x1) (_ = x0, x0 = x1, x1 = _);
      if (y0 > y1) (_ = y0, y0 = y1, y1 = _);
      return graticule.precision(precision);
    };
    graticule.step = function (_) {
      if (!arguments.length) return graticule.stepMinor();
      return graticule.stepMajor(_).stepMinor(_);
    };
    graticule.stepMajor = function (_) {
      if (!arguments.length) return [DX, DY];
      (DX = +_[0], DY = +_[1]);
      return graticule;
    };
    graticule.stepMinor = function (_) {
      if (!arguments.length) return [dx, dy];
      (dx = +_[0], dy = +_[1]);
      return graticule;
    };
    graticule.precision = function (_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = graticuleX(y0, y1, 90);
      y = graticuleY(x0, x1, precision);
      X = graticuleX(Y0, Y1, 90);
      Y = graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]]).extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
  }
  function graticule10() {
    return graticule()();
  }
  function interpolate(a, b) {
    var x0 = a[0] * radians, y0 = a[1] * radians, x1 = b[0] * radians, y1 = b[1] * radians, cy0 = cos(y0), sy0 = sin(y0), cy1 = cos(y1), sy1 = sin(y1), kx0 = cy0 * cos(x0), ky0 = cy0 * sin(x0), kx1 = cy1 * cos(x1), ky1 = cy1 * sin(x1), d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))), k = sin(d);
    var interpolate = d ? function (t) {
      var B = sin(t *= d) / k, A = sin(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [atan2(y, x) * degrees, atan2(z, sqrt(x * x + y * y)) * degrees];
    } : function () {
      return [x0 * degrees, y0 * degrees];
    };
    interpolate.distance = d;
    return interpolate;
  }
  var identity = x => x;
  var areaSum$1 = new d3Array.Adder(), areaRingSum$1 = new d3Array.Adder(), x00, y00, x0$1, y0$1;
  var areaStream$1 = {
    point: noop,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: function () {
      areaStream$1.lineStart = areaRingStart$1;
      areaStream$1.lineEnd = areaRingEnd$1;
    },
    polygonEnd: function () {
      areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop;
      areaSum$1.add(abs(areaRingSum$1));
      areaRingSum$1 = new d3Array.Adder();
    },
    result: function () {
      var area = areaSum$1 / 2;
      areaSum$1 = new d3Array.Adder();
      return area;
    }
  };
  function areaRingStart$1() {
    areaStream$1.point = areaPointFirst$1;
  }
  function areaPointFirst$1(x, y) {
    areaStream$1.point = areaPoint$1;
    (x00 = x0$1 = x, y00 = y0$1 = y);
  }
  function areaPoint$1(x, y) {
    areaRingSum$1.add(y0$1 * x - x0$1 * y);
    (x0$1 = x, y0$1 = y);
  }
  function areaRingEnd$1() {
    areaPoint$1(x00, y00);
  }
  var x0$2 = Infinity, y0$2 = x0$2, x1 = -x0$2, y1 = x1;
  var boundsStream$1 = {
    point: boundsPoint$1,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop,
    result: function () {
      var bounds = [[x0$2, y0$2], [x1, y1]];
      x1 = y1 = -(y0$2 = x0$2 = Infinity);
      return bounds;
    }
  };
  function boundsPoint$1(x, y) {
    if (x < x0$2) x0$2 = x;
    if (x > x1) x1 = x;
    if (y < y0$2) y0$2 = y;
    if (y > y1) y1 = y;
  }
  // TODO Enforce positive area for exterior, negative area for interior?
  var X0$1 = 0, Y0$1 = 0, Z0$1 = 0, X1$1 = 0, Y1$1 = 0, Z1$1 = 0, X2$1 = 0, Y2$1 = 0, Z2$1 = 0, x00$1, y00$1, x0$3, y0$3;
  var centroidStream$1 = {
    point: centroidPoint$1,
    lineStart: centroidLineStart$1,
    lineEnd: centroidLineEnd$1,
    polygonStart: function () {
      centroidStream$1.lineStart = centroidRingStart$1;
      centroidStream$1.lineEnd = centroidRingEnd$1;
    },
    polygonEnd: function () {
      centroidStream$1.point = centroidPoint$1;
      centroidStream$1.lineStart = centroidLineStart$1;
      centroidStream$1.lineEnd = centroidLineEnd$1;
    },
    result: function () {
      var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1] : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1] : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1] : [NaN, NaN];
      X0$1 = Y0$1 = Z0$1 = X1$1 = Y1$1 = Z1$1 = X2$1 = Y2$1 = Z2$1 = 0;
      return centroid;
    }
  };
  function centroidPoint$1(x, y) {
    X0$1 += x;
    Y0$1 += y;
    ++Z0$1;
  }
  function centroidLineStart$1() {
    centroidStream$1.point = centroidPointFirstLine;
  }
  function centroidPointFirstLine(x, y) {
    centroidStream$1.point = centroidPointLine;
    centroidPoint$1(x0$3 = x, y0$3 = y);
  }
  function centroidPointLine(x, y) {
    var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
    X1$1 += z * (x0$3 + x) / 2;
    Y1$1 += z * (y0$3 + y) / 2;
    Z1$1 += z;
    centroidPoint$1(x0$3 = x, y0$3 = y);
  }
  function centroidLineEnd$1() {
    centroidStream$1.point = centroidPoint$1;
  }
  function centroidRingStart$1() {
    centroidStream$1.point = centroidPointFirstRing;
  }
  function centroidRingEnd$1() {
    centroidPointRing(x00$1, y00$1);
  }
  function centroidPointFirstRing(x, y) {
    centroidStream$1.point = centroidPointRing;
    centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
  }
  function centroidPointRing(x, y) {
    var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
    X1$1 += z * (x0$3 + x) / 2;
    Y1$1 += z * (y0$3 + y) / 2;
    Z1$1 += z;
    z = y0$3 * x - x0$3 * y;
    X2$1 += z * (x0$3 + x);
    Y2$1 += z * (y0$3 + y);
    Z2$1 += z * 3;
    centroidPoint$1(x0$3 = x, y0$3 = y);
  }
  function PathContext(context) {
    this._context = context;
  }
  PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function (_) {
      return (this._radius = _, this);
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line === 0) this._context.closePath();
      this._point = NaN;
    },
    point: function (x, y) {
      switch (this._point) {
        case 0:
          {
            this._context.moveTo(x, y);
            this._point = 1;
            break;
          }
        case 1:
          {
            this._context.lineTo(x, y);
            break;
          }
        default:
          {
            this._context.moveTo(x + this._radius, y);
            this._context.arc(x, y, this._radius, 0, tau);
            break;
          }
      }
    },
    result: noop
  };
  var lengthSum$1 = new d3Array.Adder(), lengthRing, x00$2, y00$2, x0$4, y0$4;
  var lengthStream$1 = {
    point: noop,
    lineStart: function () {
      lengthStream$1.point = lengthPointFirst$1;
    },
    lineEnd: function () {
      if (lengthRing) lengthPoint$1(x00$2, y00$2);
      lengthStream$1.point = noop;
    },
    polygonStart: function () {
      lengthRing = true;
    },
    polygonEnd: function () {
      lengthRing = null;
    },
    result: function () {
      var length = +lengthSum$1;
      lengthSum$1 = new d3Array.Adder();
      return length;
    }
  };
  function lengthPointFirst$1(x, y) {
    lengthStream$1.point = lengthPoint$1;
    (x00$2 = x0$4 = x, y00$2 = y0$4 = y);
  }
  function lengthPoint$1(x, y) {
    (x0$4 -= x, y0$4 -= y);
    lengthSum$1.add(sqrt(x0$4 * x0$4 + y0$4 * y0$4));
    (x0$4 = x, y0$4 = y);
  }
  function PathString() {
    this._string = [];
  }
  PathString.prototype = {
    _radius: 4.5,
    _circle: circle$1(4.5),
    pointRadius: function (_) {
      if ((_ = +_) !== this._radius) (this._radius = _, this._circle = null);
      return this;
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line === 0) this._string.push("Z");
      this._point = NaN;
    },
    point: function (x, y) {
      switch (this._point) {
        case 0:
          {
            this._string.push("M", x, ",", y);
            this._point = 1;
            break;
          }
        case 1:
          {
            this._string.push("L", x, ",", y);
            break;
          }
        default:
          {
            if (this._circle == null) this._circle = circle$1(this._radius);
            this._string.push("M", x, ",", y, this._circle);
            break;
          }
      }
    },
    result: function () {
      if (this._string.length) {
        var result = this._string.join("");
        this._string = [];
        return result;
      } else {
        return null;
      }
    }
  };
  function circle$1(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  function index(projection, context) {
    var pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        geoStream(object, projectionStream(contextStream));
      }
      return contextStream.result();
    }
    path.area = function (object) {
      geoStream(object, projectionStream(areaStream$1));
      return areaStream$1.result();
    };
    path.measure = function (object) {
      geoStream(object, projectionStream(lengthStream$1));
      return lengthStream$1.result();
    };
    path.bounds = function (object) {
      geoStream(object, projectionStream(boundsStream$1));
      return boundsStream$1.result();
    };
    path.centroid = function (object) {
      geoStream(object, projectionStream(centroidStream$1));
      return centroidStream$1.result();
    };
    path.projection = function (_) {
      return arguments.length ? (projectionStream = _ == null ? (projection = null, identity) : (projection = _).stream, path) : projection;
    };
    path.context = function (_) {
      if (!arguments.length) return context;
      contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return path;
    };
    path.pointRadius = function (_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    return path.projection(projection).context(context);
  }
  function transform(methods) {
    return {
      stream: transformer(methods)
    };
  }
  function transformer(methods) {
    return function (stream) {
      var s = new TransformStream();
      for (var key in methods) s[key] = methods[key];
      s.stream = stream;
      return s;
    };
  }
  function TransformStream() {}
  TransformStream.prototype = {
    constructor: TransformStream,
    point: function (x, y) {
      this.stream.point(x, y);
    },
    sphere: function () {
      this.stream.sphere();
    },
    lineStart: function () {
      this.stream.lineStart();
    },
    lineEnd: function () {
      this.stream.lineEnd();
    },
    polygonStart: function () {
      this.stream.polygonStart();
    },
    polygonEnd: function () {
      this.stream.polygonEnd();
    }
  };
  function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([0, 0]);
    if (clip != null) projection.clipExtent(null);
    geoStream(object, projection.stream(boundsStream$1));
    fitBounds(boundsStream$1.result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
  }
  function fitExtent(projection, extent, object) {
    return fit(projection, function (b) {
      var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }
  function fitSize(projection, size, object) {
    return fitExtent(projection, [[0, 0], size], object);
  }
  function fitWidth(projection, width, object) {
    return fit(projection, function (b) {
      var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }
  function fitHeight(projection, height, object) {
    return fit(projection, function (b) {
      var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }
  var maxDepth = 16, // maximum depth of subdivision
  cosMinDistance = cos(30 * radians);
  // cos(minimum angular distance)
  function resample(project, delta2) {
    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
  }
  function resampleNone(project) {
    return transformer({
      point: function (x, y) {
        x = project(x, y);
        this.stream.point(x[0], x[1]);
      }
    });
  }
  function resample$1(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * delta2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = sqrt(a * a + b * b + c * c), phi2 = asin(c /= m), lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda0 - lambda1) < epsilon ? (lambda0 + lambda1) / 2 : atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > delta2 || // perpendicular projected distance
        abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || // midpoint close to an end
        a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          // angular distance
          resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
        }
      }
    }
    return function (stream) {
      var lambda00, x00, y00, a00, b00, c00, // first point
      lambda0, x0, y0, a0, b0, c0;
      // previous point
      var resampleStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function () {
          stream.polygonStart();
          resampleStream.lineStart = ringStart;
        },
        polygonEnd: function () {
          stream.polygonEnd();
          resampleStream.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resampleStream.point = linePoint;
        stream.lineStart();
      }
      function linePoint(lambda, phi) {
        var c = cartesian([lambda, phi]), p = project(lambda, phi);
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resampleStream.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resampleStream.point = ringPoint;
        resampleStream.lineEnd = ringEnd;
      }
      function ringPoint(lambda, phi) {
        (linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0);
        resampleStream.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
        resampleStream.lineEnd = lineEnd;
        lineEnd();
      }
      return resampleStream;
    };
  }
  var transformRadians = transformer({
    point: function (x, y) {
      this.stream.point(x * radians, y * radians);
    }
  });
  function transformRotate(rotate) {
    return transformer({
      point: function (x, y) {
        var r = rotate(x, y);
        return this.stream.point(r[0], r[1]);
      }
    });
  }
  function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
      x *= sx;
      y *= sy;
      return [dx + k * x, dy - k * y];
    }
    transform.invert = function (x, y) {
      return [(x - dx) / k * sx, (dy - y) / k * sy];
    };
    return transform;
  }
  function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = cos(alpha), sinAlpha = sin(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
      x *= sx;
      y *= sy;
      return [a * x - b * y + dx, dy - b * x - a * y];
    }
    transform.invert = function (x, y) {
      return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
    };
    return transform;
  }
  function projection(project) {
    return projectionMutator(function () {
      return project;
    })();
  }
  function projectionMutator(projectAt) {
    var project, k = 150, // scale
    x = 480, y = 250, // translate
    lambda = 0, phi = 0, // center
    deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
    alpha = 0, // post-rotate angle
    sx = 1, // reflectX
    sy = 1, // reflectX
    theta = null, preclip = clipAntimeridian, // pre-clip angle
    x0 = null, y0, x1, y1, postclip = identity, // post-clip extent
    delta2 = 0.5, // precision
    projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
      return projectRotateTransform(point[0] * radians, point[1] * radians);
    }
    function invert(point) {
      point = projectRotateTransform.invert(point[0], point[1]);
      return point && [point[0] * degrees, point[1] * degrees];
    }
    projection.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function (_) {
      return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function (_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function (_) {
      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees;
    };
    projection.clipExtent = function (_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };
    projection.scale = function (_) {
      return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function (_) {
      return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
    };
    projection.center = function (_) {
      return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees, phi * degrees];
    };
    projection.rotate = function (_) {
      return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
    };
    projection.angle = function (_) {
      return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees;
    };
    projection.reflectX = function (_) {
      return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function (_) {
      return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function (_) {
      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
    };
    projection.fitExtent = function (extent, object) {
      return fitExtent(projection, extent, object);
    };
    projection.fitSize = function (size, object) {
      return fitSize(projection, size, object);
    };
    projection.fitWidth = function (width, object) {
      return fitWidth(projection, width, object);
    };
    projection.fitHeight = function (height, object) {
      return fitHeight(projection, height, object);
    };
    function recenter() {
      var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
      rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
      projectTransform = compose(project, transform);
      projectRotateTransform = compose(rotate, projectTransform);
      projectResample = resample(projectTransform, delta2);
      return reset();
    }
    function reset() {
      cache = cacheStream = null;
      return projection;
    }
    return function () {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return recenter();
    };
  }
  function conicProjection(projectAt) {
    var phi0 = 0, phi1 = pi / 3, m = projectionMutator(projectAt), p = m(phi0, phi1);
    p.parallels = function (_) {
      return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees, phi1 * degrees];
    };
    return p;
  }
  function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = cos(phi0);
    function forward(lambda, phi) {
      return [lambda * cosPhi0, sin(phi) / cosPhi0];
    }
    forward.invert = function (x, y) {
      return [x / cosPhi0, asin(y * cosPhi0)];
    };
    return forward;
  }
  function conicEqualAreaRaw(y0, y1) {
    var sy0 = sin(y0), n = (sy0 + sin(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if (abs(n) < epsilon) return cylindricalEqualAreaRaw(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;
    function project(x, y) {
      var r = sqrt(c - 2 * n * sin(y)) / n;
      return [r * sin(x *= n), r0 - r * cos(x)];
    }
    project.invert = function (x, y) {
      var r0y = r0 - y, l = atan2(x, abs(r0y)) * sign(r0y);
      if (r0y * n < 0) l -= pi * sign(x) * sign(r0y);
      return [l / n, asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
    };
    return project;
  }
  function conicEqualArea() {
    return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
  }
  function albers() {
    return conicEqualArea().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) streams[i].point(x, y);
      },
      sphere: function () {
        var i = -1;
        while (++i < n) streams[i].sphere();
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) streams[i].lineStart();
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) streams[i].lineEnd();
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) streams[i].polygonStart();
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) streams[i].polygonEnd();
      }
    };
  }
  // A composite projection for the United States, configured by default for
  // 960×500. The projection also works quite well at 960×600 if you change the
  // scale to 1285 and adjust the translate accordingly. The set of standard
  // parallels for each region comes from USGS, which is published here:
  // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
  function albersUsa() {
    var cache, cacheStream, lower48 = albers(), lower48Point, alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
    hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
    point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point));
    }
    albersUsa.invert = function (coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
    };
    albersUsa.precision = function (_) {
      if (!arguments.length) return lower48.precision();
      (lower48.precision(_), alaska.precision(_), hawaii.precision(_));
      return reset();
    };
    albersUsa.scale = function (_) {
      if (!arguments.length) return lower48.scale();
      (lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_));
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function (_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
      alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon, y + 0.120 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
      hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    albersUsa.fitExtent = function (extent, object) {
      return fitExtent(albersUsa, extent, object);
    };
    albersUsa.fitSize = function (size, object) {
      return fitSize(albersUsa, size, object);
    };
    albersUsa.fitWidth = function (width, object) {
      return fitWidth(albersUsa, width, object);
    };
    albersUsa.fitHeight = function (height, object) {
      return fitHeight(albersUsa, height, object);
    };
    function reset() {
      cache = cacheStream = null;
      return albersUsa;
    }
    return albersUsa.scale(1070);
  }
  function azimuthalRaw(scale) {
    return function (x, y) {
      var cx = cos(x), cy = cos(y), k = scale(cx * cy);
      if (k === Infinity) return [2, 0];
      return [k * cy * sin(x), k * sin(y)];
    };
  }
  function azimuthalInvert(angle) {
    return function (x, y) {
      var z = sqrt(x * x + y * y), c = angle(z), sc = sin(c), cc = cos(c);
      return [atan2(x * sc, z * cc), asin(z && y * sc / z)];
    };
  }
  var azimuthalEqualAreaRaw = azimuthalRaw(function (cxcy) {
    return sqrt(2 / (1 + cxcy));
  });
  azimuthalEqualAreaRaw.invert = azimuthalInvert(function (z) {
    return 2 * asin(z / 2);
  });
  function azimuthalEqualArea() {
    return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
  }
  var azimuthalEquidistantRaw = azimuthalRaw(function (c) {
    return (c = acos(c)) && c / sin(c);
  });
  azimuthalEquidistantRaw.invert = azimuthalInvert(function (z) {
    return z;
  });
  function azimuthalEquidistant() {
    return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
  }
  function mercatorRaw(lambda, phi) {
    return [lambda, log(tan((halfPi + phi) / 2))];
  }
  mercatorRaw.invert = function (x, y) {
    return [x, 2 * atan(exp(y)) - halfPi];
  };
  function mercator() {
    return mercatorProjection(mercatorRaw).scale(961 / tau);
  }
  function mercatorProjection(project) {
    var m = projection(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1;
    // clip extent
    m.scale = function (_) {
      return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function (_) {
      return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function (_) {
      return arguments.length ? (center(_), reclip()) : center();
    };
    m.clipExtent = function (_) {
      return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };
    function reclip() {
      var k = pi * scale(), t = m(rotation(m.rotate()).invert([0, 0]));
      return clipExtent(x0 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]] : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
    }
    return reclip();
  }
  function tany(y) {
    return tan((halfPi + y) / 2);
  }
  function conicConformalRaw(y0, y1) {
    var cy0 = cos(y0), n = y0 === y1 ? sin(y0) : log(cy0 / cos(y1)) / log(tany(y1) / tany(y0)), f = cy0 * pow(tany(y0), n) / n;
    if (!n) return mercatorRaw;
    function project(x, y) {
      if (f > 0) {
        if (y < -halfPi + epsilon) y = -halfPi + epsilon;
      } else {
        if (y > halfPi - epsilon) y = halfPi - epsilon;
      }
      var r = f / pow(tany(y), n);
      return [r * sin(n * x), f - r * cos(n * x)];
    }
    project.invert = function (x, y) {
      var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy), l = atan2(x, abs(fy)) * sign(fy);
      if (fy * n < 0) l -= pi * sign(x) * sign(fy);
      return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi];
    };
    return project;
  }
  function conicConformal() {
    return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
  }
  function equirectangularRaw(lambda, phi) {
    return [lambda, phi];
  }
  equirectangularRaw.invert = equirectangularRaw;
  function equirectangular() {
    return projection(equirectangularRaw).scale(152.63);
  }
  function conicEquidistantRaw(y0, y1) {
    var cy0 = cos(y0), n = y0 === y1 ? sin(y0) : (cy0 - cos(y1)) / (y1 - y0), g = cy0 / n + y0;
    if (abs(n) < epsilon) return equirectangularRaw;
    function project(x, y) {
      var gy = g - y, nx = n * x;
      return [gy * sin(nx), g - gy * cos(nx)];
    }
    project.invert = function (x, y) {
      var gy = g - y, l = atan2(x, abs(gy)) * sign(gy);
      if (gy * n < 0) l -= pi * sign(x) * sign(gy);
      return [l / n, g - sign(n) * sqrt(x * x + gy * gy)];
    };
    return project;
  }
  function conicEquidistant() {
    return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
  }
  var A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = sqrt(3) / 2, iterations = 12;
  function equalEarthRaw(lambda, phi) {
    var l = asin(M * sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
    return [lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))), l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))];
  }
  equalEarthRaw.invert = function (x, y) {
    var l = y, l2 = l * l, l6 = l2 * l2 * l2;
    for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
      fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
      fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
      (l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2);
      if (abs(delta) < epsilon2) break;
    }
    return [M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l), asin(sin(l) / M)];
  };
  function equalEarth() {
    return projection(equalEarthRaw).scale(177.158);
  }
  function gnomonicRaw(x, y) {
    var cy = cos(y), k = cos(x) * cy;
    return [cy * sin(x) / k, sin(y) / k];
  }
  gnomonicRaw.invert = azimuthalInvert(atan);
  function gnomonic() {
    return projection(gnomonicRaw).scale(144.049).clipAngle(60);
  }
  function identity$1() {
    var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, // scale, translate and reflect
    alpha = 0, ca, sa, // angle
    x0 = null, y0, x1, y1, // clip extent
    kx = 1, ky = 1, transform = transformer({
      point: function (x, y) {
        var p = projection([x, y]);
        this.stream.point(p[0], p[1]);
      }
    }), postclip = identity, cache, cacheStream;
    function reset() {
      kx = k * sx;
      ky = k * sy;
      cache = cacheStream = null;
      return projection;
    }
    function projection(p) {
      var x = p[0] * kx, y = p[1] * ky;
      if (alpha) {
        var t = y * ca - x * sa;
        x = x * ca + y * sa;
        y = t;
      }
      return [x + tx, y + ty];
    }
    projection.invert = function (p) {
      var x = p[0] - tx, y = p[1] - ty;
      if (alpha) {
        var t = y * ca + x * sa;
        x = x * ca - y * sa;
        y = t;
      }
      return [x / kx, y / ky];
    };
    projection.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    };
    projection.postclip = function (_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipExtent = function (_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };
    projection.scale = function (_) {
      return arguments.length ? (k = +_, reset()) : k;
    };
    projection.translate = function (_) {
      return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
    };
    projection.angle = function (_) {
      return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees;
    };
    projection.reflectX = function (_) {
      return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
    };
    projection.reflectY = function (_) {
      return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
    };
    projection.fitExtent = function (extent, object) {
      return fitExtent(projection, extent, object);
    };
    projection.fitSize = function (size, object) {
      return fitSize(projection, size, object);
    };
    projection.fitWidth = function (width, object) {
      return fitWidth(projection, width, object);
    };
    projection.fitHeight = function (height, object) {
      return fitHeight(projection, height, object);
    };
    return projection;
  }
  function naturalEarth1Raw(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    return [lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))), phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))];
  }
  naturalEarth1Raw.invert = function (x, y) {
    var phi = y, i = 25, delta;
    do {
      var phi2 = phi * phi, phi4 = phi2 * phi2;
      phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
    } while (abs(delta) > epsilon && --i > 0);
    return [x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))), phi];
  };
  function naturalEarth1() {
    return projection(naturalEarth1Raw).scale(175.295);
  }
  function orthographicRaw(x, y) {
    return [cos(y) * sin(x), sin(y)];
  }
  orthographicRaw.invert = azimuthalInvert(asin);
  function orthographic() {
    return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon);
  }
  function stereographicRaw(x, y) {
    var cy = cos(y), k = 1 + cos(x) * cy;
    return [cy * sin(x) / k, sin(y) / k];
  }
  stereographicRaw.invert = azimuthalInvert(function (z) {
    return 2 * atan(z);
  });
  function stereographic() {
    return projection(stereographicRaw).scale(250).clipAngle(142);
  }
  function transverseMercatorRaw(lambda, phi) {
    return [log(tan((halfPi + phi) / 2)), -lambda];
  }
  transverseMercatorRaw.invert = function (x, y) {
    return [-y, 2 * atan(exp(x)) - halfPi];
  };
  function transverseMercator() {
    var m = mercatorProjection(transverseMercatorRaw), center = m.center, rotate = m.rotate;
    m.center = function (_) {
      return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
    };
    m.rotate = function (_) {
      return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
    };
    return rotate([0, 0, 90]).scale(159.155);
  }
  exports.geoAlbers = albers;
  exports.geoAlbersUsa = albersUsa;
  exports.geoArea = area;
  exports.geoAzimuthalEqualArea = azimuthalEqualArea;
  exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
  exports.geoAzimuthalEquidistant = azimuthalEquidistant;
  exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
  exports.geoBounds = bounds;
  exports.geoCentroid = centroid;
  exports.geoCircle = circle;
  exports.geoClipAntimeridian = clipAntimeridian;
  exports.geoClipCircle = clipCircle;
  exports.geoClipExtent = extent;
  exports.geoClipRectangle = clipRectangle;
  exports.geoConicConformal = conicConformal;
  exports.geoConicConformalRaw = conicConformalRaw;
  exports.geoConicEqualArea = conicEqualArea;
  exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
  exports.geoConicEquidistant = conicEquidistant;
  exports.geoConicEquidistantRaw = conicEquidistantRaw;
  exports.geoContains = contains;
  exports.geoDistance = distance;
  exports.geoEqualEarth = equalEarth;
  exports.geoEqualEarthRaw = equalEarthRaw;
  exports.geoEquirectangular = equirectangular;
  exports.geoEquirectangularRaw = equirectangularRaw;
  exports.geoGnomonic = gnomonic;
  exports.geoGnomonicRaw = gnomonicRaw;
  exports.geoGraticule = graticule;
  exports.geoGraticule10 = graticule10;
  exports.geoIdentity = identity$1;
  exports.geoInterpolate = interpolate;
  exports.geoLength = length;
  exports.geoMercator = mercator;
  exports.geoMercatorRaw = mercatorRaw;
  exports.geoNaturalEarth1 = naturalEarth1;
  exports.geoNaturalEarth1Raw = naturalEarth1Raw;
  exports.geoOrthographic = orthographic;
  exports.geoOrthographicRaw = orthographicRaw;
  exports.geoPath = index;
  exports.geoProjection = projection;
  exports.geoProjectionMutator = projectionMutator;
  exports.geoRotation = rotation;
  exports.geoStereographic = stereographic;
  exports.geoStereographicRaw = stereographicRaw;
  exports.geoStream = geoStream;
  exports.geoTransform = transform;
  exports.geoTransverseMercator = transverseMercator;
  exports.geoTransverseMercatorRaw = transverseMercatorRaw;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-array":"7CLUA"}],"3iNG0":[function(require,module,exports) {
var define;
// https://d3js.org/d3-hierarchy/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  function defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
  }
  function meanX(children) {
    return children.reduce(meanXReduce, 0) / children.length;
  }
  function meanXReduce(x, c) {
    return x + c.x;
  }
  function maxY(children) {
    return 1 + children.reduce(maxYReduce, 0);
  }
  function maxYReduce(y, c) {
    return Math.max(y, c.y);
  }
  function leafLeft(node) {
    var children;
    while (children = node.children) node = children[0];
    return node;
  }
  function leafRight(node) {
    var children;
    while (children = node.children) node = children[children.length - 1];
    return node;
  }
  function cluster() {
    var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
    function cluster(root) {
      var previousNode, x = 0;
      // First walk, computing the initial x & y values.
      root.eachAfter(function (node) {
        var children = node.children;
        if (children) {
          node.x = meanX(children);
          node.y = maxY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = leafLeft(root), right = leafRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      // Second walk, normalizing x & y to the desired size.
      return root.eachAfter(nodeSize ? function (node) {
        node.x = (node.x - root.x) * dx;
        node.y = (root.y - node.y) * dy;
      } : function (node) {
        node.x = (node.x - x0) / (x1 - x0) * dx;
        node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
      });
    }
    cluster.separation = function (x) {
      return arguments.length ? (separation = x, cluster) : separation;
    };
    cluster.size = function (x) {
      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [dx, dy];
    };
    cluster.nodeSize = function (x) {
      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [dx, dy] : null;
    };
    return cluster;
  }
  function count(node) {
    var sum = 0, children = node.children, i = children && children.length;
    if (!i) sum = 1; else while (--i >= 0) sum += children[i].value;
    node.value = sum;
  }
  function node_count() {
    return this.eachAfter(count);
  }
  function node_each(callback, that) {
    let index = -1;
    for (const node of this) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }
  function node_eachBefore(callback, that) {
    var node = this, nodes = [node], children, i, index = -1;
    while (node = nodes.pop()) {
      callback.call(that, node, ++index, this);
      if (children = node.children) {
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
      }
    }
    return this;
  }
  function node_eachAfter(callback, that) {
    var node = this, nodes = [node], next = [], children, i, n, index = -1;
    while (node = nodes.pop()) {
      next.push(node);
      if (children = node.children) {
        for ((i = 0, n = children.length); i < n; ++i) {
          nodes.push(children[i]);
        }
      }
    }
    while (node = next.pop()) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }
  function node_find(callback, that) {
    let index = -1;
    for (const node of this) {
      if (callback.call(that, node, ++index, this)) {
        return node;
      }
    }
  }
  function node_sum(value) {
    return this.eachAfter(function (node) {
      var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
      while (--i >= 0) sum += children[i].value;
      node.value = sum;
    });
  }
  function node_sort(compare) {
    return this.eachBefore(function (node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }
  function node_path(end) {
    var start = this, ancestor = leastCommonAncestor(start, end), nodes = [start];
    while (start !== ancestor) {
      start = start.parent;
      nodes.push(start);
    }
    var k = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k, 0, end);
      end = end.parent;
    }
    return nodes;
  }
  function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while (a === b) {
      c = a;
      a = aNodes.pop();
      b = bNodes.pop();
    }
    return c;
  }
  function node_ancestors() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }
  function node_descendants() {
    return Array.from(this);
  }
  function node_leaves() {
    var leaves = [];
    this.eachBefore(function (node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }
  function node_links() {
    var root = this, links = [];
    root.each(function (node) {
      if (node !== root) {
        // Don’t include the root’s parent, if any.
        links.push({
          source: node.parent,
          target: node
        });
      }
    });
    return links;
  }
  function* node_iterator() {
    var node = this, current, next = [node], children, i, n;
    do {
      (current = next.reverse(), next = []);
      while (node = current.pop()) {
        yield node;
        if (children = node.children) {
          for ((i = 0, n = children.length); i < n; ++i) {
            next.push(children[i]);
          }
        }
      }
    } while (next.length);
  }
  function hierarchy(data, children) {
    if (data instanceof Map) {
      data = [undefined, data];
      if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
      children = objectChildren;
    }
    var root = new Node(data), node, nodes = [root], child, childs, i, n;
    while (node = nodes.pop()) {
      if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = childs[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }
    return root.eachBefore(computeHeight);
  }
  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }
  function objectChildren(d) {
    return d.children;
  }
  function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
  }
  function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
  }
  function computeHeight(node) {
    var height = 0;
    do node.height = height; while ((node = node.parent) && node.height < ++height);
  }
  function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
  }
  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: node_count,
    each: node_each,
    eachAfter: node_eachAfter,
    eachBefore: node_eachBefore,
    find: node_find,
    sum: node_sum,
    sort: node_sort,
    path: node_path,
    ancestors: node_ancestors,
    descendants: node_descendants,
    leaves: node_leaves,
    links: node_links,
    copy: node_copy,
    [Symbol.iterator]: node_iterator
  };
  function array(x) {
    return typeof x === "object" && ("length" in x) ? x : // Array, TypedArray, NodeList, array-like
    Array.from(x);
  }
  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  function enclose(circles) {
    var i = 0, n = (circles = shuffle(Array.from(circles))).length, B = [], p, e;
    while (i < n) {
      p = circles[i];
      if (e && enclosesWeak(e, p)) ++i; else (e = encloseBasis(B = extendBasis(B, p)), i = 0);
    }
    return e;
  }
  function extendBasis(B, p) {
    var i, j;
    if (enclosesWeakAll(p, B)) return [p];
    // If we get here then B must have at least one element.
    for (i = 0; i < B.length; ++i) {
      if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
        return [B[i], p];
      }
    }
    // If we get here then B must have at least two elements.
    for (i = 0; i < B.length - 1; ++i) {
      for (j = i + 1; j < B.length; ++j) {
        if (enclosesNot(encloseBasis2(B[i], B[j]), p) && enclosesNot(encloseBasis2(B[i], p), B[j]) && enclosesNot(encloseBasis2(B[j], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
          return [B[i], B[j], p];
        }
      }
    }
    // If we get here then something is very wrong.
    throw new Error();
  }
  function enclosesNot(a, b) {
    var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  }
  function enclosesWeak(a, b) {
    var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  function enclosesWeakAll(a, B) {
    for (var i = 0; i < B.length; ++i) {
      if (!enclosesWeak(a, B[i])) {
        return false;
      }
    }
    return true;
  }
  function encloseBasis(B) {
    switch (B.length) {
      case 1:
        return encloseBasis1(B[0]);
      case 2:
        return encloseBasis2(B[0], B[1]);
      case 3:
        return encloseBasis3(B[0], B[1], B[2]);
    }
  }
  function encloseBasis1(a) {
    return {
      x: a.x,
      y: a.y,
      r: a.r
    };
  }
  function encloseBasis2(a, b) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
      x: (x1 + x2 + x21 / l * r21) / 2,
      y: (y1 + y2 + y21 / l * r21) / 2,
      r: (l + r1 + r2) / 2
    };
  }
  function encloseBasis3(a, b, c) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x3 = c.x, y3 = c.y, r3 = c.r, a2 = x1 - x2, a3 = x1 - x3, b2 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b2 - a2 * b3, xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1, xb = (b3 * c2 - b2 * c3) / ab, ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1, yb = (a2 * c3 - a3 * c2) / ab, A = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C = xa * xa + ya * ya - r1 * r1, r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
    return {
      x: x1 + xa + xb * r,
      y: y1 + ya + yb * r,
      r: r
    };
  }
  function place(b, a, c) {
    var dx = b.x - a.x, x, a2, dy = b.y - a.y, y, b2, d2 = dx * dx + dy * dy;
    if (d2) {
      (a2 = a.r + c.r, a2 *= a2);
      (b2 = b.r + c.r, b2 *= b2);
      if (a2 > b2) {
        x = (d2 + b2 - a2) / (2 * d2);
        y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
        c.x = b.x - x * dx - y * dy;
        c.y = b.y - x * dy + y * dx;
      } else {
        x = (d2 + a2 - b2) / (2 * d2);
        y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
        c.x = a.x + x * dx - y * dy;
        c.y = a.y + x * dy + y * dx;
      }
    } else {
      c.x = a.x + c.r;
      c.y = a.y;
    }
  }
  function intersects(a, b) {
    var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  function score(node) {
    var a = node._, b = node.next._, ab = a.r + b.r, dx = (a.x * b.r + b.x * a.r) / ab, dy = (a.y * b.r + b.y * a.r) / ab;
    return dx * dx + dy * dy;
  }
  function Node$1(circle) {
    this._ = circle;
    this.next = null;
    this.previous = null;
  }
  function packEnclose(circles) {
    if (!(n = (circles = array(circles)).length)) return 0;
    var a, b, c, n, aa, ca, i, j, k, sj, sk;
    // Place the first circle.
    (a = circles[0], a.x = 0, a.y = 0);
    if (!(n > 1)) return a.r;
    // Place the second circle.
    (b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0);
    if (!(n > 2)) return a.r + b.r;
    // Place the third circle.
    place(b, a, c = circles[2]);
    // Initialize the front-chain using the first three circles a, b and c.
    (a = new Node$1(a), b = new Node$1(b), c = new Node$1(c));
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;
    // Attempt to place each remaining circle…
    pack: for (i = 3; i < n; ++i) {
      (place(a._, b._, c = circles[i]), c = new Node$1(c));
      // Find the closest intersecting circle on the front-chain, if any.
      // “Closeness” is determined by linear distance along the front-chain.
      // “Ahead” or “behind” is likewise determined by linear distance.
      (j = b.next, k = a.previous, sj = b._.r, sk = a._.r);
      do {
        if (sj <= sk) {
          if (intersects(j._, c._)) {
            (b = j, a.next = b, b.previous = a, --i);
            continue pack;
          }
          (sj += j._.r, j = j.next);
        } else {
          if (intersects(k._, c._)) {
            (a = k, a.next = b, b.previous = a, --i);
            continue pack;
          }
          (sk += k._.r, k = k.previous);
        }
      } while (j !== k.next);
      // Success! Insert the new circle c between a and b.
      (c.previous = a, c.next = b, a.next = b.previous = b = c);
      // Compute the new closest circle pair to the centroid.
      aa = score(a);
      while ((c = c.next) !== b) {
        if ((ca = score(c)) < aa) {
          (a = c, aa = ca);
        }
      }
      b = a.next;
    }
    // Compute the enclosing circle of the front chain.
    (a = [b._], c = b);
    while ((c = c.next) !== b) a.push(c._);
    c = enclose(a);
    // Translate the circles to put the enclosing circle around the origin.
    for (i = 0; i < n; ++i) (a = circles[i], a.x -= c.x, a.y -= c.y);
    return c.r;
  }
  function siblings(circles) {
    packEnclose(circles);
    return circles;
  }
  function optional(f) {
    return f == null ? null : required(f);
  }
  function required(f) {
    if (typeof f !== "function") throw new Error();
    return f;
  }
  function constantZero() {
    return 0;
  }
  function constant(x) {
    return function () {
      return x;
    };
  }
  function defaultRadius(d) {
    return Math.sqrt(d.value);
  }
  function index() {
    var radius = null, dx = 1, dy = 1, padding = constantZero;
    function pack(root) {
      (root.x = dx / 2, root.y = dy / 2);
      if (radius) {
        root.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
      } else {
        root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
      }
      return root;
    }
    pack.radius = function (x) {
      return arguments.length ? (radius = optional(x), pack) : radius;
    };
    pack.size = function (x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
    };
    pack.padding = function (x) {
      return arguments.length ? (padding = typeof x === "function" ? x : constant(+x), pack) : padding;
    };
    return pack;
  }
  function radiusLeaf(radius) {
    return function (node) {
      if (!node.children) {
        node.r = Math.max(0, +radius(node) || 0);
      }
    };
  }
  function packChildren(padding, k) {
    return function (node) {
      if (children = node.children) {
        var children, i, n = children.length, r = padding(node) * k || 0, e;
        if (r) for (i = 0; i < n; ++i) children[i].r += r;
        e = packEnclose(children);
        if (r) for (i = 0; i < n; ++i) children[i].r -= r;
        node.r = e + r;
      }
    };
  }
  function translateChild(k) {
    return function (node) {
      var parent = node.parent;
      node.r *= k;
      if (parent) {
        node.x = parent.x + k * node.x;
        node.y = parent.y + k * node.y;
      }
    };
  }
  function roundNode(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
  }
  function treemapDice(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value;
    while (++i < n) {
      (node = nodes[i], node.y0 = y0, node.y1 = y1);
      (node.x0 = x0, node.x1 = x0 += node.value * k);
    }
  }
  function partition() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root) {
      var n = root.height + 1;
      root.x0 = root.y0 = padding;
      root.x1 = dx;
      root.y1 = dy / n;
      root.eachBefore(positionNode(dy, n));
      if (round) root.eachBefore(roundNode);
      return root;
    }
    function positionNode(dy, n) {
      return function (node) {
        if (node.children) {
          treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
        }
        var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
      };
    }
    partition.round = function (x) {
      return arguments.length ? (round = !!x, partition) : round;
    };
    partition.size = function (x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
    };
    partition.padding = function (x) {
      return arguments.length ? (padding = +x, partition) : padding;
    };
    return partition;
  }
  var preroot = {
    depth: -1
  }, ambiguous = {};
  function defaultId(d) {
    return d.id;
  }
  function defaultParentId(d) {
    return d.parentId;
  }
  function stratify() {
    var id = defaultId, parentId = defaultParentId;
    function stratify(data) {
      var nodes = Array.from(data), n = nodes.length, d, i, root, parent, node, nodeId, nodeKey, nodeByKey = new Map();
      for (i = 0; i < n; ++i) {
        (d = nodes[i], node = nodes[i] = new Node(d));
        if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
          nodeKey = node.id = nodeId;
          nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
        }
        if ((nodeId = parentId(d, i, data)) != null && (nodeId += "")) {
          node.parent = nodeId;
        }
      }
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (nodeId = node.parent) {
          parent = nodeByKey.get(nodeId);
          if (!parent) throw new Error("missing: " + nodeId);
          if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
          if (parent.children) parent.children.push(node); else parent.children = [node];
          node.parent = parent;
        } else {
          if (root) throw new Error("multiple roots");
          root = node;
        }
      }
      if (!root) throw new Error("no root");
      root.parent = preroot;
      root.eachBefore(function (node) {
        node.depth = node.parent.depth + 1;
        --n;
      }).eachBefore(computeHeight);
      root.parent = null;
      if (n > 0) throw new Error("cycle");
      return root;
    }
    stratify.id = function (x) {
      return arguments.length ? (id = required(x), stratify) : id;
    };
    stratify.parentId = function (x) {
      return arguments.length ? (parentId = required(x), stratify) : parentId;
    };
    return stratify;
  }
  function defaultSeparation$1(a, b) {
    return a.parent === b.parent ? 1 : 2;
  }
  // function radialSeparation(a, b) {
  // return (a.parent === b.parent ? 1 : 2) / a.depth;
  // }
  // This function is used to traverse the left contour of a subtree (or
  // subforest). It returns the successor of v on this contour. This successor is
  // either given by the leftmost child of v or by the thread of v. The function
  // returns null if and only if v is on the highest level of its subtree.
  function nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
  }
  // This function works analogously to nextLeft.
  function nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
  }
  // Shifts the current subtree rooted at w+. This is done by increasing
  // prelim(w+) and mod(w+) by shift.
  function moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  // All other shifts, applied to the smaller subtrees between w- and w+, are
  // performed by this function. To prepare the shifts, we have to adjust
  // change(w+), shift(w+), and change(w-).
  function executeShifts(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  // If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
  // returns the specified (default) ancestor.
  function nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null;
    // default ancestor
    this.a = this;
    // ancestor
    this.z = 0;
    // prelim
    this.m = 0;
    // mod
    this.c = 0;
    // change
    this.s = 0;
    // shift
    this.t = null;
    // thread
    this.i = i;
  }
  TreeNode.prototype = Object.create(Node.prototype);
  function treeRoot(root) {
    var tree = new TreeNode(root, 0), node, nodes = [tree], child, children, i, n;
    while (node = nodes.pop()) {
      if (children = node._.children) {
        node.children = new Array(n = children.length);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new TreeNode(children[i], i));
          child.parent = node;
        }
      }
    }
    (tree.parent = new TreeNode(null, 0)).children = [tree];
    return tree;
  }
  // Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
  function tree() {
    var separation = defaultSeparation$1, dx = 1, dy = 1, nodeSize = null;
    function tree(root) {
      var t = treeRoot(root);
      // Compute the layout using Buchheim et al.’s algorithm.
      (t.eachAfter(firstWalk), t.parent.m = -t.z);
      t.eachBefore(secondWalk);
      // If a fixed node size is specified, scale x and y.
      if (nodeSize) root.eachBefore(sizeNode); else // If a fixed tree size is specified, scale x and y based on the extent.
      // Compute the left-most, right-most, and depth-most nodes for extents.
      {
        var left = root, right = root, bottom = root;
        root.eachBefore(function (node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
        root.eachBefore(function (node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return root;
    }
    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
    // applied recursively to the children of v, as well as the function
    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
    // node v is placed to the midpoint of its outermost children.
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children) {
        executeShifts(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    // Computes all real x-coordinates by summing up the modifiers recursively.
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    // The core of the algorithm. Here, a new subtree is combined with the
    // previous subtrees. Threads are used to traverse the inside and outside
    // contours of the left and right subtree up to the highest common level. The
    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
    // superscript o means outside and i means inside, the subscript - means left
    // subtree and + means right subtree. For summing up the modifiers along the
    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
    // nodes of the inside contours conflict, we compute the left one of the
    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
    // Finally, we add a new thread (if necessary).
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while ((vim = nextRight(vim), vip = nextLeft(vip), vim && vip)) {
          vom = nextLeft(vom);
          vop = nextRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !nextRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !nextLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= dx;
      node.y = node.depth * dy;
    }
    tree.separation = function (x) {
      return arguments.length ? (separation = x, tree) : separation;
    };
    tree.size = function (x) {
      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [dx, dy];
    };
    tree.nodeSize = function (x) {
      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [dx, dy] : null;
    };
    return tree;
  }
  function treemapSlice(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value;
    while (++i < n) {
      (node = nodes[i], node.x0 = x0, node.x1 = x1);
      (node.y0 = y0, node.y1 = y0 += node.value * k);
    }
  }
  var phi = (1 + Math.sqrt(5)) / 2;
  function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while (i0 < n) {
      (dx = x1 - x0, dy = y1 - y0);
      // Find the next non-empty node.
      do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
      minValue = maxValue = sumValue;
      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
      beta = sumValue * sumValue * alpha;
      minRatio = Math.max(maxValue / beta, beta / minValue);
      // Keep adding nodes while the aspect ratio maintains or improves.
      for (; i1 < n; ++i1) {
        sumValue += nodeValue = nodes[i1].value;
        if (nodeValue < minValue) minValue = nodeValue;
        if (nodeValue > maxValue) maxValue = nodeValue;
        beta = sumValue * sumValue * alpha;
        newRatio = Math.max(maxValue / beta, beta / minValue);
        if (newRatio > minRatio) {
          sumValue -= nodeValue;
          break;
        }
        minRatio = newRatio;
      }
      // Position and record the row orientation.
      rows.push(row = {
        value: sumValue,
        dice: dx < dy,
        children: nodes.slice(i0, i1)
      });
      if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1); else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
      (value -= sumValue, i0 = i1);
    }
    return rows;
  }
  var squarify = (function custom(ratio) {
    function squarify(parent, x0, y0, x1, y1) {
      squarifyRatio(ratio, parent, x0, y0, x1, y1);
    }
    squarify.ratio = function (x) {
      return custom((x = +x) > 1 ? x : 1);
    };
    return squarify;
  })(phi);
  function index$1() {
    var tile = squarify, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
    function treemap(root) {
      root.x0 = root.y0 = 0;
      root.x1 = dx;
      root.y1 = dy;
      root.eachBefore(positionNode);
      paddingStack = [0];
      if (round) root.eachBefore(roundNode);
      return root;
    }
    function positionNode(node) {
      var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
      if (node.children) {
        p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
        x0 += paddingLeft(node) - p;
        y0 += paddingTop(node) - p;
        x1 -= paddingRight(node) - p;
        y1 -= paddingBottom(node) - p;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        tile(node, x0, y0, x1, y1);
      }
    }
    treemap.round = function (x) {
      return arguments.length ? (round = !!x, treemap) : round;
    };
    treemap.size = function (x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
    };
    treemap.tile = function (x) {
      return arguments.length ? (tile = required(x), treemap) : tile;
    };
    treemap.padding = function (x) {
      return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
    };
    treemap.paddingInner = function (x) {
      return arguments.length ? (paddingInner = typeof x === "function" ? x : constant(+x), treemap) : paddingInner;
    };
    treemap.paddingOuter = function (x) {
      return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
    };
    treemap.paddingTop = function (x) {
      return arguments.length ? (paddingTop = typeof x === "function" ? x : constant(+x), treemap) : paddingTop;
    };
    treemap.paddingRight = function (x) {
      return arguments.length ? (paddingRight = typeof x === "function" ? x : constant(+x), treemap) : paddingRight;
    };
    treemap.paddingBottom = function (x) {
      return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant(+x), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function (x) {
      return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant(+x), treemap) : paddingLeft;
    };
    return treemap;
  }
  function binary(parent, x0, y0, x1, y1) {
    var nodes = parent.children, i, n = nodes.length, sum, sums = new Array(n + 1);
    for (sums[0] = sum = i = 0; i < n; ++i) {
      sums[i + 1] = sum += nodes[i].value;
    }
    partition(0, n, parent.value, x0, y0, x1, y1);
    function partition(i, j, value, x0, y0, x1, y1) {
      if (i >= j - 1) {
        var node = nodes[i];
        (node.x0 = x0, node.y0 = y0);
        (node.x1 = x1, node.y1 = y1);
        return;
      }
      var valueOffset = sums[i], valueTarget = value / 2 + valueOffset, k = i + 1, hi = j - 1;
      while (k < hi) {
        var mid = k + hi >>> 1;
        if (sums[mid] < valueTarget) k = mid + 1; else hi = mid;
      }
      if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;
      var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
      if (x1 - x0 > y1 - y0) {
        var xk = value ? (x0 * valueRight + x1 * valueLeft) / value : x1;
        partition(i, k, valueLeft, x0, y0, xk, y1);
        partition(k, j, valueRight, xk, y0, x1, y1);
      } else {
        var yk = value ? (y0 * valueRight + y1 * valueLeft) / value : y1;
        partition(i, k, valueLeft, x0, y0, x1, yk);
        partition(k, j, valueRight, x0, yk, x1, y1);
      }
    }
  }
  function sliceDice(parent, x0, y0, x1, y1) {
    (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
  }
  var resquarify = (function custom(ratio) {
    function resquarify(parent, x0, y0, x1, y1) {
      if ((rows = parent._squarify) && rows.ratio === ratio) {
        var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
        while (++j < m) {
          (row = rows[j], nodes = row.children);
          for ((i = row.value = 0, n = nodes.length); i < n; ++i) row.value += nodes[i].value;
          if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1); else treemapSlice(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
          value -= row.value;
        }
      } else {
        parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
        rows.ratio = ratio;
      }
    }
    resquarify.ratio = function (x) {
      return custom((x = +x) > 1 ? x : 1);
    };
    return resquarify;
  })(phi);
  exports.cluster = cluster;
  exports.hierarchy = hierarchy;
  exports.pack = index;
  exports.packEnclose = enclose;
  exports.packSiblings = siblings;
  exports.partition = partition;
  exports.stratify = stratify;
  exports.tree = tree;
  exports.treemap = index$1;
  exports.treemapBinary = binary;
  exports.treemapDice = treemapDice;
  exports.treemapResquarify = resquarify;
  exports.treemapSlice = treemapSlice;
  exports.treemapSliceDice = sliceDice;
  exports.treemapSquarify = squarify;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"1ahO8":[function(require,module,exports) {
var define;
// https://d3js.org/d3-polygon/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  function area(polygon) {
    var i = -1, n = polygon.length, a, b = polygon[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = polygon[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area / 2;
  }
  function centroid(polygon) {
    var i = -1, n = polygon.length, x = 0, y = 0, a, b = polygon[n - 1], c, k = 0;
    while (++i < n) {
      a = b;
      b = polygon[i];
      k += c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return (k *= 3, [x / k, y / k]);
  }
  // Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
  // the 3D cross product in a quadrant I Cartesian coordinate system (+x is
  // right, +y is up). Returns a positive value if ABC is counter-clockwise,
  // negative if clockwise, and zero if the points are collinear.
  function cross(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function lexicographicOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  // Computes the upper convex hull per the monotone chain algorithm.
  // Assumes points.length >= 3, is sorted by x, unique in y.
  // Returns an array of indices into points in left-to-right order.
  function computeUpperHullIndexes(points) {
    const n = points.length, indexes = [0, 1];
    let size = 2, i;
    for (i = 2; i < n; ++i) {
      while (size > 1 && cross(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
      indexes[size++] = i;
    }
    return indexes.slice(0, size);
  }
  function hull(points) {
    if ((n = points.length) < 3) return null;
    var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
    for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
    sortedPoints.sort(lexicographicOrder);
    for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
    var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
    // Construct the hull polygon, removing possible duplicate endpoints.
    var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
    // Add upper hull in right-to-l order.
    // Then add lower hull in left-to-right order.
    for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
    return hull;
  }
  function contains(polygon, point) {
    var n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], x1, y1, inside = false;
    for (var i = 0; i < n; ++i) {
      (p = polygon[i], x1 = p[0], y1 = p[1]);
      if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
      (x0 = x1, y0 = y1);
    }
    return inside;
  }
  function length(polygon) {
    var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
    while (++i < n) {
      xa = xb;
      ya = yb;
      b = polygon[i];
      xb = b[0];
      yb = b[1];
      xa -= xb;
      ya -= yb;
      perimeter += Math.hypot(xa, ya);
    }
    return perimeter;
  }
  exports.polygonArea = area;
  exports.polygonCentroid = centroid;
  exports.polygonContains = contains;
  exports.polygonHull = hull;
  exports.polygonLength = length;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"17aL6":[function(require,module,exports) {
var define;
// https://d3js.org/d3-random/ v2.2.2 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({})));
})(this, function (exports) {
  "use strict";
  var defaultSource = Math.random;
  var uniform = (function sourceRandomUniform(source) {
    function randomUniform(min, max) {
      min = min == null ? 0 : +min;
      max = max == null ? 1 : +max;
      if (arguments.length === 1) (max = min, min = 0); else max -= min;
      return function () {
        return source() * max + min;
      };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
  })(defaultSource);
  var int = (function sourceRandomInt(source) {
    function randomInt(min, max) {
      if (arguments.length < 2) (max = min, min = 0);
      min = Math.floor(min);
      max = Math.floor(max) - min;
      return function () {
        return Math.floor(source() * max + min);
      };
    }
    randomInt.source = sourceRandomInt;
    return randomInt;
  })(defaultSource);
  var normal = (function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
      var x, r;
      mu = mu == null ? 0 : +mu;
      sigma = sigma == null ? 1 : +sigma;
      return function () {
        var y;
        // If available, use the second previously-generated uniform random.
        if (x != null) (y = x, x = null); else // Otherwise, generate a new x and y.
        do {
          x = source() * 2 - 1;
          y = source() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
      };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
  })(defaultSource);
  var logNormal = (function sourceRandomLogNormal(source) {
    var N = normal.source(source);
    function randomLogNormal() {
      var randomNormal = N.apply(this, arguments);
      return function () {
        return Math.exp(randomNormal());
      };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
  })(defaultSource);
  var irwinHall = (function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
      if ((n = +n) <= 0) return () => 0;
      return function () {
        for (var sum = 0, i = n; i > 1; --i) sum += source();
        return sum + i * source();
      };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
  })(defaultSource);
  var bates = (function sourceRandomBates(source) {
    var I = irwinHall.source(source);
    function randomBates(n) {
      // use limiting distribution at n === 0
      if ((n = +n) === 0) return source;
      var randomIrwinHall = I(n);
      return function () {
        return randomIrwinHall() / n;
      };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
  })(defaultSource);
  var exponential = (function sourceRandomExponential(source) {
    function randomExponential(lambda) {
      return function () {
        return -Math.log1p(-source()) / lambda;
      };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
  })(defaultSource);
  var pareto = (function sourceRandomPareto(source) {
    function randomPareto(alpha) {
      if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
      alpha = 1 / -alpha;
      return function () {
        return Math.pow(1 - source(), alpha);
      };
    }
    randomPareto.source = sourceRandomPareto;
    return randomPareto;
  })(defaultSource);
  var bernoulli = (function sourceRandomBernoulli(source) {
    function randomBernoulli(p) {
      if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
      return function () {
        return Math.floor(source() + p);
      };
    }
    randomBernoulli.source = sourceRandomBernoulli;
    return randomBernoulli;
  })(defaultSource);
  var geometric = (function sourceRandomGeometric(source) {
    function randomGeometric(p) {
      if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
      if (p === 0) return () => Infinity;
      if (p === 1) return () => 1;
      p = Math.log1p(-p);
      return function () {
        return 1 + Math.floor(Math.log1p(-source()) / p);
      };
    }
    randomGeometric.source = sourceRandomGeometric;
    return randomGeometric;
  })(defaultSource);
  var gamma = (function sourceRandomGamma(source) {
    var randomNormal = normal.source(source)();
    function randomGamma(k, theta) {
      if ((k = +k) < 0) throw new RangeError("invalid k");
      // degenerate distribution if k === 0
      if (k === 0) return () => 0;
      theta = theta == null ? 1 : +theta;
      // exponential distribution if k === 1
      if (k === 1) return () => -Math.log1p(-source()) * theta;
      var d = (k < 1 ? k + 1 : k) - 1 / 3, c = 1 / (3 * Math.sqrt(d)), multiplier = k < 1 ? () => Math.pow(source(), 1 / k) : () => 1;
      return function () {
        do {
          do {
            var x = randomNormal(), v = 1 + c * x;
          } while (v <= 0);
          v *= v * v;
          var u = 1 - source();
        } while (u >= 1 - 0.0331 * x * x * x * x && Math.log(u) >= 0.5 * x * x + d * (1 - v + Math.log(v)));
        return d * v * multiplier() * theta;
      };
    }
    randomGamma.source = sourceRandomGamma;
    return randomGamma;
  })(defaultSource);
  var beta = (function sourceRandomBeta(source) {
    var G = gamma.source(source);
    function randomBeta(alpha, beta) {
      var X = G(alpha), Y = G(beta);
      return function () {
        var x = X();
        return x === 0 ? 0 : x / (x + Y());
      };
    }
    randomBeta.source = sourceRandomBeta;
    return randomBeta;
  })(defaultSource);
  var binomial = (function sourceRandomBinomial(source) {
    var G = geometric.source(source), B = beta.source(source);
    function randomBinomial(n, p) {
      n = +n;
      if ((p = +p) >= 1) return () => n;
      if (p <= 0) return () => 0;
      return function () {
        var acc = 0, nn = n, pp = p;
        while (nn * pp > 16 && nn * (1 - pp) > 16) {
          var i = Math.floor((nn + 1) * pp), y = B(i, nn - i + 1)();
          if (y <= pp) {
            acc += i;
            nn -= i;
            pp = (pp - y) / (1 - y);
          } else {
            nn = i - 1;
            pp /= y;
          }
        }
        var sign = pp < 0.5, pFinal = sign ? pp : 1 - pp, g = G(pFinal);
        for (var s = g(), k = 0; s <= nn; ++k) s += g();
        return acc + (sign ? k : nn - k);
      };
    }
    randomBinomial.source = sourceRandomBinomial;
    return randomBinomial;
  })(defaultSource);
  var weibull = (function sourceRandomWeibull(source) {
    function randomWeibull(k, a, b) {
      var outerFunc;
      if ((k = +k) === 0) {
        outerFunc = x => -Math.log(x);
      } else {
        k = 1 / k;
        outerFunc = x => Math.pow(x, k);
      }
      a = a == null ? 0 : +a;
      b = b == null ? 1 : +b;
      return function () {
        return a + b * outerFunc(-Math.log1p(-source()));
      };
    }
    randomWeibull.source = sourceRandomWeibull;
    return randomWeibull;
  })(defaultSource);
  var cauchy = (function sourceRandomCauchy(source) {
    function randomCauchy(a, b) {
      a = a == null ? 0 : +a;
      b = b == null ? 1 : +b;
      return function () {
        return a + b * Math.tan(Math.PI * source());
      };
    }
    randomCauchy.source = sourceRandomCauchy;
    return randomCauchy;
  })(defaultSource);
  var logistic = (function sourceRandomLogistic(source) {
    function randomLogistic(a, b) {
      a = a == null ? 0 : +a;
      b = b == null ? 1 : +b;
      return function () {
        var u = source();
        return a + b * Math.log(u / (1 - u));
      };
    }
    randomLogistic.source = sourceRandomLogistic;
    return randomLogistic;
  })(defaultSource);
  var poisson = (function sourceRandomPoisson(source) {
    var G = gamma.source(source), B = binomial.source(source);
    function randomPoisson(lambda) {
      return function () {
        var acc = 0, l = lambda;
        while (l > 16) {
          var n = Math.floor(0.875 * l), t = G(n)();
          if (t > l) return acc + B(n - 1, l / t)();
          acc += n;
          l -= t;
        }
        for (var s = -Math.log1p(-source()), k = 0; s <= l; ++k) s -= Math.log1p(-source());
        return acc + k;
      };
    }
    randomPoisson.source = sourceRandomPoisson;
    return randomPoisson;
  })(defaultSource);
  // https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
  const mul = 0x19660D;
  const inc = 0x3C6EF35F;
  const eps = 1 / 0x100000000;
  function lcg(seed = Math.random()) {
    let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
    return () => (state = mul * state + inc | 0, eps * (state >>> 0));
  }
  exports.randomBates = bates;
  exports.randomBernoulli = bernoulli;
  exports.randomBeta = beta;
  exports.randomBinomial = binomial;
  exports.randomCauchy = cauchy;
  exports.randomExponential = exponential;
  exports.randomGamma = gamma;
  exports.randomGeometric = geometric;
  exports.randomInt = int;
  exports.randomIrwinHall = irwinHall;
  exports.randomLcg = lcg;
  exports.randomLogNormal = logNormal;
  exports.randomLogistic = logistic;
  exports.randomNormal = normal;
  exports.randomPareto = pareto;
  exports.randomPoisson = poisson;
  exports.randomUniform = uniform;
  exports.randomWeibull = weibull;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"2UZ4X":[function(require,module,exports) {
var define;
// https://d3js.org/d3-scale/ v3.3.0 Copyright 2021 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-array'), require('d3-interpolate'), require('d3-format'), require('d3-time'), require('d3-time-format')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-array', 'd3-interpolate', 'd3-format', 'd3-time', 'd3-time-format'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3, global.d3, global.d3, global.d3));
})(this, function (exports, d3Array, d3Interpolate, d3Format, d3Time, d3TimeFormat) {
  "use strict";
  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }
  function initInterpolator(domain, interpolator) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        {
          if (typeof domain === "function") this.interpolator(domain); else this.range(domain);
          break;
        }
      default:
        {
          this.domain(domain);
          if (typeof interpolator === "function") this.interpolator(interpolator); else this.range(interpolator);
          break;
        }
    }
    return this;
  }
  const implicit = Symbol("implicit");
  function ordinal() {
    var index = new Map(), domain = [], range = [], unknown = implicit;
    function scale(d) {
      var key = d + "", i = index.get(key);
      if (!i) {
        if (unknown !== implicit) return unknown;
        index.set(key, i = domain.push(d));
      }
      return range[(i - 1) % range.length];
    }
    scale.domain = function (_) {
      if (!arguments.length) return domain.slice();
      (domain = [], index = new Map());
      for (const value of _) {
        const key = value + "";
        if (index.has(key)) continue;
        index.set(key, domain.push(value));
      }
      return scale;
    };
    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function () {
      return ordinal(domain, range).unknown(unknown);
    };
    initRange.apply(scale, arguments);
    return scale;
  }
  function band() {
    var scale = ordinal().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
      var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
      if (round) step = Math.floor(step);
      start += (stop - start - step * (n - paddingInner)) * align;
      bandwidth = step * (1 - paddingInner);
      if (round) (start = Math.round(start), bandwidth = Math.round(bandwidth));
      var values = d3Array.range(n).map(function (i) {
        return start + step * i;
      });
      return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function (_) {
      return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function (_) {
      return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
    };
    scale.rangeRound = function (_) {
      return ([r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale());
    };
    scale.bandwidth = function () {
      return bandwidth;
    };
    scale.step = function () {
      return step;
    };
    scale.round = function (_) {
      return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function (_) {
      return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function (_) {
      return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function (_) {
      return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function (_) {
      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function () {
      return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return initRange.apply(rescale(), arguments);
  }
  function pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function () {
      return pointish(copy());
    };
    return scale;
  }
  function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
  }
  function constants(x) {
    return function () {
      return x;
    };
  }
  function number$1(x) {
    return +x;
  }
  var unit = [0, 1];
  function identity$1(x) {
    return x;
  }
  function normalize(a, b) {
    return (b -= a = +a) ? function (x) {
      return (x - a) / b;
    } : constants(isNaN(b) ? NaN : 0.5);
  }
  function clamper(a, b) {
    var t;
    if (a > b) (t = a, a = b, b = t);
    return function (x) {
      return Math.max(a, Math.min(b, x));
    };
  }
  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) (d0 = normalize(d1, d0), r0 = interpolate(r1, r0)); else (d0 = normalize(d0, d1), r0 = interpolate(r0, r1));
    return function (x) {
      return r0(d0(x));
    };
  }
  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }
    return function (x) {
      var i = d3Array.bisect(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }
  function copy$1(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer$2() {
    var domain = unit, range = unit, interpolate = d3Interpolate.interpolate, transform, untransform, unknown, clamp = identity$1, piecewise, output, input;
    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function (y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3Interpolate.interpolateNumber)))(y)));
    };
    scale.domain = function (_) {
      return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
    };
    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function (_) {
      return (range = Array.from(_), interpolate = d3Interpolate.interpolateRound, rescale());
    };
    scale.clamp = function (_) {
      return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
    };
    scale.interpolate = function (_) {
      return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function (t, u) {
      (transform = t, untransform = u);
      return rescale();
    };
  }
  function continuous() {
    return transformer$2()(identity$1, identity$1);
  }
  function tickFormat(start, stop, count, specifier) {
    var step = d3Array.tickStep(start, stop, count), precision;
    specifier = d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s":
        {
          var value = Math.max(Math.abs(start), Math.abs(stop));
          if (specifier.precision == null && !isNaN(precision = d3Format.precisionPrefix(step, value))) specifier.precision = precision;
          return d3Format.formatPrefix(specifier, value);
        }
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        {
          if (specifier.precision == null && !isNaN(precision = d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
          break;
        }
      case "f":
      case "%":
        {
          if (specifier.precision == null && !isNaN(precision = d3Format.precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
          break;
        }
    }
    return d3Format.format(specifier);
  }
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function (count) {
      var d = domain();
      return d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function (count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function (count) {
      if (count == null) count = 10;
      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start) {
        (step = start, start = stop, stop = step);
        (step = i0, i0 = i1, i1 = step);
      }
      while (maxIter-- > 0) {
        step = d3Array.tickIncrement(start, stop, count);
        if (step === prestep) {
          d[i0] = start;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start = Math.floor(start / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start = Math.ceil(start * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear() {
    var scale = continuous();
    scale.copy = function () {
      return copy$1(scale, linear());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }
  function identity(domain) {
    var unknown;
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function (_) {
      return arguments.length ? (domain = Array.from(_, number$1), scale) : domain.slice();
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function () {
      return identity(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, number$1) : [0, 1];
    return linearish(scale);
  }
  function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
      (t = i0, i0 = i1, i1 = t);
      (t = x0, x0 = x1, x1 = t);
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
  }
  function transformLog(x) {
    return Math.log(x);
  }
  function transformExp(x) {
    return Math.exp(x);
  }
  function transformLogn(x) {
    return -Math.log(-x);
  }
  function transformExpn(x) {
    return -Math.exp(-x);
  }
  function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
  }
  function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
      return Math.pow(base, x);
    };
  }
  function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
      return Math.log(x) / base;
    });
  }
  function reflect(f) {
    return function (x) {
      return -f(-x);
    };
  }
  function loggish(transform) {
    var scale = transform(transformLog, transformExp), domain = scale.domain, base = 10, logs, pows;
    function rescale() {
      (logs = logp(base), pows = powp(base));
      if (domain()[0] < 0) {
        (logs = reflect(logs), pows = reflect(pows));
        transform(transformLogn, transformExpn);
      } else {
        transform(transformLog, transformExp);
      }
      return scale;
    }
    scale.base = function (_) {
      return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function (_) {
      return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = function (count) {
      var d = domain(), u = d[0], v = d[d.length - 1], r;
      if (r = v < u) (i = u, u = v, v = i);
      var i = logs(u), j = logs(v), p, k, t, n = count == null ? 10 : +count, z = [];
      if (!(base % 1) && j - i < n) {
        (i = Math.floor(i), j = Math.ceil(j));
        if (u > 0) for (; i <= j; ++i) {
          for ((k = 1, p = pows(i)); k < base; ++k) {
            t = p * k;
            if (t < u) continue;
            if (t > v) break;
            z.push(t);
          }
        } else for (; i <= j; ++i) {
          for ((k = base - 1, p = pows(i)); k >= 1; --k) {
            t = p * k;
            if (t < u) continue;
            if (t > v) break;
            z.push(t);
          }
        }
        if (z.length * 2 < n) z = d3Array.ticks(u, v, n);
      } else {
        z = d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
      }
      return r ? z.reverse() : z;
    };
    scale.tickFormat = function (count, specifier) {
      if (specifier == null) specifier = base === 10 ? ".0e" : ",";
      if (typeof specifier !== "function") specifier = d3Format.format(specifier);
      if (count === Infinity) return specifier;
      if (count == null) count = 10;
      var k = Math.max(1, base * count / scale.ticks().length);
      // TODO fast estimate?
      return function (d) {
        var i = d / pows(Math.round(logs(d)));
        if (i * base < base - 0.5) i *= base;
        return i <= k ? specifier(d) : "";
      };
    };
    scale.nice = function () {
      return domain(nice(domain(), {
        floor: function (x) {
          return pows(Math.floor(logs(x)));
        },
        ceil: function (x) {
          return pows(Math.ceil(logs(x)));
        }
      }));
    };
    return scale;
  }
  function log() {
    var scale = loggish(transformer$2()).domain([1, 10]);
    scale.copy = function () {
      return copy$1(scale, log()).base(scale.base());
    };
    initRange.apply(scale, arguments);
    return scale;
  }
  function transformSymlog(c) {
    return function (x) {
      return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
  }
  function transformSymexp(c) {
    return function (x) {
      return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
  }
  function symlogish(transform) {
    var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
    scale.constant = function (_) {
      return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
    };
    return linearish(scale);
  }
  function symlog() {
    var scale = symlogish(transformer$2());
    scale.copy = function () {
      return copy$1(scale, symlog()).constant(scale.constant());
    };
    return initRange.apply(scale, arguments);
  }
  function transformPow(exponent) {
    return function (x) {
      return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
  }
  function transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
  }
  function transformSquare(x) {
    return x < 0 ? -x * x : x * x;
  }
  function powish(transform) {
    var scale = transform(identity$1, identity$1), exponent = 1;
    function rescale() {
      return exponent === 1 ? transform(identity$1, identity$1) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
    }
    scale.exponent = function (_) {
      return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return linearish(scale);
  }
  function pow() {
    var scale = powish(transformer$2());
    scale.copy = function () {
      return copy$1(scale, pow()).exponent(scale.exponent());
    };
    initRange.apply(scale, arguments);
    return scale;
  }
  function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
  }
  function square(x) {
    return Math.sign(x) * x * x;
  }
  function unsquare(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
  }
  function radial() {
    var squared = continuous(), range = [0, 1], round = false, unknown;
    function scale(x) {
      var y = unsquare(squared(x));
      return isNaN(y) ? unknown : round ? Math.round(y) : y;
    }
    scale.invert = function (y) {
      return squared.invert(square(y));
    };
    scale.domain = function (_) {
      return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function (_) {
      return arguments.length ? (squared.range((range = Array.from(_, number$1)).map(square)), scale) : range.slice();
    };
    scale.rangeRound = function (_) {
      return scale.range(_).round(true);
    };
    scale.round = function (_) {
      return arguments.length ? (round = !!_, scale) : round;
    };
    scale.clamp = function (_) {
      return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function () {
      return radial(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }
  function quantile() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
      var i = 0, n = Math.max(1, range.length);
      thresholds = new Array(n - 1);
      while (++i < n) thresholds[i - 1] = d3Array.quantileSorted(domain, i / n);
      return scale;
    }
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : range[d3Array.bisect(thresholds, x)];
    }
    scale.invertExtent = function (y) {
      var i = range.indexOf(y);
      return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
    };
    scale.domain = function (_) {
      if (!arguments.length) return domain.slice();
      domain = [];
      for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
      domain.sort(d3Array.ascending);
      return rescale();
    };
    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function () {
      return thresholds.slice();
    };
    scale.copy = function () {
      return quantile().domain(domain).range(range).unknown(unknown);
    };
    return initRange.apply(scale, arguments);
  }
  function quantize() {
    var x0 = 0, x1 = 1, n = 1, domain = [0.5], range = [0, 1], unknown;
    function scale(x) {
      return x != null && x <= x ? range[d3Array.bisect(domain, x, 0, n)] : unknown;
    }
    function rescale() {
      var i = -1;
      domain = new Array(n);
      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
      return scale;
    }
    scale.domain = function (_) {
      return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
    };
    scale.range = function (_) {
      return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function (y) {
      var i = range.indexOf(y);
      return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function () {
      return domain.slice();
    };
    scale.copy = function () {
      return quantize().domain([x0, x1]).range(range).unknown(unknown);
    };
    return initRange.apply(linearish(scale), arguments);
  }
  function threshold() {
    var domain = [0.5], range = [0, 1], unknown, n = 1;
    function scale(x) {
      return x != null && x <= x ? range[d3Array.bisect(domain, x, 0, n)] : unknown;
    }
    scale.domain = function (_) {
      return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function (y) {
      var i = range.indexOf(y);
      return [domain[i - 1], domain[i]];
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function () {
      return threshold().domain(domain).range(range).unknown(unknown);
    };
    return initRange.apply(scale, arguments);
  }
  function date(t) {
    return new Date(t);
  }
  function number(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }
  function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = continuous(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
      return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function (y) {
      return new Date(invert(y));
    };
    scale.domain = function (_) {
      return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
    };
    scale.ticks = function (interval) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function (count, specifier) {
      return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function (interval) {
      var d = domain();
      if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
      return interval ? domain(nice(d, interval)) : scale;
    };
    scale.copy = function () {
      return copy$1(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
  }
  function time() {
    return initRange.apply(calendar(d3Time.timeTicks, d3Time.timeTickInterval, d3Time.timeYear, d3Time.timeMonth, d3Time.timeWeek, d3Time.timeDay, d3Time.timeHour, d3Time.timeMinute, d3Time.timeSecond, d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
  }
  function utcTime() {
    return initRange.apply(calendar(d3Time.utcTicks, d3Time.utcTickInterval, d3Time.utcYear, d3Time.utcMonth, d3Time.utcWeek, d3Time.utcDay, d3Time.utcHour, d3Time.utcMinute, d3Time.utcSecond, d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
  }
  function transformer$1() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = identity$1, clamp = false, unknown;
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function (_) {
      return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
    };
    scale.clamp = function (_) {
      return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function (_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
      return function (_) {
        var r0, r1;
        return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
      };
    }
    scale.range = range(d3Interpolate.interpolate);
    scale.rangeRound = range(d3Interpolate.interpolateRound);
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function (t) {
      (transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0));
      return scale;
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
  }
  function sequential() {
    var scale = linearish(transformer$1()(identity$1));
    scale.copy = function () {
      return copy(scale, sequential());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialLog() {
    var scale = loggish(transformer$1()).domain([1, 10]);
    scale.copy = function () {
      return copy(scale, sequentialLog()).base(scale.base());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialSymlog() {
    var scale = symlogish(transformer$1());
    scale.copy = function () {
      return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialPow() {
    var scale = powish(transformer$1());
    scale.copy = function () {
      return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
  }
  function sequentialQuantile() {
    var domain = [], interpolator = identity$1;
    function scale(x) {
      if (x != null && !isNaN(x = +x)) return interpolator((d3Array.bisect(domain, x, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function (_) {
      if (!arguments.length) return domain.slice();
      domain = [];
      for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
      domain.sort(d3Array.ascending);
      return scale;
    };
    scale.interpolator = function (_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function () {
      return domain.map((d, i) => interpolator(i / (domain.length - 1)));
    };
    scale.quantiles = function (n) {
      return Array.from({
        length: n + 1
      }, (_, i) => d3Array.quantile(domain, i / n));
    };
    scale.copy = function () {
      return sequentialQuantile(interpolator).domain(domain);
    };
    return initInterpolator.apply(scale, arguments);
  }
  function transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, s = 1, t0, t1, t2, k10, k21, interpolator = identity$1, transform, clamp = false, unknown;
    function scale(x) {
      return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function (_) {
      return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
    };
    scale.clamp = function (_) {
      return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function (_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
      return function (_) {
        var r0, r1, r2;
        return arguments.length ? ([r0, r1, r2] = _, interpolator = d3Interpolate.piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
      };
    }
    scale.range = range(d3Interpolate.interpolate);
    scale.rangeRound = range(d3Interpolate.interpolateRound);
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function (t) {
      (transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1);
      return scale;
    };
  }
  function diverging() {
    var scale = linearish(transformer()(identity$1));
    scale.copy = function () {
      return copy(scale, diverging());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingLog() {
    var scale = loggish(transformer()).domain([0.1, 1, 10]);
    scale.copy = function () {
      return copy(scale, divergingLog()).base(scale.base());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingSymlog() {
    var scale = symlogish(transformer());
    scale.copy = function () {
      return copy(scale, divergingSymlog()).constant(scale.constant());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingPow() {
    var scale = powish(transformer());
    scale.copy = function () {
      return copy(scale, divergingPow()).exponent(scale.exponent());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingSqrt() {
    return divergingPow.apply(null, arguments).exponent(0.5);
  }
  exports.scaleBand = band;
  exports.scaleDiverging = diverging;
  exports.scaleDivergingLog = divergingLog;
  exports.scaleDivergingPow = divergingPow;
  exports.scaleDivergingSqrt = divergingSqrt;
  exports.scaleDivergingSymlog = divergingSymlog;
  exports.scaleIdentity = identity;
  exports.scaleImplicit = implicit;
  exports.scaleLinear = linear;
  exports.scaleLog = log;
  exports.scaleOrdinal = ordinal;
  exports.scalePoint = point;
  exports.scalePow = pow;
  exports.scaleQuantile = quantile;
  exports.scaleQuantize = quantize;
  exports.scaleRadial = radial;
  exports.scaleSequential = sequential;
  exports.scaleSequentialLog = sequentialLog;
  exports.scaleSequentialPow = sequentialPow;
  exports.scaleSequentialQuantile = sequentialQuantile;
  exports.scaleSequentialSqrt = sequentialSqrt;
  exports.scaleSequentialSymlog = sequentialSymlog;
  exports.scaleSqrt = sqrt;
  exports.scaleSymlog = symlog;
  exports.scaleThreshold = threshold;
  exports.scaleTime = time;
  exports.scaleUtc = utcTime;
  exports.tickFormat = tickFormat;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-array":"7CLUA","d3-interpolate":"6eByj","d3-format":"3Bu0B","d3-time":"JGVPX","d3-time-format":"13ygP"}],"JGVPX":[function(require,module,exports) {
var define;
// https://d3js.org/d3-time/ v2.1.1 Copyright 2021 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-array')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-array'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Array) {
  "use strict";
  var t0 = new Date(), t1 = new Date();
  function newInterval(floori, offseti, count, field) {
    function interval(date) {
      return (floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date);
    }
    interval.floor = function (date) {
      return (floori(date = new Date(+date)), date);
    };
    interval.ceil = function (date) {
      return (floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date);
    };
    interval.round = function (date) {
      var d0 = interval(date), d1 = interval.ceil(date);
      return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function (date, step) {
      return (offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date);
    };
    interval.range = function (start, stop, step) {
      var range = [], previous;
      start = interval.ceil(start);
      step = step == null ? 1 : Math.floor(step);
      if (!(start < stop) || !(step > 0)) return range;
      // also handles Invalid Date
      do (range.push(previous = new Date(+start)), offseti(start, step), floori(start)); while (previous < start && start < stop);
      return range;
    };
    interval.filter = function (test) {
      return newInterval(function (date) {
        if (date >= date) while ((floori(date), !test(date))) date.setTime(date - 1);
      }, function (date, step) {
        if (date >= date) {
          if (step < 0) while (++step <= 0) {
            while ((offseti(date, -1), !test(date))) {}
          } else while (--step >= 0) {
            while ((offseti(date, +1), !test(date))) {}
          }
        }
      });
    };
    if (count) {
      interval.count = function (start, end) {
        (t0.setTime(+start), t1.setTime(+end));
        (floori(t0), floori(t1));
        return Math.floor(count(t0, t1));
      };
      interval.every = function (step) {
        step = Math.floor(step);
        return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
          return field(d) % step === 0;
        } : function (d) {
          return interval.count(0, d) % step === 0;
        });
      };
    }
    return interval;
  }
  var millisecond = newInterval(function () {}, function (date, step) {
    date.setTime(+date + step);
  }, function (start, end) {
    return end - start;
  });
  // An optimized implementation for this simple case.
  millisecond.every = function (k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return millisecond;
    return newInterval(function (date) {
      date.setTime(Math.floor(date / k) * k);
    }, function (date, step) {
      date.setTime(+date + step * k);
    }, function (start, end) {
      return (end - start) / k;
    });
  };
  var milliseconds = millisecond.range;
  const durationSecond = 1000;
  const durationMinute = durationSecond * 60;
  const durationHour = durationMinute * 60;
  const durationDay = durationHour * 24;
  const durationWeek = durationDay * 7;
  const durationMonth = durationDay * 30;
  const durationYear = durationDay * 365;
  var second = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds());
  }, function (date, step) {
    date.setTime(+date + step * durationSecond);
  }, function (start, end) {
    return (end - start) / durationSecond;
  }, function (date) {
    return date.getUTCSeconds();
  });
  var seconds = second.range;
  var minute = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
  }, function (date, step) {
    date.setTime(+date + step * durationMinute);
  }, function (start, end) {
    return (end - start) / durationMinute;
  }, function (date) {
    return date.getMinutes();
  });
  var minutes = minute.range;
  var hour = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
  }, function (date, step) {
    date.setTime(+date + step * durationHour);
  }, function (start, end) {
    return (end - start) / durationHour;
  }, function (date) {
    return date.getHours();
  });
  var hours = hour.range;
  var day = newInterval(date => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay, date => date.getDate() - 1);
  var days = day.range;
  function weekday(i) {
    return newInterval(function (date) {
      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
      date.setHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setDate(date.getDate() + step * 7);
    }, function (start, end) {
      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
    });
  }
  var sunday = weekday(0);
  var monday = weekday(1);
  var tuesday = weekday(2);
  var wednesday = weekday(3);
  var thursday = weekday(4);
  var friday = weekday(5);
  var saturday = weekday(6);
  var sundays = sunday.range;
  var mondays = monday.range;
  var tuesdays = tuesday.range;
  var wednesdays = wednesday.range;
  var thursdays = thursday.range;
  var fridays = friday.range;
  var saturdays = saturday.range;
  var month = newInterval(function (date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setMonth(date.getMonth() + step);
  }, function (start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
  }, function (date) {
    return date.getMonth();
  });
  var months = month.range;
  var year = newInterval(function (date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step);
  }, function (start, end) {
    return end.getFullYear() - start.getFullYear();
  }, function (date) {
    return date.getFullYear();
  });
  // An optimized implementation for this simple case.
  year.every = function (k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
      date.setFullYear(Math.floor(date.getFullYear() / k) * k);
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setFullYear(date.getFullYear() + step * k);
    });
  };
  var years = year.range;
  var utcMinute = newInterval(function (date) {
    date.setUTCSeconds(0, 0);
  }, function (date, step) {
    date.setTime(+date + step * durationMinute);
  }, function (start, end) {
    return (end - start) / durationMinute;
  }, function (date) {
    return date.getUTCMinutes();
  });
  var utcMinutes = utcMinute.range;
  var utcHour = newInterval(function (date) {
    date.setUTCMinutes(0, 0, 0);
  }, function (date, step) {
    date.setTime(+date + step * durationHour);
  }, function (start, end) {
    return (end - start) / durationHour;
  }, function (date) {
    return date.getUTCHours();
  });
  var utcHours = utcHour.range;
  var utcDay = newInterval(function (date) {
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step);
  }, function (start, end) {
    return (end - start) / durationDay;
  }, function (date) {
    return date.getUTCDate() - 1;
  });
  var utcDays = utcDay.range;
  function utcWeekday(i) {
    return newInterval(function (date) {
      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
      date.setUTCHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setUTCDate(date.getUTCDate() + step * 7);
    }, function (start, end) {
      return (end - start) / durationWeek;
    });
  }
  var utcSunday = utcWeekday(0);
  var utcMonday = utcWeekday(1);
  var utcTuesday = utcWeekday(2);
  var utcWednesday = utcWeekday(3);
  var utcThursday = utcWeekday(4);
  var utcFriday = utcWeekday(5);
  var utcSaturday = utcWeekday(6);
  var utcSundays = utcSunday.range;
  var utcMondays = utcMonday.range;
  var utcTuesdays = utcTuesday.range;
  var utcWednesdays = utcWednesday.range;
  var utcThursdays = utcThursday.range;
  var utcFridays = utcFriday.range;
  var utcSaturdays = utcSaturday.range;
  var utcMonth = newInterval(function (date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
  }, function (start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
  }, function (date) {
    return date.getUTCMonth();
  });
  var utcMonths = utcMonth.range;
  var utcYear = newInterval(function (date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
  }, function (start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
  }, function (date) {
    return date.getUTCFullYear();
  });
  // An optimized implementation for this simple case.
  utcYear.every = function (k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
      date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
  };
  var utcYears = utcYear.range;
  function ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];
    function ticks(start, stop, count) {
      const reverse = stop < start;
      if (reverse) [start, stop] = [stop, start];
      const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
      const ticks = interval ? interval.range(start, +stop + 1) : [];
      // inclusive stop
      return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
      const target = Math.abs(stop - start) / count;
      const i = d3Array.bisector(([, , step]) => step).right(tickIntervals, target);
      if (i === tickIntervals.length) return year.every(d3Array.tickStep(start / durationYear, stop / durationYear, count));
      if (i === 0) return millisecond.every(Math.max(d3Array.tickStep(start, stop, count), 1));
      const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
      return t.every(step);
    }
    return [ticks, tickInterval];
  }
  const [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute);
  const [timeTicks, timeTickInterval] = ticker(year, month, sunday, day, hour, minute);
  exports.timeDay = day;
  exports.timeDays = days;
  exports.timeFriday = friday;
  exports.timeFridays = fridays;
  exports.timeHour = hour;
  exports.timeHours = hours;
  exports.timeInterval = newInterval;
  exports.timeMillisecond = millisecond;
  exports.timeMilliseconds = milliseconds;
  exports.timeMinute = minute;
  exports.timeMinutes = minutes;
  exports.timeMonday = monday;
  exports.timeMondays = mondays;
  exports.timeMonth = month;
  exports.timeMonths = months;
  exports.timeSaturday = saturday;
  exports.timeSaturdays = saturdays;
  exports.timeSecond = second;
  exports.timeSeconds = seconds;
  exports.timeSunday = sunday;
  exports.timeSundays = sundays;
  exports.timeThursday = thursday;
  exports.timeThursdays = thursdays;
  exports.timeTickInterval = timeTickInterval;
  exports.timeTicks = timeTicks;
  exports.timeTuesday = tuesday;
  exports.timeTuesdays = tuesdays;
  exports.timeWednesday = wednesday;
  exports.timeWednesdays = wednesdays;
  exports.timeWeek = sunday;
  exports.timeWeeks = sundays;
  exports.timeYear = year;
  exports.timeYears = years;
  exports.utcDay = utcDay;
  exports.utcDays = utcDays;
  exports.utcFriday = utcFriday;
  exports.utcFridays = utcFridays;
  exports.utcHour = utcHour;
  exports.utcHours = utcHours;
  exports.utcMillisecond = millisecond;
  exports.utcMilliseconds = milliseconds;
  exports.utcMinute = utcMinute;
  exports.utcMinutes = utcMinutes;
  exports.utcMonday = utcMonday;
  exports.utcMondays = utcMondays;
  exports.utcMonth = utcMonth;
  exports.utcMonths = utcMonths;
  exports.utcSaturday = utcSaturday;
  exports.utcSaturdays = utcSaturdays;
  exports.utcSecond = second;
  exports.utcSeconds = seconds;
  exports.utcSunday = utcSunday;
  exports.utcSundays = utcSundays;
  exports.utcThursday = utcThursday;
  exports.utcThursdays = utcThursdays;
  exports.utcTickInterval = utcTickInterval;
  exports.utcTicks = utcTicks;
  exports.utcTuesday = utcTuesday;
  exports.utcTuesdays = utcTuesdays;
  exports.utcWednesday = utcWednesday;
  exports.utcWednesdays = utcWednesdays;
  exports.utcWeek = utcSunday;
  exports.utcWeeks = utcSundays;
  exports.utcYear = utcYear;
  exports.utcYears = utcYears;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-array":"7CLUA"}],"13ygP":[function(require,module,exports) {
var define;
// https://d3js.org/d3-time-format/ v3.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-time')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-time'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Time) {
  "use strict";
  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date.setFullYear(d.y);
      return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }
  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date.setUTCFullYear(d.y);
      return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }
  function newDate(y, m, d) {
    return {
      y: y,
      m: m,
      d: d,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }
  function formatLocale(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
      "a": formatShortWeekday,
      "A": formatWeekday,
      "b": formatShortMonth,
      "B": formatMonth,
      "c": null,
      "d": formatDayOfMonth,
      "e": formatDayOfMonth,
      "f": formatMicroseconds,
      "g": formatYearISO,
      "G": formatFullYearISO,
      "H": formatHour24,
      "I": formatHour12,
      "j": formatDayOfYear,
      "L": formatMilliseconds,
      "m": formatMonthNumber,
      "M": formatMinutes,
      "p": formatPeriod,
      "q": formatQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatSeconds,
      "u": formatWeekdayNumberMonday,
      "U": formatWeekNumberSunday,
      "V": formatWeekNumberISO,
      "w": formatWeekdayNumberSunday,
      "W": formatWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatYear,
      "Y": formatFullYear,
      "Z": formatZone,
      "%": formatLiteralPercent
    };
    var utcFormats = {
      "a": formatUTCShortWeekday,
      "A": formatUTCWeekday,
      "b": formatUTCShortMonth,
      "B": formatUTCMonth,
      "c": null,
      "d": formatUTCDayOfMonth,
      "e": formatUTCDayOfMonth,
      "f": formatUTCMicroseconds,
      "g": formatUTCYearISO,
      "G": formatUTCFullYearISO,
      "H": formatUTCHour24,
      "I": formatUTCHour12,
      "j": formatUTCDayOfYear,
      "L": formatUTCMilliseconds,
      "m": formatUTCMonthNumber,
      "M": formatUTCMinutes,
      "p": formatUTCPeriod,
      "q": formatUTCQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatUTCSeconds,
      "u": formatUTCWeekdayNumberMonday,
      "U": formatUTCWeekNumberSunday,
      "V": formatUTCWeekNumberISO,
      "w": formatUTCWeekdayNumberSunday,
      "W": formatUTCWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatUTCYear,
      "Y": formatUTCFullYear,
      "Z": formatUTCZone,
      "%": formatLiteralPercent
    };
    var parses = {
      "a": parseShortWeekday,
      "A": parseWeekday,
      "b": parseShortMonth,
      "B": parseMonth,
      "c": parseLocaleDateTime,
      "d": parseDayOfMonth,
      "e": parseDayOfMonth,
      "f": parseMicroseconds,
      "g": parseYear,
      "G": parseFullYear,
      "H": parseHour24,
      "I": parseHour24,
      "j": parseDayOfYear,
      "L": parseMilliseconds,
      "m": parseMonthNumber,
      "M": parseMinutes,
      "p": parsePeriod,
      "q": parseQuarter,
      "Q": parseUnixTimestamp,
      "s": parseUnixTimestampSeconds,
      "S": parseSeconds,
      "u": parseWeekdayNumberMonday,
      "U": parseWeekNumberSunday,
      "V": parseWeekNumberISO,
      "w": parseWeekdayNumberSunday,
      "W": parseWeekNumberMonday,
      "x": parseLocaleDate,
      "X": parseLocaleTime,
      "y": parseYear,
      "Y": parseFullYear,
      "Z": parseZone,
      "%": parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
      return function (date) {
        var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
        if (!(date instanceof Date)) date = new Date(+date);
        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string.push(specifier.slice(j, i));
            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i); else pad = c === "e" ? " " : "0";
            if (format = formats[c]) c = format(date, pad);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(specifier.slice(j, i));
        return string.join("");
      };
    }
    function newParse(specifier, Z) {
      return function (string) {
        var d = newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
        if (i != string.length) return null;
        // If a UNIX timestamp is specified, return it.
        if (("Q" in d)) return new Date(d.Q);
        if (("s" in d)) return new Date(d.s * 1000 + (("L" in d) ? d.L : 0));
        // If this is utcParse, never use the local timezone.
        if (Z && !(("Z" in d))) d.Z = 0;
        // The am-pm flag is 0 for AM, and 1 for PM.
        if (("p" in d)) d.H = d.H % 12 + d.p * 12;
        // If the month was not specified, inherit from the quarter.
        if (d.m === undefined) d.m = ("q" in d) ? d.q : 0;
        // Convert day-of-week and week-of-year to day-of-year.
        if (("V" in d)) {
          if (d.V < 1 || d.V > 53) return null;
          if (!(("w" in d))) d.w = 1;
          if (("Z" in d)) {
            (week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay());
            week = day > 4 || day === 0 ? d3Time.utcMonday.ceil(week) : d3Time.utcMonday(week);
            week = d3Time.utcDay.offset(week, (d.V - 1) * 7);
            d.y = week.getUTCFullYear();
            d.m = week.getUTCMonth();
            d.d = week.getUTCDate() + (d.w + 6) % 7;
          } else {
            (week = localDate(newDate(d.y, 0, 1)), day = week.getDay());
            week = day > 4 || day === 0 ? d3Time.timeMonday.ceil(week) : d3Time.timeMonday(week);
            week = d3Time.timeDay.offset(week, (d.V - 1) * 7);
            d.y = week.getFullYear();
            d.m = week.getMonth();
            d.d = week.getDate() + (d.w + 6) % 7;
          }
        } else if (("W" in d) || ("U" in d)) {
          if (!(("w" in d))) d.w = ("u" in d) ? d.u % 7 : ("W" in d) ? 1 : 0;
          day = ("Z" in d) ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
          d.m = 0;
          d.d = ("W" in d) ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
        }
        // If a time zone is specified, all fields are interpreted as UTC and then
        // offset according to the specified time zone.
        if (("Z" in d)) {
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }
        // Otherwise, all fields are in local time.
        return localDate(d);
      };
    }
    function parseSpecifier(d, specifier, string, j) {
      var i = 0, n = specifier.length, m = string.length, c, parse;
      while (i < n) {
        if (j >= m) return -1;
        c = specifier.charCodeAt(i++);
        if (c === 37) {
          c = specifier.charAt(i++);
          parse = parses[(c in pads) ? specifier.charAt(i++) : c];
          if (!parse || (j = parse(d, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    function parsePeriod(d, string, i) {
      var n = periodRe.exec(string.slice(i));
      return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
      var n = shortWeekdayRe.exec(string.slice(i));
      return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
      var n = weekdayRe.exec(string.slice(i));
      return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
      var n = shortMonthRe.exec(string.slice(i));
      return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
      var n = monthRe.exec(string.slice(i));
      return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
      return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
      return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
      return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
      return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
      return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
      format: function (specifier) {
        var f = newFormat(specifier += "", formats);
        f.toString = function () {
          return specifier;
        };
        return f;
      },
      parse: function (specifier) {
        var p = newParse(specifier += "", false);
        p.toString = function () {
          return specifier;
        };
        return p;
      },
      utcFormat: function (specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.toString = function () {
          return specifier;
        };
        return f;
      },
      utcParse: function (specifier) {
        var p = newParse(specifier += "", true);
        p.toString = function () {
          return specifier;
        };
        return p;
      }
    };
  }
  var pads = {
    "-": "",
    "_": " ",
    "0": "0"
  }, numberRe = /^\s*\d+/, // note: ignores next directive
  percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
  function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function requote(s) {
    return s.replace(requoteRe, "\\$&");
  }
  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }
  function formatLookup(names) {
    return new Map(names.map((name, i) => [name.toLowerCase(), i]));
  }
  function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }
  function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }
  function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }
  function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
  }
  function parseZone(d, string, i) {
    var n = (/^(Z)|([+-]\d\d)(?::?(\d\d))?/).exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
  }
  function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
  }
  function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }
  function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }
  function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }
  function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }
  function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }
  function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }
  function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }
  function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
  }
  function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
  }
  function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
  }
  function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
  }
  function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
  }
  function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
  }
  function formatDayOfYear(d, p) {
    return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3);
  }
  function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
  }
  function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
  }
  function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
  }
  function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
  }
  function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
  }
  function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
  }
  function formatWeekNumberSunday(d, p) {
    return pad(d3Time.timeSunday.count(d3Time.timeYear(d) - 1, d), p, 2);
  }
  function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? d3Time.timeThursday(d) : d3Time.timeThursday.ceil(d);
  }
  function formatWeekNumberISO(d, p) {
    d = dISO(d);
    return pad(d3Time.timeThursday.count(d3Time.timeYear(d), d) + (d3Time.timeYear(d).getDay() === 4), p, 2);
  }
  function formatWeekdayNumberSunday(d) {
    return d.getDay();
  }
  function formatWeekNumberMonday(d, p) {
    return pad(d3Time.timeMonday.count(d3Time.timeYear(d) - 1, d), p, 2);
  }
  function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatYearISO(d, p) {
    d = dISO(d);
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
  }
  function formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? d3Time.timeThursday(d) : d3Time.timeThursday.ceil(d);
    return pad(d.getFullYear() % 10000, p, 4);
  }
  function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
  }
  function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
  }
  function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
  }
  function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
  }
  function formatUTCDayOfYear(d, p) {
    return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
  }
  function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
  }
  function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
  }
  function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
  }
  function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
  }
  function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
  }
  function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
  }
  function formatUTCWeekNumberSunday(d, p) {
    return pad(d3Time.utcSunday.count(d3Time.utcYear(d) - 1, d), p, 2);
  }
  function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? d3Time.utcThursday(d) : d3Time.utcThursday.ceil(d);
  }
  function formatUTCWeekNumberISO(d, p) {
    d = UTCdISO(d);
    return pad(d3Time.utcThursday.count(d3Time.utcYear(d), d) + (d3Time.utcYear(d).getUTCDay() === 4), p, 2);
  }
  function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
  }
  function formatUTCWeekNumberMonday(d, p) {
    return pad(d3Time.utcMonday.count(d3Time.utcYear(d) - 1, d), p, 2);
  }
  function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCYearISO(d, p) {
    d = UTCdISO(d);
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
  }
  function formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? d3Time.utcThursday(d) : d3Time.utcThursday.ceil(d);
    return pad(d.getUTCFullYear() % 10000, p, 4);
  }
  function formatUTCZone() {
    return "+0000";
  }
  function formatLiteralPercent() {
    return "%";
  }
  function formatUnixTimestamp(d) {
    return +d;
  }
  function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
  }
  var locale;
  defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  function defaultLocale(definition) {
    locale = formatLocale(definition);
    exports.timeFormat = locale.format;
    exports.timeParse = locale.parse;
    exports.utcFormat = locale.utcFormat;
    exports.utcParse = locale.utcParse;
    return locale;
  }
  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
  function formatIsoNative(date) {
    return date.toISOString();
  }
  var formatIso = Date.prototype.toISOString ? formatIsoNative : exports.utcFormat(isoSpecifier);
  function parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  }
  var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : exports.utcParse(isoSpecifier);
  exports.isoFormat = formatIso;
  exports.isoParse = parseIso;
  exports.timeFormatDefaultLocale = defaultLocale;
  exports.timeFormatLocale = formatLocale;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-time":"JGVPX"}],"3ZacZ":[function(require,module,exports) {
var define;
// https://d3js.org/d3-scale-chromatic/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-interpolate'), require('d3-color')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-interpolate', 'd3-color'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3));
})(this, function (exports, d3Interpolate, d3Color) {
  "use strict";
  function colors(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }
  var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
  var Accent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
  var Dark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
  var Paired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
  var Pastel1 = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
  var Pastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
  var Set1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
  var Set2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
  var Set3 = colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
  var Tableau10 = colors("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
  var ramp = scheme => d3Interpolate.interpolateRgbBasis(scheme[scheme.length - 1]);
  var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors);
  var BrBG = ramp(scheme);
  var scheme$1 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors);
  var PRGn = ramp(scheme$1);
  var scheme$2 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors);
  var PiYG = ramp(scheme$2);
  var scheme$3 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors);
  var PuOr = ramp(scheme$3);
  var scheme$4 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors);
  var RdBu = ramp(scheme$4);
  var scheme$5 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors);
  var RdGy = ramp(scheme$5);
  var scheme$6 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors);
  var RdYlBu = ramp(scheme$6);
  var scheme$7 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors);
  var RdYlGn = ramp(scheme$7);
  var scheme$8 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors);
  var Spectral = ramp(scheme$8);
  var scheme$9 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors);
  var BuGn = ramp(scheme$9);
  var scheme$a = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors);
  var BuPu = ramp(scheme$a);
  var scheme$b = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors);
  var GnBu = ramp(scheme$b);
  var scheme$c = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors);
  var OrRd = ramp(scheme$c);
  var scheme$d = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors);
  var PuBuGn = ramp(scheme$d);
  var scheme$e = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors);
  var PuBu = ramp(scheme$e);
  var scheme$f = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors);
  var PuRd = ramp(scheme$f);
  var scheme$g = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors);
  var RdPu = ramp(scheme$g);
  var scheme$h = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors);
  var YlGnBu = ramp(scheme$h);
  var scheme$i = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors);
  var YlGn = ramp(scheme$i);
  var scheme$j = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors);
  var YlOrBr = ramp(scheme$j);
  var scheme$k = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors);
  var YlOrRd = ramp(scheme$k);
  var scheme$l = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors);
  var Blues = ramp(scheme$l);
  var scheme$m = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors);
  var Greens = ramp(scheme$m);
  var scheme$n = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors);
  var Greys = ramp(scheme$n);
  var scheme$o = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors);
  var Purples = ramp(scheme$o);
  var scheme$p = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors);
  var Reds = ramp(scheme$p);
  var scheme$q = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors);
  var Oranges = ramp(scheme$q);
  function cividis(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
  }
  var cubehelix = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(300, 0.5, 0.0), d3Color.cubehelix(-240, 0.5, 1.0));
  var warm = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(-100, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8));
  var cool = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(260, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8));
  var c = d3Color.cubehelix();
  function rainbow(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    c.h = 360 * t - 100;
    c.s = 1.5 - 1.5 * ts;
    c.l = 0.8 - 0.9 * ts;
    return c + "";
  }
  var c$1 = d3Color.rgb(), pi_1_3 = Math.PI / 3, pi_2_3 = Math.PI * 2 / 3;
  function sinebow(t) {
    var x;
    t = (0.5 - t) * Math.PI;
    c$1.r = 255 * (x = Math.sin(t)) * x;
    c$1.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
    c$1.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
    return c$1 + "";
  }
  function turbo(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
  }
  function ramp$1(range) {
    var n = range.length;
    return function (t) {
      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }
  var viridis = ramp$1(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
  var magma = ramp$1(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
  var inferno = ramp$1(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
  var plasma = ramp$1(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
  exports.interpolateBlues = Blues;
  exports.interpolateBrBG = BrBG;
  exports.interpolateBuGn = BuGn;
  exports.interpolateBuPu = BuPu;
  exports.interpolateCividis = cividis;
  exports.interpolateCool = cool;
  exports.interpolateCubehelixDefault = cubehelix;
  exports.interpolateGnBu = GnBu;
  exports.interpolateGreens = Greens;
  exports.interpolateGreys = Greys;
  exports.interpolateInferno = inferno;
  exports.interpolateMagma = magma;
  exports.interpolateOrRd = OrRd;
  exports.interpolateOranges = Oranges;
  exports.interpolatePRGn = PRGn;
  exports.interpolatePiYG = PiYG;
  exports.interpolatePlasma = plasma;
  exports.interpolatePuBu = PuBu;
  exports.interpolatePuBuGn = PuBuGn;
  exports.interpolatePuOr = PuOr;
  exports.interpolatePuRd = PuRd;
  exports.interpolatePurples = Purples;
  exports.interpolateRainbow = rainbow;
  exports.interpolateRdBu = RdBu;
  exports.interpolateRdGy = RdGy;
  exports.interpolateRdPu = RdPu;
  exports.interpolateRdYlBu = RdYlBu;
  exports.interpolateRdYlGn = RdYlGn;
  exports.interpolateReds = Reds;
  exports.interpolateSinebow = sinebow;
  exports.interpolateSpectral = Spectral;
  exports.interpolateTurbo = turbo;
  exports.interpolateViridis = viridis;
  exports.interpolateWarm = warm;
  exports.interpolateYlGn = YlGn;
  exports.interpolateYlGnBu = YlGnBu;
  exports.interpolateYlOrBr = YlOrBr;
  exports.interpolateYlOrRd = YlOrRd;
  exports.schemeAccent = Accent;
  exports.schemeBlues = scheme$l;
  exports.schemeBrBG = scheme;
  exports.schemeBuGn = scheme$9;
  exports.schemeBuPu = scheme$a;
  exports.schemeCategory10 = category10;
  exports.schemeDark2 = Dark2;
  exports.schemeGnBu = scheme$b;
  exports.schemeGreens = scheme$m;
  exports.schemeGreys = scheme$n;
  exports.schemeOrRd = scheme$c;
  exports.schemeOranges = scheme$q;
  exports.schemePRGn = scheme$1;
  exports.schemePaired = Paired;
  exports.schemePastel1 = Pastel1;
  exports.schemePastel2 = Pastel2;
  exports.schemePiYG = scheme$2;
  exports.schemePuBu = scheme$e;
  exports.schemePuBuGn = scheme$d;
  exports.schemePuOr = scheme$3;
  exports.schemePuRd = scheme$f;
  exports.schemePurples = scheme$o;
  exports.schemeRdBu = scheme$4;
  exports.schemeRdGy = scheme$5;
  exports.schemeRdPu = scheme$g;
  exports.schemeRdYlBu = scheme$6;
  exports.schemeRdYlGn = scheme$7;
  exports.schemeReds = scheme$p;
  exports.schemeSet1 = Set1;
  exports.schemeSet2 = Set2;
  exports.schemeSet3 = Set3;
  exports.schemeSpectral = scheme$8;
  exports.schemeTableau10 = Tableau10;
  exports.schemeYlGn = scheme$i;
  exports.schemeYlGnBu = scheme$h;
  exports.schemeYlOrBr = scheme$j;
  exports.schemeYlOrRd = scheme$k;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-interpolate":"6eByj","d3-color":"3mmqs"}],"fW1hY":[function(require,module,exports) {
var define;
// https://d3js.org/d3-shape/ v2.1.0 Copyright 2021 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-path')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-path'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({}), global.d3));
})(this, function (exports, d3Path) {
  "use strict";
  function constant(x) {
    return function constant() {
      return x;
    };
  }
  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var max = Math.max;
  var min = Math.min;
  var sin = Math.sin;
  var sqrt = Math.sqrt;
  var epsilon = 1e-12;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var tau = 2 * pi;
  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
  }
  function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
  }
  function arcInnerRadius(d) {
    return d.innerRadius;
  }
  function arcOuterRadius(d) {
    return d.outerRadius;
  }
  function arcStartAngle(d) {
    return d.startAngle;
  }
  function arcEndAngle(d) {
    return d.endAngle;
  }
  function arcPadAngle(d) {
    return d && d.padAngle;
  }
  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < epsilon) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [x0 + t * x10, y0 + t * y10];
  }
  // Compute perpendicular offset line of length rc.
  // http://mathworld.wolfram.com/Circle-LineIntersection.html
  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) (cx0 = cx1, cy0 = cy1);
    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }
  function arc() {
    var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
    function arc() {
      var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
      if (!context) context = buffer = d3Path.path();
      // Ensure that the outer radius is always larger than the inner radius.
      if (r1 < r0) (r = r1, r1 = r0, r0 = r);
      // Is it a point?
      if (!(r1 > epsilon)) context.moveTo(0, 0); else // Or is it a circle or annulus?
      if (da > tau - epsilon) {
        context.moveTo(r1 * cos(a0), r1 * sin(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > epsilon) {
          context.moveTo(r0 * cos(a1), r0 * sin(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
              // Or is it a circular or annular sector?
} else // Or is it a circular or annular sector?
      {
        var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
        if (rp > epsilon) {
          var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
          if ((da0 -= p0 * 2) > epsilon) (p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0); else (da0 = 0, a00 = a10 = (a0 + a1) / 2);
          if ((da1 -= p1 * 2) > epsilon) (p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1); else (da1 = 0, a01 = a11 = (a0 + a1) / 2);
        }
        var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
        // Apply rounded corners?
        if (rc > epsilon) {
          var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
          // Restrict the corner radius according to the sector angle.
          if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          }
        }
        // Is the sector collapsed to a line?
        if (!(da1 > epsilon)) context.moveTo(x01, y01); else // Does the sector’s outer ring have rounded corners?
        if (rc1 > epsilon) {
          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
          // Have the corners merged?
          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw); else // Otherwise, draw the two corners and the ring.
          {
            context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
            context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
          }
                  // Or is the outer ring just a circular arc?
} else // Or is the outer ring just a circular arc?
        (context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw));
        // Is there no inner ring, and it’s a circular sector?
        // Or perhaps it’s an annular sector collapsed due to padding?
        if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10); else // Does the sector’s inner ring (or point) have rounded corners?
        if (rc0 > epsilon) {
          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
          // Have the corners merged?
          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw); else // Otherwise, draw the two corners and the ring.
          {
            context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
            context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
          }
                  // Or is the inner ring just a circular arc?
} else // Or is the inner ring just a circular arc?
        context.arc(0, 0, r0, a10, a00, cw);
      }
      context.closePath();
      if (buffer) return (context = null, buffer + "" || null);
    }
    arc.centroid = function () {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
      return [cos(a) * r, sin(a) * r];
    };
    arc.innerRadius = function (_) {
      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
    };
    arc.outerRadius = function (_) {
      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function (_) {
      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
    };
    arc.padRadius = function (_) {
      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
    };
    arc.startAngle = function (_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
    };
    arc.endAngle = function (_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
    };
    arc.padAngle = function (_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
    };
    arc.context = function (_) {
      return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
  }
  var slice = Array.prototype.slice;
  function array(x) {
    return typeof x === "object" && ("length" in x) ? x : // Array, TypedArray, NodeList, array-like
    Array.from(x);
  }
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(x, y);
          break;
      }
    }
  };
  function curveLinear(context) {
    return new Linear(context);
  }
  function x(p) {
    return p[0];
  }
  function y(p) {
    return p[1];
  }
  function line(x$1, y$1) {
    var defined = constant(true), context = null, curve = curveLinear, output = null;
    x$1 = typeof x$1 === "function" ? x$1 : x$1 === undefined ? x : constant(x$1);
    y$1 = typeof y$1 === "function" ? y$1 : y$1 === undefined ? y : constant(y$1);
    function line(data) {
      var i, n = (data = array(data)).length, d, defined0 = false, buffer;
      if (context == null) output = curve(buffer = d3Path.path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart(); else output.lineEnd();
        }
        if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
      }
      if (buffer) return (output = null, buffer + "" || null);
    }
    line.x = function (_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
    };
    line.y = function (_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
    };
    line.defined = function (_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
    };
    line.curve = function (_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function (_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
  }
  function area(x0, y0, y1) {
    var x1 = null, defined = constant(true), context = null, curve = curveLinear, output = null;
    x0 = typeof x0 === "function" ? x0 : x0 === undefined ? x : constant(+x0);
    y0 = typeof y0 === "function" ? y0 : y0 === undefined ? constant(0) : constant(+y0);
    y1 = typeof y1 === "function" ? y1 : y1 === undefined ? y : constant(+y1);
    function area(data) {
      var i, j, k, n = (data = array(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
      if (context == null) output = curve(buffer = d3Path.path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) {
            j = i;
            output.areaStart();
            output.lineStart();
          } else {
            output.lineEnd();
            output.lineStart();
            for (k = i - 1; k >= j; --k) {
              output.point(x0z[k], y0z[k]);
            }
            output.lineEnd();
            output.areaEnd();
          }
        }
        if (defined0) {
          (x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data));
          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
        }
      }
      if (buffer) return (output = null, buffer + "" || null);
    }
    function arealine() {
      return line().defined(defined).curve(curve).context(context);
    }
    area.x = function (_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
    };
    area.x0 = function (_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
    };
    area.x1 = function (_) {
      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
    };
    area.y = function (_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
    };
    area.y0 = function (_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
    };
    area.y1 = function (_) {
      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
    };
    area.lineX0 = area.lineY0 = function () {
      return arealine().x(x0).y(y0);
    };
    area.lineY1 = function () {
      return arealine().x(x0).y(y1);
    };
    area.lineX1 = function () {
      return arealine().x(x1).y(y0);
    };
    area.defined = function (_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
    };
    area.curve = function (_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function (_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
  }
  function descending$1(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }
  function identity(d) {
    return d;
  }
  function pie() {
    var value = identity, sortValues = descending$1, sort = null, startAngle = constant(0), endAngle = constant(tau), padAngle = constant(0);
    function pie(data) {
      var i, n = (data = array(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
      for (i = 0; i < n; ++i) {
        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
          sum += v;
        }
      }
      // Optionally sort the arcs by previously-computed values or by data.
      if (sortValues != null) index.sort(function (i, j) {
        return sortValues(arcs[i], arcs[j]);
      }); else if (sort != null) index.sort(function (i, j) {
        return sort(data[i], data[j]);
      });
      // Compute the arcs! They are stored in the original data's order.
      for ((i = 0, k = sum ? (da - n * pa) / sum : 0); i < n; (++i, a0 = a1)) {
        (j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
          data: data[j],
          index: i,
          value: v,
          startAngle: a0,
          endAngle: a1,
          padAngle: p
        });
      }
      return arcs;
    }
    pie.value = function (_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
    };
    pie.sortValues = function (_) {
      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
    pie.sort = function (_) {
      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
    pie.startAngle = function (_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
    };
    pie.endAngle = function (_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
    };
    pie.padAngle = function (_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
    };
    return pie;
  }
  var curveRadialLinear = curveRadial$1(curveLinear);
  function Radial(curve) {
    this._curve = curve;
  }
  Radial.prototype = {
    areaStart: function () {
      this._curve.areaStart();
    },
    areaEnd: function () {
      this._curve.areaEnd();
    },
    lineStart: function () {
      this._curve.lineStart();
    },
    lineEnd: function () {
      this._curve.lineEnd();
    },
    point: function (a, r) {
      this._curve.point(r * Math.sin(a), r * -Math.cos(a));
    }
  };
  function curveRadial$1(curve) {
    function radial(context) {
      return new Radial(curve(context));
    }
    radial._curve = curve;
    return radial;
  }
  function lineRadial(l) {
    var c = l.curve;
    (l.angle = l.x, delete l.x);
    (l.radius = l.y, delete l.y);
    l.curve = function (_) {
      return arguments.length ? c(curveRadial$1(_)) : c()._curve;
    };
    return l;
  }
  function lineRadial$1() {
    return lineRadial(line().curve(curveRadialLinear));
  }
  function areaRadial() {
    var a = area().curve(curveRadialLinear), c = a.curve, x0 = a.lineX0, x1 = a.lineX1, y0 = a.lineY0, y1 = a.lineY1;
    (a.angle = a.x, delete a.x);
    (a.startAngle = a.x0, delete a.x0);
    (a.endAngle = a.x1, delete a.x1);
    (a.radius = a.y, delete a.y);
    (a.innerRadius = a.y0, delete a.y0);
    (a.outerRadius = a.y1, delete a.y1);
    (a.lineStartAngle = function () {
      return lineRadial(x0());
    }, delete a.lineX0);
    (a.lineEndAngle = function () {
      return lineRadial(x1());
    }, delete a.lineX1);
    (a.lineInnerRadius = function () {
      return lineRadial(y0());
    }, delete a.lineY0);
    (a.lineOuterRadius = function () {
      return lineRadial(y1());
    }, delete a.lineY1);
    a.curve = function (_) {
      return arguments.length ? c(curveRadial$1(_)) : c()._curve;
    };
    return a;
  }
  function pointRadial(x, y) {
    return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
  }
  function linkSource(d) {
    return d.source;
  }
  function linkTarget(d) {
    return d.target;
  }
  function link(curve) {
    var source = linkSource, target = linkTarget, x$1 = x, y$1 = y, context = null;
    function link() {
      var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
      if (!context) context = buffer = d3Path.path();
      curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
      if (buffer) return (context = null, buffer + "" || null);
    }
    link.source = function (_) {
      return arguments.length ? (source = _, link) : source;
    };
    link.target = function (_) {
      return arguments.length ? (target = _, link) : target;
    };
    link.x = function (_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), link) : x$1;
    };
    link.y = function (_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), link) : y$1;
    };
    link.context = function (_) {
      return arguments.length ? (context = _ == null ? null : _, link) : context;
    };
    return link;
  }
  function curveHorizontal(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
  }
  function curveVertical(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
  }
  function curveRadial(context, x0, y0, x1, y1) {
    var p0 = pointRadial(x0, y0), p1 = pointRadial(x0, y0 = (y0 + y1) / 2), p2 = pointRadial(x1, y0), p3 = pointRadial(x1, y1);
    context.moveTo(p0[0], p0[1]);
    context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  }
  function linkHorizontal() {
    return link(curveHorizontal);
  }
  function linkVertical() {
    return link(curveVertical);
  }
  function linkRadial() {
    var l = link(curveRadial);
    (l.angle = l.x, delete l.x);
    (l.radius = l.y, delete l.y);
    return l;
  }
  var circle = {
    draw: function (context, size) {
      var r = Math.sqrt(size / pi);
      context.moveTo(r, 0);
      context.arc(0, 0, r, 0, tau);
    }
  };
  var cross = {
    draw: function (context, size) {
      var r = Math.sqrt(size / 5) / 2;
      context.moveTo(-3 * r, -r);
      context.lineTo(-r, -r);
      context.lineTo(-r, -3 * r);
      context.lineTo(r, -3 * r);
      context.lineTo(r, -r);
      context.lineTo(3 * r, -r);
      context.lineTo(3 * r, r);
      context.lineTo(r, r);
      context.lineTo(r, 3 * r);
      context.lineTo(-r, 3 * r);
      context.lineTo(-r, r);
      context.lineTo(-3 * r, r);
      context.closePath();
    }
  };
  var tan30 = Math.sqrt(1 / 3), tan30_2 = tan30 * 2;
  var diamond = {
    draw: function (context, size) {
      var y = Math.sqrt(size / tan30_2), x = y * tan30;
      context.moveTo(0, -y);
      context.lineTo(x, 0);
      context.lineTo(0, y);
      context.lineTo(-x, 0);
      context.closePath();
    }
  };
  var ka = 0.89081309152928522810, kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10), kx = Math.sin(tau / 10) * kr, ky = -Math.cos(tau / 10) * kr;
  var star = {
    draw: function (context, size) {
      var r = Math.sqrt(size * ka), x = kx * r, y = ky * r;
      context.moveTo(0, -r);
      context.lineTo(x, y);
      for (var i = 1; i < 5; ++i) {
        var a = tau * i / 5, c = Math.cos(a), s = Math.sin(a);
        context.lineTo(s * r, -c * r);
        context.lineTo(c * x - s * y, s * x + c * y);
      }
      context.closePath();
    }
  };
  var square = {
    draw: function (context, size) {
      var w = Math.sqrt(size), x = -w / 2;
      context.rect(x, x, w, w);
    }
  };
  var sqrt3 = Math.sqrt(3);
  var triangle = {
    draw: function (context, size) {
      var y = -Math.sqrt(size / (sqrt3 * 3));
      context.moveTo(0, y * 2);
      context.lineTo(-sqrt3 * y, -y);
      context.lineTo(sqrt3 * y, -y);
      context.closePath();
    }
  };
  var c = -0.5, s = Math.sqrt(3) / 2, k = 1 / Math.sqrt(12), a = (k / 2 + 1) * 3;
  var wye = {
    draw: function (context, size) {
      var r = Math.sqrt(size / a), x0 = r / 2, y0 = r * k, x1 = x0, y1 = r * k + r, x2 = -x1, y2 = y1;
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
      context.closePath();
    }
  };
  var symbols = [circle, cross, diamond, square, star, triangle, wye];
  function symbol(type, size) {
    var context = null;
    type = typeof type === "function" ? type : constant(type || circle);
    size = typeof size === "function" ? size : constant(size === undefined ? 64 : +size);
    function symbol() {
      var buffer;
      if (!context) context = buffer = d3Path.path();
      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
      if (buffer) return (context = null, buffer + "" || null);
    }
    symbol.type = function (_) {
      return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
    };
    symbol.size = function (_) {
      return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
    };
    symbol.context = function (_) {
      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
  }
  function noop() {}
  function point$3(that, x, y) {
    that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
  }
  function Basis(context) {
    this._context = context;
  }
  Basis.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          point$3(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
          point$3(this, x, y);
          break;
      }
      (this._x0 = this._x1, this._x1 = x);
      (this._y0 = this._y1, this._y1 = y);
    }
  };
  function basis(context) {
    return new Basis(context);
  }
  function BasisClosed(context) {
    this._context = context;
  }
  BasisClosed.prototype = {
    areaStart: noop,
    areaEnd: noop,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          {
            this._context.moveTo(this._x2, this._y2);
            this._context.closePath();
            break;
          }
        case 2:
          {
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
            this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
            this._context.closePath();
            break;
          }
        case 3:
          {
            this.point(this._x2, this._y2);
            this.point(this._x3, this._y3);
            this.point(this._x4, this._y4);
            break;
          }
      }
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          (this._x2 = x, this._y2 = y);
          break;
        case 1:
          this._point = 2;
          (this._x3 = x, this._y3 = y);
          break;
        case 2:
          this._point = 3;
          (this._x4 = x, this._y4 = y);
          this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
          break;
        default:
          point$3(this, x, y);
          break;
      }
      (this._x0 = this._x1, this._x1 = x);
      (this._y0 = this._y1, this._y1 = y);
    }
  };
  function basisClosed(context) {
    return new BasisClosed(context);
  }
  function BasisOpen(context) {
    this._context = context;
  }
  BasisOpen.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
          this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
          break;
        case 3:
          this._point = 4;
        default:
          point$3(this, x, y);
          break;
      }
      (this._x0 = this._x1, this._x1 = x);
      (this._y0 = this._y1, this._y1 = y);
    }
  };
  function basisOpen(context) {
    return new BasisOpen(context);
  }
  class Bump {
    constructor(context, x) {
      this._context = context;
      this._x = x;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    }
    point(x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          {
            this._point = 1;
            if (this._line) this._context.lineTo(x, y); else this._context.moveTo(x, y);
            break;
          }
        case 1:
          this._point = 2;
        default:
          {
            if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y); else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
            break;
          }
      }
      (this._x0 = x, this._y0 = y);
    }
  }
  function bumpX(context) {
    return new Bump(context, true);
  }
  function bumpY(context) {
    return new Bump(context, false);
  }
  function Bundle(context, beta) {
    this._basis = new Basis(context);
    this._beta = beta;
  }
  Bundle.prototype = {
    lineStart: function () {
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function () {
      var x = this._x, y = this._y, j = x.length - 1;
      if (j > 0) {
        var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
        while (++i <= j) {
          t = i / j;
          this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
        }
      }
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function (x, y) {
      this._x.push(+x);
      this._y.push(+y);
    }
  };
  var bundle = (function custom(beta) {
    function bundle(context) {
      return beta === 1 ? new Basis(context) : new Bundle(context, beta);
    }
    bundle.beta = function (beta) {
      return custom(+beta);
    };
    return bundle;
  })(0.85);
  function point$2(that, x, y) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
  }
  function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  Cardinal.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          point$2(this, this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
          (this._x1 = x, this._y1 = y);
          break;
        case 2:
          this._point = 3;
        default:
          point$2(this, x, y);
          break;
      }
      (this._x0 = this._x1, this._x1 = this._x2, this._x2 = x);
      (this._y0 = this._y1, this._y1 = this._y2, this._y2 = y);
    }
  };
  var cardinal = (function custom(tension) {
    function cardinal(context) {
      return new Cardinal(context, tension);
    }
    cardinal.tension = function (tension) {
      return custom(+tension);
    };
    return cardinal;
  })(0);
  function CardinalClosed(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalClosed.prototype = {
    areaStart: noop,
    areaEnd: noop,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          {
            this._context.moveTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
        case 2:
          {
            this._context.lineTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
        case 3:
          {
            this.point(this._x3, this._y3);
            this.point(this._x4, this._y4);
            this.point(this._x5, this._y5);
            break;
          }
      }
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          (this._x3 = x, this._y3 = y);
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x, this._y4 = y);
          break;
        case 2:
          this._point = 3;
          (this._x5 = x, this._y5 = y);
          break;
        default:
          point$2(this, x, y);
          break;
      }
      (this._x0 = this._x1, this._x1 = this._x2, this._x2 = x);
      (this._y0 = this._y1, this._y1 = this._y2, this._y2 = y);
    }
  };
  var cardinalClosed = (function custom(tension) {
    function cardinal(context) {
      return new CardinalClosed(context, tension);
    }
    cardinal.tension = function (tension) {
      return custom(+tension);
    };
    return cardinal;
  })(0);
  function CardinalOpen(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalOpen.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          point$2(this, x, y);
          break;
      }
      (this._x0 = this._x1, this._x1 = this._x2, this._x2 = x);
      (this._y0 = this._y1, this._y1 = this._y2, this._y2 = y);
    }
  };
  var cardinalOpen = (function custom(tension) {
    function cardinal(context) {
      return new CardinalOpen(context, tension);
    }
    cardinal.tension = function (tension) {
      return custom(+tension);
    };
    return cardinal;
  })(0);
  function point$1(that, x, y) {
    var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
    if (that._l01_a > epsilon) {
      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > epsilon) {
      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
      x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
      y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
  }
  function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRom.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      if (this._point) {
        var x23 = this._x2 - x, y23 = this._y2 - y;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          point$1(this, x, y);
          break;
      }
      (this._l01_a = this._l12_a, this._l12_a = this._l23_a);
      (this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a);
      (this._x0 = this._x1, this._x1 = this._x2, this._x2 = x);
      (this._y0 = this._y1, this._y1 = this._y2, this._y2 = y);
    }
  };
  var catmullRom = (function custom(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
    }
    catmullRom.alpha = function (alpha) {
      return custom(+alpha);
    };
    return catmullRom;
  })(0.5);
  function CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomClosed.prototype = {
    areaStart: noop,
    areaEnd: noop,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          {
            this._context.moveTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
        case 2:
          {
            this._context.lineTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
        case 3:
          {
            this.point(this._x3, this._y3);
            this.point(this._x4, this._y4);
            this.point(this._x5, this._y5);
            break;
          }
      }
    },
    point: function (x, y) {
      (x = +x, y = +y);
      if (this._point) {
        var x23 = this._x2 - x, y23 = this._y2 - y;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          (this._x3 = x, this._y3 = y);
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x, this._y4 = y);
          break;
        case 2:
          this._point = 3;
          (this._x5 = x, this._y5 = y);
          break;
        default:
          point$1(this, x, y);
          break;
      }
      (this._l01_a = this._l12_a, this._l12_a = this._l23_a);
      (this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a);
      (this._x0 = this._x1, this._x1 = this._x2, this._x2 = x);
      (this._y0 = this._y1, this._y1 = this._y2, this._y2 = y);
    }
  };
  var catmullRomClosed = (function custom(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
    }
    catmullRom.alpha = function (alpha) {
      return custom(+alpha);
    };
    return catmullRom;
  })(0.5);
  function CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomOpen.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      (x = +x, y = +y);
      if (this._point) {
        var x23 = this._x2 - x, y23 = this._y2 - y;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          point$1(this, x, y);
          break;
      }
      (this._l01_a = this._l12_a, this._l12_a = this._l23_a);
      (this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a);
      (this._x0 = this._x1, this._x1 = this._x2, this._x2 = x);
      (this._y0 = this._y1, this._y1 = this._y2, this._y2 = y);
    }
  };
  var catmullRomOpen = (function custom(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
    }
    catmullRom.alpha = function (alpha) {
      return custom(+alpha);
    };
    return catmullRom;
  })(0.5);
  function LinearClosed(context) {
    this._context = context;
  }
  LinearClosed.prototype = {
    areaStart: noop,
    areaEnd: noop,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._point) this._context.closePath();
    },
    point: function (x, y) {
      (x = +x, y = +y);
      if (this._point) this._context.lineTo(x, y); else (this._point = 1, this._context.moveTo(x, y));
    }
  };
  function linearClosed(context) {
    return new LinearClosed(context);
  }
  function sign(x) {
    return x < 0 ? -1 : 1;
  }
  // Calculate the slopes of the tangents (Hermite-type interpolation) based on
  // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
  // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
  // NOV(II), P. 443, 1990.
  function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
  }
  // Calculate a one-sided slope.
  function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
  }
  // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
  // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
  // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
  function point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
  }
  function MonotoneX(context) {
    this._context = context;
  }
  MonotoneX.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          point(this, this._t0, slope2(this, this._t0));
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      var t1 = NaN;
      (x = +x, y = +y);
      if (x === this._x1 && y === this._y1) return;
      // Ignore coincident points.
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          point(this, slope2(this, t1 = slope3(this, x, y)), t1);
          break;
        default:
          point(this, this._t0, t1 = slope3(this, x, y));
          break;
      }
      (this._x0 = this._x1, this._x1 = x);
      (this._y0 = this._y1, this._y1 = y);
      this._t0 = t1;
    }
  };
  function MonotoneY(context) {
    this._context = new ReflectContext(context);
  }
  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
    MonotoneX.prototype.point.call(this, y, x);
  };
  function ReflectContext(context) {
    this._context = context;
  }
  ReflectContext.prototype = {
    moveTo: function (x, y) {
      this._context.moveTo(y, x);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (x, y) {
      this._context.lineTo(y, x);
    },
    bezierCurveTo: function (x1, y1, x2, y2, x, y) {
      this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
    }
  };
  function monotoneX(context) {
    return new MonotoneX(context);
  }
  function monotoneY(context) {
    return new MonotoneY(context);
  }
  function Natural(context) {
    this._context = context;
  }
  Natural.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = [];
      this._y = [];
    },
    lineEnd: function () {
      var x = this._x, y = this._y, n = x.length;
      if (n) {
        this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
        if (n === 2) {
          this._context.lineTo(x[1], y[1]);
        } else {
          var px = controlPoints(x), py = controlPoints(y);
          for (var i0 = 0, i1 = 1; i1 < n; (++i0, ++i1)) {
            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
          }
        }
      }
      if (this._line || this._line !== 0 && n === 1) this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function (x, y) {
      this._x.push(+x);
      this._y.push(+y);
    }
  };
  // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
  function controlPoints(x) {
    var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
    (a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1]);
    for (i = 1; i < n - 1; ++i) (a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1]);
    (a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n]);
    for (i = 1; i < n; ++i) (m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1]);
    a[n - 1] = r[n - 1] / b[n - 1];
    for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
    b[n - 1] = (x[n] + a[n - 1]) / 2;
    for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
    return [a, b];
  }
  function natural(context) {
    return new Natural(context);
  }
  function Step(context, t) {
    this._context = context;
    this._t = t;
  }
  Step.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      if (this._line >= 0) (this._t = 1 - this._t, this._line = 1 - this._line);
    },
    point: function (x, y) {
      (x = +x, y = +y);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
        default:
          {
            if (this._t <= 0) {
              this._context.lineTo(this._x, y);
              this._context.lineTo(x, y);
            } else {
              var x1 = this._x * (1 - this._t) + x * this._t;
              this._context.lineTo(x1, this._y);
              this._context.lineTo(x1, y);
            }
            break;
          }
      }
      (this._x = x, this._y = y);
    }
  };
  function step(context) {
    return new Step(context, 0.5);
  }
  function stepBefore(context) {
    return new Step(context, 0);
  }
  function stepAfter(context) {
    return new Step(context, 1);
  }
  function none$1(series, order) {
    if (!((n = series.length) > 1)) return;
    for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
      (s0 = s1, s1 = series[order[i]]);
      for (j = 0; j < m; ++j) {
        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
      }
    }
  }
  function none(series) {
    var n = series.length, o = new Array(n);
    while (--n >= 0) o[n] = n;
    return o;
  }
  function stackValue(d, key) {
    return d[key];
  }
  function stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
  }
  function stack() {
    var keys = constant([]), order = none, offset = none$1, value = stackValue;
    function stack(data) {
      var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
      for (const d of data) {
        for ((i = 0, ++j); i < n; ++i) {
          (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
        }
      }
      for ((i = 0, oz = array(order(sz))); i < n; ++i) {
        sz[oz[i]].index = i;
      }
      offset(sz, oz);
      return sz;
    }
    stack.keys = function (_) {
      return arguments.length ? (keys = typeof _ === "function" ? _ : constant(Array.from(_)), stack) : keys;
    };
    stack.value = function (_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
    };
    stack.order = function (_) {
      return arguments.length ? (order = _ == null ? none : typeof _ === "function" ? _ : constant(Array.from(_)), stack) : order;
    };
    stack.offset = function (_) {
      return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
    };
    return stack;
  }
  function expand(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
    }
    none$1(series, order);
  }
  function diverging(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
      for ((yp = yn = 0, i = 0); i < n; ++i) {
        if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
          (d[0] = yp, d[1] = yp += dy);
        } else if (dy < 0) {
          (d[1] = yn, d[0] = yn += dy);
        } else {
          (d[0] = 0, d[1] = dy);
        }
      }
    }
  }
  function silhouette(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
      s0[j][1] += s0[j][0] = -y / 2;
    }
    none$1(series, order);
  }
  function wiggle(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
        var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
        for (var k = 0; k < i; ++k) {
          var sk = series[order[k]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
          s3 += skj0 - skj1;
        }
        (s1 += sij0, s2 += s3 * sij0);
      }
      s0[j - 1][1] += s0[j - 1][0] = y;
      if (s1) y -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    none$1(series, order);
  }
  function appearance(series) {
    var peaks = series.map(peak);
    return none(series).sort(function (a, b) {
      return peaks[a] - peaks[b];
    });
  }
  function peak(series) {
    var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
    while (++i < n) if ((vi = +series[i][1]) > vj) (vj = vi, j = i);
    return j;
  }
  function ascending(series) {
    var sums = series.map(sum);
    return none(series).sort(function (a, b) {
      return sums[a] - sums[b];
    });
  }
  function sum(series) {
    var s = 0, i = -1, n = series.length, v;
    while (++i < n) if (v = +series[i][1]) s += v;
    return s;
  }
  function descending(series) {
    return ascending(series).reverse();
  }
  function insideOut(series) {
    var n = series.length, i, j, sums = series.map(sum), order = appearance(series), top = 0, bottom = 0, tops = [], bottoms = [];
    for (i = 0; i < n; ++i) {
      j = order[i];
      if (top < bottom) {
        top += sums[j];
        tops.push(j);
      } else {
        bottom += sums[j];
        bottoms.push(j);
      }
    }
    return bottoms.reverse().concat(tops);
  }
  function reverse(series) {
    return none(series).reverse();
  }
  exports.arc = arc;
  exports.area = area;
  exports.areaRadial = areaRadial;
  exports.curveBasis = basis;
  exports.curveBasisClosed = basisClosed;
  exports.curveBasisOpen = basisOpen;
  exports.curveBumpX = bumpX;
  exports.curveBumpY = bumpY;
  exports.curveBundle = bundle;
  exports.curveCardinal = cardinal;
  exports.curveCardinalClosed = cardinalClosed;
  exports.curveCardinalOpen = cardinalOpen;
  exports.curveCatmullRom = catmullRom;
  exports.curveCatmullRomClosed = catmullRomClosed;
  exports.curveCatmullRomOpen = catmullRomOpen;
  exports.curveLinear = curveLinear;
  exports.curveLinearClosed = linearClosed;
  exports.curveMonotoneX = monotoneX;
  exports.curveMonotoneY = monotoneY;
  exports.curveNatural = natural;
  exports.curveStep = step;
  exports.curveStepAfter = stepAfter;
  exports.curveStepBefore = stepBefore;
  exports.line = line;
  exports.lineRadial = lineRadial$1;
  exports.linkHorizontal = linkHorizontal;
  exports.linkRadial = linkRadial;
  exports.linkVertical = linkVertical;
  exports.pie = pie;
  exports.pointRadial = pointRadial;
  exports.radialArea = areaRadial;
  exports.radialLine = lineRadial$1;
  exports.stack = stack;
  exports.stackOffsetDiverging = diverging;
  exports.stackOffsetExpand = expand;
  exports.stackOffsetNone = none$1;
  exports.stackOffsetSilhouette = silhouette;
  exports.stackOffsetWiggle = wiggle;
  exports.stackOrderAppearance = appearance;
  exports.stackOrderAscending = ascending;
  exports.stackOrderDescending = descending;
  exports.stackOrderInsideOut = insideOut;
  exports.stackOrderNone = none;
  exports.stackOrderReverse = reverse;
  exports.symbol = symbol;
  exports.symbolCircle = circle;
  exports.symbolCross = cross;
  exports.symbolDiamond = diamond;
  exports.symbolSquare = square;
  exports.symbolStar = star;
  exports.symbolTriangle = triangle;
  exports.symbolWye = wye;
  exports.symbols = symbols;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-path":"m838t"}],"6HwjU":[function(require,module,exports) {
var define;
// https://d3js.org/d3-zoom/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dispatch'), require('d3-drag'), require('d3-interpolate'), require('d3-selection'), require('d3-transition')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-dispatch', 'd3-drag', 'd3-interpolate', 'd3-selection', 'd3-transition'], factory) : (global = global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3, global.d3, global.d3, global.d3));
})(this, function (exports, d3Dispatch, d3Drag, d3Interpolate, d3Selection, d3Transition) {
  "use strict";
  var constant = x => () => x;
  function ZoomEvent(type, {sourceEvent, target, transform, dispatch}) {
    Object.defineProperties(this, {
      type: {
        value: type,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: sourceEvent,
        enumerable: true,
        configurable: true
      },
      target: {
        value: target,
        enumerable: true,
        configurable: true
      },
      transform: {
        value: transform,
        enumerable: true,
        configurable: true
      },
      _: {
        value: dispatch
      }
    });
  }
  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function (k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function (x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function (point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function (x) {
      return x * this.k + this.x;
    },
    applyY: function (y) {
      return y * this.k + this.y;
    },
    invert: function (location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function (x) {
      return (x - this.x) / this.k;
    },
    invertY: function (y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function (x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function (y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom) if (!(node = node.parentNode)) return identity;
    return node.__zoom;
  }
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  // Ignore right-click, since that should open the context menu.
  // except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
  function defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
  }
  function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      if (e.hasAttribute("viewBox")) {
        e = e.viewBox.baseVal;
        return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
      }
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
  }
  function defaultTransform() {
    return this.__zoom || identity;
  }
  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
  }
  function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
  }
  function zoom() {
    var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = d3Interpolate.interpolateZoom, listeners = d3Dispatch.dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
      selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function (collection, transform, point, event) {
      var selection = collection.selection ? collection.selection() : collection;
      selection.property("__zoom", defaultTransform);
      if (collection !== selection) {
        schedule(collection, transform, point, event);
      } else {
        selection.interrupt().each(function () {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
      }
    };
    zoom.scaleBy = function (selection, k, p, event) {
      zoom.scaleTo(selection, function () {
        var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      }, p, event);
    };
    zoom.scaleTo = function (selection, k, p, event) {
      zoom.transform(selection, function () {
        var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      }, p, event);
    };
    zoom.translateBy = function (selection, x, y, event) {
      zoom.transform(selection, function () {
        return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
      }, null, event);
    };
    zoom.translateTo = function (selection, x, y, p, event) {
      zoom.transform(selection, function () {
        var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
        return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
      }, p, event);
    };
    function scale(transform, k) {
      k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
      return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
      var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
      return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
    }
    function centroid(extent) {
      return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
    }
    function schedule(transition, transform, point, event) {
      transition.on("start.zoom", function () {
        gesture(this, arguments).event(event).start();
      }).on("interrupt.zoom end.zoom", function () {
        gesture(this, arguments).event(event).end();
      }).tween("zoom", function () {
        var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
        return function (t) {
          if (t === 1) t = b; else // Avoid rounding error on end.
          {
            var l = i(t), k = w / l[2];
            t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
          g.zoom(null, t);
        };
      });
    }
    function gesture(that, args, clean) {
      return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function (event) {
        if (event) this.sourceEvent = event;
        return this;
      },
      start: function () {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function (key, transform) {
        if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
        this.that.__zoom = transform;
        this.emit("zoom");
        return this;
      },
      end: function () {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function (type) {
        var d = d3Selection.select(this.that).datum();
        listeners.call(type, this.that, new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }), d);
      }
    };
    function wheeled(event, ...args) {
      if (!filter.apply(this, arguments)) return;
      var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = d3Selection.pointer(event);
      // If the mouse is in the same location as before, reuse it.
      // If there were recent wheel events, reset the wheel idle timeout.
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
              // If this wheel event won’t trigger a transform change, ignore it.
} else // If this wheel event won’t trigger a transform change, ignore it.
      if (t.k === k) return; else // Otherwise, capture the mouse point and location at the start.
      {
        g.mouse = [p, t.invert(p)];
        d3Transition.interrupt(this);
        g.start();
      }
      noevent(event);
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter.apply(this, arguments)) return;
      var g = gesture(this, args, true).event(event), v = d3Selection.select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = d3Selection.pointer(event, currentTarget), currentTarget = event.currentTarget, x0 = event.clientX, y0 = event.clientY;
      d3Drag.dragDisable(event.view);
      nopropagation(event);
      g.mouse = [p, this.__zoom.invert(p)];
      d3Transition.interrupt(this);
      g.start();
      function mousemoved(event) {
        noevent(event);
        if (!g.moved) {
          var dx = event.clientX - x0, dy = event.clientY - y0;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = d3Selection.pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
      }
      function mouseupped(event) {
        v.on("mousemove.zoom mouseup.zoom", null);
        d3Drag.dragEnable(event.view, g.moved);
        noevent(event);
        g.event(event).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter.apply(this, arguments)) return;
      var t0 = this.__zoom, p0 = d3Selection.pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
      noevent(event);
      if (duration > 0) d3Selection.select(this).transition().duration(duration).call(schedule, t1, p0, event); else d3Selection.select(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
      if (!filter.apply(this, arguments)) return;
      var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
      nopropagation(event);
      for (i = 0; i < n; ++i) {
        (t = touches[i], p = d3Selection.pointer(t, this));
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g.touch0) (g.touch0 = p, started = true, g.taps = 1 + !!touchstarting); else if (!g.touch1 && g.touch0[2] !== p[2]) (g.touch1 = p, g.taps = 0);
      }
      if (touchstarting) touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g.taps < 2) (touchfirst = p[0], touchstarting = setTimeout(function () {
          touchstarting = null;
        }, touchDelay));
        d3Transition.interrupt(this);
        g.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
      noevent(event);
      for (i = 0; i < n; ++i) {
        (t = touches[i], p = d3Selection.pointer(t, this));
        if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p; else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g.touch0) (p = g.touch0[0], l = g.touch0[1]); else return;
      g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
      nopropagation(event);
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function () {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches[i];
        if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0; else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
      }
      if (g.touch1 && !g.touch0) (g.touch0 = g.touch1, delete g.touch1);
      if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]); else {
        g.end();
        // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
        if (g.taps === 2) {
          t = d3Selection.pointer(t, this);
          if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
            var p = d3Selection.select(this).on("dblclick.zoom");
            if (p) p.apply(this, arguments);
          }
        }
      }
    }
    zoom.wheelDelta = function (_) {
      return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
    };
    zoom.filter = function (_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
    };
    zoom.touchable = function (_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
    };
    zoom.extent = function (_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
    };
    zoom.scaleExtent = function (_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function (_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom.constrain = function (_) {
      return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function (_) {
      return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function (_) {
      return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function (_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function (_) {
      return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
  }
  exports.zoom = zoom;
  exports.zoomIdentity = identity;
  exports.zoomTransform = transform;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-dispatch":"6ygE0","d3-drag":"5x5QZ","d3-interpolate":"6eByj","d3-selection":"1RFAz","d3-transition":"ee4oY"}],"7lQtw":[function(require,module,exports) {
var define;
// https://github.com/topojson/topojson-client v3.1.0 Copyright 2019 Mike Bostock
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.topojson = global.topojson || ({})));
})(this, function (exports) {
  "use strict";
  function identity(x) {
    return x;
  }
  function transform(transform) {
    if (transform == null) return identity;
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function (input, i) {
      if (!i) x0 = y0 = 0;
      var j = 2, n = input.length, output = new Array(n);
      output[0] = (x0 += input[0]) * kx + dx;
      output[1] = (y0 += input[1]) * ky + dy;
      while (j < n) (output[j] = input[j], ++j);
      return output;
    };
  }
  function bbox(topology) {
    var t = transform(topology.transform), key, x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
    function bboxPoint(p) {
      p = t(p);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
    function bboxGeometry(o) {
      switch (o.type) {
        case "GeometryCollection":
          o.geometries.forEach(bboxGeometry);
          break;
        case "Point":
          bboxPoint(o.coordinates);
          break;
        case "MultiPoint":
          o.coordinates.forEach(bboxPoint);
          break;
      }
    }
    topology.arcs.forEach(function (arc) {
      var i = -1, n = arc.length, p;
      while (++i < n) {
        p = t(arc[i], i);
        if (p[0] < x0) x0 = p[0];
        if (p[0] > x1) x1 = p[0];
        if (p[1] < y0) y0 = p[1];
        if (p[1] > y1) y1 = p[1];
      }
    });
    for (key in topology.objects) {
      bboxGeometry(topology.objects[key]);
    }
    return [x0, y0, x1, y1];
  }
  function reverse(array, n) {
    var t, j = array.length, i = j - n;
    while (i < --j) (t = array[i], array[i++] = array[j], array[j] = t);
  }
  function feature(topology, o) {
    if (typeof o === "string") o = topology.objects[o];
    return o.type === "GeometryCollection" ? {
      type: "FeatureCollection",
      features: o.geometries.map(function (o) {
        return feature$1(topology, o);
      })
    } : feature$1(topology, o);
  }
  function feature$1(topology, o) {
    var id = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry = object(topology, o);
    return id == null && bbox == null ? {
      type: "Feature",
      properties: properties,
      geometry: geometry
    } : bbox == null ? {
      type: "Feature",
      id: id,
      properties: properties,
      geometry: geometry
    } : {
      type: "Feature",
      id: id,
      bbox: bbox,
      properties: properties,
      geometry: geometry
    };
  }
  function object(topology, o) {
    var transformPoint = transform(topology.transform), arcs = topology.arcs;
    function arc(i, points) {
      if (points.length) points.pop();
      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
        points.push(transformPoint(a[k], k));
      }
      if (i < 0) reverse(points, n);
    }
    function point(p) {
      return transformPoint(p);
    }
    function line(arcs) {
      var points = [];
      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
      if (points.length < 2) points.push(points[0]);
      // This should never happen per the specification.
      return points;
    }
    function ring(arcs) {
      var points = line(arcs);
      while (points.length < 4) points.push(points[0]);
      // This may happen if an arc has only two points.
      return points;
    }
    function polygon(arcs) {
      return arcs.map(ring);
    }
    function geometry(o) {
      var type = o.type, coordinates;
      switch (type) {
        case "GeometryCollection":
          return {
            type: type,
            geometries: o.geometries.map(geometry)
          };
        case "Point":
          coordinates = point(o.coordinates);
          break;
        case "MultiPoint":
          coordinates = o.coordinates.map(point);
          break;
        case "LineString":
          coordinates = line(o.arcs);
          break;
        case "MultiLineString":
          coordinates = o.arcs.map(line);
          break;
        case "Polygon":
          coordinates = polygon(o.arcs);
          break;
        case "MultiPolygon":
          coordinates = o.arcs.map(polygon);
          break;
        default:
          return null;
      }
      return {
        type: type,
        coordinates: coordinates
      };
    }
    return geometry(o);
  }
  function stitch(topology, arcs) {
    var stitchedArcs = {}, fragmentByStart = {}, fragmentByEnd = {}, fragments = [], emptyIndex = -1;
    // Stitch empty arcs first, since they may be subsumed by other arcs.
    arcs.forEach(function (i, j) {
      var arc = topology.arcs[i < 0 ? ~i : i], t;
      if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
        (t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t);
      }
    });
    arcs.forEach(function (i) {
      var e = ends(i), start = e[0], end = e[1], f, g;
      if (f = fragmentByEnd[start]) {
        delete fragmentByEnd[f.end];
        f.push(i);
        f.end = end;
        if (g = fragmentByStart[end]) {
          delete fragmentByStart[g.start];
          var fg = g === f ? f : f.concat(g);
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByStart[end]) {
        delete fragmentByStart[f.start];
        f.unshift(i);
        f.start = start;
        if (g = fragmentByEnd[start]) {
          delete fragmentByEnd[g.end];
          var gf = g === f ? f : g.concat(f);
          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else {
        f = [i];
        fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
      }
    });
    function ends(i) {
      var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
      if (topology.transform) (p1 = [0, 0], arc.forEach(function (dp) {
        (p1[0] += dp[0], p1[1] += dp[1]);
      })); else p1 = arc[arc.length - 1];
      return i < 0 ? [p1, p0] : [p0, p1];
    }
    function flush(fragmentByEnd, fragmentByStart) {
      for (var k in fragmentByEnd) {
        var f = fragmentByEnd[k];
        delete fragmentByStart[f.start];
        delete f.start;
        delete f.end;
        f.forEach(function (i) {
          stitchedArcs[i < 0 ? ~i : i] = 1;
        });
        fragments.push(f);
      }
    }
    flush(fragmentByEnd, fragmentByStart);
    flush(fragmentByStart, fragmentByEnd);
    arcs.forEach(function (i) {
      if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]);
    });
    return fragments;
  }
  function mesh(topology) {
    return object(topology, meshArcs.apply(this, arguments));
  }
  function meshArcs(topology, object, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter); else for ((i = 0, arcs = new Array(n = topology.arcs.length)); i < n; ++i) arcs[i] = i;
    return {
      type: "MultiLineString",
      arcs: stitch(topology, arcs)
    };
  }
  function extractArcs(topology, object, filter) {
    var arcs = [], geomsByArc = [], geom;
    function extract0(i) {
      var j = i < 0 ? ~i : i;
      (geomsByArc[j] || (geomsByArc[j] = [])).push({
        i: i,
        g: geom
      });
    }
    function extract1(arcs) {
      arcs.forEach(extract0);
    }
    function extract2(arcs) {
      arcs.forEach(extract1);
    }
    function extract3(arcs) {
      arcs.forEach(extract2);
    }
    function geometry(o) {
      switch ((geom = o, o.type)) {
        case "GeometryCollection":
          o.geometries.forEach(geometry);
          break;
        case "LineString":
          extract1(o.arcs);
          break;
        case "MultiLineString":
        case "Polygon":
          extract2(o.arcs);
          break;
        case "MultiPolygon":
          extract3(o.arcs);
          break;
      }
    }
    geometry(object);
    geomsByArc.forEach(filter == null ? function (geoms) {
      arcs.push(geoms[0].i);
    } : function (geoms) {
      if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
    });
    return arcs;
  }
  function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while (++i < n) (a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0]);
    return Math.abs(area);
  }
  function merge(topology) {
    return object(topology, mergeArcs.apply(this, arguments));
  }
  function mergeArcs(topology, objects) {
    var polygonsByArc = {}, polygons = [], groups = [];
    objects.forEach(geometry);
    function geometry(o) {
      switch (o.type) {
        case "GeometryCollection":
          o.geometries.forEach(geometry);
          break;
        case "Polygon":
          extract(o.arcs);
          break;
        case "MultiPolygon":
          o.arcs.forEach(extract);
          break;
      }
    }
    function extract(polygon) {
      polygon.forEach(function (ring) {
        ring.forEach(function (arc) {
          (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
        });
      });
      polygons.push(polygon);
    }
    function area(ring) {
      return planarRingArea(object(topology, {
        type: "Polygon",
        arcs: [ring]
      }).coordinates[0]);
    }
    polygons.forEach(function (polygon) {
      if (!polygon._) {
        var group = [], neighbors = [polygon];
        polygon._ = 1;
        groups.push(group);
        while (polygon = neighbors.pop()) {
          group.push(polygon);
          polygon.forEach(function (ring) {
            ring.forEach(function (arc) {
              polygonsByArc[arc < 0 ? ~arc : arc].forEach(function (polygon) {
                if (!polygon._) {
                  polygon._ = 1;
                  neighbors.push(polygon);
                }
              });
            });
          });
        }
      }
    });
    polygons.forEach(function (polygon) {
      delete polygon._;
    });
    return {
      type: "MultiPolygon",
      arcs: groups.map(function (polygons) {
        var arcs = [], n;
        // Extract the exterior (unique) arcs.
        polygons.forEach(function (polygon) {
          polygon.forEach(function (ring) {
            ring.forEach(function (arc) {
              if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
                arcs.push(arc);
              }
            });
          });
        });
        // Stitch the arcs into one or more rings.
        arcs = stitch(topology, arcs);
        // If more than one ring is returned,
        // at most one of these rings can be the exterior;
        // choose the one with the greatest absolute area.
        if ((n = arcs.length) > 1) {
          for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
            if ((ki = area(arcs[i])) > k) {
              (t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki);
            }
          }
        }
        return arcs;
      }).filter(function (arcs) {
        return arcs.length > 0;
      })
    };
  }
  function bisect(a, x) {
    var lo = 0, hi = a.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (a[mid] < x) lo = mid + 1; else hi = mid;
    }
    return lo;
  }
  function neighbors(objects) {
    var indexesByArc = {}, // arc index -> array of object indexes
    neighbors = objects.map(function () {
      return [];
    });
    function line(arcs, i) {
      arcs.forEach(function (a) {
        if (a < 0) a = ~a;
        var o = indexesByArc[a];
        if (o) o.push(i); else indexesByArc[a] = [i];
      });
    }
    function polygon(arcs, i) {
      arcs.forEach(function (arc) {
        line(arc, i);
      });
    }
    function geometry(o, i) {
      if (o.type === "GeometryCollection") o.geometries.forEach(function (o) {
        geometry(o, i);
      }); else if ((o.type in geometryType)) geometryType[o.type](o.arcs, i);
    }
    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function (arcs, i) {
        arcs.forEach(function (arc) {
          polygon(arc, i);
        });
      }
    };
    objects.forEach(geometry);
    for (var i in indexesByArc) {
      for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
        for (var k = j + 1; k < m; ++k) {
          var ij = indexes[j], ik = indexes[k], n;
          if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
          if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
        }
      }
    }
    return neighbors;
  }
  function untransform(transform) {
    if (transform == null) return identity;
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function (input, i) {
      if (!i) x0 = y0 = 0;
      var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
      (output[0] = x1 - x0, x0 = x1);
      (output[1] = y1 - y0, y0 = y1);
      while (j < n) (output[j] = input[j], ++j);
      return output;
    };
  }
  function quantize(topology, transform) {
    if (topology.transform) throw new Error("already quantized");
    if (!transform || !transform.scale) {
      if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
      box = topology.bbox || bbox(topology);
      var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
      transform = {
        scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1],
        translate: [x0, y0]
      };
    } else {
      box = topology.bbox;
    }
    var t = untransform(transform), box, key, inputs = topology.objects, outputs = {};
    function quantizePoint(point) {
      return t(point);
    }
    function quantizeGeometry(input) {
      var output;
      switch (input.type) {
        case "GeometryCollection":
          output = {
            type: "GeometryCollection",
            geometries: input.geometries.map(quantizeGeometry)
          };
          break;
        case "Point":
          output = {
            type: "Point",
            coordinates: quantizePoint(input.coordinates)
          };
          break;
        case "MultiPoint":
          output = {
            type: "MultiPoint",
            coordinates: input.coordinates.map(quantizePoint)
          };
          break;
        default:
          return input;
      }
      if (input.id != null) output.id = input.id;
      if (input.bbox != null) output.bbox = input.bbox;
      if (input.properties != null) output.properties = input.properties;
      return output;
    }
    function quantizeArc(input) {
      var i = 0, j = 1, n = input.length, p, output = new Array(n);
      // pessimistic
      output[0] = t(input[0], 0);
      while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p;
      // non-coincident points
      if (j === 1) output[j++] = [0, 0];
      // an arc must have at least two points
      output.length = j;
      return output;
    }
    for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);
    return {
      type: "Topology",
      bbox: box,
      transform: transform,
      objects: outputs,
      arcs: topology.arcs.map(quantizeArc)
    };
  }
  exports.bbox = bbox;
  exports.feature = feature;
  exports.merge = merge;
  exports.mergeArcs = mergeArcs;
  exports.mesh = mesh;
  exports.meshArcs = meshArcs;
  exports.neighbors = neighbors;
  exports.quantize = quantize;
  exports.transform = transform;
  exports.untransform = untransform;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"4YFx4":[function(require,module,exports) {
module.exports = JSON.parse("{\"type\":\"Topology\",\"transform\":{\"scale\":[0.00036946150051793034,0.0002696116824146107],\"translate\":[-18.160694999999976,27.637361000000112]},\"arcs\":[[[30290,35534],[68,-51],[20,-76],[-58,0],[-45,101],[15,26]],[[30256,35647],[22,-23],[-2,-46],[-62,-6],[42,75]],[[30278,35825],[2,-65],[18,-40],[-12,-91],[-36,22],[-26,6],[-64,-105],[51,-13],[14,-34],[43,-11],[53,-126],[-147,95],[-55,25],[-139,35],[-145,10],[-60,-16],[16,91],[-32,20],[-24,-84],[27,-52],[-241,-10],[-92,-10],[-51,-23],[-68,-7],[-51,-58],[-80,-20],[-73,43],[-15,141],[-21,66],[-32,27],[1,48],[27,57],[-34,59],[-18,61],[3,90],[-13,59],[22,77],[-10,85],[-58,61],[44,46],[-32,35],[3,77],[-36,80],[8,72],[-47,27],[-17,74],[-60,29],[0,43],[-28,57],[41,51],[58,169],[40,44],[1,39],[39,41],[32,67],[-11,40],[3,86],[78,169],[-10,41],[36,45],[38,-6],[51,70],[79,78],[62,40],[73,152],[48,75],[-7,77],[74,96],[-7,32],[24,82],[-3,47],[-33,39],[44,53],[99,16],[62,22],[35,-34],[82,33],[39,0],[4,107],[51,38],[48,-9],[77,-43],[47,-48],[53,40],[49,-15],[22,52],[-4,53],[27,20],[1,132],[83,161],[4,85],[-31,16],[43,96],[59,81]],[[30393,39208],[25,-30],[51,7],[123,-82],[97,-23],[74,18],[2,-71],[-14,-58],[-44,-88],[72,-41],[53,11],[31,-72],[115,0],[91,15],[161,2],[114,-165],[-18,-96],[112,5],[56,-25],[81,-9],[44,-41],[13,61],[82,86],[-24,31],[105,10],[69,-39],[57,3],[24,-84],[-2,-36],[35,-53],[46,-15],[70,-74],[137,-25],[35,-46],[102,1],[16,-38],[51,-12],[62,43],[49,54],[57,36],[56,-1],[171,60],[68,-23],[35,30],[86,0],[21,-16],[57,134],[-4,57],[40,11],[28,49],[-5,57],[-50,40],[8,57],[37,68],[86,35],[17,97],[100,59],[125,12],[27,31],[66,-20],[23,37],[47,17],[80,-32],[35,-56],[-46,-27],[30,-51],[-65,-52],[-32,3],[-27,-39],[15,-45],[6,-100],[61,-24],[45,10],[66,67],[6,27],[91,108],[132,-24],[29,70],[38,-7],[65,74],[-8,115],[48,28],[-9,57],[-4,154],[-50,68],[-31,133],[-53,42],[22,81],[2,96],[-50,32],[2,53],[44,123],[41,45],[90,66],[43,-25],[52,25],[14,79],[27,1],[67,74],[70,28],[8,66],[24,49],[42,20],[5,50],[38,22],[18,62],[90,-24],[71,-4],[-4,47],[48,71],[106,63],[67,77],[33,8],[25,70],[30,-28],[48,20],[30,43],[-20,86],[16,46],[138,11],[48,-31],[88,37],[58,43]],[[35495,41140],[60,-10],[61,-68],[3,-42],[98,-42],[77,-15],[47,17],[93,6],[42,-25],[5,-189],[19,-59],[68,-24],[32,-37],[97,-2],[51,-38],[133,-59],[33,4],[31,-83],[77,-7],[92,-84],[30,-6],[9,-55],[28,-52],[54,-31],[46,5],[178,-111],[14,-45],[80,-73],[49,-93],[48,5],[49,-28],[29,-42],[31,15],[165,-81],[66,-46],[54,-21],[57,-1],[-27,113],[6,49],[57,41],[87,-16],[182,-60],[30,19],[44,-26],[45,11],[69,-21],[45,11],[112,-17],[60,-26],[120,-8],[32,11],[102,1],[102,29],[56,-7],[64,66],[1,74],[60,33],[117,9],[68,-38],[26,39],[83,-43],[129,-29],[84,-41],[94,43],[8,170],[42,2],[68,-23],[28,-54],[10,-84],[61,-2],[90,-37],[52,8],[82,40],[125,106],[-10,22],[15,110],[131,26],[58,-11],[68,-70],[164,-28],[107,-11],[81,-36],[53,-5],[33,37],[144,109],[161,-235],[36,52],[-4,79],[45,18],[36,61],[68,12],[74,-25],[58,-45],[108,92],[67,25],[50,58],[98,64],[23,47],[62,-39],[18,-30],[81,-49],[81,-16],[76,39],[124,21],[50,-35],[37,-48],[-28,-52],[27,-86],[-27,-71],[15,-75],[58,-40],[41,11],[51,-22],[88,-9],[-24,-98],[35,-82],[-16,-182],[10,-20],[110,-36],[12,-93],[-20,-26],[9,-76],[-36,-53],[23,-51],[-2,-72],[-60,-46],[-16,-63],[-32,-27],[-34,-62],[-39,-19],[-20,-70],[-84,-88],[80,-53],[47,-5],[71,-57],[125,-36],[23,-35],[83,-11],[54,-28],[85,10]],[[42817,38532],[117,-89],[2,-44],[56,-112],[49,-37],[57,-80],[81,-44],[62,-48],[35,-55],[55,32],[77,11],[67,-84],[34,-11],[64,32],[110,-55],[46,45],[27,-1],[54,-44],[-56,-101],[-3,-83],[-33,-163],[35,-174],[-32,-31],[-14,-70],[2,-102],[27,-66],[39,-38],[29,-99],[57,-66],[5,-47],[225,-365],[33,-40],[36,-89],[99,-80],[-8,67],[202,-33],[87,-80],[106,-75],[96,-96]],[[44742,36117],[-43,-15],[-8,-42],[-58,-8],[-52,-72],[-45,-117],[-134,-152],[-75,-115],[-32,-6],[-35,-72],[-44,-171],[1,-67],[-28,-116],[-29,-35],[-13,-57],[1,-82],[-46,-113],[-24,-16],[-6,-81],[-31,-65],[-33,-34],[13,-144],[-25,-47],[-75,9],[-32,-21],[-60,-129],[-37,16],[-60,-77],[1,-70],[18,-40],[-15,-59],[-62,-5],[-101,-103],[6,-105],[-34,-34],[-82,-31],[-54,-68],[-3,-42],[-74,-5],[-51,-27],[-65,-8],[-87,144],[-78,112],[-100,115],[-71,47],[-133,30],[-105,-60],[-65,-55],[-85,82],[-53,5],[-55,-36],[-63,1],[-18,-21],[-91,-18],[-91,-136],[-44,-165],[-81,-108],[-81,-35],[-67,-45],[-30,12],[-167,-15],[-14,28],[-81,59],[-71,-5],[-36,-32],[-33,19],[-86,120],[-84,70],[-53,-1],[-69,-39],[-61,14],[-51,-11],[-65,22],[-108,-7],[-106,20],[-111,-14],[-134,13],[-21,-20],[-94,34],[-45,-4],[-118,-57],[-47,14],[-72,-35],[-45,-67],[-62,-12],[-69,-36],[-13,-25],[-131,-1],[-37,9],[-73,77],[-50,24],[-76,-34],[-62,28],[-64,80],[-53,-9],[-119,7],[-31,-51],[-75,16],[-88,-19],[-41,35],[-59,-25],[-51,54],[-113,29],[-85,-10],[-51,-37],[-101,0],[-93,-53],[-112,46],[-89,12],[-96,23],[-62,-22],[-58,-66],[-70,-5],[-118,-30],[-186,-18],[-103,16],[-145,-9],[-24,15],[-121,24],[-67,-21],[-30,-32],[-73,-162],[-71,-93],[-76,-150],[-82,-75],[-54,3],[-66,-24],[-67,-58],[-54,-144],[-27,-48],[-108,-11],[-41,-48],[-47,-12],[-115,-7],[-134,43],[-152,40],[-102,-2],[-101,-26],[-51,-59],[-65,-23],[-80,-70],[-71,9],[-72,-43],[-64,1],[-70,-63],[-72,-19],[-53,-51],[-57,0],[-110,-130],[-45,-115],[-33,-138],[-33,-1],[-37,-68],[-68,-175],[-48,-43],[-38,-129],[-27,-164],[-39,9],[-81,83],[-84,4],[-58,-44],[-29,-60],[32,-27],[-20,-103],[1,-113],[46,-39],[-71,-78],[-36,-21],[-54,17],[-89,-65],[-58,-20],[-116,-70],[-74,-5],[-33,78],[-70,67],[-52,20],[-61,48],[-60,-39],[-110,50],[-53,57],[-32,7],[-38,-43],[-52,85],[-23,6],[-49,109],[-94,109],[-120,97],[-53,1],[-88,-37],[-40,2],[-105,32],[-69,56],[-71,162],[-19,87],[-73,91],[-83,14],[-28,56],[-34,120],[-47,97],[-57,41],[-34,67],[-47,146],[-41,39],[-22,84],[-112,244],[57,-41],[46,-79],[-12,-57],[30,-76],[43,-22],[63,13],[10,50],[41,20],[2,54],[62,33],[-2,44],[-66,23],[-39,-61],[-56,-27],[-61,62],[60,14],[26,104],[-9,107],[-37,20],[-36,-34],[-41,20],[-11,49],[-62,75],[-74,30],[-55,7],[-59,-20],[-72,44],[-14,93],[-34,49],[-78,182],[-9,67],[53,22],[35,60],[33,5],[139,112],[-119,43],[-19,26],[-79,220],[-85,184],[-162,207],[-212,176],[-158,114],[-339,229],[-258,125],[-132,127],[-41,69],[86,115],[-33,8],[-53,-83],[-20,8],[-75,303]],[[47185,56681],[-14,-79],[41,-45],[52,-25],[49,14],[38,-23],[12,-45],[80,-49],[34,-50],[49,-24],[4,-107],[84,16],[2,-94],[41,-3],[25,45],[57,22],[-5,51],[62,56],[63,-66],[68,-21],[23,-30],[67,36],[96,-16],[54,55],[56,79],[38,-13],[64,27],[74,-18],[17,-34],[93,-33],[3,-40],[62,-44],[44,-1],[105,-55],[99,-108],[37,-63],[9,-51],[101,-7],[19,-90],[34,0],[93,-37],[42,2],[70,61],[62,-22],[56,29],[53,49],[47,-25],[72,20],[136,76],[61,-22],[55,-46],[88,-5],[31,-94],[65,-65],[86,65],[-4,57],[53,18],[42,47],[41,-36],[45,-8],[11,-67],[70,-13],[125,17],[131,-11],[24,38],[54,-2],[86,-29],[37,33],[68,-26],[119,-17]],[[50941,55835],[55,-92],[40,-28],[13,-96],[23,-43],[85,-32],[75,-5],[-24,-145],[-29,-74],[-63,-81],[23,-96],[-54,-64],[-41,-3],[-3,-46],[31,-57],[5,-83],[43,-35],[54,-156],[-62,-71],[97,-64],[-51,-43],[9,-39],[57,-14],[-53,-79],[-3,-58],[-28,-137],[-51,-88],[-14,-103],[-30,-91],[42,-34],[-49,-43],[17,-111],[-18,-85],[-28,-27],[-44,-114],[6,-51],[-39,-26],[-13,-52],[15,-91],[-110,-54],[-19,-68],[-46,0],[-73,-91],[-9,-43],[109,-38],[-27,-141],[42,-23],[-13,-34],[-63,-21],[0,-46],[-62,12],[-11,-71],[-29,-55],[-87,1],[-31,-50],[-42,-21],[-26,-53],[-11,-80],[-187,-33],[-15,-69],[-28,8],[-44,-96],[-72,-66],[-37,-57],[13,-80],[43,-84],[-8,-56],[10,-83],[142,-25],[71,36],[20,-65],[-15,-73],[45,-85],[-78,-92],[-55,-97],[-73,-25],[-63,12],[-16,-26],[18,-139],[-17,-110],[-59,-70],[108,-90],[37,-75],[-68,-76],[46,-33],[0,-63],[54,-93],[-58,-190],[-62,13],[-51,-22],[-44,-147],[-7,-79],[-31,-29],[-97,-47],[-22,-51],[-76,9],[-43,-15],[13,-43],[-22,-53],[1,-66],[51,-7],[-5,-74],[29,-16],[15,-89],[76,-29],[-10,-48],[60,-99],[9,-83],[-27,-104],[-55,-63],[-22,-121],[26,-47],[-6,-54],[18,-77],[50,-67],[-36,-27],[-20,-50],[-65,-49],[3,-41],[-29,-39],[-33,7],[-59,-63],[-40,17],[-12,-82]],[[49617,48572],[-19,-35],[-61,-19],[-78,33],[-108,-48],[-82,-86],[-43,14],[5,68],[-34,56],[-90,11],[-36,-32],[-91,18],[-59,40],[-57,19],[-70,54],[-38,64],[7,38],[-135,-14],[-80,-102],[-24,-104],[-8,-130],[-38,-1],[-78,-40],[-74,-60],[-29,-1],[-32,62],[-74,-10],[-60,-38],[20,-62],[-24,-101],[156,-76],[28,31],[50,-1],[-8,-188],[16,-61],[-31,-104],[73,-70],[-42,-98],[-115,-43],[-40,-56],[40,-68],[69,-61],[16,-43],[44,-42],[7,-59],[-86,-44],[-71,-68],[-2,-41],[-136,-99],[-23,-30],[47,-59],[-3,-50],[-120,-78],[-64,-32],[-49,18],[-67,-42],[-94,39],[-40,46],[-41,-154],[4,-34],[-44,-104],[9,-65],[-44,-89],[-60,-21],[-53,-88],[4,-96],[-51,-31],[-49,-61],[-51,-26],[-54,8],[-43,-29],[-78,-3],[-40,13],[-13,-116],[-61,-75],[-37,2],[-93,-51],[-5,-129],[26,-130],[69,-55],[19,-41],[-85,-37],[-104,-90],[-57,20],[-65,75],[13,104],[-17,65],[30,52],[-9,45],[-50,57],[-54,13],[-126,70],[-92,-27],[-85,22],[-131,-20],[-64,-45],[-37,33]],[[46063,45749],[-14,62],[-44,43],[-4,37]],[[46001,45891],[78,19],[141,78],[34,55],[-1,35],[-108,120],[-58,17],[-38,61],[-49,4],[-113,-18],[-36,20],[-66,2],[-20,101],[-87,105],[-33,103],[-50,7],[-21,-61],[15,-77],[-6,-65],[-45,-16],[-57,-49],[-53,42],[-45,-22],[-78,30],[-72,11]],[[45233,46393],[18,45],[8,146],[-95,-44],[-99,69],[-80,-48],[-80,85],[-61,84],[-68,46],[-112,125],[-18,45],[-66,56],[-28,-9],[-27,-56],[-44,-14],[-7,55],[25,57],[34,30],[-35,53],[-56,32],[-71,122],[-60,55],[-45,4],[15,59],[41,-4],[24,64],[76,120],[40,36],[112,53],[-26,191],[44,154],[52,8],[87,-8],[96,-66],[117,89],[28,34],[-53,73],[35,105],[35,55],[-3,87],[12,21],[-48,70],[-23,125],[60,78],[1,119],[-14,87],[-33,47],[-45,10],[-81,105],[-46,73],[-15,71],[28,35],[21,72],[-26,60],[-48,33],[-70,95],[-37,21],[-109,104],[-91,109],[-61,93],[-53,35],[-32,49],[-38,23],[-106,27],[-37,20],[-57,94],[-85,4],[-29,16],[-43,104],[-29,21],[-133,-59],[-82,-5],[-36,-31]],[[43601,50107],[-69,61],[-7,29],[-179,50],[-8,127],[-39,239],[-28,18],[17,86],[-8,28],[37,69],[-17,67],[36,2],[80,88],[9,168],[42,77],[147,-42],[31,-28],[2,-83],[-24,-27],[39,-49],[53,7],[21,29],[85,27],[46,28],[43,-4],[-30,82],[-12,122],[-45,70],[-30,19],[16,110],[-9,39],[30,72],[-17,44],[-55,71],[1,85],[96,18],[95,-24],[25,66],[43,60],[64,21],[41,87],[124,-3],[19,13],[-8,76],[20,43],[40,12],[5,65],[26,29],[-33,34],[-58,10],[17,54],[-50,55],[-11,46],[-75,41],[25,61],[68,89],[-10,131],[-48,37],[4,51],[-50,76],[6,101],[-4,110]],[[44130,53147],[-24,42],[57,36],[-8,76]],[[44155,53301],[36,-48],[64,11],[48,-31],[69,23],[89,-118],[51,-26],[79,-13],[25,35],[61,9],[101,-51],[56,-91],[103,-49],[95,-15],[58,54],[75,1],[56,-33],[85,-10],[30,22],[38,74],[39,16],[-10,51],[32,19],[24,81],[101,163],[63,56],[-16,109],[-113,3],[-34,72],[-5,53],[-87,72],[17,86],[-15,26],[18,86],[-10,41],[-49,43],[-8,73],[45,87],[27,123],[-25,47],[42,46],[84,133],[63,59],[-19,61],[-64,24],[46,110],[4,59],[71,94],[68,30],[47,93],[-7,49],[-31,11],[-4,90],[63,126],[88,-50],[80,23],[-4,78],[45,60],[50,39],[31,49],[14,137],[87,-9],[89,5],[49,-18],[83,25],[-2,59],[19,42],[-18,60],[30,31],[159,14],[56,28],[34,85],[35,36],[60,-5],[1,66],[74,-5],[37,36],[33,64],[-34,46],[23,34],[-15,146],[114,111],[-11,88],[48,27],[49,51],[80,11],[70,-20]],[[40267,57723],[-39,24],[15,46],[-1,82],[-32,65],[102,31],[48,-27],[-6,-46],[-47,-49],[-7,-62],[17,-42],[-50,-22]],[[40620,58291],[10,-126],[-21,-67],[-97,-10],[-68,-44],[-19,82],[-79,-45],[-99,-23],[-11,38],[-77,-31],[-53,8],[8,-61],[-116,-28],[-23,-66],[-105,-40],[-37,-77],[31,-58],[-3,-128],[30,-68],[13,-72]],[[39904,57475],[-73,-7],[-39,17],[-75,-10],[-58,12],[-96,43],[-113,24],[-49,-18],[-24,73],[-104,43],[-14,-38],[-76,-105],[1,-23],[-96,-104],[-99,-34],[-3,-52],[-88,-26],[-56,32],[-29,-21],[-81,-4],[51,-60],[-49,-58],[2,-26],[-112,3],[-50,-96],[-98,-38],[-42,-49],[-81,-229],[49,-71],[90,-6],[76,49],[54,8],[11,86],[55,23],[74,-56],[26,-45],[-9,-36],[-54,1],[-41,-71],[-83,19],[17,-62],[-55,-105],[38,3],[51,-32],[32,20],[-15,68],[28,55],[73,-41],[31,-38],[-23,-61],[47,-60],[1,-94],[-15,-38],[-113,-51],[-84,67],[-41,-68],[-4,-67],[-53,23],[-95,-59],[-43,36],[-49,3],[10,64],[-11,140],[-56,-18],[11,-44],[-91,-102],[12,-49],[-96,-19],[-34,44],[-12,66],[-66,13],[-74,-20],[-96,104],[54,40],[54,3],[46,64],[7,39],[-62,34],[-87,-27],[-49,-51],[-27,0],[-45,52],[6,60],[-36,156],[-4,138],[-65,41],[-99,4],[-131,21],[-74,102],[-63,131],[-92,40],[-42,48],[-42,5],[-34,-79],[-55,-1],[-68,33],[-101,-103],[-43,27],[-44,-4],[-42,37],[-87,-71],[-125,35],[-66,-4],[-30,-29],[-64,41],[25,70],[-27,35],[-59,-3],[-1,70],[-180,104],[-8,51],[-42,36],[45,119],[-46,55],[29,29]],[[36052,57651],[59,-7],[80,25],[32,24],[87,-30],[32,24],[-6,69],[39,76],[2,36],[-27,67],[70,29],[74,11],[50,-13],[66,15],[29,73],[70,38],[128,-52],[-5,-47],[45,-6],[39,38],[7,109],[-21,66],[11,38],[-45,22],[23,55],[-9,36],[64,45],[-4,47]],[[36942,58439],[30,16],[96,-20],[57,20],[130,-2],[41,-25],[92,60],[49,-58],[96,4],[158,35],[37,-20],[110,36],[181,48],[88,76],[13,-30],[80,25],[34,-13],[53,53],[35,-26],[47,17],[55,-14],[52,97],[53,19],[180,13],[127,65],[72,-11],[-5,-57],[32,-35],[-68,-20],[-38,-75],[28,-42],[-3,-47],[70,16],[23,101],[68,-16],[-3,43],[60,22],[-3,33],[56,31],[51,-15],[66,56],[61,33],[55,-10],[59,62],[56,-22],[86,4],[13,-58],[70,3],[4,-69],[102,-37],[113,-3],[22,-76],[-33,-26],[-69,11],[-68,32],[15,-91],[60,-97],[44,94],[40,-44],[83,25],[88,-21],[106,15],[120,-48],[72,-1],[91,-24],[31,-49],[127,-112],[30,1]],[[38038,56342],[-16,-41],[33,-85],[32,22],[2,69],[-51,35]],[[41493,56210],[235,0],[33,8],[57,-40],[86,-14],[118,-55],[30,21],[59,-18],[35,-57],[84,46],[-11,-80],[-28,-60],[-47,-53],[-49,-14],[-2,-41],[40,-22],[44,-60],[80,-19],[24,66],[47,-9],[-3,-71],[16,-69],[-57,-28],[-50,40],[-22,-19],[-54,26],[-77,-17],[-58,3],[-46,49],[-6,34],[-122,18],[-51,-48],[-135,15],[-45,122],[-30,-4],[-80,41],[-10,37],[-42,21],[-27,44],[2,118],[62,89]],[[39904,57475],[78,25],[48,42],[56,11],[23,46],[89,21],[32,38],[119,59],[81,-98],[42,27],[60,-38],[48,35],[68,-38],[-51,-52],[1,-41],[-55,-83],[32,-42],[97,-46],[-65,-86],[46,-20],[-11,-71],[4,-82],[-72,6],[3,-51],[66,-31],[55,3],[96,-22],[78,7],[57,-94],[-16,-18],[90,-78],[42,2],[40,-52],[-64,-44],[-30,-61],[-119,-33],[-80,-10],[-51,26],[-49,-7],[-14,32],[-52,25],[9,49],[-90,44],[-119,19],[-64,-139],[-78,-39],[-14,-97],[153,-169],[45,53],[51,93],[47,-45],[63,15],[65,111],[56,-41],[-22,-71],[-75,-92],[-19,-81],[-30,-36],[52,-33],[32,-43],[-23,-69],[57,-23],[40,29],[54,0],[45,-26],[63,-80],[62,10],[29,-67],[48,-15],[7,-38],[153,-3],[76,-54],[20,-53],[-16,-43],[13,-47],[76,-60],[27,-2]],[[41419,55639],[-69,-51],[-57,7],[-53,-17],[-25,47],[-100,24],[-26,-21],[-67,33],[-36,-45],[-62,30],[-77,-5],[-32,-28],[56,-107],[-21,-50],[-49,-25],[11,-30],[-63,-75],[-78,-44],[25,-33],[48,-16],[49,35],[47,-39],[-20,-106],[-38,-28],[11,-47],[43,-9],[74,-116],[-47,-75],[-2,-77],[30,-114],[-31,-1],[-49,89],[12,69],[-63,3],[16,-43],[-24,-73],[53,0],[58,-84],[-1,-25],[-123,-15],[-4,-50],[28,-37],[-17,-59],[46,-147],[-22,-37],[25,-64],[-38,-50],[-9,-76],[-62,-40],[37,-47],[1,-35],[68,-72],[9,-89],[74,-32],[67,-152],[29,13],[53,-22],[29,15],[89,-12],[53,19],[23,-31],[46,-156],[5,-60],[60,-21],[20,-28],[69,49],[4,23],[90,45],[30,-17],[40,38],[3,96],[-18,29],[36,51],[-4,54],[45,55],[126,-3],[59,-63],[-5,-72],[-71,-98],[-10,-38],[-52,-63],[31,-89],[51,23],[58,1],[50,-51],[37,-13],[38,27],[89,5],[127,-38],[39,65],[44,140],[45,13],[48,51],[-21,52],[21,117],[66,-13],[86,16],[55,82],[137,19],[186,10],[100,-50],[1,-86],[33,-74],[29,-5],[57,56],[37,-15],[41,24],[195,-6],[26,-22],[0,-60],[-94,-53],[19,-73],[70,-77],[33,-18],[25,-69],[-44,-28],[38,-139],[91,-26],[38,14],[75,-30],[17,25],[125,-126],[56,4],[108,52],[40,42],[79,25],[57,52]],[[43601,50107],[3,-77],[-32,-48],[-8,-64],[47,-65],[-22,-32],[-42,10],[-13,36],[-110,77],[-39,57],[-32,-58],[-65,-27],[-21,-43],[-154,49],[-85,-109],[-57,-8],[-24,22],[-81,-55],[-86,111],[-75,-45],[-52,-47],[-50,-5],[-59,63],[-73,3],[0,44],[-30,88],[-77,19],[-22,103],[-53,59],[-14,-42],[-107,-38],[-40,40],[30,36],[19,67],[-67,34],[26,46],[10,87],[-75,-19],[-102,79],[-39,-13],[-109,55],[-20,88],[-36,-15],[-83,9],[-59,-75],[-107,10],[-28,26],[-93,41],[3,64],[-20,25],[17,54],[-23,31],[-85,23],[-74,-53],[-43,-77],[-44,2],[-107,-33],[-33,18],[-119,-58],[-126,53],[-153,28],[-64,32],[-50,1],[-52,-23],[-31,-69],[-58,-36],[-45,20],[-39,-64],[-88,15],[-37,-33],[-89,27],[-82,-21],[-26,-159],[-94,13],[-44,-90],[-58,-40],[-51,-4],[-42,-62],[-64,10]],[[39574,50175],[-80,-21],[-38,6],[-82,-44],[-50,-57],[-50,-98],[-81,-86],[-40,-4],[-119,-109],[-28,-69],[-87,-130],[-90,-51],[-41,-1],[-119,-41],[-57,-30],[-61,-89],[-13,-49],[-41,-10],[1,-41],[-42,-84],[26,-17],[-9,-89],[-50,-98],[8,-60],[-48,-83],[5,-45],[-67,3],[-51,-27],[-69,34],[-62,13],[-29,-63],[-43,-45],[-3,-62],[-47,-21],[-65,-110],[-16,-65],[-73,-58],[10,-134],[-13,-47],[32,-27],[-146,-69],[-74,-9],[-53,12],[-28,87],[-44,-12],[-4,-65],[18,-48],[-17,-115],[-90,-49],[4,-71],[-17,-91],[12,-22],[0,-193],[-44,-65],[42,-50],[-27,-36],[-49,17],[-67,-22],[-100,11],[-49,-47],[-21,-66],[0,-110],[-47,-21],[4,-92],[-81,5],[-51,-23],[-61,86],[-35,-39],[29,-130],[-68,-60],[-6,-44],[-34,-27],[27,-87],[-18,-59],[-36,-2]],[[36761,46660],[-103,-64],[-100,-7],[-24,29],[-64,18],[-19,112],[17,31],[-39,29],[20,34],[-10,58],[-93,-42],[-28,17],[-50,-54],[-117,53],[-37,-75],[28,-73],[-88,-94],[-59,-17],[-131,-110],[-39,-21],[18,-54],[-20,-72],[-83,-10],[-14,-44],[-121,-44],[-2,80],[-28,54],[-4,49],[-63,-29],[-56,2],[-105,-91],[-63,-85],[-127,-72],[-36,12],[-46,-19],[-26,36],[-4,53],[-156,10],[-122,-9],[-55,32]],[[34712,46283],[-3,31],[-83,148],[10,145],[-15,56],[31,51],[41,119],[-57,-26],[-39,3],[-45,-28],[-47,18],[-47,-11],[-27,-69],[-76,-35],[-8,-61],[-163,-48],[-46,9],[-116,67],[-52,1],[-9,66],[-34,53],[-63,8],[-28,28],[8,48],[-97,81],[-122,7],[-74,-49],[-76,22],[-1,50],[31,45],[-42,152],[-52,-9],[-82,-85],[-29,24],[-72,-29],[-65,-135],[-34,-35],[-56,13],[-175,81],[-36,61],[10,66],[-98,4],[-121,56],[39,25],[-5,62],[25,8],[0,79],[-79,43],[-69,21],[28,53],[-75,4],[-29,77],[-78,35],[-33,56],[-111,17],[-41,-59],[-107,-67],[-76,-6],[-60,-28],[-56,-76],[10,-57],[-39,-25],[-116,-3],[-56,-66],[4,-33],[-65,0],[-201,-95],[-65,-67],[-12,-54],[24,-38],[0,-50],[-84,-74],[-129,-23],[-14,16],[-86,-21],[-45,-62],[-40,17],[-41,67],[-101,-85],[-70,10],[-51,-26],[-100,25],[-75,81]],[[30574,46857],[2,95],[64,64],[61,43],[38,-2],[36,36],[-8,83],[33,27],[-110,118],[-45,71],[-30,136],[39,89],[34,29],[32,81],[42,23],[-27,104],[12,41],[-120,58],[18,99],[48,66],[40,84],[19,82],[-7,84],[-31,113],[6,31],[-53,97],[13,157],[23,43],[-18,132],[55,51],[4,54],[-22,82],[-76,27],[-30,47],[4,83],[-33,95],[-42,37],[-40,75],[-53,69],[-32,11],[-27,53],[1,47],[44,33],[126,-43],[94,6],[67,30],[2,33],[50,45],[56,115],[40,57],[-44,74],[7,41],[74,53],[36,54],[70,61],[36,83],[-10,20],[85,96],[33,51],[53,-18],[23,18],[91,18],[16,-50],[81,28],[10,42],[80,62],[51,-35],[54,37],[-29,53],[56,44],[53,-9],[31,24],[32,110],[29,48],[62,7],[34,24],[-37,50],[8,53],[52,29],[51,-50],[100,43],[-31,98],[46,11],[41,59],[-29,53],[50,59],[8,50],[38,28],[32,94],[57,35],[54,81],[15,59],[61,59],[-53,90],[-74,29],[-50,96],[-130,107],[-141,54],[-54,-10],[-85,27],[-126,0],[-13,-53],[-85,-34],[-65,14],[-40,52],[-56,38],[-15,119],[-29,127],[55,118],[4,77],[28,58],[40,204],[-145,31],[26,47],[42,129],[-9,51],[-69,60],[-39,8],[-28,-54],[-47,-27],[-51,4],[-174,-33],[-137,39],[-45,115],[-4,35],[-115,31],[3,-85],[-31,-88],[-74,-13],[-56,22],[-42,-30],[-135,22],[-25,-6],[-37,90],[-69,15]],[[30253,53171],[-22,48],[83,153],[-33,45],[-4,59],[-103,-9],[-50,39],[-7,41],[37,33],[46,3],[1,46],[36,42],[-1,50],[90,31],[27,60],[22,118],[64,44],[37,1],[33,45],[6,47],[46,34],[71,17],[75,-28],[67,-9],[-33,76],[42,57],[56,12],[3,51],[67,102],[14,46],[-13,65],[18,113],[-64,32],[-44,42],[-127,25],[-61,75],[78,78],[-19,24],[-2,76],[37,58],[-66,84],[-73,-13],[-45,39],[-103,41],[-28,34],[-95,-6],[-36,-88],[-84,37],[-65,-23],[-63,40],[-59,-7],[37,84],[-30,32],[41,81],[3,44],[56,46],[-43,51],[12,23],[-4,106],[103,61],[-18,58],[-44,40],[-36,71],[93,108],[113,21],[3,67],[31,30],[26,-52],[31,-3],[85,70],[36,65],[63,37],[-5,51],[79,83],[-52,94],[-32,94],[101,30],[17,24],[-55,96],[64,2]],[[30684,56665],[63,-18],[82,-43],[58,-16],[72,86],[27,-9],[59,27],[141,12],[28,-22],[42,19],[41,-22],[153,-23],[18,36],[65,24],[56,-31],[34,51],[95,19],[23,93],[-111,24],[-11,70],[88,-28],[58,21],[47,44],[-10,64],[46,-1],[-8,81],[64,10],[42,58],[67,-38],[18,-56],[85,-17],[27,35],[55,-71],[103,-30],[35,140],[53,-15],[22,25],[102,-60],[32,-46],[83,31],[44,33],[-14,40],[8,67],[27,32],[40,-37],[41,9],[86,-49],[125,37],[10,-87],[37,-85],[62,-28],[121,-118],[69,-1],[36,-42],[117,-9],[112,15],[-2,63],[42,72],[7,43],[34,23],[20,71],[109,53],[122,-70],[42,-14],[64,7],[79,-14],[12,-35],[81,-16],[32,27],[61,11],[33,-27],[35,77],[89,49],[156,-23],[20,141],[37,27],[66,-1],[9,-39],[57,-16],[24,18],[80,-25],[37,37],[76,4],[55,-18],[85,60],[56,9],[55,47],[19,-45],[105,-4],[29,103],[-10,50],[44,65],[7,78],[33,-8],[116,21],[53,-33],[13,34],[88,100],[59,47],[62,9],[18,35],[52,6],[90,-74],[20,-82],[32,-58]],[[37453,48273],[150,9],[31,34],[-36,43],[-43,19],[-86,-51],[-16,-54]],[[45233,46393],[-23,-38],[39,-64],[96,-61],[-35,-30],[101,-202],[17,-83],[34,-16],[77,16],[134,-31],[104,-49],[85,24],[67,0],[72,32]],[[46063,45749],[-32,-29],[-135,-54],[-14,-79],[30,-72],[-5,-183],[-30,-79],[-11,-109],[-52,-96],[-40,-38],[-71,-132],[11,-89],[25,-52],[-48,-78],[-90,-28],[-150,71],[-134,-128],[-50,-97],[-70,-194],[-39,-28],[-75,-19],[-37,-46],[33,-74],[-4,-88],[22,-27],[-36,-64],[-4,-94],[-29,-55],[63,-65],[32,-12],[3,-79],[36,-9],[34,-71],[93,-32],[16,38],[59,-47],[45,-8],[44,-38],[42,-60],[92,12],[98,-54],[73,-5],[86,-41],[23,11],[99,-16],[44,-35],[-35,-97],[-4,-181],[-12,-69],[-31,-67],[-6,-49],[-44,-68],[-44,-39],[-37,-141],[-41,-28],[0,-82],[-27,-32],[5,-112],[101,-76],[178,-259],[38,-94],[110,-4],[251,40],[38,38],[59,-25],[49,7],[2,-61],[48,-106],[44,-29],[-20,-45],[-10,-88],[12,-97],[-4,-68],[10,-102],[-88,-34],[42,-141],[82,-151],[-45,-68],[-81,-77],[-173,-5]],[[46377,40867],[-51,24],[-192,178],[-11,103],[-173,62],[-177,-60],[-44,-40],[-57,-82],[-69,-37],[-83,-67],[-65,100],[-96,-48],[-54,-54],[-69,-102],[13,-48],[-25,-203],[-95,-69],[-30,-115],[22,-61],[26,-129],[8,-222],[8,-45],[-10,-121],[-172,-125],[-17,-36],[-111,-80],[-31,15],[-76,-22],[-111,11],[-62,93],[29,84],[-49,54],[-46,-26],[-71,51],[-76,-10],[1,-51],[-36,-32],[-72,-18],[-30,-56],[-87,-23],[-39,-47],[-105,-72],[-192,-59],[-59,7],[-56,61],[-76,20],[-40,-31],[-34,-55],[-21,-65],[-80,-100],[-150,-44],[-120,-91],[-24,-90],[-78,-142],[2,-40],[-31,-57],[-86,-96],[-54,-34],[-44,-47],[-40,-131],[8,-15]],[[35495,41140],[82,23],[34,-9],[38,25],[46,78],[33,108],[19,149],[28,90],[77,123],[134,-2],[47,-18],[19,141],[22,71],[-52,30],[-66,2],[-77,57],[-36,-23],[-42,69],[-9,80],[-22,43],[-47,185],[71,-7],[146,-89],[58,-4],[32,51],[44,3],[19,61],[-27,30],[-61,23],[-44,82],[13,53],[34,34],[10,108],[59,47],[58,130],[99,-37],[84,19],[77,-26],[102,-66],[74,9],[-43,52],[-47,25],[-61,77],[-23,114],[-49,39],[-62,210],[-18,34],[149,37],[-11,56],[16,69],[27,34],[30,101],[37,88],[-56,101],[-66,-63],[-110,-71],[-55,-69],[-82,2],[-71,-30],[-34,-36],[-45,-2],[-26,-40],[-87,25],[-83,75],[-43,-8],[-158,153],[-48,66],[-50,92],[-40,46],[-67,4],[-54,68],[-54,47],[-100,148],[-112,113],[26,60],[84,130],[-3,45],[30,22],[-14,47],[13,82],[38,70],[-51,89],[-47,44],[42,33],[-19,75],[-4,74],[-106,-8],[-103,-114],[-28,-53],[-34,-1],[-76,32],[-37,-2],[-20,46],[13,53],[-14,35],[11,103],[16,44],[62,78],[-29,65],[-87,64],[-116,-13],[-67,-35],[-19,24],[16,116],[81,249],[8,101],[-10,102],[-21,77],[15,73],[-2,78],[26,31],[63,27]],[[36761,46660],[10,-38],[107,-28],[52,22],[-2,30],[101,61],[88,11],[27,17],[27,75],[77,96],[41,20],[-11,45],[21,48],[63,-17],[-2,-144],[44,-115],[83,-21],[40,-56],[67,52],[37,98],[32,53],[45,8],[69,-26],[2,73],[31,31],[32,-13],[34,-77],[62,-31],[-18,-55],[53,-3],[73,-26],[89,86],[53,-51],[76,-8],[-6,-48],[91,-98],[107,10],[-9,-51],[68,20],[56,-52],[123,-10],[33,-65],[48,-31],[94,53],[43,-48],[34,-86],[72,-25],[58,53],[88,-53],[68,13],[26,-40],[135,-61],[-8,-95],[-50,-31],[20,-70],[-127,-103],[-32,-46],[-57,11],[-55,-67],[-24,-52],[-45,-23],[24,-45],[-38,-59],[-154,8],[-58,-54],[-60,-3],[-65,-40],[27,-95],[86,-12],[53,-52],[69,52],[28,43],[62,38],[30,70],[90,54],[37,-30],[55,52],[42,19],[84,10],[-19,74],[118,49],[13,42],[163,19],[38,92],[69,16],[56,-24],[107,-9],[13,31],[83,-43],[0,37],[48,16],[-1,94],[88,21],[46,-4],[42,-41],[24,-55],[71,-24],[37,34],[51,-11],[96,36],[86,100],[28,4],[14,-97],[118,-13],[79,33],[75,74],[18,60],[-64,96],[-51,37],[-3,41],[56,73],[-26,76],[21,112],[-54,136],[2,54],[-38,39],[-130,-108],[-34,-65],[-62,32],[-1,37],[34,43],[15,170],[67,62],[26,97],[-26,35],[39,32],[23,108],[-31,26],[-38,101],[-116,11],[-4,78],[13,56],[-18,63],[4,72],[-118,82],[-15,25],[-60,-32],[-68,8],[41,56],[-2,63],[-76,38],[-54,66],[23,55],[-4,67],[-113,66],[6,26],[-26,85],[-74,51],[-13,-80],[-101,30],[-53,54],[16,61],[59,80],[-34,38],[9,73],[-61,87],[-100,18],[72,138],[23,112],[-15,30],[65,47],[13,40],[-44,64],[30,29],[38,77],[1,46],[50,115],[-4,38],[64,47],[-9,27],[-109,131],[33,113],[-17,43],[-44,-11],[-74,52],[-33,-7],[-11,73],[-52,76],[-79,61],[2,54]],[[54540,54930],[-80,24],[5,91],[68,56],[-4,-67],[17,-47],[-6,-57]],[[50549,47793],[-179,68],[-36,32],[-14,111],[-112,100],[-119,3],[-81,25],[-99,58],[-34,53],[6,57],[64,107],[-82,65],[-54,-21],[-67,120],[-53,-31],[-72,32]],[[50941,55835],[59,67],[-25,40],[-58,171],[-3,72],[26,49],[28,95],[-25,59],[128,79],[40,-5],[34,-42],[139,-48],[41,18],[84,-46],[69,-10],[72,-46],[112,-88],[93,58],[64,-71],[61,16],[100,-36],[79,6],[96,-41],[63,-79],[4,-80],[88,-70],[137,42],[37,29],[55,-28],[180,-5],[45,22],[66,-18],[-10,-76],[61,-16],[34,-34],[-6,-67],[34,-11],[40,-65],[74,-181],[-24,-88],[31,-34],[-49,-29],[-34,-86],[70,30],[35,-20],[4,-42],[41,-60],[-70,-58],[-47,-6],[-18,-36],[59,-31],[9,-126],[193,-47],[100,17],[12,76],[80,29],[181,21],[24,25],[0,72],[112,-14],[61,56],[13,-46],[43,11],[43,-29],[80,-8],[34,18],[92,-42],[23,-39],[94,-37],[6,-32],[85,-14],[46,33],[27,-37],[-4,-54],[47,-26],[-9,-42],[24,-109],[58,-76],[70,-32],[128,19],[82,57],[74,34],[33,114],[105,41],[34,-22],[72,-7],[46,32],[60,10],[29,38],[94,-59],[57,21],[32,-39],[53,-4],[46,-52],[72,-10],[74,-30],[51,4],[5,-66],[84,-54],[46,-78],[45,13],[71,-37],[43,2],[40,73],[39,19],[110,-47],[172,-14],[-1,55],[-57,116],[47,-6],[22,75],[37,-2],[65,55],[100,18],[61,-53],[61,24],[50,80],[27,-2],[33,74],[58,-15],[26,46],[129,-42],[37,68],[36,20],[60,-54],[58,31],[65,-28],[56,31],[66,-107],[101,-77],[69,49],[64,-19],[71,3],[-4,-60],[-33,-49],[9,-55],[-14,-40],[21,-69],[66,-31],[-5,-33],[122,30],[28,-53],[73,13],[57,-39],[75,-23],[5,-35],[-70,-45],[15,-58],[-60,-11],[32,-66],[-20,-38],[-63,-17],[-26,-36],[-41,28],[-38,-61],[-96,48],[-6,47],[-49,26],[-67,-46],[-52,-89],[-23,-96],[-2,-64],[13,-135],[28,-81],[33,-2],[128,-86],[61,-110],[17,-65],[-42,-28],[-10,-91],[16,-110],[32,-74],[55,-21],[5,-68],[-40,-29],[-7,-92],[-37,-99],[-52,-12],[-32,-94],[-54,-4],[-19,-46],[-118,-18],[-21,-41],[-66,-65],[-6,-56],[-62,-83],[-93,-24],[-42,-40],[-44,-12],[-119,-143],[-122,-67],[-95,-5],[-94,-42],[-6,-20],[-84,-63],[-18,-55],[-103,-37],[-61,-46],[-317,-131],[-108,-61],[-16,6],[-116,-65],[-20,-20],[-114,-46],[-150,-130],[-116,-70],[-158,-51],[-108,-60],[-54,-65],[-53,-113],[-52,-58],[-18,-44],[-61,-38],[-79,-196],[-25,-44],[-72,-72],[-84,-37],[-149,-48],[-84,-8],[-121,1],[-130,-40],[-93,-45],[-39,-30],[-132,2],[-59,-42],[-110,-19],[-98,-40],[-30,3],[-60,-36],[-119,-23],[-266,-37],[-232,-84],[-113,-71],[-26,-34],[-57,10],[-81,-29],[-60,15],[-68,-8],[-69,-56],[-34,2],[-74,-73],[-46,36],[-64,-59],[-49,-122],[-31,4],[-46,63],[-68,6],[-88,-37],[-111,-4],[-112,-74],[-32,-2],[-106,-91],[-52,-78],[-48,-29],[-62,-68],[-50,-74],[-33,-15],[-96,-164],[-82,-105],[-13,-31],[-104,-73],[-31,-85],[-97,-52],[-17,-25],[23,-61],[57,-61],[110,-23],[23,40],[-127,59],[43,13],[65,-9],[146,-202],[25,-19],[64,11],[44,-12],[12,-48],[-26,-84],[-57,-60],[-215,-120],[-89,-98],[-87,-149],[-94,-77],[-95,-26],[-83,30],[-20,52],[58,42],[47,-38],[82,8],[22,39],[82,4],[29,27],[68,106],[13,38],[-49,12],[-83,-9],[-87,-40],[-97,-15],[-72,0],[-106,-136],[-64,-68],[-43,-93],[-19,-71]],[[41162,28505],[18,-61],[37,-53],[-11,-43],[-64,39],[0,76],[20,42]],[[34631,30714],[60,-69],[92,-34],[59,62],[26,-37],[-82,-49],[-33,7],[-55,-42],[-98,34],[-21,103],[52,25]],[[44155,53301],[-22,-20],[-85,93],[-40,8],[-12,138],[36,67],[142,160],[6,51],[44,43],[61,-44],[46,-15],[47,47],[68,-2],[53,-60],[81,55],[-29,92],[53,71],[-59,13],[-15,51],[-87,10],[-106,45],[-54,-6],[-54,38],[-29,42],[-61,51],[-63,3],[27,63],[-12,48],[-69,10],[-50,35],[15,38],[-62,41],[-29,48],[-57,-6],[-2,34],[-84,77],[-64,18],[-71,-35],[-66,-61],[-54,16],[30,81],[-24,55],[-76,59],[29,61],[-76,20],[-68,-41],[-49,-8],[-28,40],[-49,-13],[-39,39],[-59,16],[8,38],[-72,35],[-34,-8],[-132,76],[-16,-53],[-38,-9],[-103,70],[-44,5],[-55,65]],[[42603,55086],[-4,84],[81,19],[-22,97],[28,22],[-25,181],[-70,25],[-51,-111],[-50,47],[-77,-7],[-25,115],[46,-16],[50,56],[39,74],[93,57],[57,-6],[50,-38],[1,-50],[77,-12],[41,45],[119,33],[-14,85],[-43,-25],[-17,119],[-22,77],[19,57],[35,-12],[82,21],[30,24],[-50,137],[33,37],[3,68],[86,78],[9,34],[-22,79],[8,209],[47,44],[27,62],[49,-3],[33,-42],[62,17],[75,-11],[59,35],[34,88],[115,14],[39,17],[27,66],[-36,115],[63,88],[-12,43],[35,31],[84,31],[35,50],[49,8],[65,67],[52,105],[-43,23],[12,54],[-17,82],[52,91],[35,-14],[110,63],[66,16],[17,38],[64,29],[3,110],[29,38],[147,35]],[[44475,58079],[93,58],[72,11],[123,-52],[-21,-59],[37,-102],[23,-19],[90,-6],[66,155],[120,4],[40,-45],[144,-54],[66,26],[80,-75],[16,-94],[-17,-16],[2,-125],[-49,-43],[-1,-85],[-34,-99],[-70,-79],[-83,-59],[-2,-38],[83,-131],[238,-67],[30,98],[-10,134],[38,64],[34,18],[134,20],[-80,-96],[-24,-86],[105,-52],[16,-40],[42,-6],[51,48],[131,-87],[18,19],[79,-43],[32,-64],[49,55],[23,-32],[66,-14],[28,-48],[173,-26],[21,-48],[69,-55],[81,-36],[52,2],[31,36],[47,-29],[87,-18],[151,2],[52,46],[60,19],[43,-7],[22,-62],[35,-20],[-8,-53],[16,-43]],[[50549,47793],[-30,-76],[-74,-139],[-28,-16],[-72,-128],[-10,-40],[-49,-52],[-40,-148],[-43,-77],[-59,-60],[-49,-106],[-40,-52],[-99,-88],[-58,-71],[-29,-115],[-83,-34],[-90,-70],[-43,-61],[-133,-334],[-73,-64],[-66,3],[-82,-69],[-52,-100],[-30,-125],[-37,-39],[-18,-111],[-24,-84],[-55,-53],[-79,-96],[-82,-67],[-43,-84],[-48,-66],[-88,-173],[-81,-133],[-42,-109],[-11,-116],[-51,-109],[-46,-26],[-61,-82],[-19,-45],[-39,-148],[-34,-32],[-65,-126],[-20,-127],[7,-78],[33,-55],[-41,-24],[-23,-64],[14,-100],[37,-149],[73,-227],[33,-60],[87,-216],[56,-125],[-48,-69],[13,-129],[76,-236],[56,-134],[142,-249],[76,-102],[93,-112],[156,-149],[134,-42],[54,13],[158,-60],[25,-44],[72,-13],[44,-49],[94,-60],[-46,-27],[25,-78],[49,-48],[37,10],[22,-115],[-69,-2],[-62,-41],[-101,-125],[-43,-5],[-39,-39],[-38,-8],[-74,-95],[-3,-25],[-68,1],[-56,-51],[-34,14],[-78,-16],[-39,-32],[-91,-136],[-6,-39],[39,-19],[-71,-109],[-64,-43],[-36,35],[-94,7],[-32,-20],[-31,-54],[-71,-6],[-95,-49],[-101,-30],[-90,-45],[-144,-122],[-50,-22],[-39,-55],[-12,-52],[-28,-24],[-27,-207],[-54,14],[-31,29],[-91,-72],[-42,-55],[-49,-21],[-24,-129],[20,-204],[18,-76],[-9,-45],[-50,-42],[-101,8],[-80,-11],[-46,-49],[-70,-144],[-34,-279],[-4,-198],[15,-12],[-35,-80],[-48,-39],[-40,1],[-29,-64],[-4,-53],[-36,-21],[-3,-91],[-58,-8],[-26,-40],[-6,-77],[-25,-48],[-2,-66]],[[47091,37868],[-76,5],[-35,40],[-72,19],[-73,78],[-117,140],[-57,80],[-35,90],[-67,112],[-19,51],[-88,143],[-64,88],[-22,82],[-1,69],[-16,80],[75,109],[54,122],[34,153],[23,55],[-11,130],[-46,110],[-106,68],[-82,27],[-71,2],[-10,78],[0,133],[18,142],[108,104],[75,101],[-33,94],[27,54],[40,133],[-29,122],[-11,109],[-27,76]],[[30393,39208],[-29,36],[-38,-4],[-42,-55],[-23,34],[-40,-28],[-45,-1],[-45,-78],[-81,15],[-70,-63],[-35,35],[-56,120],[-68,109],[0,78],[-35,64],[-53,35],[-42,72],[-30,79],[-125,150],[-71,113],[-27,86],[-90,63],[9,70],[34,23],[-51,75],[17,105],[30,23],[0,86],[107,166],[9,78],[40,67],[-57,4],[-16,38],[17,160],[-2,68],[19,86],[60,52],[26,-1],[69,57],[16,48],[95,61],[38,70],[61,55],[78,3],[76,143],[79,38],[17,52],[-52,104],[70,65],[34,90],[73,103],[75,152],[21,23],[-45,59],[23,55],[-58,124],[-41,43],[-87,60],[-69,8],[-126,-47],[-14,-22],[-105,35],[10,155],[22,53],[-94,62],[-25,-3],[-123,47],[-54,56],[-10,65],[9,61],[-16,41],[44,93],[-104,96],[4,17],[-113,119],[12,38],[-13,66],[-33,48],[35,62],[23,89],[-19,29],[8,58],[31,40],[-84,69],[-51,10],[-103,51],[-23,42],[5,79],[-31,34],[-72,-4],[-41,39],[-26,69],[-42,56],[-88,47],[-29,109],[-46,59],[7,28],[-25,92],[216,-18],[102,-50],[41,-10],[71,17],[119,-36],[127,75],[88,21],[88,-25],[48,7],[135,-33],[63,36],[107,2],[42,-19],[49,5],[107,40],[21,50],[6,66],[48,99],[-16,49],[18,80],[27,33],[-26,95],[-1,46],[45,56],[33,-5],[62,54],[11,51],[46,25],[29,44],[12,115],[-20,82],[57,60],[-3,146],[29,48],[4,117],[-18,66],[-73,91],[-27,7],[-8,70],[-90,106],[-122,13],[-43,61],[-4,152],[-36,28],[25,44],[22,110],[40,37],[51,19],[45,-7],[29,70],[69,3],[51,-17],[106,39],[9,23]],[[25009,54763],[-31,-107],[-38,28],[42,64],[27,15]],[[25130,55403],[26,-39],[14,-67],[-19,-59],[-37,13],[17,63],[-31,64],[30,25]],[[30066,58741],[-25,-2],[-77,-75],[-34,-100],[-73,-6],[-33,20],[-84,-1],[-10,-59],[22,-41],[-27,-57],[60,-50],[47,32],[31,-40],[-14,-92],[19,-59],[29,-21],[48,-91],[87,-9],[-17,-104],[17,-80],[50,-68],[34,-11],[38,-56],[91,-41],[42,8],[16,-64],[-42,-75],[19,-64],[44,-52],[43,-14],[59,34],[130,145],[88,-51],[47,-85],[-16,-75],[-102,-82],[-16,-36],[-52,-3],[-68,-63],[-21,31],[-77,-21],[-39,-55],[8,-63],[-16,-43],[-70,-24],[54,-111],[51,-1],[-22,113],[48,22],[16,-78],[82,-79],[81,4],[120,-124],[4,-62],[-20,-48],[48,-49]],[[30253,53171],[-42,-37],[-20,-46],[-128,-5],[-63,10],[-29,80],[-85,49],[-61,15],[-62,-42],[-42,0],[-18,-37],[12,-65],[-5,-70],[28,-52],[-62,-145],[-32,1],[-67,-48],[-67,-5],[-70,-51],[-47,-2],[-38,-33],[-70,6],[-42,-14],[-20,46],[-70,-39],[-51,-95],[-59,17],[5,42],[-41,25],[-24,95],[-88,-14],[-17,37],[-59,-34],[20,-42],[-40,-32],[-144,-46],[-68,13],[-34,50],[76,119],[-191,9],[-136,97],[-79,-56],[-81,25],[-41,-45],[-65,-18],[-116,-3],[9,-56],[-66,-27],[-59,27],[10,85],[-9,140],[-50,1],[-10,-73],[-31,-95],[-74,-40],[-70,16],[-38,-29],[-15,-49],[-50,-77],[-77,-31],[-45,-35],[-98,-28],[-29,13],[-71,-10],[-92,34],[9,159],[-21,58],[-65,-1],[-60,83],[-4,53],[52,98],[62,58],[32,102],[60,23],[29,55],[41,5],[79,43],[4,114],[-33,93],[-60,37],[-52,-24],[-32,13],[-56,-45],[-42,20],[0,95],[-25,185],[-83,-57],[-75,15],[-26,-59],[-28,12],[-82,-75],[-54,-13],[-22,-61],[-67,23],[-39,-7],[-29,-44],[-62,15],[-66,-30],[-60,38],[-130,-16],[-51,5],[-20,-59],[-58,-36],[-105,-6],[-26,17],[-112,-35],[-61,-80],[-6,-84],[-43,-42],[-105,-44],[-81,-58],[-4,-79],[-24,-37],[-80,-59],[-88,-22],[-88,-127],[-60,-26],[-24,40],[19,70],[-27,60],[-7,259],[10,79],[-4,149],[-33,75],[4,119],[-12,48],[60,-5],[41,38],[83,-35],[43,86],[-34,47],[28,49],[24,109],[80,47],[7,62],[40,43],[39,-18],[40,51],[51,1],[33,71],[70,17],[43,77],[39,21],[49,-21],[37,37],[-19,53],[27,70],[-1,67],[-42,15],[-39,-51],[17,-36],[-53,-27],[-18,-33],[27,-47],[-60,-26],[-49,-45],[-54,-1],[-50,30],[-14,-50],[-76,-53],[-28,16],[-51,-63],[-52,53],[-32,-34],[-83,39],[-26,60],[18,86],[103,-100],[-9,83],[13,38],[-44,129],[94,-12],[21,-42],[109,56],[20,94],[42,33],[50,68],[36,4],[43,41],[22,51],[-34,13],[-10,52],[-41,-15],[-158,-150],[-134,28],[-61,-59],[-63,60],[-57,79],[23,40],[-29,79],[-85,30],[-29,-44],[-57,51],[18,53],[83,-16],[41,41],[7,38],[83,-3],[9,-90],[-47,-44],[10,-41],[88,38],[45,-20],[-29,118],[59,48],[-17,66],[-32,19],[1,78],[-26,41],[32,94],[52,9],[107,77],[-32,46],[57,94],[-19,47],[-84,-55],[-77,49],[24,37],[-40,23],[-60,-18],[-17,-74],[-14,-130],[-68,51],[29,62],[-60,14],[-60,-85],[-42,-40],[46,-76],[-90,-6],[-30,-64],[-48,3],[-3,-93],[-25,-38],[-67,-55],[-75,16],[30,125],[-50,70],[-40,0],[-41,-34],[4,114],[41,27],[10,49],[58,89],[-6,106],[30,34],[-5,59],[26,59],[29,-5],[12,66],[39,8],[13,45],[88,15],[74,139],[53,30],[44,-28],[-7,113],[-52,-62],[-55,21],[-47,-81],[-73,18],[-24,-31],[-72,18],[11,48],[-144,-47],[47,-44],[-29,-44],[-59,-23],[-27,-56],[-33,63],[-42,-9],[1,59],[-62,99],[76,65],[13,42],[-22,81],[-53,1],[-33,56],[-5,79],[60,85],[-96,26],[-31,118],[-52,-100],[-45,2],[-23,90],[-126,-95],[15,-48],[-30,-88],[-32,49],[11,39],[-15,59],[-39,9],[36,124],[65,63],[7,108],[-66,67],[-7,103],[68,17],[25,73],[-16,77],[82,-6],[30,49],[133,4],[19,80],[-22,17],[-74,-26],[-50,86],[90,83],[13,59],[52,-6],[5,48],[46,-15],[108,5],[44,-44],[51,6],[51,29],[79,112],[58,-22],[16,39],[42,-9],[48,24],[27,41],[-57,74],[-49,16],[-4,61],[82,42],[66,-13],[60,17],[-19,94],[175,11],[6,61],[49,3],[2,-40],[61,-10],[10,-49],[74,-49],[34,7],[55,-31],[65,-15],[57,7],[206,95],[84,16],[114,-38],[105,56],[46,130],[48,-26],[97,104],[45,-18],[60,48],[39,-91],[-18,-28],[79,-65],[41,28],[-6,35],[32,73],[-35,70],[48,21],[97,-16],[5,-48],[84,-8],[9,-40],[40,-32],[-18,-38],[79,-62],[52,11],[-29,59],[-16,117],[39,82],[46,17],[-24,48],[-40,-23],[-67,36],[-26,-39],[-35,10],[-51,53],[-50,-3],[-45,24],[13,46],[95,33],[113,-22],[88,11],[34,53],[50,20],[-19,52],[-52,-21],[-12,-39],[-133,-4],[-46,-32],[-87,-27],[-55,32],[-70,4],[49,49],[21,64],[-32,23],[21,69],[50,-5],[15,53],[-73,75],[45,38],[28,-44],[46,10],[48,-15],[128,99],[35,49],[14,58],[99,8],[58,74],[86,28],[-8,29],[68,43],[54,83],[12,83],[60,32],[64,-7],[28,-29],[115,63],[115,86],[33,62],[82,19],[50,-5],[-10,-89],[-19,-38],[45,-19],[8,-63],[-59,-9],[-22,-44],[38,-108],[63,37],[-44,30],[-22,54],[29,32],[69,-7],[10,32],[56,13],[26,58],[57,6],[131,62],[37,57],[67,35],[39,45],[36,-38],[-38,-29],[-66,-123],[49,-25],[33,69],[44,-9],[44,27],[23,-28],[13,-107],[49,6],[-21,-65],[7,-106],[95,76],[-27,54],[96,37],[6,57],[59,14],[43,-38],[57,5],[55,-22],[-25,-36],[62,-51],[132,-32],[32,-36],[73,-12],[35,-24],[11,-61],[117,-138],[35,-83],[36,-10],[168,-98],[102,-8],[33,-25],[61,-1],[102,22],[50,-22],[136,5],[12,-92],[-34,-45],[-12,-61],[4,-108]],[[53000,41370],[20,-1],[22,-87],[9,-85],[19,-40],[88,-77],[-1,-34],[59,-64],[80,-49],[85,70],[25,-2],[32,-53],[6,-57],[-37,-45],[-131,12],[-36,47],[-92,60],[-79,10],[-29,-26],[-69,-103],[-42,-34],[-31,23],[13,68],[-21,102],[24,9],[-7,64],[20,61],[76,17],[25,43],[9,72],[-37,99]],[[53305,42585],[68,-96],[25,19],[101,-30],[-46,-95],[54,-105],[-70,-97],[-5,-67],[-78,1],[-36,-43],[-25,-84],[1,-46],[-51,-8],[-14,-40],[-45,-22],[-25,-42],[-78,-19],[-32,-25],[-43,5],[-54,-109],[13,-61],[-15,-38],[-57,-53],[-62,105],[-38,29],[-54,-32],[-45,1],[-23,44],[-87,12],[-63,-45],[-49,31],[-3,43],[-32,67],[62,133],[-57,72],[42,58],[42,-28],[49,5],[96,35],[-43,79],[36,46],[-18,60],[57,64],[84,34],[45,76],[48,-40],[24,53],[82,2],[33,53],[30,-38],[38,56],[56,29],[63,-20],[25,41],[74,30]],[[57146,42759],[63,-29],[-60,-84],[3,-37],[-81,23],[-24,23],[23,70],[36,-2],[40,36]],[[57851,45714],[-31,-72],[-63,-22],[-69,-52],[-33,17],[-64,-64],[-84,-4],[-18,-83],[25,-70],[53,-39],[61,44],[44,-11],[82,56],[34,39],[39,-8],[-51,-68],[29,-48],[-60,-78],[-95,-11],[-33,20],[-26,-66],[9,-75],[39,-72],[46,-53],[105,-55],[128,-83],[132,36],[56,51],[61,21],[15,88],[42,16],[78,-84],[67,-6],[76,-71],[69,-1],[12,-24],[-26,-62],[54,0],[15,-25],[-59,-35],[5,-59],[-13,-74],[7,-52],[-44,-3],[-15,-83],[-84,13],[-30,-63],[-20,-76],[26,-84],[-42,3],[-9,-62],[-133,-122],[-64,-84],[-49,-125],[-17,-78],[-9,-125],[-56,-55],[-26,-87],[-40,-68],[-99,-29],[-19,-63],[-46,-32],[-74,-1],[-101,-93],[-85,-119],[-64,-11],[-21,54],[-33,11],[-34,48],[-20,61],[-65,13],[12,84],[-35,51],[-54,43],[-77,2],[-57,-28],[-73,34],[-100,-1],[-35,-35],[-72,39],[-39,-17],[-58,83],[-62,60],[-17,62],[22,73],[-21,62],[-48,87],[35,27],[44,76],[-62,95],[-37,7],[-68,75],[-68,35],[-96,13],[-15,-80],[-60,24],[-27,-57],[-87,-14],[-49,-26],[-19,-141],[-34,-54],[6,-52],[-63,11],[-9,30],[-53,31],[-51,80],[21,76],[-27,58],[-54,-30],[-36,35],[-158,-19],[19,47],[-14,39],[-54,37],[16,31],[-22,57],[65,99],[45,-2],[81,58],[16,25],[112,58],[85,105],[91,79],[61,-9],[107,74],[28,52],[85,92],[91,67],[8,56],[60,17],[44,56],[87,76],[46,-7],[49,52],[11,44],[73,-9],[94,43],[38,36],[59,17],[76,72],[79,15],[51,65],[44,-35],[52,-4],[21,31],[79,59],[86,-45],[65,12],[40,40],[76,-13],[65,80],[79,30],[14,-37],[88,40]],[[60200,46191],[36,-6],[13,-117],[93,-3],[8,39],[81,-18],[15,-139],[84,-11],[-5,-48],[46,-36],[98,-4],[12,-105],[44,-120],[94,-218],[-15,-161],[-42,-76],[-41,-23],[-99,19],[-17,25],[-130,64],[-96,82],[-131,63],[-57,74],[-154,91],[-181,49],[-90,-12],[-29,-28],[-125,-11],[-119,21],[37,134],[-24,125],[-78,17],[-5,72],[40,19],[34,90],[76,19],[76,-8],[75,16],[42,-21],[21,35],[56,-15],[32,16],[53,-37],[42,27],[108,22],[109,-17],[37,64],[-24,51]],[[630,787],[57,-21],[57,-97],[9,-55],[-53,-63],[-61,-156],[-14,-56],[-51,-1],[-24,-35],[-2,-92],[-34,-97],[-2,-78],[-45,-36],[-54,41],[-57,86],[-21,52],[-94,41],[-34,1],[-99,27],[-72,-3],[-36,42],[22,65],[-2,96],[51,51],[37,-4],[18,-40],[121,-23],[90,35],[55,72],[46,33],[30,42],[-8,72],[47,18],[37,54],[86,29]],[[7420,2020],[41,-23],[-6,-89],[-61,-73],[49,-106],[-13,-76],[10,-28],[-22,-55],[40,-84],[51,-28],[3,-48],[31,-72],[-4,-74],[-21,-18],[15,-97],[-18,-77],[-3,-78],[-21,-51],[33,-57],[-13,-72],[-71,-33],[-28,-66],[5,-58],[-29,-45],[-85,-30],[-86,-16],[-38,-37],[-29,4],[-39,-43],[-77,-29],[-32,-98],[-70,-3],[-38,41],[-49,0],[-57,36],[-91,4],[-8,51],[-102,74],[-73,90],[-34,4],[-56,67],[-12,47],[-108,236],[8,100],[-13,135],[27,47],[27,121],[73,13],[76,92],[56,35],[6,30],[44,33],[32,79],[-18,18],[13,80],[26,55],[-18,79],[62,53],[38,-43],[71,28],[48,-13],[35,-60],[92,-11],[96,12],[46,31],[27,-32],[106,-40],[23,-38],[68,21],[33,50],[-34,79],[66,56]],[[2439,2153],[20,-47],[138,-17],[22,-11],[27,-67],[35,1],[66,-68],[73,-32],[15,-67],[30,-23],[-5,-92],[14,-33],[-40,-29],[-106,-119],[-36,-68],[-38,4],[-47,-51],[-205,10],[-49,72],[-76,49],[-16,76],[-35,13],[-29,53],[19,123],[-14,65],[32,55],[-5,41],[41,70],[37,36],[132,56]],[[5420,3530],[56,-21],[49,-100],[-64,-133],[-24,9],[-91,-49],[-65,-61],[-68,-27],[-30,-47],[-2,-50],[-56,-38],[-92,-131],[-60,-54],[-15,9],[-84,-83],[-25,-112],[24,-106],[-5,-60],[-59,-76],[1,-45],[-64,-138],[-9,-45],[-37,-71],[-27,-170],[18,-44],[-99,-102],[-45,-84],[-59,-69],[-11,-38],[-40,-52],[-115,-88],[-87,-2],[-135,-94],[-54,19],[-30,-38],[-39,4],[-43,41],[5,67],[-29,83],[-56,18],[10,60],[-9,48],[-88,91],[-48,75],[-47,103],[-3,48],[-40,37],[-71,221],[24,58],[-8,35],[-58,51],[-6,37],[-48,58],[-67,129],[-43,12],[-4,44],[51,40],[119,41],[30,44],[45,20],[54,-55],[172,-27],[24,34],[34,-12],[21,38],[30,-15],[73,29],[15,30],[62,-10],[141,-6],[78,37],[49,53],[112,0],[53,80],[48,2],[3,46],[54,29],[-6,25],[80,82],[17,101],[112,112],[42,-4],[84,48],[9,64],[41,-19],[70,-1],[15,21],[110,-20],[56,-21],[79,24],[34,32],[61,29]],[[11568,4155],[56,-39],[-1,-30],[61,-37],[38,-136],[4,-234],[17,-142],[-16,-32],[11,-102],[-52,-174],[-53,-54],[-12,-48],[23,-45],[6,-97],[22,-125],[-11,-61],[-29,-36],[-34,-95],[-8,-71],[-64,-127],[16,-60],[-36,-50],[-22,-84],[-48,-67],[-33,-21],[-108,0],[-54,-67],[-25,8],[-70,-34],[-79,-4],[-104,-47],[-36,10],[-43,-29],[-67,-24],[-102,-17],[-64,-45],[-33,-75],[-84,-122],[-16,-41],[-83,-96],[-58,-85],[-90,0],[-133,41],[-111,52],[-82,18],[-26,-11],[-9,81],[55,36],[61,-17],[167,36],[81,42],[112,75],[135,134],[107,117],[34,59],[18,329],[25,73],[42,28],[58,103],[9,152],[21,76],[70,101],[73,76],[30,102],[43,87],[14,82],[89,152],[-15,83],[18,31],[19,86],[47,100],[-15,29],[-19,99],[48,31],[69,73],[40,-6],[109,67],[50,-12],[47,30]],[[11770,4191],[6,-44],[-13,-67],[-48,9],[-10,49],[65,53]],[[651,4529],[26,-2],[42,-57],[115,-34],[101,23],[18,13],[85,-15],[9,-48],[39,-78],[31,-134],[42,-45],[18,-86],[-17,-48],[-74,-87],[-24,-74],[18,-56],[32,-151],[-15,-33],[1,-71],[-12,-74],[-34,-69],[-42,-44],[-25,-94],[-46,-72],[-51,-150],[-20,-19],[-46,27],[-31,48],[-23,103],[4,78],[-12,66],[-34,56],[-20,64],[-41,66],[-33,25],[3,69],[-43,104],[-23,31],[-52,116],[-18,61],[-16,112],[-26,41],[-49,32],[0,94],[15,44],[72,67],[7,29],[81,111],[58,28],[10,33]],[[12697,5950],[5,-44],[78,-23],[43,-54],[12,-89],[-24,-109],[-48,-30],[-52,-71],[3,-47],[38,-48],[4,-63],[-47,-123],[-9,-71],[11,-54],[-57,-87],[-104,-75],[-69,-86],[-104,-4],[-38,-21],[-37,-57],[-48,-3],[-24,-37],[-133,2],[-121,-49],[-58,-136],[-55,-96],[-30,6],[-27,44],[-37,-6],[-49,23],[-126,-12],[2,71],[-15,35],[58,32],[84,128],[-14,36],[9,72],[-8,116],[11,66],[36,92],[50,40],[54,73],[40,10],[31,48],[123,14],[17,30],[49,20],[4,31],[43,22],[16,52],[52,-1],[23,-28],[29,41],[48,31],[48,-7],[61,-69],[39,6],[64,89],[4,88],[26,46],[7,65],[36,83],[68,57],[8,31]],[[12593,6134],[69,-41],[29,-40],[-43,-57],[-2,-37],[-42,-73],[-48,-24],[-61,1],[-6,54],[37,23],[31,69],[-9,36],[45,89]],[[12604,6602],[41,-56],[-47,-69],[-65,10],[-1,60],[72,55]],[[6224,9339],[18,-65],[-55,10],[10,51],[27,4]],[[41419,55639],[41,-32],[3,-78],[59,22],[-6,-95],[-50,-27],[8,-39],[55,-50],[52,60],[48,21],[23,62],[-5,40],[27,59],[90,-20],[66,-66],[69,-19],[-15,-43],[-14,-149],[-38,-97],[54,13],[22,-37],[56,-23],[18,-69],[58,38],[98,-14],[39,-33],[110,1],[-2,40],[50,52],[13,-67],[102,-12],[76,38],[28,-28],[49,-1]],[[40620,58291],[110,-12],[8,54],[95,-32],[44,-45],[65,-14],[20,-41],[44,26],[-26,84],[-38,33],[36,39],[78,46],[58,83],[47,18],[17,68],[76,8],[133,-11],[55,-19],[68,14],[62,-8],[13,30],[114,56],[43,-94],[46,-11],[100,-83],[40,32],[72,9],[46,-78],[64,0],[69,-27],[38,15],[49,-66],[94,15],[25,-49],[41,-7],[70,-97],[95,-18],[184,-101],[84,-23],[126,-9],[57,31],[45,0],[35,28],[47,-14],[76,-48],[15,-26],[70,25],[66,-15],[52,42],[103,36],[55,7],[74,33],[87,-27],[76,85],[97,-9],[122,59],[29,66],[100,55],[122,25],[-25,-38],[30,-65],[-31,-45],[123,-35],[46,-42],[-11,-50],[30,-75]],[[30066,58741],[27,70],[8,84],[34,34],[-10,68],[21,49],[65,-5],[98,22],[41,49],[63,3],[124,-42],[48,16],[80,-4],[39,-40],[76,-2],[36,46],[116,-12],[19,-27],[69,21],[61,-16],[33,27],[85,9],[97,-54],[54,15],[98,-10],[54,-18],[109,6],[36,67],[85,-42],[102,2],[114,-33],[102,49],[43,-2],[83,51],[49,4],[50,57],[43,-42],[69,-24],[30,-47],[40,23],[90,-19],[50,-35],[36,18],[103,21],[78,44],[17,30],[55,-21],[117,4],[60,13],[-1,55],[55,-2],[33,37],[15,56],[54,-4],[81,64],[1,62],[32,3],[31,-45],[144,-60],[-22,-62],[55,-20],[8,-47],[83,-77],[49,-19],[44,13],[10,-70],[37,-29],[74,-15],[76,34],[22,28],[60,-38],[221,16],[69,-21],[44,17],[160,14],[52,-17],[57,-60],[60,-13],[156,17],[81,-65],[-13,-38],[125,-85],[23,-40],[119,4],[31,15],[110,17],[9,-24],[89,-5],[78,-41],[108,-20],[103,13],[102,-12],[23,13],[54,-34],[151,-43],[121,-12],[7,-19],[98,-11],[81,-47],[45,4],[44,-30],[78,-6],[68,-31],[34,8],[70,-21],[101,4],[58,-18],[60,25],[61,-27]],[[47091,37868],[-10,-77],[-82,-61],[-17,-40],[7,-61],[-73,-99],[-35,-12],[-53,-110],[102,-189],[90,-74],[103,-37],[45,-36],[31,39],[68,-37],[-55,-97],[-89,-35],[-56,-2],[-118,-71],[-123,4],[-49,-32],[-134,-56],[-87,12],[-6,57],[-48,33],[-76,11],[-27,-48],[-39,25],[-119,7],[-50,-45],[-36,-1],[-49,-56],[52,-71],[-152,24],[-14,58],[-36,38],[-56,24],[-110,15],[-29,-24],[-1,-48],[-67,1],[-114,18],[-30,-25],[-65,-21],[-55,-77],[-44,-27],[-25,-59],[-39,-2],[-101,-55],[-37,-51],[-38,-90],[-2,-106],[-44,-10],[-49,37],[-86,-77],[-27,0],[-59,-41],[-27,8],[-62,-69],[-47,-33]]],\"objects\":{\"ESP_adm1\":{\"type\":\"GeometryCollection\",\"geometries\":[{\"arcs\":[[[0]],[[1]],[[2,3,4,5,6]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":935,\"NAME_1\":\"Andalucía\",\"VARNAME_1\":\"Andalousie|Andaluc¡a|Andalusien|Andaluzia\",\"HASC_1\":\"ES.AN\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[7,8,9,10,11,12,13,14,15]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":936,\"NAME_1\":\"Aragón\",\"VARNAME_1\":\"Aragão|Aragó|Aragón|Aragona|Aragonien\",\"HASC_1\":\"ES.AR\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[16]],[[17,18,19,20],[21]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":937,\"NAME_1\":\"Cantabria\",\"VARNAME_1\":\"Cantàbria|Cantábria|Cantabrie|Kantabrien\",\"HASC_1\":\"ES.CB\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[22]],[[-22]],[[23,24,-14,25,26,27,28,29,30,31,-19],[32]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":938,\"NAME_1\":\"Castilla y León\",\"VARNAME_1\":\"Castile and Leon|Castela e Leão|Castella i Lleó|Castile-Leon|Castilha-Leão|Castilla y León|Castille et Léon|Kastilien-León\",\"HASC_1\":\"ES.CL\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[-13,33,-11,34,35,-5,36,-28,37,-26]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":939,\"NAME_1\":\"Castilla-La Mancha\",\"VARNAME_1\":\"Castela-La Mancha|Castela-Mancha|Castella-la Manxa|Castilha-La Mancha\",\"HASC_1\":\"ES.CM\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[38]],[[39,-9,40]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":940,\"NAME_1\":\"Cataluña\",\"VARNAME_1\":\"Catalogna|Catalogne|Catalonia|Catalunha|Catalunya|Katalonien\",\"HASC_1\":\"ES.CT\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[41]],[[42]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":941,\"NAME_1\":\"Ceuta y Melilla\",\"VARNAME_1\":\"\",\"HASC_1\":\"ES.CE\",\"TYPE_1\":\"Ciudades Autónomas\",\"ENGTYPE_1\":\"Autonomous City\"}},{\"arcs\":[[[-33]],[[-27,-38]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":942,\"NAME_1\":\"Comunidad de Madrid\",\"VARNAME_1\":\"Madrid|Communauté de Madrid| Community of Madrid|Comunidad de Madrid |Comunidade de Madrid|Comunitat de Madrid\",\"HASC_1\":\"ES.MD\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[-16,43,44,45]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":943,\"NAME_1\":\"Comunidad Foral de Navarra\",\"VARNAME_1\":\"Communauté forale de Navarre|Comunidade Foral de Navarra|Comunitat Foral|Navarra\",\"HASC_1\":\"ES.NA\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[-34,-12]],[[-40,46,47,-35,-10]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":944,\"NAME_1\":\"Comunidad Valenciana\",\"VARNAME_1\":\"Valencia|Communauté de Valence|Comunidade Valenciana|Comunidad Valenciana|Comunitat Valenciana\",\"HASC_1\":\"ES.VC\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[-37,-4,48,-29]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":945,\"NAME_1\":\"Extremadura\",\"VARNAME_1\":\"Estremadura|Estrémadure\",\"HASC_1\":\"ES.EX\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[49]],[[50]],[[51,-31,52]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":946,\"NAME_1\":\"Galicia\",\"VARNAME_1\":\"Galice|Gal¡cia|Galicien|Galiza|Galizia\",\"HASC_1\":\"ES.GA\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[53]],[[54]],[[55]],[[56]],[[57]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":947,\"NAME_1\":\"Islas Baleares\",\"VARNAME_1\":\"Balearic Islands|Balearen|Balearene|Baleares|Islas Baleares|Baleari|Îles Baléares|Ilhas Baleares|Illes Balears\",\"HASC_1\":\"ES.PM\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]]],\"type\":\"MultiPolygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":948,\"NAME_1\":\"Islas Canarias\",\"VARNAME_1\":\"Canarias|Canary Islands|Canárias|Ilhas Canárias|Canarie|Îles Canaries|Illes Canàries|Kanariøyene|Kanarische Inseln\",\"HASC_1\":\"ES.CN\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[69,-44,-15,-25]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":949,\"NAME_1\":\"La Rioja\",\"VARNAME_1\":\"Rioja\",\"HASC_1\":\"ES.LO\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[-45,-70,-24,-18,70],[-17],[-23]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":950,\"NAME_1\":\"País Vasco\",\"VARNAME_1\":\"Basque Country|Baskenland|Basque Autonomous Community|Basque Provinces|CAV|Comunidad Autonoma Vasca\",\"HASC_1\":\"ES.PV\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[-20,-32,-52,71]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":951,\"NAME_1\":\"Principado de Asturias\",\"VARNAME_1\":\"Astúrias|Asturie|Asturien|Asturies|Astúries|Asturias\",\"HASC_1\":\"ES.AS\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}},{\"arcs\":[[-48,72,-6,-36]],\"type\":\"Polygon\",\"properties\":{\"ISO\":\"ESP\",\"NAME_0\":\"Spain\",\"ID_1\":952,\"NAME_1\":\"Región de Murcia\",\"VARNAME_1\":\"Murcia|Região de Múrcia|Regió de Múrcia|Région de Murcie|Region of Murcia\",\"HASC_1\":\"ES.MU\",\"TYPE_1\":\"Comunidad Autónoma\",\"ENGTYPE_1\":\"Autonomous Community\"}}]}}}");
},{}],"2koyP":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "latLongCommunities", function () {
  return latLongCommunities;
});
const latLongCommunities = [{
  name: "Comunidad de Madrid",
  long: -3.70256,
  lat: 40.4165
}, {
  name: "Andalucía",
  long: -4.5,
  lat: 37.6
}, {
  name: "Comunidad Valenciana",
  long: -0.37739,
  lat: 39.45975
}, {
  name: "Región de Murcia",
  long: -1.13004,
  lat: 37.98704
}, {
  name: "Extremadura",
  long: -6.16667,
  lat: 39.16667
}, {
  name: "Cataluña",
  long: 1.86768,
  lat: 41.82046
}, {
  name: "País Vasco",
  long: -2.75,
  lat: 43.0
}, {
  name: "Cantabria",
  long: -4.03333,
  lat: 43.2
}, {
  name: "Principado de Asturias",
  long: -5.86112,
  lat: 43.36662
}, {
  name: "Galicia",
  long: -7.86621,
  lat: 42.75508
}, {
  name: "Aragón",
  long: -1.0,
  lat: 41.0
}, {
  name: "Castilla y León",
  long: -4.45,
  lat: 41.383333
}, {
  name: "Castilla-La Mancha",
  long: -3.000033,
  lat: 39.500011
}, {
  name: "Islas Canarias",
  long: -15.5,
  lat: 28.0
}, {
  name: "Islas Baleares",
  long: 2.52136,
  lat: 39.18969
}, {
  name: "Comunidad Foral de Navarra",
  long: -1.65,
  lat: 42.816666
}, {
  name: "La Rioja",
  long: -2.445556,
  lat: 42.465
}];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"1HPqM":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "statsIni", function () {
  return statsIni;
});
_parcelHelpers.export(exports, "statsLast", function () {
  return statsLast;
});
const statsIni = [{
  name: "Comunidad de Madrid",
  value: 174
}, {
  name: "La Rioja",
  value: 39
}, {
  name: "Andalucía",
  value: 34
}, {
  name: "Cataluña",
  value: 24
}, {
  name: "Comunidad Valenciana",
  value: 30
}, {
  name: "Región de Murcia",
  value: 0
}, {
  name: "Extremadura",
  value: 6
}, {
  name: "Castilla-La Mancha",
  value: 16
}, {
  name: "País Vasco",
  value: 45
}, {
  name: "Cantabria",
  value: 10
}, {
  name: "Principado de Asturias",
  value: 5
}, {
  name: "Galicia",
  value: 3
}, {
  name: "Aragón",
  value: 11
}, {
  name: "Castilla y León",
  value: 19
}, {
  name: "Islas Canarias",
  value: 18
}, {
  name: "Islas Baleares",
  value: 6
}, {
  name: "Comunidad Foral de Navarra",
  value: 13
}];
const statsLast = [{
  name: "Comunidad de Madrid",
  value: 15201
}, {
  name: "La Rioja",
  value: 769
}, {
  name: "Andalucía",
  value: 9856
}, {
  name: "Cataluña",
  value: 14498
}, {
  name: "Comunidad Valenciana",
  value: 7373
}, {
  name: "Región de Murcia",
  value: 1593
}, {
  name: "Extremadura",
  value: 1798
}, {
  name: "Castilla-La Mancha",
  value: 5895
}, {
  name: "País Vasco",
  value: 4395
}, {
  name: "Cantabria",
  value: 562
}, {
  name: "Principado de Asturias",
  value: 1963
}, {
  name: "Galicia",
  value: 1899
}, {
  name: "Aragón",
  value: 2397
}, {
  name: "Castilla y León",
  value: 6833
}, {
  name: "Islas Canarias",
  value: 767
}, {
  name: "Islas Baleares",
  value: 839
}, {
  name: "Comunidad Foral de Navarra",
  value: 1170
}];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1dSYS":[function(require,module,exports) {
var define;
// http://geoexamples.com/d3-composite-projections/ v1.4.0 Copyright 2020 Roger Veciana i Rovira
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-geo'), require('d3-path')) : typeof define === 'function' && define.amd ? define(['exports', 'd3-geo', 'd3-path'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3 = global.d3 || ({}), global.d3, global.d3));
})(this, function (exports, d3Geo, d3Path) {
  "use strict";
  var epsilon = 1e-6;
  function noop() {}
  var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
  var boundsStream = {
    point: boundsPoint,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop,
    result: function () {
      var bounds = [[x0, y0], [x1, y1]];
      x1 = y1 = -(y0 = x0 = Infinity);
      return bounds;
    }
  };
  function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }
  function fitExtent(projection, extent, object) {
    var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([0, 0]);
    if (clip != null) projection.clipExtent(null);
    d3Geo.geoStream(object, projection.stream(boundsStream));
    var b = boundsStream.result(), k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    if (clip != null) projection.clipExtent(clip);
    return projection.scale(k * 150).translate([x, y]);
  }
  function fitSize(projection, size, object) {
    return fitExtent(projection, [[0, 0], size], object);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) streams[i].point(x, y);
      },
      sphere: function () {
        var i = -1;
        while (++i < n) streams[i].sphere();
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) streams[i].lineStart();
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) streams[i].lineEnd();
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) streams[i].polygonStart();
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) streams[i].polygonEnd();
      }
    };
  }
  // A composite projection for the United States, configured by default for
  // 960×500. The projection also works quite well at 960×600 if you change the
  // scale to 1285 and adjust the translate accordingly. The set of standard
  // parallels for each region comes from USGS, which is published here:
  // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
  function albersUsa() {
    var cache, cacheStream, lower48 = d3Geo.geoAlbers(), lower48Point, alaska = d3Geo.geoConicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
    hawaii = d3Geo.geoConicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
    point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point));
    }
    albersUsa.invert = function (coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
    };
    albersUsa.precision = function (_) {
      if (!arguments.length) return lower48.precision();
      (lower48.precision(_), alaska.precision(_), hawaii.precision(_));
      return reset();
    };
    albersUsa.scale = function (_) {
      if (!arguments.length) return lower48.scale();
      (lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_));
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function (_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
      alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon, y + 0.120 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
      hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    albersUsa.fitExtent = function (extent, object) {
      return fitExtent(albersUsa, extent, object);
    };
    albersUsa.fitSize = function (size, object) {
      return fitSize(albersUsa, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return albersUsa;
    }
    albersUsa.drawCompositionBorders = function (context) {
      var hawaii1 = lower48([-102.91, 26.3]);
      var hawaii2 = lower48([-104.0, 27.5]);
      var hawaii3 = lower48([-108.0, 29.1]);
      var hawaii4 = lower48([-110.0, 29.1]);
      var alaska1 = lower48([-110.0, 26.7]);
      var alaska2 = lower48([-112.8, 27.6]);
      var alaska3 = lower48([-114.3, 30.6]);
      var alaska4 = lower48([-119.3, 30.1]);
      context.moveTo(hawaii1[0], hawaii1[1]);
      context.lineTo(hawaii2[0], hawaii2[1]);
      context.lineTo(hawaii3[0], hawaii3[1]);
      context.lineTo(hawaii4[0], hawaii4[1]);
      context.moveTo(alaska1[0], alaska1[1]);
      context.lineTo(alaska2[0], alaska2[1]);
      context.lineTo(alaska3[0], alaska3[1]);
      context.lineTo(alaska4[0], alaska4[1]);
    };
    albersUsa.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return albersUsa.scale(1070);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$1(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) streams[i].point(x, y);
      },
      sphere: function () {
        var i = -1;
        while (++i < n) streams[i].sphere();
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) streams[i].lineStart();
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) streams[i].lineEnd();
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) streams[i].polygonStart();
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) streams[i].polygonEnd();
      }
    };
  }
  // A composite projection for the United States, configured by default for
  // 960×500. Also works quite well at 960×600 with scale 1285. The set of
  // standard parallels for each region comes from USGS, which is published here:
  // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
  function albersUsaTerritories() {
    var cache, cacheStream, lower48 = d3Geo.geoAlbers(), lower48Point, alaska = d3Geo.geoConicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
    hawaii = d3Geo.geoConicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
    puertoRico = d3Geo.geoConicEqualArea().rotate([66, 0]).center([0, 18]).parallels([8, 18]), puertoRicoPoint, // Taken from https://bl.ocks.org/mbostock/5629120
    samoa = d3Geo.geoEquirectangular().rotate([173, 14]), samoaPoint, // EPSG:4169
    guam = d3Geo.geoEquirectangular().rotate([-145, -16.8]), guamPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var puertoRicoBbox = [[-68.3, 19], [-63.9, 17]];
    var samoaBbox = [[-171, -14], [-168, -14.8]];
    var guamBbox = [[144, 20.8], [146.5, 12.7]];
    */
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point) || (puertoRicoPoint.point(x, y), point) || (samoaPoint.point(x, y), point) || (guamPoint.point(x, y), point));
    }
    albersUsa.invert = function (coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      /*
      //How are the return values calculated:
      console.info("******");
      var c0 = puertoRico(puertoRicoBbox[0]);
      var x0 = (c0[0] - t[0]) / k;
      var y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 puertoRico", x0 + ' - ' + y0);
      
      var c1 = puertoRico(puertoRicoBbox[1]);
      var x1 = (c1[0] - t[0]) / k;
      var y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 puertoRico", x1 + ' - ' + y1);
      
      c0 = samoa(samoaBbox[0]);
      x0 = (c0[0] - t[0]) / k;
      y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 samoa", x0 + ' - ' + y0);
      
      c1 = samoa(samoaBbox[1]);
      x1 = (c1[0] - t[0]) / k;
      y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 samoa", x1 + ' - ' + y1);
      
      c0 = guam(guamBbox[0]);
      x0 = (c0[0] - t[0]) / k;
      y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 guam", x0 + ' - ' + y0);
      
      c1 = guam(guamBbox[1]);
      x1 = (c1[0] - t[0]) / k;
      y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 guam", x1 + ' - ' + y1);
      */
      return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : y >= 0.2064 && y < 0.2413 && x >= 0.312 && x < 0.385 ? puertoRico : y >= 0.09 && y < 0.1197 && x >= -0.4243 && x < -0.3232 ? samoa : y >= -0.0518 && y < 0.0895 && x >= -0.4243 && x < -0.3824 ? guam : lower48).invert(coordinates);
    };
    albersUsa.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$1([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream), puertoRico.stream(stream), samoa.stream(stream), guam.stream(stream)]);
    };
    albersUsa.precision = function (_) {
      if (!arguments.length) {
        return lower48.precision();
      }
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      puertoRico.precision(_);
      samoa.precision(_);
      guam.precision(_);
      return reset();
    };
    albersUsa.scale = function (_) {
      if (!arguments.length) {
        return lower48.scale();
      }
      lower48.scale(_);
      alaska.scale(_ * 0.35);
      hawaii.scale(_);
      puertoRico.scale(_);
      samoa.scale(_ * 2);
      guam.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function (_) {
      if (!arguments.length) {
        return lower48.translate();
      }
      var k = lower48.scale(), x = +_[0], y = +_[1];
      /*
      var c0 = puertoRico.translate([x + 0.350 * k, y + 0.224 * k])(puertoRicoBbox[0]);
      var x0 = (x - c0[0]) / k;
      var y0 = (y - c0[1]) / k;
      
      var c1 = puertoRico.translate([x + 0.350 * k, y + 0.224 * k])(puertoRicoBbox[1]);
      var x1 = (x - c1[0]) / k;
      var y1 = (y - c1[1]) / k;
      
      console.info('puertoRico: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      
      c0 = samoa.translate([x - 0.492 * k, y + 0.09 * k])(samoaBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = samoa.translate([x - 0.492 * k, y + 0.09 * k])(samoaBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('samoa: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      
      c0 = guam.translate([x - 0.408 * k, y + 0.018 * k])(guamBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = guam.translate([x - 0.408 * k, y + 0.018 * k])(guamBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('guam: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      */
      lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
      alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon, y + 0.120 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.233 * k - epsilon]]).stream(pointStream);
      hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.233 * k - epsilon]]).stream(pointStream);
      puertoRicoPoint = puertoRico.translate([x + 0.350 * k, y + 0.224 * k]).clipExtent([[x + 0.312 * k + epsilon, y + 0.2064 * k + epsilon], [x + 0.385 * k - epsilon, y + 0.233 * k - epsilon]]).stream(pointStream);
      samoaPoint = samoa.translate([x - 0.492 * k, y + 0.09 * k]).clipExtent([[x - 0.4243 * k + epsilon, y + 0.0903 * k + epsilon], [x - 0.3233 * k - epsilon, y + 0.1197 * k - epsilon]]).stream(pointStream);
      guamPoint = guam.translate([x - 0.408 * k, y + 0.018 * k]).clipExtent([[x - 0.4244 * k + epsilon, y - 0.0519 * k + epsilon], [x - 0.3824 * k - epsilon, y + 0.0895 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    albersUsa.fitExtent = function (extent, object) {
      return fitExtent(albersUsa, extent, object);
    };
    albersUsa.fitSize = function (size, object) {
      return fitSize(albersUsa, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return albersUsa;
    }
    albersUsa.drawCompositionBorders = function (context) {
      /*
      console.info("CLIP EXTENT hawaii: ", hawaii.clipExtent());
      console.info("UL BBOX:", lower48.invert([hawaii.clipExtent()[0][0], hawaii.clipExtent()[0][1]]));
      console.info("UR BBOX:", lower48.invert([hawaii.clipExtent()[1][0], hawaii.clipExtent()[0][1]]));
      console.info("LD BBOX:", lower48.invert([hawaii.clipExtent()[1][0], hawaii.clipExtent()[1][1]]));
      console.info("LL BBOX:", lower48.invert([hawaii.clipExtent()[0][0], hawaii.clipExtent()[1][1]]));
      
      console.info("CLIP EXTENT alaska: ", alaska.clipExtent());
      console.info("UL BBOX:", lower48.invert([alaska.clipExtent()[0][0], alaska.clipExtent()[0][1]]));
      console.info("UR BBOX:", lower48.invert([alaska.clipExtent()[1][0], alaska.clipExtent()[0][1]]));
      console.info("LD BBOX:", lower48.invert([alaska.clipExtent()[1][0], alaska.clipExtent()[1][1]]));
      console.info("LL BBOX:", lower48.invert([alaska.clipExtent()[0][0], alaska.clipExtent()[1][1]]));
      
      console.info("CLIP EXTENT puertoRico: ", puertoRico.clipExtent());
      console.info("UL BBOX:", lower48.invert([puertoRico.clipExtent()[0][0], puertoRico.clipExtent()[0][1]]));
      console.info("UR BBOX:", lower48.invert([puertoRico.clipExtent()[1][0], puertoRico.clipExtent()[0][1]]));
      console.info("LD BBOX:", lower48.invert([puertoRico.clipExtent()[1][0], puertoRico.clipExtent()[1][1]]));
      console.info("LL BBOX:", lower48.invert([puertoRico.clipExtent()[0][0], puertoRico.clipExtent()[1][1]]));
      
      console.info("CLIP EXTENT samoa: ", samoa.clipExtent());
      console.info("UL BBOX:", lower48.invert([samoa.clipExtent()[0][0], samoa.clipExtent()[0][1]]));
      console.info("UR BBOX:", lower48.invert([samoa.clipExtent()[1][0], samoa.clipExtent()[0][1]]));
      console.info("LD BBOX:", lower48.invert([samoa.clipExtent()[1][0], samoa.clipExtent()[1][1]]));
      console.info("LL BBOX:", lower48.invert([samoa.clipExtent()[0][0], samoa.clipExtent()[1][1]]));
      
      
      console.info("CLIP EXTENT guam: ", guam.clipExtent());
      console.info("UL BBOX:", lower48.invert([guam.clipExtent()[0][0], guam.clipExtent()[0][1]]));
      console.info("UR BBOX:", lower48.invert([guam.clipExtent()[1][0], guam.clipExtent()[0][1]]));
      console.info("LD BBOX:", lower48.invert([guam.clipExtent()[1][0], guam.clipExtent()[1][1]]));
      console.info("LL BBOX:", lower48.invert([guam.clipExtent()[0][0], guam.clipExtent()[1][1]]));
      */
      var ulhawaii = lower48([-110.4641, 28.2805]);
      var urhawaii = lower48([-104.0597, 28.9528]);
      var ldhawaii = lower48([-103.7049, 25.1031]);
      var llhawaii = lower48([-109.8337, 24.4531]);
      var ulalaska = lower48([-124.4745, 28.1407]);
      var uralaska = lower48([-110.931, 30.8844]);
      var ldalaska = lower48([-109.8337, 24.4531]);
      var llalaska = lower48([-122.4628, 21.8562]);
      var ulpuertoRico = lower48([-76.8579, 25.1544]);
      var urpuertoRico = lower48([-72.429, 24.2097]);
      var ldpuertoRico = lower48([-72.8265, 22.7056]);
      var llpuertoRico = lower48([-77.1852, 23.6392]);
      var ulsamoa = lower48([-125.0093, 29.7791]);
      var ursamoa = lower48([-118.5193, 31.3262]);
      var ldsamoa = lower48([-118.064, 29.6912]);
      var llsamoa = lower48([-124.4369, 28.169]);
      var ulguam = lower48([-128.1314, 37.4582]);
      var urguam = lower48([-125.2132, 38.214]);
      var ldguam = lower48([-122.3616, 30.5115]);
      var llguam = lower48([-125.0315, 29.8211]);
      context.moveTo(ulhawaii[0], ulhawaii[1]);
      context.lineTo(urhawaii[0], urhawaii[1]);
      context.lineTo(ldhawaii[0], ldhawaii[1]);
      context.lineTo(ldhawaii[0], ldhawaii[1]);
      context.lineTo(llhawaii[0], llhawaii[1]);
      context.closePath();
      context.moveTo(ulalaska[0], ulalaska[1]);
      context.lineTo(uralaska[0], uralaska[1]);
      context.lineTo(ldalaska[0], ldalaska[1]);
      context.lineTo(ldalaska[0], ldalaska[1]);
      context.lineTo(llalaska[0], llalaska[1]);
      context.closePath();
      context.moveTo(ulpuertoRico[0], ulpuertoRico[1]);
      context.lineTo(urpuertoRico[0], urpuertoRico[1]);
      context.lineTo(ldpuertoRico[0], ldpuertoRico[1]);
      context.lineTo(ldpuertoRico[0], ldpuertoRico[1]);
      context.lineTo(llpuertoRico[0], llpuertoRico[1]);
      context.closePath();
      context.moveTo(ulsamoa[0], ulsamoa[1]);
      context.lineTo(ursamoa[0], ursamoa[1]);
      context.lineTo(ldsamoa[0], ldsamoa[1]);
      context.lineTo(ldsamoa[0], ldsamoa[1]);
      context.lineTo(llsamoa[0], llsamoa[1]);
      context.closePath();
      context.moveTo(ulguam[0], ulguam[1]);
      context.lineTo(urguam[0], urguam[1]);
      context.lineTo(ldguam[0], ldguam[1]);
      context.lineTo(ldguam[0], ldguam[1]);
      context.lineTo(llguam[0], llguam[1]);
      context.closePath();
    };
    albersUsa.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return albersUsa.scale(1070);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$2(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Spain, configured by default for 960×500.
  function conicConformalSpain() {
    var cache, cacheStream, iberianPeninsule = d3Geo.geoConicConformal().rotate([5, -38.6]).parallels([0, 60]), iberianPeninsulePoint, canaryIslands = d3Geo.geoConicConformal().rotate([5, -38.6]).parallels([0, 60]), canaryIslandsPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var iberianPeninsuleBbox = [[-11, 46], [4, 35]];
    var canaryIslandsBbox = [[-19.0, 28.85], [-12.7, 28.1]];
    */
    function conicConformalSpain(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (iberianPeninsulePoint.point(x, y), point) || (canaryIslandsPoint.point(x, y), point));
    }
    conicConformalSpain.invert = function (coordinates) {
      var k = iberianPeninsule.scale(), t = iberianPeninsule.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= 0.05346 && y < 0.0897 && x >= -0.13388 && x < -0.0322 ? canaryIslands : iberianPeninsule).invert(coordinates);
    };
    conicConformalSpain.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$2([iberianPeninsule.stream(cacheStream = stream), canaryIslands.stream(stream)]);
    };
    conicConformalSpain.precision = function (_) {
      if (!arguments.length) {
        return iberianPeninsule.precision();
      }
      iberianPeninsule.precision(_);
      canaryIslands.precision(_);
      return reset();
    };
    conicConformalSpain.scale = function (_) {
      if (!arguments.length) {
        return iberianPeninsule.scale();
      }
      iberianPeninsule.scale(_);
      canaryIslands.scale(_);
      return conicConformalSpain.translate(iberianPeninsule.translate());
    };
    conicConformalSpain.translate = function (_) {
      if (!arguments.length) {
        return iberianPeninsule.translate();
      }
      var k = iberianPeninsule.scale(), x = +_[0], y = +_[1];
      /*
      var c0 = iberianPeninsule(iberianPeninsuleBbox[0]);
      var x0 = (x - c0[0]) / k;
      var y0 = (y - c0[1]) / k;
      
      var c1 = iberianPeninsule(iberianPeninsuleBbox[1]);
      var x1 = (x - c1[0]) / k;
      var y1 = (y - c1[1]) / k;
      
      console.info('Iberian Peninsula: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      
      c0 = canaryIslands.translate([x + 0.1 * k, y - 0.094 * k])(canaryIslandsBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = canaryIslands.translate([x + 0.1 * k, y - 0.094 * k])(canaryIslandsBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('Canry Islands: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      */
      iberianPeninsulePoint = iberianPeninsule.translate(_).clipExtent([[x - 0.06857 * k, y - 0.1288 * k], [x + 0.13249 * k, y + 0.06 * k]]).stream(pointStream);
      canaryIslandsPoint = canaryIslands.translate([x + 0.1 * k, y - 0.094 * k]).clipExtent([[x - 0.1331 * k + epsilon, y + 0.053457 * k + epsilon], [x - 0.0354 * k - epsilon, y + 0.08969 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    conicConformalSpain.fitExtent = function (extent, object) {
      return fitExtent(conicConformalSpain, extent, object);
    };
    conicConformalSpain.fitSize = function (size, object) {
      return fitSize(conicConformalSpain, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return conicConformalSpain;
    }
    conicConformalSpain.drawCompositionBorders = function (context) {
      /*
      console.info("CLIP EXTENT: ", canaryIslands.clipExtent());
      console.info("UL BBOX:", iberianPeninsule.invert([canaryIslands.clipExtent()[0][0], canaryIslands.clipExtent()[0][1]]));
      console.info("UR BBOX:", iberianPeninsule.invert([canaryIslands.clipExtent()[1][0], canaryIslands.clipExtent()[0][1]]));
      console.info("LD BBOX:", iberianPeninsule.invert([canaryIslands.clipExtent()[1][0], canaryIslands.clipExtent()[1][1]]));
      */
      var ulCanaryIslands = iberianPeninsule([-14.0346750, 34.965007]);
      var urCanaryIslands = iberianPeninsule([-7.4208899, 35.536988]);
      var ldCanaryIslands = iberianPeninsule([-7.3148275, 33.54359]);
      context.moveTo(ulCanaryIslands[0], ulCanaryIslands[1]);
      context.lineTo(urCanaryIslands[0], urCanaryIslands[1]);
      context.lineTo(ldCanaryIslands[0], ldCanaryIslands[1]);
    };
    conicConformalSpain.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return conicConformalSpain.scale(2700);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$3(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Portugal, configured by default for 960×500.
  function conicConformalPortugal() {
    var cache, cacheStream, iberianPeninsule = d3Geo.geoConicConformal().rotate([10, -39.3]).parallels([0, 60]), iberianPeninsulePoint, madeira = d3Geo.geoConicConformal().rotate([17, -32.7]).parallels([0, 60]), madeiraPoint, azores = d3Geo.geoConicConformal().rotate([27.8, -38.6]).parallels([0, 60]), azoresPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var iberianPeninsuleBbox = [[-11, 46], [4, 34]];
    var madeiraBbox = [[-17.85, 33.6], [-16, 32.02]];
    var azoresBbox = [[-32, 40.529], [-23.98, 35.75]];
    */
    function conicConformalPortugal(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (iberianPeninsulePoint.point(x, y), point) || (madeiraPoint.point(x, y), point) || (azoresPoint.point(x, y), point));
    }
    conicConformalPortugal.invert = function (coordinates) {
      var k = iberianPeninsule.scale(), t = iberianPeninsule.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      /*
      //How are the return values calculated:
      console.info("******");
      var c0 = madeira(madeiraBbox[0]);
      var x0 = (c0[0] - t[0]) / k;
      var y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 madeira", x0 + ' - ' + y0);
      
      var c1 = madeira(madeiraBbox[1]);
      var x1 = (c1[0] - t[0]) / k;
      var y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 madeira", x1 + ' - ' + y1);
      
      c0 = azores(azoresBbox[0]);
      x0 = (c0[0] - t[0]) / k;
      y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 azores", x0 + ' - ' + y0);
      
      c1 = azores(azoresBbox[1]);
      x1 = (c1[0] - t[0]) / k;
      y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 azores", x1 + ' - ' + y1);
      */
      return (y >= 0.0093 && y < 0.03678 && x >= -0.03875 && x < -0.0116 ? madeira : y >= -0.0412 && y < 0.0091 && x >= -0.07782 && x < -0.01166 ? azores : iberianPeninsule).invert(coordinates);
    };
    conicConformalPortugal.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$3([iberianPeninsule.stream(cacheStream = stream), madeira.stream(stream), azores.stream(stream)]);
    };
    conicConformalPortugal.precision = function (_) {
      if (!arguments.length) {
        return iberianPeninsule.precision();
      }
      iberianPeninsule.precision(_);
      madeira.precision(_);
      azores.precision(_);
      return reset();
    };
    conicConformalPortugal.scale = function (_) {
      if (!arguments.length) {
        return iberianPeninsule.scale();
      }
      iberianPeninsule.scale(_);
      madeira.scale(_);
      azores.scale(_ * 0.6);
      return conicConformalPortugal.translate(iberianPeninsule.translate());
    };
    conicConformalPortugal.translate = function (_) {
      if (!arguments.length) {
        return iberianPeninsule.translate();
      }
      var k = iberianPeninsule.scale(), x = +_[0], y = +_[1];
      /*
      var c0 = iberianPeninsule(iberianPeninsuleBbox[0]);
      var x0 = (x - c0[0]) / k;
      var y0 = (y - c0[1]) / k;
      
      var c1 = iberianPeninsule(iberianPeninsuleBbox[1]);
      var x1 = (x - c1[0]) / k;
      var y1 = (y - c1[1]) / k;
      
      console.info('Iberian Peninsula: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k]])');
      
      c0 = madeira.translate([x - 0.0265 * k, y + 0.025 * k])(madeiraBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = madeira.translate([x - 0.0265 * k, y + 0.025 * k])(madeiraBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('Madeira: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      
      c0 = azores.translate([x - 0.045 * k, y + -0.02 * k])(azoresBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = azores.translate([x - 0.045 * k, y + -0.02 * k])(azoresBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('Azores: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      */
      iberianPeninsulePoint = iberianPeninsule.translate(_).clipExtent([[x - 0.0115 * k, y - 0.1138 * k], [x + 0.2105 * k, y + 0.0673 * k]]).stream(pointStream);
      madeiraPoint = madeira.translate([x - 0.0265 * k, y + 0.025 * k]).clipExtent([[x - 0.0388 * k + epsilon, y + 0.0093 * k + epsilon], [x - 0.0116 * k - epsilon, y + 0.0368 * k - epsilon]]).stream(pointStream);
      azoresPoint = azores.translate([x - 0.045 * k, y + -0.02 * k]).clipExtent([[x - 0.0778 * k + epsilon, y - 0.0413 * k + epsilon], [x - 0.0117 * k - epsilon, y + 0.0091 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    conicConformalPortugal.fitExtent = function (extent, object) {
      return fitExtent(conicConformalPortugal, extent, object);
    };
    conicConformalPortugal.fitSize = function (size, object) {
      return fitSize(conicConformalPortugal, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return conicConformalPortugal;
    }
    conicConformalPortugal.drawCompositionBorders = function (context) {
      /*
      console.info("CLIP EXTENT MADEIRA: ", madeira.clipExtent());
      console.info("UL BBOX:", iberianPeninsule.invert([madeira.clipExtent()[0][0], madeira.clipExtent()[0][1]]));
      console.info("UR BBOX:", iberianPeninsule.invert([madeira.clipExtent()[1][0], madeira.clipExtent()[0][1]]));
      console.info("LD BBOX:", iberianPeninsule.invert([madeira.clipExtent()[1][0], madeira.clipExtent()[1][1]]));
      console.info("LL BBOX:", iberianPeninsule.invert([madeira.clipExtent()[0][0], madeira.clipExtent()[1][1]]));
      
      console.info("CLIP EXTENT AZORES: ", azores.clipExtent());
      console.info("UL BBOX:", iberianPeninsule.invert([azores.clipExtent()[0][0], azores.clipExtent()[0][1]]));
      console.info("UR BBOX:", iberianPeninsule.invert([azores.clipExtent()[1][0], azores.clipExtent()[0][1]]));
      console.info("LD BBOX:", iberianPeninsule.invert([azores.clipExtent()[1][0], azores.clipExtent()[1][1]]));
      console.info("LL BBOX:", iberianPeninsule.invert([azores.clipExtent()[0][0], azores.clipExtent()[1][1]]));
      */
      var ulmadeira = iberianPeninsule([-12.8351, 38.7113]);
      var urmadeira = iberianPeninsule([-10.8482, 38.7633]);
      var ldmadeira = iberianPeninsule([-10.8181, 37.2072]);
      var llmadeira = iberianPeninsule([-12.7345, 37.1573]);
      var ulazores = iberianPeninsule([-16.0753, 41.4436]);
      var urazores = iberianPeninsule([-10.9168, 41.6861]);
      var ldazores = iberianPeninsule([-10.8557, 38.7747]);
      var llazores = iberianPeninsule([-15.6728, 38.5505]);
      context.moveTo(ulmadeira[0], ulmadeira[1]);
      context.lineTo(urmadeira[0], urmadeira[1]);
      context.lineTo(ldmadeira[0], ldmadeira[1]);
      context.lineTo(ldmadeira[0], ldmadeira[1]);
      context.lineTo(llmadeira[0], llmadeira[1]);
      context.closePath();
      context.moveTo(ulazores[0], ulazores[1]);
      context.lineTo(urazores[0], urazores[1]);
      context.lineTo(ldazores[0], ldazores[1]);
      context.lineTo(ldazores[0], ldazores[1]);
      context.lineTo(llazores[0], llazores[1]);
      context.closePath();
    };
    conicConformalPortugal.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return conicConformalPortugal.scale(4200);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$4(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Ecuador, configured by default for 960×500.
  function mercatorEcuador() {
    var cache, cacheStream, mainland = d3Geo.geoMercator().rotate([80, 1.5]), mainlandPoint, galapagos = d3Geo.geoMercator().rotate([90.73, 1]), galapagosPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var mainlandBbox = [[-81.5, 2.7], [-70.0, -6.0]];
    var galapagosBbox = [[-92.2, 0.58], [-88.8, -1.8]];
    */
    function mercatorEcuador(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (mainlandPoint.point(x, y), point) || (galapagosPoint.point(x, y), point));
    }
    mercatorEcuador.invert = function (coordinates) {
      var k = mainland.scale(), t = mainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      /*
      //How are the return values calculated:
      var c0 = galapagos(galapagosBbox[0]);
      var x0 = (c0[0] - t[0]) / k;
      var y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 galapagos", x0 + ' - ' + y0);
      
      
      var c1 = galapagos(galapagosBbox[1]);
      var x1 = (c1[0] - t[0]) / k;
      var y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 galapagos", x1 + ' - ' + y1);
      */
      return (y >= -0.0676 && y < -0.026 && x >= -0.0857 && x < -0.0263 ? galapagos : mainland).invert(coordinates);
    };
    mercatorEcuador.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$4([mainland.stream(cacheStream = stream), galapagos.stream(stream)]);
    };
    mercatorEcuador.precision = function (_) {
      if (!arguments.length) {
        return mainland.precision();
      }
      mainland.precision(_);
      galapagos.precision(_);
      return reset();
    };
    mercatorEcuador.scale = function (_) {
      if (!arguments.length) {
        return mainland.scale();
      }
      mainland.scale(_);
      galapagos.scale(_);
      return mercatorEcuador.translate(mainland.translate());
    };
    mercatorEcuador.translate = function (_) {
      if (!arguments.length) {
        return mainland.translate();
      }
      var k = mainland.scale(), x = +_[0], y = +_[1];
      /*
      var c0 = mainland(mainlandBbox[0]);
      var x0 = (x - c0[0]) / k;
      var y0 = (y - c0[1]) / k;
      
      var c1 = mainland(mainlandBbox[1]);
      var x1 = (x - c1[0]) / k;
      var y1 = (y - c1[1]) / k;
      
      console.info('mainland: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k]])');
      
      c0 = galapagos.translate([x - 0.06 * k, y - 0.04 * k])(galapagosBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = galapagos.translate([x - 0.06 * k, y - 0.04 * k])(galapagosBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('galapagos: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');*/
      mainlandPoint = mainland.translate(_).clipExtent([[x - 0.0262 * k, y - 0.0734 * k], [x + 0.1741 * k, y + 0.079 * k]]).stream(pointStream);
      galapagosPoint = galapagos.translate([x - 0.06 * k, y - 0.04 * k]).clipExtent([[x - 0.0857 * k + epsilon, y - 0.0676 * k + epsilon], [x - 0.0263 * k - epsilon, y - 0.026 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    mercatorEcuador.fitExtent = function (extent, object) {
      return fitExtent(mercatorEcuador, extent, object);
    };
    mercatorEcuador.fitSize = function (size, object) {
      return fitSize(mercatorEcuador, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return mercatorEcuador;
    }
    mercatorEcuador.drawCompositionBorders = function (context) {
      /*
      console.info("CLIP EXTENT: ", galapagos.clipExtent());
      console.info("UL BBOX:", mainland.invert([galapagos.clipExtent()[0][0], galapagos.clipExtent()[0][1]]));
      console.info("UR BBOX:", mainland.invert([galapagos.clipExtent()[1][0], galapagos.clipExtent()[0][1]]));
      console.info("LD BBOX:", mainland.invert([galapagos.clipExtent()[1][0], galapagos.clipExtent()[1][1]]));
      console.info("LL BBOX:", mainland.invert([galapagos.clipExtent()[0][0], galapagos.clipExtent()[1][1]]));
      */
      var ulgalapagos = mainland([-84.9032, 2.3757]);
      var urgalapagos = mainland([-81.5047, 2.3708]);
      var ldgalapagos = mainland([-81.5063, -0.01]);
      var llgalapagos = mainland([-84.9086, -0.005]);
      context.moveTo(ulgalapagos[0], ulgalapagos[1]);
      context.lineTo(urgalapagos[0], urgalapagos[1]);
      context.lineTo(ldgalapagos[0], ldgalapagos[1]);
      context.lineTo(llgalapagos[0], llgalapagos[1]);
      context.closePath();
    };
    mercatorEcuador.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return mercatorEcuador.scale(3500);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$5(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Chile, configured by default for 960×500.
  function transverseMercatorChile() {
    var cache, cacheStream, mainland = d3Geo.geoTransverseMercator().rotate([72, 37]), mainlandPoint, antarctic = d3Geo.geoStereographic().rotate([72, 0]), antarcticPoint, juanFernandez = d3Geo.geoMercator().rotate([80, 33.5]), juanFernandezPoint, pascua = d3Geo.geoMercator().rotate([110, 25]), pascuaPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var mainlandBbox = [[-75.5, -15.0], [-32, -49.0]];
    var antarcticBbox = [[-91.0, -60.0], [-43.0, -90.0]];
    var juanFernandezBbox = [[-81.0, -33.0], [-78.5, -34.0]];
    var pascuaBbox = [[-110, -26.6], [-108.7, -27.5]];
    */
    function transverseMercatorChile(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (mainlandPoint.point(x, y), point) || (antarcticPoint.point(x, y), point) || (juanFernandezPoint.point(x, y), point) || (pascuaPoint.point(x, y), point));
    }
    transverseMercatorChile.invert = function (coordinates) {
      var k = mainland.scale(), t = mainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      /*
      //How are the return values calculated:
      console.info("******");
      var c0 = antarctic(antarcticBbox[0]);
      var x0 = (c0[0] - t[0]) / k;
      var y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 antarctic", x0 + ' - ' + y0);
      
      var c1 = antarctic(antarcticBbox[1]);
      var x1 = (c1[0] - t[0]) / k;
      var y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 antarctic", x1 + ' - ' + y1);
      
      c0 = juanFernandez(juanFernandezBbox[0]);
      x0 = (c0[0] - t[0]) / k;
      y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 juanFernandez", x0 + ' - ' + y0);
      
      c1 = juanFernandez(juanFernandezBbox[1]);
      x1 = (c1[0] - t[0]) / k;
      y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 juanFernandez", x1 + ' - ' + y1);
      
      c0 = pascua(pascuaBbox[0]);
      x0 = (c0[0] - t[0]) / k;
      y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 pascua", x0 + ' - ' + y0);
      
      c1 = pascua(pascuaBbox[1]);
      x1 = (c1[0] - t[0]) / k;
      y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 pascua", x1 + ' - ' + y1);
      */
      return (y >= 0.2582 && y < 0.32 && x >= -0.1036 && x < -0.087 ? antarctic : y >= -0.01298 && y < 0.0133 && x >= -0.11396 && x < -0.05944 ? juanFernandez : y >= 0.01539 && y < 0.03911 && x >= -0.089 && x < -0.0588 ? pascua : mainland).invert(coordinates);
    };
    transverseMercatorChile.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$5([mainland.stream(cacheStream = stream), antarctic.stream(stream), juanFernandez.stream(stream), pascua.stream(stream)]);
    };
    transverseMercatorChile.precision = function (_) {
      if (!arguments.length) {
        return mainland.precision();
      }
      mainland.precision(_);
      antarctic.precision(_);
      juanFernandez.precision(_);
      pascua.precision(_);
      return reset();
    };
    transverseMercatorChile.scale = function (_) {
      if (!arguments.length) {
        return mainland.scale();
      }
      mainland.scale(_);
      antarctic.scale(_ * 0.15);
      juanFernandez.scale(_ * 1.5);
      pascua.scale(_ * 1.5);
      return transverseMercatorChile.translate(mainland.translate());
    };
    transverseMercatorChile.translate = function (_) {
      if (!arguments.length) {
        return mainland.translate();
      }
      var k = mainland.scale(), x = +_[0], y = +_[1];
      /*
      var c0 = mainland(mainlandBbox[0]);
      var x0 = (x - c0[0]) / k;
      var y0 = (y - c0[1]) / k;
      
      var c1 = mainland(mainlandBbox[1]);
      var x1 = (x - c1[0]) / k;
      var y1 = (y - c1[1]) / k;
      
      console.info('Mainland: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k]])');
      
      c0 = antarctic.translate([x - 0.1 * k, y + 0.17 * k])(antarcticBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = antarctic.translate([x - 0.1 * k, y + 0.17 * k])(antarcticBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('antarctic: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('Doesn t work due to -90 latitude!' + '.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      
      c0 = juanFernandez.translate([x - 0.092 * k, y -0 * k])(juanFernandezBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = juanFernandez.translate([x - 0.092 * k, y -0 * k])(juanFernandezBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('juanFernandez: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      
      c0 = pascua.translate([x - 0.089 * k, y -0.0265 * k])(pascuaBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = pascua.translate([x - 0.089 * k, y -0.0265 * k])(pascuaBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('pascua: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      */
      mainlandPoint = mainland.translate(_).clipExtent([[x - 0.059 * k, y - 0.3835 * k], [x + 0.4498 * k, y + 0.3375 * k]]).stream(pointStream);
      antarcticPoint = antarctic.translate([x - 0.087 * k, y + 0.17 * k]).clipExtent([[x - 0.1166 * k + epsilon, y + 0.2582 * k + epsilon], [x - 0.06 * k - epsilon, y + 0.32 * k - epsilon]]).stream(pointStream);
      juanFernandezPoint = juanFernandez.translate([x - 0.092 * k, y - 0 * k]).clipExtent([[x - 0.114 * k + epsilon, y - 0.013 * k + epsilon], [x - 0.0594 * k - epsilon, y + 0.0133 * k - epsilon]]).stream(pointStream);
      pascuaPoint = pascua.translate([x - 0.089 * k, y - 0.0265 * k]).clipExtent([[x - 0.089 * k + epsilon, y + 0.0154 * k + epsilon], [x - 0.0588 * k - epsilon, y + 0.0391 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    transverseMercatorChile.fitExtent = function (extent, object) {
      return fitExtent(transverseMercatorChile, extent, object);
    };
    transverseMercatorChile.fitSize = function (size, object) {
      return fitSize(transverseMercatorChile, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return transverseMercatorChile;
    }
    transverseMercatorChile.drawCompositionBorders = function (context) {
      /*
      console.info("CLIP EXTENT antarctic: ", antarctic.clipExtent());
      console.info("UL BBOX:", mainland.invert([antarctic.clipExtent()[0][0], antarctic.clipExtent()[0][1]]));
      console.info("UR BBOX:", mainland.invert([antarctic.clipExtent()[1][0], antarctic.clipExtent()[0][1]]));
      console.info("LD BBOX:", mainland.invert([antarctic.clipExtent()[1][0], antarctic.clipExtent()[1][1]]));
      console.info("LL BBOX:", mainland.invert([antarctic.clipExtent()[0][0], antarctic.clipExtent()[1][1]]));
      
      console.info("CLIP EXTENT juanFernandez: ", juanFernandez.clipExtent());
      console.info("UL BBOX:", mainland.invert([juanFernandez.clipExtent()[0][0], juanFernandez.clipExtent()[0][1]]));
      console.info("UR BBOX:", mainland.invert([juanFernandez.clipExtent()[1][0], juanFernandez.clipExtent()[0][1]]));
      console.info("LD BBOX:", mainland.invert([juanFernandez.clipExtent()[1][0], juanFernandez.clipExtent()[1][1]]));
      console.info("LL BBOX:", mainland.invert([juanFernandez.clipExtent()[0][0], juanFernandez.clipExtent()[1][1]]));
      
      console.info("CLIP EXTENT pascua: ", pascua.clipExtent());
      console.info("UL BBOX:", mainland.invert([pascua.clipExtent()[0][0], pascua.clipExtent()[0][1]]));
      console.info("UR BBOX:", mainland.invert([pascua.clipExtent()[1][0], pascua.clipExtent()[0][1]]));
      console.info("LD BBOX:", mainland.invert([pascua.clipExtent()[1][0], pascua.clipExtent()[1][1]]));
      console.info("LL BBOX:", mainland.invert([pascua.clipExtent()[0][0], pascua.clipExtent()[1][1]]));
      */
      var ulantarctic = mainland([-82.6999, -51.3043]);
      var urantarctic = mainland([-77.5442, -51.6631]);
      var ldantarctic = mainland([-78.0254, -55.1860]);
      var llantarctic = mainland([-83.6106, -54.7785]);
      var uljuanFernandez = mainland([-80.0638, -35.9840]);
      var urjuanFernandez = mainland([-76.2153, -36.1811]);
      var ldjuanFernandez = mainland([-76.2994, -37.6839]);
      var lljuanFernandez = mainland([-80.2231, -37.4757]);
      var ulpascua = mainland([-78.442, -37.706]);
      var urpascua = mainland([-76.263, -37.8054]);
      var ldpascua = mainland([-76.344, -39.1595]);
      var llpascua = mainland([-78.5638, -39.0559]);
      context.moveTo(ulantarctic[0], ulantarctic[1]);
      context.lineTo(urantarctic[0], urantarctic[1]);
      context.lineTo(ldantarctic[0], ldantarctic[1]);
      context.lineTo(ldantarctic[0], ldantarctic[1]);
      context.lineTo(llantarctic[0], llantarctic[1]);
      context.closePath();
      context.moveTo(uljuanFernandez[0], uljuanFernandez[1]);
      context.lineTo(urjuanFernandez[0], urjuanFernandez[1]);
      context.lineTo(ldjuanFernandez[0], ldjuanFernandez[1]);
      context.lineTo(ldjuanFernandez[0], ldjuanFernandez[1]);
      context.lineTo(lljuanFernandez[0], lljuanFernandez[1]);
      context.closePath();
      context.moveTo(ulpascua[0], ulpascua[1]);
      context.lineTo(urpascua[0], urpascua[1]);
      context.lineTo(ldpascua[0], ldpascua[1]);
      context.lineTo(ldpascua[0], ldpascua[1]);
      context.lineTo(llpascua[0], llpascua[1]);
      context.closePath();
    };
    transverseMercatorChile.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return transverseMercatorChile.scale(700);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$6(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Portugal, configured by default for 960×500.
  function conicEquidistantJapan() {
    var cache, cacheStream, mainland = d3Geo.geoConicEquidistant().rotate([-136, -22]).parallels([40, 34]), mainlandPoint, // gis.stackexchange.com/a/73135
    hokkaido = d3Geo.geoConicEquidistant().rotate([-146, -26]).parallels([40, 34]), hokkaidoPoint, okinawa = d3Geo.geoConicEquidistant().rotate([-126, -19]).parallels([40, 34]), okinawaPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var mainlandBbox = [[126.0, 41.606], [142.97, 29.97]];
    var hokkaidoBbox = [[138.7, 45.61], [146.2, 41.2]];
    var okinawaBbox = [[122.6, 29.0], [130, 23.7]];
    */
    function conicEquidistantJapan(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (mainlandPoint.point(x, y), point) || (hokkaidoPoint.point(x, y), point) || (okinawaPoint.point(x, y), point));
    }
    conicEquidistantJapan.invert = function (coordinates) {
      var k = mainland.scale(), t = mainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      /*
      //How are the return values calculated:
      console.info("******");
      var c0 = hokkaido(hokkaidoBbox[0]);
      var x0 = (c0[0] - t[0]) / k;
      var y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 hokkaido", x0 + ' - ' + y0);
      
      var c1 = hokkaido(hokkaidoBbox[1]);
      var x1 = (c1[0] - t[0]) / k;
      var y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 hokkaido", x1 + ' - ' + y1);
      
      c0 = okinawa(okinawaBbox[0]);
      x0 = (c0[0] - t[0]) / k;
      y0 = (c0[1] - t[1]) / k;
      
      console.info("p0 okinawa", x0 + ' - ' + y0);
      
      c1 = okinawa(okinawaBbox[1]);
      x1 = (c1[0] - t[0]) / k;
      y1 = (c1[1] - t[1]) / k;
      
      console.info("p1 okinawa", x1 + ' - ' + y1);
      */
      return (y >= -0.10925 && y < -0.02701 && x >= -0.135 && x < -0.0397 ? hokkaido : y >= 0.04713 && y < 0.11138 && x >= -0.03986 && x < 0.051 ? okinawa : mainland).invert(coordinates);
    };
    conicEquidistantJapan.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$6([mainland.stream(cacheStream = stream), hokkaido.stream(stream), okinawa.stream(stream)]);
    };
    conicEquidistantJapan.precision = function (_) {
      if (!arguments.length) {
        return mainland.precision();
      }
      mainland.precision(_);
      hokkaido.precision(_);
      okinawa.precision(_);
      return reset();
    };
    conicEquidistantJapan.scale = function (_) {
      if (!arguments.length) {
        return mainland.scale();
      }
      mainland.scale(_);
      hokkaido.scale(_);
      okinawa.scale(_ * 0.7);
      return conicEquidistantJapan.translate(mainland.translate());
    };
    conicEquidistantJapan.translate = function (_) {
      if (!arguments.length) {
        return mainland.translate();
      }
      var k = mainland.scale(), x = +_[0], y = +_[1];
      /*
      var c0 = mainland(mainlandBbox[0]);
      var x0 = (x - c0[0]) / k;
      var y0 = (y - c0[1]) / k;
      
      var c1 = mainland(mainlandBbox[1]);
      var x1 = (x - c1[0]) / k;
      var y1 = (y - c1[1]) / k;
      
      console.info('Main: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k]])');
      
      c0 = hokkaido.translate([x - 0.0425 * k, y - 0.005 * k])(hokkaidoBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = hokkaido.translate([x - 0.0425 * k, y - 0.005 * k])(hokkaidoBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('hokkaido: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      
      c0 = okinawa.translate([x - 0 * k, y + 0 * k])(okinawaBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;
      
      c1 = okinawa.translate([x - 0 * k, y + 0 * k])(okinawaBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;
      
      console.info('okinawa: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
      console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      */
      mainlandPoint = mainland.translate(_).clipExtent([[x - 0.1352 * k, y - 0.1091 * k], [x + 0.117 * k, y + 0.098 * k]]).stream(pointStream);
      hokkaidoPoint = hokkaido.translate([x - 0.0425 * k, y - 0.005 * k]).clipExtent([[x - 0.135 * k + epsilon, y - 0.1093 * k + epsilon], [x - 0.0397 * k - epsilon, y - 0.027 * k - epsilon]]).stream(pointStream);
      okinawaPoint = okinawa.translate(_).clipExtent([[x - 0.0399 * k + epsilon, y + 0.0471 * k + epsilon], [x + 0.051 * k - epsilon, y + 0.1114 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    conicEquidistantJapan.fitExtent = function (extent, object) {
      return fitExtent(conicEquidistantJapan, extent, object);
    };
    conicEquidistantJapan.fitSize = function (size, object) {
      return fitSize(conicEquidistantJapan, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return conicEquidistantJapan;
    }
    conicEquidistantJapan.drawCompositionBorders = function (context) {
      /*
      console.info("CLIP EXTENT hokkaido: ", hokkaido.clipExtent());
      console.info("UL BBOX:", mainland.invert([hokkaido.clipExtent()[0][0], hokkaido.clipExtent()[0][1]]));
      console.info("UR BBOX:", mainland.invert([hokkaido.clipExtent()[1][0], hokkaido.clipExtent()[0][1]]));
      console.info("LD BBOX:", mainland.invert([hokkaido.clipExtent()[1][0], hokkaido.clipExtent()[1][1]]));
      console.info("LL BBOX:", mainland.invert([hokkaido.clipExtent()[0][0], hokkaido.clipExtent()[1][1]]));
      */
      var ulhokkaido = mainland([126.01320483689143, 41.621090310215585]);
      var urhokkaido = mainland([133.04304387025903, 42.15087523707186]);
      var ldhokkaido = mainland([133.3021766080688, 37.43975444725098]);
      var llhokkaido = mainland([126.87889168628224, 36.95488945159779]);
      var llokinawa = mainland([132.9, 29.8]);
      var lmokinawa = mainland([134, 33]);
      var lrokinawa = mainland([139.3, 33.2]);
      var llrokinawa = mainland([139.16, 30.5]);
      context.moveTo(ulhokkaido[0], ulhokkaido[1]);
      context.lineTo(urhokkaido[0], urhokkaido[1]);
      context.lineTo(ldhokkaido[0], ldhokkaido[1]);
      context.lineTo(llhokkaido[0], llhokkaido[1]);
      context.closePath();
      context.moveTo(llokinawa[0], llokinawa[1]);
      context.lineTo(lmokinawa[0], lmokinawa[1]);
      context.lineTo(lrokinawa[0], lrokinawa[1]);
      context.lineTo(llrokinawa[0], llrokinawa[1]);
    };
    conicEquidistantJapan.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return conicEquidistantJapan.scale(2200);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$7(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for France, configured by default for 960×500.
  function conicConformalFrance() {
    var cache, cacheStream, europe = d3Geo.geoConicConformal().rotate([-3, -46.2]).parallels([0, 60]), europePoint, guyane = d3Geo.geoMercator().center([-53.2, 3.9]), guyanePoint, martinique = d3Geo.geoMercator().center([-61.03, 14.67]), martiniquePoint, guadeloupe = d3Geo.geoMercator().center([-61.46, 16.14]), guadeloupePoint, saintBarthelemy = d3Geo.geoMercator().center([-62.85, 17.92]), saintBarthelemyPoint, stPierreMiquelon = d3Geo.geoMercator().center([-56.23, 46.93]), stPierreMiquelonPoint, mayotte = d3Geo.geoMercator().center([45.16, -12.8]), mayottePoint, reunion = d3Geo.geoMercator().center([55.52, -21.13]), reunionPoint, nouvelleCaledonie = d3Geo.geoMercator().center([165.8, -21.07]), nouvelleCaledoniePoint, wallisFutuna = d3Geo.geoMercator().center([-178.1, -14.3]), wallisFutunaPoint, polynesie = d3Geo.geoMercator().center([-150.55, -17.11]), polynesiePoint, polynesie2 = d3Geo.geoMercator().center([-150.55, -17.11]), polynesie2Point, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var europeBbox = [[-6.5, 51], [10, 41]];
    var guyaneBbox = [[-54.5, 6.29], [-50.9, 1.48]];
    */
    function conicConformalFrance(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (europePoint.point(x, y), point) || (guyanePoint.point(x, y), point) || (martiniquePoint.point(x, y), point) || (guadeloupePoint.point(x, y), point) || (saintBarthelemyPoint.point(x, y), point) || (stPierreMiquelonPoint.point(x, y), point) || (mayottePoint.point(x, y), point) || (reunionPoint.point(x, y), point) || (nouvelleCaledoniePoint.point(x, y), point) || (wallisFutunaPoint.point(x, y), point) || (polynesiePoint.point(x, y), point) || (polynesie2Point.point(x, y), point));
    }
    conicConformalFrance.invert = function (coordinates) {
      var k = europe.scale(), t = europe.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= 0.029 && y < 0.0864 && x >= -0.14 && x < -0.0996 ? guyane : y >= 0 && y < 0.029 && x >= -0.14 && x < -0.0996 ? martinique : y >= -0.032 && y < 0 && x >= -0.14 && x < -0.0996 ? guadeloupe : y >= -0.052 && y < -0.032 && x >= -0.14 && x < -0.0996 ? saintBarthelemy : y >= -0.076 && y < 0.052 && x >= -0.14 && x < -0.0996 ? stPierreMiquelon : y >= -0.076 && y < -0.052 && x >= 0.0967 && x < 0.1371 ? mayotte : y >= -0.052 && y < -0.02 && x >= 0.0967 && x < 0.1371 ? reunion : y >= -0.02 && y < 0.012 && x >= 0.0967 && x < 0.1371 ? nouvelleCaledonie : y >= 0.012 && y < 0.033 && x >= 0.0967 && x < 0.1371 ? wallisFutuna : y >= 0.033 && y < 0.0864 && x >= 0.0967 && x < 0.1371 ? polynesie : europe).invert(coordinates);
    };
    conicConformalFrance.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$7([europe.stream(cacheStream = stream), guyane.stream(stream), martinique.stream(stream), guadeloupe.stream(stream), saintBarthelemy.stream(stream), stPierreMiquelon.stream(stream), mayotte.stream(stream), reunion.stream(stream), nouvelleCaledonie.stream(stream), wallisFutuna.stream(stream), polynesie.stream(stream), polynesie2.stream(stream)]);
    };
    conicConformalFrance.precision = function (_) {
      if (!arguments.length) {
        return europe.precision();
      }
      europe.precision(_);
      guyane.precision(_);
      martinique.precision(_);
      guadeloupe.precision(_);
      saintBarthelemy.precision(_);
      stPierreMiquelon.precision(_);
      mayotte.precision(_);
      reunion.precision(_);
      nouvelleCaledonie.precision(_);
      wallisFutuna.precision(_);
      polynesie.precision(_);
      polynesie2.precision(_);
      return reset();
    };
    conicConformalFrance.scale = function (_) {
      if (!arguments.length) {
        return europe.scale();
      }
      europe.scale(_);
      guyane.scale(_ * 0.6);
      martinique.scale(_ * 1.6);
      guadeloupe.scale(_ * 1.4);
      saintBarthelemy.scale(_ * 5);
      stPierreMiquelon.scale(_ * 1.3);
      mayotte.scale(_ * 1.6);
      reunion.scale(_ * 1.2);
      nouvelleCaledonie.scale(_ * 0.3);
      wallisFutuna.scale(_ * 2.7);
      polynesie.scale(_ * 0.5);
      polynesie2.scale(_ * 0.06);
      return conicConformalFrance.translate(europe.translate());
    };
    conicConformalFrance.translate = function (_) {
      if (!arguments.length) {
        return europe.translate();
      }
      var k = europe.scale(), x = +_[0], y = +_[1];
      europePoint = europe.translate(_).clipExtent([[x - 0.0996 * k, y - 0.0908 * k], [x + 0.0967 * k, y + 0.0864 * k]]).stream(pointStream);
      guyanePoint = guyane.translate([x - 0.12 * k, y + 0.0575 * k]).clipExtent([[x - 0.14 * k + epsilon, y + 0.029 * k + epsilon], [x - 0.0996 * k - epsilon, y + 0.0864 * k - epsilon]]).stream(pointStream);
      martiniquePoint = martinique.translate([x - 0.12 * k, y + 0.013 * k]).clipExtent([[x - 0.14 * k + epsilon, y + 0 * k + epsilon], [x - 0.0996 * k - epsilon, y + 0.029 * k - epsilon]]).stream(pointStream);
      guadeloupePoint = guadeloupe.translate([x - 0.12 * k, y - 0.014 * k]).clipExtent([[x - 0.14 * k + epsilon, y - 0.032 * k + epsilon], [x - 0.0996 * k - epsilon, y + 0 * k - epsilon]]).stream(pointStream);
      saintBarthelemyPoint = saintBarthelemy.translate([x - 0.12 * k, y - 0.044 * k]).clipExtent([[x - 0.14 * k + epsilon, y - 0.052 * k + epsilon], [x - 0.0996 * k - epsilon, y - 0.032 * k - epsilon]]).stream(pointStream);
      stPierreMiquelonPoint = stPierreMiquelon.translate([x - 0.12 * k, y - 0.065 * k]).clipExtent([[x - 0.14 * k + epsilon, y - 0.076 * k + epsilon], [x - 0.0996 * k - epsilon, y - 0.052 * k - epsilon]]).stream(pointStream);
      mayottePoint = mayotte.translate([x + 0.117 * k, y - 0.064 * k]).clipExtent([[x + 0.0967 * k + epsilon, y - 0.076 * k + epsilon], [x + 0.1371 * k - epsilon, y - 0.052 * k - epsilon]]).stream(pointStream);
      reunionPoint = reunion.translate([x + 0.116 * k, y - 0.0355 * k]).clipExtent([[x + 0.0967 * k + epsilon, y - 0.052 * k + epsilon], [x + 0.1371 * k - epsilon, y - 0.02 * k - epsilon]]).stream(pointStream);
      nouvelleCaledoniePoint = nouvelleCaledonie.translate([x + 0.116 * k, y - 0.0048 * k]).clipExtent([[x + 0.0967 * k + epsilon, y - 0.02 * k + epsilon], [x + 0.1371 * k - epsilon, y + 0.012 * k - epsilon]]).stream(pointStream);
      wallisFutunaPoint = wallisFutuna.translate([x + 0.116 * k, y + 0.022 * k]).clipExtent([[x + 0.0967 * k + epsilon, y + 0.012 * k + epsilon], [x + 0.1371 * k - epsilon, y + 0.033 * k - epsilon]]).stream(pointStream);
      polynesie2Point = polynesie2.translate([x + 0.11 * k, y + 0.045 * k]).clipExtent([[x + 0.0967 * k + epsilon, y + 0.033 * k + epsilon], [x + 0.1371 * k - epsilon, y + 0.06 * k - epsilon]]).stream(pointStream);
      polynesiePoint = polynesie.translate([x + 0.115 * k, y + 0.075 * k]).clipExtent([[x + 0.0967 * k + epsilon, y + 0.06 * k + epsilon], [x + 0.1371 * k - epsilon, y + 0.0864 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    conicConformalFrance.fitExtent = function (extent, object) {
      return fitExtent(conicConformalFrance, extent, object);
    };
    conicConformalFrance.fitSize = function (size, object) {
      return fitSize(conicConformalFrance, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return conicConformalFrance;
    }
    conicConformalFrance.drawCompositionBorders = function (context) {
      /*
      console.log("var ul, ur, ld, ll;");
      var projs = [guyane, martinique, guadeloupe, saintBarthelemy, stPierreMiquelon, mayotte, reunion, nouvelleCaledonie, wallisFutuna, polynesie, polynesie2];
      for (var i in projs){
      var ul = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[0][1]]);
      var ur = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[0][1]]);
      var ld = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[1][1]]);
      var ll = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[1][1]]);
      
      console.log("ul = europe(["+ul+"]);");
      console.log("ur = europe(["+ur+"]);");
      console.log("ld = europe(["+ld+"]);");
      console.log("ll = europe(["+ll+"]);");
      
      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");
      
      }*/
      var ul, ur, ld, ll;
      ul = europe([-7.938886725111036, 43.7219460918835]);
      ur = europe([-4.832080896458295, 44.12930268549372]);
      ld = europe([-4.205299743793263, 40.98096346967365]);
      ll = europe([-7.071796453126152, 40.610037319181444]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([-8.42751373617692, 45.32889452553031]);
      ur = europe([-5.18599305777107, 45.7566442062976]);
      ld = europe([-4.832080905154431, 44.129302726751426]);
      ll = europe([-7.938886737126192, 43.72194613263854]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([-9.012656899657046, 47.127733821030176]);
      ur = europe([-5.6105244772793155, 47.579777861410626]);
      ld = europe([-5.185993067168585, 45.756644248170346]);
      ll = europe([-8.427513749141811, 45.32889456686326]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([-9.405747558985553, 48.26506375557457]);
      ur = europe([-5.896175018439575, 48.733352850851624]);
      ld = europe([-5.610524487556043, 47.57977790393761]);
      ll = europe([-9.012656913808351, 47.127733862971255]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([-9.908436061346974, 49.642448789505856]);
      ur = europe([-6.262026716233124, 50.131426841787174]);
      ld = europe([-5.896175029331232, 48.73335289377258]);
      ll = europe([-9.40574757396393, 48.26506379787767]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([11.996907706504462, 50.16039028163579]);
      ur = europe([15.649907879773343, 49.68279246765253]);
      ld = europe([15.156712840526632, 48.30371557625831]);
      ll = europe([11.64122661754411, 48.761078240546816]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([11.641226606955788, 48.7610781975889]);
      ur = europe([15.156712825832164, 48.30371553390465]);
      ld = europe([14.549932166241172, 46.4866532486199]);
      ll = europe([11.204443787952183, 46.91899233914248]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([11.204443778297161, 46.918992296823646]);
      ur = europe([14.549932152815039, 46.486653206856396]);
      ld = europe([13.994409796764009, 44.695833444323256]);
      ll = europe([10.805306599253848, 45.105133870684924]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([10.805306590412085, 45.10513382903308]);
      ur = europe([13.99440978444733, 44.695833403183606]);
      ld = europe([13.654633799024392, 43.53552468558152]);
      ll = europe([10.561516803980956, 43.930671459798624]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([10.561516795617383, 43.93067141859757]);
      ur = europe([13.654633787361952, 43.5355246448671]);
      ld = europe([12.867691604239901, 40.640701985019405]);
      ll = europe([9.997809515987688, 41.00288343254471]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([10.8, 42.4]);
      ur = europe([12.8, 42.13]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
    };
    conicConformalFrance.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return conicConformalFrance.scale(2700);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$8(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Portugal, configured by default for 960×500.
  function conicConformalEurope() {
    var cache, cacheStream, europe = d3Geo.geoConicConformal().rotate([-10, -53]).parallels([0, 60]), europePoint, guadeloupe = d3Geo.geoMercator().center([-61.46, 16.14]), guadeloupePoint, guyane = d3Geo.geoMercator().center([-53.2, 3.9]), guyanePoint, azores = d3Geo.geoConicConformal().rotate([27.8, -38.9]).parallels([0, 60]), azoresPoint, azores2 = d3Geo.geoConicConformal().rotate([25.43, -37.398]).parallels([0, 60]), azores2Point, azores3 = d3Geo.geoConicConformal().rotate([31.17, -39.539]).parallels([0, 60]), azores3Point, madeira = d3Geo.geoConicConformal().rotate([17, -32.7]).parallels([0, 60]), madeiraPoint, canaryIslands = d3Geo.geoConicConformal().rotate([16, -28.5]).parallels([0, 60]), canaryIslandsPoint, martinique = d3Geo.geoMercator().center([-61.03, 14.67]), martiniquePoint, mayotte = d3Geo.geoMercator().center([45.16, -12.8]), mayottePoint, reunion = d3Geo.geoMercator().center([55.52, -21.13]), reunionPoint, malta = d3Geo.geoConicConformal().rotate([-14.4, -35.95]).parallels([0, 60]), maltaPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    /*
    var europeBbox = [[-6.5, 51], [10, 41]];
    var guyaneBbox = [[-54.5, 6.29], [-50.9, 1.48]];
    */
    function conicConformalEurope(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (europePoint.point(x, y), point) || (guyanePoint.point(x, y), point) || (martiniquePoint.point(x, y), point) || (guadeloupePoint.point(x, y), point) || (canaryIslandsPoint.point(x, y), point) || (madeiraPoint.point(x, y), point) || (mayottePoint.point(x, y), point) || (reunionPoint.point(x, y), point) || (maltaPoint.point(x, y), point) || (azoresPoint.point(x, y), point) || (azores2Point.point(x, y), point) || (azores3Point.point(x, y), point));
    }
    conicConformalEurope.invert = function (coordinates) {
      var k = europe.scale(), t = europe.translate(), x = (coordinates[0] - (t[0] + 0.08 * k)) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= -0.31 && y < -0.24 && x >= 0.14 && x < 0.24 ? guadeloupe : y >= -0.24 && y < -0.17 && x >= 0.14 && x < 0.24 ? guyane : y >= -0.17 && y < -0.12 && x >= 0.21 && x < 0.24 ? azores2 : y >= -0.17 && y < -0.14 && x >= 0.14 && x < 0.165 ? azores3 : y >= -0.17 && y < -0.1 && x >= 0.14 && x < 0.24 ? azores : y >= -0.1 && y < -0.03 && x >= 0.14 && x < 0.24 ? madeira : y >= -0.03 && y < 0.04 && x >= 0.14 && x < 0.24 ? canaryIslands : y >= -0.31 && y < -0.24 && x >= 0.24 && x < 0.34 ? martinique : y >= -0.24 && y < -0.17 && x >= 0.24 && x < 0.34 ? mayotte : y >= -0.17 && y < -0.1 && x >= 0.24 && x < 0.34 ? reunion : y >= -0.1 && y < -0.03 && x >= 0.24 && x < 0.34 ? malta : europe).invert(coordinates);
    };
    conicConformalEurope.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$8([europe.stream(cacheStream = stream), guyane.stream(stream), martinique.stream(stream), guadeloupe.stream(stream), canaryIslands.stream(stream), madeira.stream(stream), mayotte.stream(stream), reunion.stream(stream), malta.stream(stream), azores.stream(stream), azores2.stream(stream), azores3.stream(stream)]);
    };
    conicConformalEurope.precision = function (_) {
      if (!arguments.length) {
        return europe.precision();
      }
      europe.precision(_);
      guyane.precision(_);
      martinique.precision(_);
      guadeloupe.precision(_);
      canaryIslands.precision(_);
      madeira.precision(_);
      mayotte.precision(_);
      reunion.precision(_);
      malta.precision(_);
      azores.precision(_);
      azores2.precision(_);
      azores3.precision(_);
      return reset();
    };
    conicConformalEurope.scale = function (_) {
      if (!arguments.length) {
        return europe.scale();
      }
      europe.scale(_);
      guadeloupe.scale(_ * 3);
      guyane.scale(_ * 0.8);
      martinique.scale(_ * 3.5);
      reunion.scale(_ * 2.7);
      azores.scale(_ * 2);
      azores2.scale(_ * 2);
      azores3.scale(_ * 2);
      madeira.scale(_ * 3);
      canaryIslands.scale(_);
      mayotte.scale(_ * 5.5);
      malta.scale(_ * 6);
      return conicConformalEurope.translate(europe.translate());
    };
    conicConformalEurope.translate = function (_) {
      if (!arguments.length) {
        return europe.translate();
      }
      var k = europe.scale(), x = +_[0], y = +_[1];
      europePoint = europe.translate([x - 0.08 * k, y]).clipExtent([[x - 0.51 * k, y - 0.33 * k], [x + 0.5 * k, y + 0.33 * k]]).stream(pointStream);
      guadeloupePoint = guadeloupe.translate([x + 0.19 * k, y - 0.275 * k]).clipExtent([[x + 0.14 * k + epsilon, y - 0.31 * k + epsilon], [x + 0.24 * k - epsilon, y - 0.24 * k - epsilon]]).stream(pointStream);
      guyanePoint = guyane.translate([x + 0.19 * k, y - 0.205 * k]).clipExtent([[x + 0.14 * k + epsilon, y - 0.24 * k + epsilon], [x + 0.24 * k - epsilon, y - 0.17 * k - epsilon]]).stream(pointStream);
      azoresPoint = azores.translate([x + 0.19 * k, y - 0.135 * k]).clipExtent([[x + 0.14 * k + epsilon, y - 0.17 * k + epsilon], [x + 0.24 * k - epsilon, y - 0.1 * k - epsilon]]).stream(pointStream);
      azores2Point = azores2.translate([x + 0.225 * k, y - 0.147 * k]).clipExtent([[x + 0.21 * k + epsilon, y - 0.17 * k + epsilon], [x + 0.24 * k - epsilon, y - 0.12 * k - epsilon]]).stream(pointStream);
      azores3Point = azores3.translate([x + 0.153 * k, y - 0.15 * k]).clipExtent([[x + 0.14 * k + epsilon, y - 0.17 * k + epsilon], [x + 0.165 * k - epsilon, y - 0.14 * k - epsilon]]).stream(pointStream);
      madeiraPoint = madeira.translate([x + 0.19 * k, y - 0.065 * k]).clipExtent([[x + 0.14 * k + epsilon, y - 0.1 * k + epsilon], [x + 0.24 * k - epsilon, y - 0.03 * k - epsilon]]).stream(pointStream);
      canaryIslandsPoint = canaryIslands.translate([x + 0.19 * k, y + 0.005 * k]).clipExtent([[x + 0.14 * k + epsilon, y - 0.03 * k + epsilon], [x + 0.24 * k - epsilon, y + 0.04 * k - epsilon]]).stream(pointStream);
      martiniquePoint = martinique.translate([x + 0.29 * k, y - 0.275 * k]).clipExtent([[x + 0.24 * k + epsilon, y - 0.31 * k + epsilon], [x + 0.34 * k - epsilon, y - 0.24 * k - epsilon]]).stream(pointStream);
      mayottePoint = mayotte.translate([x + 0.29 * k, y - 0.205 * k]).clipExtent([[x + 0.24 * k + epsilon, y - 0.24 * k + epsilon], [x + 0.34 * k - epsilon, y - 0.17 * k - epsilon]]).stream(pointStream);
      reunionPoint = reunion.translate([x + 0.29 * k, y - 0.135 * k]).clipExtent([[x + 0.24 * k + epsilon, y - 0.17 * k + epsilon], [x + 0.34 * k - epsilon, y - 0.1 * k - epsilon]]).stream(pointStream);
      maltaPoint = malta.translate([x + 0.29 * k, y - 0.065 * k]).clipExtent([[x + 0.24 * k + epsilon, y - 0.1 * k + epsilon], [x + 0.34 * k - epsilon, y - 0.03 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    conicConformalEurope.fitExtent = function (extent, object) {
      return fitExtent(conicConformalEurope, extent, object);
    };
    conicConformalEurope.fitSize = function (size, object) {
      return fitSize(conicConformalEurope, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return conicConformalEurope;
    }
    conicConformalEurope.drawCompositionBorders = function (context) {
      /*
      console.log("var ul, ur, ld, ll;");
      var projs = [guyane, martinique, guadeloupe, canaryIslands, madeira, mayotte, reunion, malta, azores, azores2, azores3];
      for (var i in projs){
      var ul = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[0][1]]);
      var ur = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[0][1]]);
      var ld = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[1][1]]);
      var ll = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[1][1]]);
      
      console.log("ul = europe(["+ul+"]);");
      console.log("ur = europe(["+ur+"]);");
      console.log("ld = europe(["+ld+"]);");
      console.log("ll = europe(["+ll+"]);");
      
      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");
      
      }*/
      var ul, ur, ld, ll;
      ul = europe([42.45755610828648, 63.343658547914934]);
      ur = europe([52.65837266667029, 59.35045080290929]);
      ld = europe([47.19754502247785, 56.12653496548117]);
      ll = europe([37.673034273363044, 59.61638268506111]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([59.41110754003403, 62.35069727399336]);
      ur = europe([66.75050228640794, 57.11797303636038]);
      ld = europe([60.236065725110436, 54.63331433818992]);
      ll = europe([52.65837313153311, 59.350450804599355]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([48.81091130080243, 66.93353402634641]);
      ur = europe([59.41110730654679, 62.35069740653086]);
      ld = europe([52.6583728974441, 59.3504509222445]);
      ll = europe([42.45755631675751, 63.34365868805821]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([31.054198418446475, 52.1080673766184]);
      ur = europe([39.09869284884117, 49.400700047190554]);
      ld = europe([36.0580811499175, 46.02944174908498]);
      ll = europe([28.690508588835726, 48.433126979386415]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([33.977877745912025, 55.849945501331]);
      ur = europe([42.75328432167726, 52.78455122462353]);
      ld = europe([39.09869297540224, 49.400700176148625]);
      ll = europe([31.05419851807008, 52.10806751810923]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([52.658372900759296, 59.35045068526415]);
      ur = europe([60.23606549583304, 54.63331423800264]);
      ld = europe([54.6756370953122, 51.892298789399455]);
      ll = europe([47.19754524788189, 56.126534861222794]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([47.19754506082455, 56.126534735591456]);
      ur = europe([54.675636900123514, 51.892298681337095]);
      ld = europe([49.94448648951486, 48.98775484983285]);
      ll = europe([42.75328468716108, 52.78455126060818]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([42.75328453416769, 52.78455113209101]);
      ur = europe([49.94448632339758, 48.98775473706457]);
      ld = europe([45.912339990394315, 45.99361784987003]);
      ll = europe([39.09869317356607, 49.40070009378711]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([37.673034114296634, 59.61638254183119]);
      ur = europe([47.197544835420544, 56.126534839849846]);
      ld = europe([42.75328447467064, 52.78455135314068]);
      ll = europe([33.977877870363905, 55.849945644671145]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([44.56748486446032, 57.26489367845818]);
      ld = europe([43.9335791193588, 53.746540942601726]);
      ll = europe([43, 56]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = europe([37.673034114296634, 59.61638254183119]);
      ur = europe([40.25902691953466, 58.83002044222639]);
      ld = europe([38.458270492742024, 57.26232178028002]);
      ll = europe([35.97754948030156, 58.00266637992386]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
    };
    conicConformalEurope.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return conicConformalEurope.scale(750);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$9(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for the Netherlands, configured by default for 960×500.
  function conicConformalNetherlands() {
    var cache, cacheStream, netherlandsMainland = d3Geo.geoConicConformal().rotate([-5.50, -52.20]).parallels([0, 60]), netherlandsMainlandPoint, bonaire = d3Geo.geoMercator().center([-68.25, 12.20]), bonairePoint, sabaSintEustatius = d3Geo.geoMercator().center([-63.10, 17.50]), sabaSintEustatiusPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    function conicConformalNetherlands(coordinates) {
      const [x, y] = coordinates;
      return (point = null, (netherlandsMainlandPoint.point(x, y), point) || (bonairePoint.point(x, y), point) || (sabaSintEustatiusPoint.point(x, y), point));
    }
    conicConformalNetherlands.invert = function (coordinates) {
      var k = netherlandsMainland.scale(), t = netherlandsMainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= -0.0067 && y < 0.0015 && x >= -0.0232 && x < -0.0154 ? bonaire : y >= -0.022 && y < -0.014 && x >= -0.023 && x < -0.014 ? sabaSintEustatius : netherlandsMainland).invert(coordinates);
    };
    conicConformalNetherlands.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$9([netherlandsMainland.stream(cacheStream = stream), bonaire.stream(stream), sabaSintEustatius.stream(stream)]);
    };
    conicConformalNetherlands.precision = function (_) {
      if (!arguments.length) return netherlandsMainland.precision();
      netherlandsMainland.precision(_);
      bonaire.precision(_);
      sabaSintEustatius.precision(_);
      return reset();
    };
    conicConformalNetherlands.scale = function (_) {
      if (!arguments.length) return netherlandsMainland.scale();
      netherlandsMainland.scale(_);
      bonaire.scale(_);
      sabaSintEustatius.scale(_);
      return conicConformalNetherlands.translate(netherlandsMainland.translate());
    };
    conicConformalNetherlands.translate = function (_) {
      if (!arguments.length) return netherlandsMainland.translate();
      const k = netherlandsMainland.scale(), x = +_[0], y = +_[1];
      netherlandsMainlandPoint = netherlandsMainland.translate(_).clipExtent([[x - 0.0245 * k, y - 0.0260 * k], [x + 0.0230 * k, y + 0.0260 * k]]).stream(pointStream);
      bonairePoint = bonaire.translate([x - 0.0186 * k, y - 0.00325 * k]).clipExtent([[x - 0.0232 * k + epsilon, y - 0.0067 * k + epsilon], [x - 0.0154 * k - epsilon, y + 0.0015 * k - epsilon]]).stream(pointStream);
      sabaSintEustatiusPoint = sabaSintEustatius.translate([x - 0.0185 * k, y - 0.017 * k]).clipExtent([[x - 0.023 * k + epsilon, y - 0.022 * k + epsilon], [x - 0.014 * k - epsilon, y - 0.014 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    conicConformalNetherlands.fitExtent = function (extent, object) {
      return fitExtent(conicConformalNetherlands, extent, object);
    };
    conicConformalNetherlands.fitSize = function (size, object) {
      return fitSize(conicConformalNetherlands, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return conicConformalNetherlands;
    }
    conicConformalNetherlands.drawCompositionBorders = function (context) {
      /*
      console.table({
      "Clip extent": ["Bonaire", bonaire.clipExtent()],
      "UL BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[0][0], bonaire.clipExtent()[0][1]]),
      "UR BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[1][0], bonaire.clipExtent()[0][1]]),
      "LD BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[1][0], bonaire.clipExtent()[1][1]]),
      "LL BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[0][0], bonaire.clipExtent()[1][1]])
      });
      
      console.table({
      "Clip extent": ["Saba & Sint Eustatius", sabaSintEustatius.clipExtent()],
      "UL BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[0][0], sabaSintEustatius.clipExtent()[0][1]]),
      "UR BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[1][0], sabaSintEustatius.clipExtent()[0][1]]),
      "LD BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[1][0], sabaSintEustatius.clipExtent()[1][1]]),
      "LL BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[0][0], sabaSintEustatius.clipExtent()[1][1]])
      });
      */
      var ulbonaire = netherlandsMainland([3.30573, 52.5562]);
      var urbonaire = netherlandsMainland([4.0430, 52.5720]);
      var ldbonaire = netherlandsMainland([4.0646, 52.1017]);
      var llbonaire = netherlandsMainland([3.3382, 52.0861]);
      var ulsabaSintEustatius = netherlandsMainland([3.2620, 53.4390]);
      var ursabaSintEustatius = netherlandsMainland([4.1373, 53.4571]);
      var ldsabaSintEustatius = netherlandsMainland([4.1574, 52.9946]);
      var llsabaSintEustatius = netherlandsMainland([3.2951, 52.9768]);
      context.moveTo(ulbonaire[0], ulbonaire[1]);
      context.lineTo(urbonaire[0], urbonaire[1]);
      context.lineTo(ldbonaire[0], ldbonaire[1]);
      context.lineTo(ldbonaire[0], ldbonaire[1]);
      context.lineTo(llbonaire[0], llbonaire[1]);
      context.closePath();
      context.moveTo(ulsabaSintEustatius[0], ulsabaSintEustatius[1]);
      context.lineTo(ursabaSintEustatius[0], ursabaSintEustatius[1]);
      context.lineTo(ldsabaSintEustatius[0], ldsabaSintEustatius[1]);
      context.lineTo(ldsabaSintEustatius[0], ldsabaSintEustatius[1]);
      context.lineTo(llsabaSintEustatius[0], llsabaSintEustatius[1]);
      context.closePath();
    };
    conicConformalNetherlands.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return conicConformalNetherlands.scale(4200);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$a(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Malaysia, configured by default for 960×500.
  function mercatorMalaysia() {
    var cache, cacheStream, peninsular = d3Geo.geoMercator().center([105.25, 4.00]), peninsularPoint, borneo = d3Geo.geoMercator().center([118.65, 2.86]), borneoPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    function mercatorMalaysia(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (peninsularPoint.point(x, y), point) || (borneoPoint.point(x, y), point));
    }
    mercatorMalaysia.invert = function (coordinates) {
      var k = peninsular.scale(), t = peninsular.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= -0.0521 && y < 0.0229 && x >= -0.0111 && x < 0.1000 ? borneo : peninsular).invert(coordinates);
    };
    mercatorMalaysia.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$a([peninsular.stream(cacheStream = stream), borneo.stream(stream)]);
    };
    mercatorMalaysia.precision = function (_) {
      if (!arguments.length) {
        return peninsular.precision();
      }
      peninsular.precision(_);
      borneo.precision(_);
      return reset();
    };
    mercatorMalaysia.scale = function (_) {
      if (!arguments.length) {
        return peninsular.scale();
      }
      peninsular.scale(_);
      borneo.scale(_ * 0.615);
      return mercatorMalaysia.translate(peninsular.translate());
    };
    mercatorMalaysia.translate = function (_) {
      if (!arguments.length) {
        return peninsular.translate();
      }
      var k = peninsular.scale(), x = +_[0], y = +_[1];
      peninsularPoint = peninsular.translate(_).clipExtent([[x - 0.1100 * k, y - 0.0521 * k], [x - 0.0111 * k, y + 0.0521 * k]]).stream(pointStream);
      borneoPoint = borneo.translate([x + 0.09000 * k, y - 0.00 * k]).clipExtent([[x - 0.0111 * k + epsilon, y - 0.0521 * k + epsilon], [x + 0.1000 * k - epsilon, y + 0.024 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    mercatorMalaysia.fitExtent = function (extent, object) {
      return fitExtent(mercatorMalaysia, extent, object);
    };
    mercatorMalaysia.fitSize = function (size, object) {
      return fitSize(mercatorMalaysia, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return mercatorMalaysia;
    }
    mercatorMalaysia.drawCompositionBorders = function (context) {
      var llbor = peninsular([106.3214, 2.0228]);
      var lmbor = peninsular([105.1843, 2.3761]);
      var lrbor = peninsular([104.2151, 3.3618]);
      var llrbor = peninsular([104.2150, 4.5651]);
      context.moveTo(llbor[0], llbor[1]);
      context.lineTo(lmbor[0], lmbor[1]);
      context.lineTo(lrbor[0], lrbor[1]);
      context.lineTo(llrbor[0], llrbor[1]);
    };
    mercatorMalaysia.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return mercatorMalaysia.scale(4800);
  }
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$b(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) {
          streams[i].point(x, y);
        }
      },
      sphere: function () {
        var i = -1;
        while (++i < n) {
          streams[i].sphere();
        }
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineStart();
        }
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].lineEnd();
        }
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonStart();
        }
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) {
          streams[i].polygonEnd();
        }
      }
    };
  }
  // A composite projection for Equatorial Guinea, configured by default for 960×500.
  function mercatorEquatorialGuinea() {
    var cache, cacheStream, continent = d3Geo.geoMercator().rotate([-9.5, -1.5]), continentPoint, bioko = d3Geo.geoMercator().rotate([-8.6, -3.5]), biokoPoint, annobon = d3Geo.geoMercator().rotate([-5.6, 1.45]), annobonPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    function mercatorEquatorialGuinea(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (continentPoint.point(x, y), point) || (biokoPoint.point(x, y), point) || (annobonPoint.point(x, y), point));
    }
    mercatorEquatorialGuinea.invert = function (coordinates) {
      var k = continent.scale(), t = continent.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= -0.02 && y < 0 && x >= -0.038 && x < -0.005 ? bioko : y >= 0 && y < 0.02 && x >= -0.038 && x < -0.005 ? annobon : continent).invert(coordinates);
    };
    mercatorEquatorialGuinea.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$b([continent.stream(cacheStream = stream), bioko.stream(stream), annobon.stream(stream)]);
    };
    mercatorEquatorialGuinea.precision = function (_) {
      if (!arguments.length) {
        return continent.precision();
      }
      continent.precision(_);
      bioko.precision(_);
      annobon.precision(_);
      return reset();
    };
    mercatorEquatorialGuinea.scale = function (_) {
      if (!arguments.length) {
        return continent.scale();
      }
      continent.scale(_);
      bioko.scale(_ * 1.5);
      annobon.scale(_ * 4);
      return mercatorEquatorialGuinea.translate(continent.translate());
    };
    mercatorEquatorialGuinea.translate = function (_) {
      if (!arguments.length) {
        return continent.translate();
      }
      var k = continent.scale(), x = +_[0], y = +_[1];
      continentPoint = continent.translate(_).clipExtent([[x - 0.005 * k, y - 0.02 * k], [x + 0.038 * k, y + 0.02 * k]]).stream(pointStream);
      biokoPoint = bioko.translate([x - 0.025 * k, y - 0.01 * k]).clipExtent([[x - 0.038 * k + epsilon, y - 0.02 * k + epsilon], [x - 0.005 * k - epsilon, y + 0 * k - epsilon]]).stream(pointStream);
      annobonPoint = annobon.translate([x - 0.025 * k, y + 0.01 * k]).clipExtent([[x - 0.038 * k + epsilon, y - 0 * k + epsilon], [x - 0.005 * k - epsilon, y + 0.02 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    mercatorEquatorialGuinea.fitExtent = function (extent, object) {
      return fitExtent(mercatorEquatorialGuinea, extent, object);
    };
    mercatorEquatorialGuinea.fitSize = function (size, object) {
      return fitSize(mercatorEquatorialGuinea, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return mercatorEquatorialGuinea;
    }
    mercatorEquatorialGuinea.drawCompositionBorders = function (context) {
      /*
      console.log("var ul, ur, ld, ll;");
      var projs = [continent, bioko, annobon];
      for (var i in projs){
      var ul = continent.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[0][1]]);
      var ur = continent.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[0][1]]);
      var ld = continent.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[1][1]]);
      var ll = continent.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[1][1]]);
      
      console.log("ul = continent(["+ul+"]);");
      console.log("ur = continent(["+ur+"]);");
      console.log("ld = continent(["+ld+"]);");
      console.log("ll = continent(["+ll+"]);");
      
      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");
      
      }*/
      var ul, ur, ld, ll;
      ul = continent([9.21327272751682, 2.645820439454123]);
      ur = continent([11.679126293239872, 2.644755519268689]);
      ld = continent([11.676845389029227, 0.35307824637606433]);
      ll = continent([9.213572917774014, 0.35414205204417754]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = continent([7.320873711543669, 2.64475551449975]);
      ur = continent([9.213272722738658, 2.645820434679803]);
      ld = continent([9.213422896480349, 1.4999812505283054]);
      ll = continent([7.322014760520787, 1.4989168878985566]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
      ul = continent([7.3220147605302905, 1.4989168783492766]);
      ur = continent([9.213422896481598, 1.499981240979021]);
      ld = continent([9.213572912999604, 0.354142056817247]);
      ll = continent([7.323154615739809, 0.353078251154504]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
    };
    mercatorEquatorialGuinea.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return mercatorEquatorialGuinea.scale(12000);
  }
  function multiplex$c(streams) {
    var n = streams.length;
    return {
      point: function (x, y) {
        var i = -1;
        while (++i < n) streams[i].point(x, y);
      },
      sphere: function () {
        var i = -1;
        while (++i < n) streams[i].sphere();
      },
      lineStart: function () {
        var i = -1;
        while (++i < n) streams[i].lineStart();
      },
      lineEnd: function () {
        var i = -1;
        while (++i < n) streams[i].lineEnd();
      },
      polygonStart: function () {
        var i = -1;
        while (++i < n) streams[i].polygonStart();
      },
      polygonEnd: function () {
        var i = -1;
        while (++i < n) streams[i].polygonEnd();
      }
    };
  }
  function albersUk() {
    var cache, cacheStream, main = d3Geo.geoAlbers().rotate([4.4, 0.8]).center([0, 55.4]).parallels([50, 60]), mainPoint, shetland = d3Geo.geoAlbers().rotate([4.4, 0.8]).center([0, 55.4]).parallels([50, 60]), shetlandPoint, point, pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
    function albersUk(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return (point = null, (mainPoint.point(x, y), point) || (shetlandPoint.point(x, y), point));
    }
    albersUk.invert = function (coordinates) {
      var k = main.scale(), t = main.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= -0.089 && y < 0.06 && x >= 0.029 && x < 0.046 ? shetland : main).invert(coordinates);
    };
    albersUk.stream = function (stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$c([main.stream(cacheStream = stream), shetland.stream(stream)]);
    };
    albersUk.precision = function (_) {
      if (!arguments.length) return main.precision();
      (main.precision(_), shetland.precision(_));
      return reset();
    };
    albersUk.scale = function (_) {
      if (!arguments.length) return main.scale();
      (main.scale(_), shetland.scale(_));
      return albersUk.translate(main.translate());
    };
    albersUk.translate = function (_) {
      if (!arguments.length) return main.translate();
      var k = main.scale(), x = +_[0], y = +_[1];
      mainPoint = main.translate(_).clipExtent([[x - 0.065 * k, y - 0.089 * k], [x + 0.075 * k, y + 0.089 * k]]).stream(pointStream);
      shetlandPoint = shetland.translate([x + 0.01 * k, y + 0.025 * k]).clipExtent([[x + 0.029 * k + epsilon, y - 0.089 * k + epsilon], [x + 0.046 * k - epsilon, y - 0.06 * k - epsilon]]).stream(pointStream);
      return reset();
    };
    albersUk.fitExtent = function (extent, object) {
      return fitExtent(albersUk, extent, object);
    };
    albersUk.fitSize = function (size, object) {
      return fitSize(albersUk, size, object);
    };
    function reset() {
      cache = cacheStream = null;
      return albersUk;
    }
    albersUk.drawCompositionBorders = function (context) {
      /*var ul = main.invert([
      shetland.clipExtent()[0][0],
      shetland.clipExtent()[0][1]
      ]);
      var ur = main.invert([
      shetland.clipExtent()[1][0],
      shetland.clipExtent()[0][1]
      ]);
      var ld = main.invert([
      shetland.clipExtent()[1][0],
      shetland.clipExtent()[1][1]
      ]);
      var ll = main.invert([
      shetland.clipExtent()[0][0],
      shetland.clipExtent()[1][1]
      ]);
      
      console.log("ul = main([" + ul + "]);");
      console.log("ur = main([" + ur + "]);");
      console.log("ld = main([" + ld + "]);");
      console.log("ll = main([" + ll + "]);");
      
      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");*/
      var ul, ur, ld, ll;
      ul = main([-1.113205870242365, 59.64920050773357]);
      ur = main([0.807899092399606, 59.59085836472269]);
      ld = main([0.5778611961420386, 57.93467822832577]);
      ll = main([-1.25867782078448, 57.99029450085142]);
      context.moveTo(ul[0], ul[1]);
      context.lineTo(ur[0], ur[1]);
      context.lineTo(ld[0], ld[1]);
      context.lineTo(ll[0], ll[1]);
      context.closePath();
    };
    albersUk.getCompositionBorders = function () {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };
    return albersUk.scale(2800);
  }
  exports.geoAlbersUk = albersUk;
  exports.geoAlbersUsa = albersUsa;
  exports.geoAlbersUsaTerritories = albersUsaTerritories;
  exports.geoConicConformalEurope = conicConformalEurope;
  exports.geoConicConformalFrance = conicConformalFrance;
  exports.geoConicConformalNetherlands = conicConformalNetherlands;
  exports.geoConicConformalPortugal = conicConformalPortugal;
  exports.geoConicConformalSpain = conicConformalSpain;
  exports.geoConicEquidistantJapan = conicEquidistantJapan;
  exports.geoMercatorEcuador = mercatorEcuador;
  exports.geoMercatorEquatorialGuinea = mercatorEquatorialGuinea;
  exports.geoMercatorMalaysia = mercatorMalaysia;
  exports.geoTransverseMercatorChile = transverseMercatorChile;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{"d3-geo":"3nbkI","d3-path":"m838t"}]},["4UKJc","3rfh7"], "3rfh7", "parcelRequireb03b")

//# sourceMappingURL=index.7cacc1f4.js.map
