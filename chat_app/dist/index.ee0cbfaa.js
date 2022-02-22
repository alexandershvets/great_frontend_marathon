// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kzhsr":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "51730fe7ee0cbfaa";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
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
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aKvBm":[function(require,module,exports) {
var _mainScss = require("../scss/main.scss");
var _popup = require("./popup");
var _view = require("./view");
var _data = require("./data");
_view.UI.FORM_MESSAGE.FORM.addEventListener('submit', (event)=>{
    event.preventDefault();
    formMessageHundler(_view.UI.FORM_MESSAGE.TEXTAREA.value);
});
_view.UI.FORM_MESSAGE.TEXTAREA.onkeydown = (event)=>{
    if (event.code === 'Enter' && !event.shiftKey) return false;
};
_view.UI.FORM_MESSAGE.TEXTAREA.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' && !event.shiftKey) formMessageHundler(this.value);
});
function formMessageHundler(data) {
    const dataMessage = new _data.DataMessage(data);
    _view.renderMessage(dataMessage);
    formMessageReset();
}
function formMessageReset() {
    _view.UI.FORM_MESSAGE.TEXTAREA.value = '';
}
window.addEventListener('unhandledrejection', ()=>{
    alert('Произошла непредвиденная ошибка!');
});

},{"../scss/main.scss":"kOw5V","./popup":"jUySk","./view":"kALtk","./data":"4vWRQ"}],"kOw5V":[function() {},{}],"jUySk":[function(require,module,exports) {
var _view = require("./view");
_view.UI.POPUP.OPEN_LINKS.forEach((openPopupLink)=>{
    openPopupLink.addEventListener('click', ()=>{
        const popupName = openPopupLink.dataset.popupOpen;
        popupOpen(popupName);
    });
});
_view.UI.POPUP.CLOSE_BTNS.forEach((closeBtn)=>closeBtn.addEventListener('click', ()=>{
        popupClose(closeBtn.closest('.popup'));
    })
);
document.addEventListener('keydown', (event)=>{
    if (event.code === 'Escape') popupClose();
});
function popupOpen(popupName) {
    let activePopups = document.querySelectorAll('.popup._active');
    if (activePopups.length > 0) popupClose('');
    const currentPopup = document.querySelector(`[data-popup=${popupName}]`);
    if (currentPopup) currentPopup.classList.add('_active');
}
function popupClose(popupName) {
    if (!popupName) _view.UI.POPUP.WINDOWS.forEach((popup)=>popup.classList.remove('_active')
    );
    else popupName.classList.remove('_active');
}

},{"./view":"kALtk"}],"kALtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI", ()=>UI
);
parcelHelpers.export(exports, "renderMessage", ()=>renderMessage
);
var _error = require("./error");
const UI = {
    FORM_MESSAGE: {
        FORM: document.querySelector('.form-send-message'),
        TEXTAREA: document.querySelector('.form-send-message__textarea')
    },
    AREA_MESSAGES: document.querySelector('.messages-area__list'),
    TEMPLATES: {
        MESSAGE: document.getElementById('tmpl-message')
    },
    POPUP: {
        WINDOWS: document.querySelectorAll('.popup'),
        OPEN_LINKS: document.querySelectorAll('._popup-open'),
        CLOSE_BTNS: document.querySelectorAll('.popup__close')
    }
};
function renderMessage({ userName , message , date  }) {
    try {
        if (message === '') throw new _error.EmptyStringError();
        if (message.length > 500) throw new _error.MaxStringLengthError();
        let messageElem = document.createElement('div');
        messageElem = UI.TEMPLATES.MESSAGE.content.cloneNode(true);
        const messageUserNameElem = messageElem.querySelector('.message__user-name');
        const messageTextElem = messageElem.querySelector('.message__text');
        const messageDateElem = messageElem.querySelector('.message__time');
        messageUserNameElem.textContent = userName;
        messageTextElem.textContent = message;
        messageDateElem.textContent = date;
        messageDateElem.setAttribute('datetime', date);
        UI.AREA_MESSAGES.append(messageElem);
    } catch (err) {
        if (err instanceof _error.ValidationError) console.log(err.message);
        else console.log(err);
    }
}

},{"./error":"iq6dU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iq6dU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValidationError", ()=>ValidationError
);
parcelHelpers.export(exports, "EmptyStringError", ()=>EmptyStringError
);
parcelHelpers.export(exports, "MaxStringLengthError", ()=>MaxStringLengthError
);
class MyError extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}
// class ReadError extends MyError {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//   }
// }
class ValidationError extends MyError {
}
class EmptyStringError extends ValidationError {
    constructor(){
        super(`Пустое поле сообщения!`);
    }
}
class MaxStringLengthError extends ValidationError {
    constructor(){
        super(`Не больше 500 символов!`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4vWRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataMessage", ()=>DataMessage
);
var _dateFns = require("date-fns");
/*
После верстки вам нужно отправлять POST запрос на этот адрес
https://chat1-341409.oa.r.appspot.com/api/user

в теле запроса должен быть JSON с вашей почтой 
{ email: ‘my@eamil.com’ }

Если все хорошо - вам на почту придет письмо от ch4tservice@gmail.com
p.s. скорее всего это письмо попадет в спам (проверьте ваши папки) 
p.s.s.  пожалуйста, не отправляйте 999 писем в секунду
*/ const API_URI = 'https://chat1-341409.oa.r.appspot.com/api/user';
function DataMessage(message) {
    this.userName = 'Alexander Shvets';
    this.message = message;
    this.date = _dateFns.format(new Date(), 'H:m');
}

},{"date-fns":"5VaJV","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5VaJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.
parcelHelpers.export(exports, "add", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "addBusinessDays", ()=>_indexJsDefault1.default
);
parcelHelpers.export(exports, "addDays", ()=>_indexJsDefault2.default
);
parcelHelpers.export(exports, "addHours", ()=>_indexJsDefault3.default
);
parcelHelpers.export(exports, "addISOWeekYears", ()=>_indexJsDefault4.default
);
parcelHelpers.export(exports, "addMilliseconds", ()=>_indexJsDefault5.default
);
parcelHelpers.export(exports, "addMinutes", ()=>_indexJsDefault6.default
);
parcelHelpers.export(exports, "addMonths", ()=>_indexJsDefault7.default
);
parcelHelpers.export(exports, "addQuarters", ()=>_indexJsDefault8.default
);
parcelHelpers.export(exports, "addSeconds", ()=>_indexJsDefault9.default
);
parcelHelpers.export(exports, "addWeeks", ()=>_indexJsDefault10.default
);
parcelHelpers.export(exports, "addYears", ()=>_indexJsDefault11.default
);
parcelHelpers.export(exports, "areIntervalsOverlapping", ()=>_indexJsDefault12.default
);
parcelHelpers.export(exports, "clamp", ()=>_indexJsDefault13.default
);
parcelHelpers.export(exports, "closestIndexTo", ()=>_indexJsDefault14.default
);
parcelHelpers.export(exports, "closestTo", ()=>_indexJsDefault15.default
);
parcelHelpers.export(exports, "compareAsc", ()=>_indexJsDefault16.default
);
parcelHelpers.export(exports, "compareDesc", ()=>_indexJsDefault17.default
);
parcelHelpers.export(exports, "daysToWeeks", ()=>_indexJsDefault18.default
);
parcelHelpers.export(exports, "differenceInBusinessDays", ()=>_indexJsDefault19.default
);
parcelHelpers.export(exports, "differenceInCalendarDays", ()=>_indexJsDefault20.default
);
parcelHelpers.export(exports, "differenceInCalendarISOWeekYears", ()=>_indexJsDefault21.default
);
parcelHelpers.export(exports, "differenceInCalendarISOWeeks", ()=>_indexJsDefault22.default
);
parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>_indexJsDefault23.default
);
parcelHelpers.export(exports, "differenceInCalendarQuarters", ()=>_indexJsDefault24.default
);
parcelHelpers.export(exports, "differenceInCalendarWeeks", ()=>_indexJsDefault25.default
);
parcelHelpers.export(exports, "differenceInCalendarYears", ()=>_indexJsDefault26.default
);
parcelHelpers.export(exports, "differenceInDays", ()=>_indexJsDefault27.default
);
parcelHelpers.export(exports, "differenceInHours", ()=>_indexJsDefault28.default
);
parcelHelpers.export(exports, "differenceInISOWeekYears", ()=>_indexJsDefault29.default
);
parcelHelpers.export(exports, "differenceInMilliseconds", ()=>_indexJsDefault30.default
);
parcelHelpers.export(exports, "differenceInMinutes", ()=>_indexJsDefault31.default
);
parcelHelpers.export(exports, "differenceInMonths", ()=>_indexJsDefault32.default
);
parcelHelpers.export(exports, "differenceInQuarters", ()=>_indexJsDefault33.default
);
parcelHelpers.export(exports, "differenceInSeconds", ()=>_indexJsDefault34.default
);
parcelHelpers.export(exports, "differenceInWeeks", ()=>_indexJsDefault35.default
);
parcelHelpers.export(exports, "differenceInYears", ()=>_indexJsDefault36.default
);
parcelHelpers.export(exports, "eachDayOfInterval", ()=>_indexJsDefault37.default
);
parcelHelpers.export(exports, "eachHourOfInterval", ()=>_indexJsDefault38.default
);
parcelHelpers.export(exports, "eachMinuteOfInterval", ()=>_indexJsDefault39.default
);
parcelHelpers.export(exports, "eachMonthOfInterval", ()=>_indexJsDefault40.default
);
parcelHelpers.export(exports, "eachQuarterOfInterval", ()=>_indexJsDefault41.default
);
parcelHelpers.export(exports, "eachWeekOfInterval", ()=>_indexJsDefault42.default
);
parcelHelpers.export(exports, "eachWeekendOfInterval", ()=>_indexJsDefault43.default
);
parcelHelpers.export(exports, "eachWeekendOfMonth", ()=>_indexJsDefault44.default
);
parcelHelpers.export(exports, "eachWeekendOfYear", ()=>_indexJsDefault45.default
);
parcelHelpers.export(exports, "eachYearOfInterval", ()=>_indexJsDefault46.default
);
parcelHelpers.export(exports, "endOfDay", ()=>_indexJsDefault47.default
);
parcelHelpers.export(exports, "endOfDecade", ()=>_indexJsDefault48.default
);
parcelHelpers.export(exports, "endOfHour", ()=>_indexJsDefault49.default
);
parcelHelpers.export(exports, "endOfISOWeek", ()=>_indexJsDefault50.default
);
parcelHelpers.export(exports, "endOfISOWeekYear", ()=>_indexJsDefault51.default
);
parcelHelpers.export(exports, "endOfMinute", ()=>_indexJsDefault52.default
);
parcelHelpers.export(exports, "endOfMonth", ()=>_indexJsDefault53.default
);
parcelHelpers.export(exports, "endOfQuarter", ()=>_indexJsDefault54.default
);
parcelHelpers.export(exports, "endOfSecond", ()=>_indexJsDefault55.default
);
parcelHelpers.export(exports, "endOfToday", ()=>_indexJsDefault56.default
);
parcelHelpers.export(exports, "endOfTomorrow", ()=>_indexJsDefault57.default
);
parcelHelpers.export(exports, "endOfWeek", ()=>_indexJsDefault58.default
);
parcelHelpers.export(exports, "endOfYear", ()=>_indexJsDefault59.default
);
parcelHelpers.export(exports, "endOfYesterday", ()=>_indexJsDefault60.default
);
parcelHelpers.export(exports, "format", ()=>_indexJsDefault61.default
);
parcelHelpers.export(exports, "formatDistance", ()=>_indexJsDefault62.default
);
parcelHelpers.export(exports, "formatDistanceStrict", ()=>_indexJsDefault63.default
);
parcelHelpers.export(exports, "formatDistanceToNow", ()=>_indexJsDefault64.default
);
parcelHelpers.export(exports, "formatDistanceToNowStrict", ()=>_indexJsDefault65.default
);
parcelHelpers.export(exports, "formatDuration", ()=>_indexJsDefault66.default
);
parcelHelpers.export(exports, "formatISO", ()=>_indexJsDefault67.default
);
parcelHelpers.export(exports, "formatISO9075", ()=>_indexJsDefault68.default
);
parcelHelpers.export(exports, "formatISODuration", ()=>_indexJsDefault69.default
);
parcelHelpers.export(exports, "formatRFC3339", ()=>_indexJsDefault70.default
);
parcelHelpers.export(exports, "formatRFC7231", ()=>_indexJsDefault71.default
);
parcelHelpers.export(exports, "formatRelative", ()=>_indexJsDefault72.default
);
parcelHelpers.export(exports, "fromUnixTime", ()=>_indexJsDefault73.default
);
parcelHelpers.export(exports, "getDate", ()=>_indexJsDefault74.default
);
parcelHelpers.export(exports, "getDay", ()=>_indexJsDefault75.default
);
parcelHelpers.export(exports, "getDayOfYear", ()=>_indexJsDefault76.default
);
parcelHelpers.export(exports, "getDaysInMonth", ()=>_indexJsDefault77.default
);
parcelHelpers.export(exports, "getDaysInYear", ()=>_indexJsDefault78.default
);
parcelHelpers.export(exports, "getDecade", ()=>_indexJsDefault79.default
);
parcelHelpers.export(exports, "getHours", ()=>_indexJsDefault80.default
);
parcelHelpers.export(exports, "getISODay", ()=>_indexJsDefault81.default
);
parcelHelpers.export(exports, "getISOWeek", ()=>_indexJsDefault82.default
);
parcelHelpers.export(exports, "getISOWeekYear", ()=>_indexJsDefault83.default
);
parcelHelpers.export(exports, "getISOWeeksInYear", ()=>_indexJsDefault84.default
);
parcelHelpers.export(exports, "getMilliseconds", ()=>_indexJsDefault85.default
);
parcelHelpers.export(exports, "getMinutes", ()=>_indexJsDefault86.default
);
parcelHelpers.export(exports, "getMonth", ()=>_indexJsDefault87.default
);
parcelHelpers.export(exports, "getOverlappingDaysInIntervals", ()=>_indexJsDefault88.default
);
parcelHelpers.export(exports, "getQuarter", ()=>_indexJsDefault89.default
);
parcelHelpers.export(exports, "getSeconds", ()=>_indexJsDefault90.default
);
parcelHelpers.export(exports, "getTime", ()=>_indexJsDefault91.default
);
parcelHelpers.export(exports, "getUnixTime", ()=>_indexJsDefault92.default
);
parcelHelpers.export(exports, "getWeek", ()=>_indexJsDefault93.default
);
parcelHelpers.export(exports, "getWeekOfMonth", ()=>_indexJsDefault94.default
);
parcelHelpers.export(exports, "getWeekYear", ()=>_indexJsDefault95.default
);
parcelHelpers.export(exports, "getWeeksInMonth", ()=>_indexJsDefault96.default
);
parcelHelpers.export(exports, "getYear", ()=>_indexJsDefault97.default
);
parcelHelpers.export(exports, "hoursToMilliseconds", ()=>_indexJsDefault98.default
);
parcelHelpers.export(exports, "hoursToMinutes", ()=>_indexJsDefault99.default
);
parcelHelpers.export(exports, "hoursToSeconds", ()=>_indexJsDefault100.default
);
parcelHelpers.export(exports, "intervalToDuration", ()=>_indexJsDefault101.default
);
parcelHelpers.export(exports, "intlFormat", ()=>_indexJsDefault102.default
);
parcelHelpers.export(exports, "isAfter", ()=>_indexJsDefault103.default
);
parcelHelpers.export(exports, "isBefore", ()=>_indexJsDefault104.default
);
parcelHelpers.export(exports, "isDate", ()=>_indexJsDefault105.default
);
parcelHelpers.export(exports, "isEqual", ()=>_indexJsDefault106.default
);
parcelHelpers.export(exports, "isExists", ()=>_indexJsDefault107.default
);
parcelHelpers.export(exports, "isFirstDayOfMonth", ()=>_indexJsDefault108.default
);
parcelHelpers.export(exports, "isFriday", ()=>_indexJsDefault109.default
);
parcelHelpers.export(exports, "isFuture", ()=>_indexJsDefault110.default
);
parcelHelpers.export(exports, "isLastDayOfMonth", ()=>_indexJsDefault111.default
);
parcelHelpers.export(exports, "isLeapYear", ()=>_indexJsDefault112.default
);
parcelHelpers.export(exports, "isMatch", ()=>_indexJsDefault113.default
);
parcelHelpers.export(exports, "isMonday", ()=>_indexJsDefault114.default
);
parcelHelpers.export(exports, "isPast", ()=>_indexJsDefault115.default
);
parcelHelpers.export(exports, "isSameDay", ()=>_indexJsDefault116.default
);
parcelHelpers.export(exports, "isSameHour", ()=>_indexJsDefault117.default
);
parcelHelpers.export(exports, "isSameISOWeek", ()=>_indexJsDefault118.default
);
parcelHelpers.export(exports, "isSameISOWeekYear", ()=>_indexJsDefault119.default
);
parcelHelpers.export(exports, "isSameMinute", ()=>_indexJsDefault120.default
);
parcelHelpers.export(exports, "isSameMonth", ()=>_indexJsDefault121.default
);
parcelHelpers.export(exports, "isSameQuarter", ()=>_indexJsDefault122.default
);
parcelHelpers.export(exports, "isSameSecond", ()=>_indexJsDefault123.default
);
parcelHelpers.export(exports, "isSameWeek", ()=>_indexJsDefault124.default
);
parcelHelpers.export(exports, "isSameYear", ()=>_indexJsDefault125.default
);
parcelHelpers.export(exports, "isSaturday", ()=>_indexJsDefault126.default
);
parcelHelpers.export(exports, "isSunday", ()=>_indexJsDefault127.default
);
parcelHelpers.export(exports, "isThisHour", ()=>_indexJsDefault128.default
);
parcelHelpers.export(exports, "isThisISOWeek", ()=>_indexJsDefault129.default
);
parcelHelpers.export(exports, "isThisMinute", ()=>_indexJsDefault130.default
);
parcelHelpers.export(exports, "isThisMonth", ()=>_indexJsDefault131.default
);
parcelHelpers.export(exports, "isThisQuarter", ()=>_indexJsDefault132.default
);
parcelHelpers.export(exports, "isThisSecond", ()=>_indexJsDefault133.default
);
parcelHelpers.export(exports, "isThisWeek", ()=>_indexJsDefault134.default
);
parcelHelpers.export(exports, "isThisYear", ()=>_indexJsDefault135.default
);
parcelHelpers.export(exports, "isThursday", ()=>_indexJsDefault136.default
);
parcelHelpers.export(exports, "isToday", ()=>_indexJsDefault137.default
);
parcelHelpers.export(exports, "isTomorrow", ()=>_indexJsDefault138.default
);
parcelHelpers.export(exports, "isTuesday", ()=>_indexJsDefault139.default
);
parcelHelpers.export(exports, "isValid", ()=>_indexJsDefault140.default
);
parcelHelpers.export(exports, "isWednesday", ()=>_indexJsDefault141.default
);
parcelHelpers.export(exports, "isWeekend", ()=>_indexJsDefault142.default
);
parcelHelpers.export(exports, "isWithinInterval", ()=>_indexJsDefault143.default
);
parcelHelpers.export(exports, "isYesterday", ()=>_indexJsDefault144.default
);
parcelHelpers.export(exports, "lastDayOfDecade", ()=>_indexJsDefault145.default
);
parcelHelpers.export(exports, "lastDayOfISOWeek", ()=>_indexJsDefault146.default
);
parcelHelpers.export(exports, "lastDayOfISOWeekYear", ()=>_indexJsDefault147.default
);
parcelHelpers.export(exports, "lastDayOfMonth", ()=>_indexJsDefault148.default
);
parcelHelpers.export(exports, "lastDayOfQuarter", ()=>_indexJsDefault149.default
);
parcelHelpers.export(exports, "lastDayOfWeek", ()=>_indexJsDefault150.default
);
parcelHelpers.export(exports, "lastDayOfYear", ()=>_indexJsDefault151.default
);
parcelHelpers.export(exports, "lightFormat", ()=>_indexJsDefault152.default
);
parcelHelpers.export(exports, "max", ()=>_indexJsDefault153.default
);
parcelHelpers.export(exports, "milliseconds", ()=>_indexJsDefault154.default
);
parcelHelpers.export(exports, "millisecondsToHours", ()=>_indexJsDefault155.default
);
parcelHelpers.export(exports, "millisecondsToMinutes", ()=>_indexJsDefault156.default
);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>_indexJsDefault157.default
);
parcelHelpers.export(exports, "min", ()=>_indexJsDefault158.default
);
parcelHelpers.export(exports, "minutesToHours", ()=>_indexJsDefault159.default
);
parcelHelpers.export(exports, "minutesToMilliseconds", ()=>_indexJsDefault160.default
);
parcelHelpers.export(exports, "minutesToSeconds", ()=>_indexJsDefault161.default
);
parcelHelpers.export(exports, "monthsToQuarters", ()=>_indexJsDefault162.default
);
parcelHelpers.export(exports, "monthsToYears", ()=>_indexJsDefault163.default
);
parcelHelpers.export(exports, "nextDay", ()=>_indexJsDefault164.default
);
parcelHelpers.export(exports, "nextFriday", ()=>_indexJsDefault165.default
);
parcelHelpers.export(exports, "nextMonday", ()=>_indexJsDefault166.default
);
parcelHelpers.export(exports, "nextSaturday", ()=>_indexJsDefault167.default
);
parcelHelpers.export(exports, "nextSunday", ()=>_indexJsDefault168.default
);
parcelHelpers.export(exports, "nextThursday", ()=>_indexJsDefault169.default
);
parcelHelpers.export(exports, "nextTuesday", ()=>_indexJsDefault170.default
);
parcelHelpers.export(exports, "nextWednesday", ()=>_indexJsDefault171.default
);
parcelHelpers.export(exports, "parse", ()=>_indexJsDefault172.default
);
parcelHelpers.export(exports, "parseISO", ()=>_indexJsDefault173.default
);
parcelHelpers.export(exports, "parseJSON", ()=>_indexJsDefault174.default
);
parcelHelpers.export(exports, "previousDay", ()=>_indexJsDefault175.default
);
parcelHelpers.export(exports, "previousFriday", ()=>_indexJsDefault176.default
);
parcelHelpers.export(exports, "previousMonday", ()=>_indexJsDefault177.default
);
parcelHelpers.export(exports, "previousSaturday", ()=>_indexJsDefault178.default
);
parcelHelpers.export(exports, "previousSunday", ()=>_indexJsDefault179.default
);
parcelHelpers.export(exports, "previousThursday", ()=>_indexJsDefault180.default
);
parcelHelpers.export(exports, "previousTuesday", ()=>_indexJsDefault181.default
);
parcelHelpers.export(exports, "previousWednesday", ()=>_indexJsDefault182.default
);
parcelHelpers.export(exports, "quartersToMonths", ()=>_indexJsDefault183.default
);
parcelHelpers.export(exports, "quartersToYears", ()=>_indexJsDefault184.default
);
parcelHelpers.export(exports, "roundToNearestMinutes", ()=>_indexJsDefault185.default
);
parcelHelpers.export(exports, "secondsToHours", ()=>_indexJsDefault186.default
);
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>_indexJsDefault187.default
);
parcelHelpers.export(exports, "secondsToMinutes", ()=>_indexJsDefault188.default
);
parcelHelpers.export(exports, "set", ()=>_indexJsDefault189.default
);
parcelHelpers.export(exports, "setDate", ()=>_indexJsDefault190.default
);
parcelHelpers.export(exports, "setDay", ()=>_indexJsDefault191.default
);
parcelHelpers.export(exports, "setDayOfYear", ()=>_indexJsDefault192.default
);
parcelHelpers.export(exports, "setHours", ()=>_indexJsDefault193.default
);
parcelHelpers.export(exports, "setISODay", ()=>_indexJsDefault194.default
);
parcelHelpers.export(exports, "setISOWeek", ()=>_indexJsDefault195.default
);
parcelHelpers.export(exports, "setISOWeekYear", ()=>_indexJsDefault196.default
);
parcelHelpers.export(exports, "setMilliseconds", ()=>_indexJsDefault197.default
);
parcelHelpers.export(exports, "setMinutes", ()=>_indexJsDefault198.default
);
parcelHelpers.export(exports, "setMonth", ()=>_indexJsDefault199.default
);
parcelHelpers.export(exports, "setQuarter", ()=>_indexJsDefault200.default
);
parcelHelpers.export(exports, "setSeconds", ()=>_indexJsDefault201.default
);
parcelHelpers.export(exports, "setWeek", ()=>_indexJsDefault202.default
);
parcelHelpers.export(exports, "setWeekYear", ()=>_indexJsDefault203.default
);
parcelHelpers.export(exports, "setYear", ()=>_indexJsDefault204.default
);
parcelHelpers.export(exports, "startOfDay", ()=>_indexJsDefault205.default
);
parcelHelpers.export(exports, "startOfDecade", ()=>_indexJsDefault206.default
);
parcelHelpers.export(exports, "startOfHour", ()=>_indexJsDefault207.default
);
parcelHelpers.export(exports, "startOfISOWeek", ()=>_indexJsDefault208.default
);
parcelHelpers.export(exports, "startOfISOWeekYear", ()=>_indexJsDefault209.default
);
parcelHelpers.export(exports, "startOfMinute", ()=>_indexJsDefault210.default
);
parcelHelpers.export(exports, "startOfMonth", ()=>_indexJsDefault211.default
);
parcelHelpers.export(exports, "startOfQuarter", ()=>_indexJsDefault212.default
);
parcelHelpers.export(exports, "startOfSecond", ()=>_indexJsDefault213.default
);
parcelHelpers.export(exports, "startOfToday", ()=>_indexJsDefault214.default
);
parcelHelpers.export(exports, "startOfTomorrow", ()=>_indexJsDefault215.default
);
parcelHelpers.export(exports, "startOfWeek", ()=>_indexJsDefault216.default
);
parcelHelpers.export(exports, "startOfWeekYear", ()=>_indexJsDefault217.default
);
parcelHelpers.export(exports, "startOfYear", ()=>_indexJsDefault218.default
);
parcelHelpers.export(exports, "startOfYesterday", ()=>_indexJsDefault219.default
);
parcelHelpers.export(exports, "sub", ()=>_indexJsDefault220.default
);
parcelHelpers.export(exports, "subBusinessDays", ()=>_indexJsDefault221.default
);
parcelHelpers.export(exports, "subDays", ()=>_indexJsDefault222.default
);
parcelHelpers.export(exports, "subHours", ()=>_indexJsDefault223.default
);
parcelHelpers.export(exports, "subISOWeekYears", ()=>_indexJsDefault224.default
);
parcelHelpers.export(exports, "subMilliseconds", ()=>_indexJsDefault225.default
);
parcelHelpers.export(exports, "subMinutes", ()=>_indexJsDefault226.default
);
parcelHelpers.export(exports, "subMonths", ()=>_indexJsDefault227.default
);
parcelHelpers.export(exports, "subQuarters", ()=>_indexJsDefault228.default
);
parcelHelpers.export(exports, "subSeconds", ()=>_indexJsDefault229.default
);
parcelHelpers.export(exports, "subWeeks", ()=>_indexJsDefault230.default
);
parcelHelpers.export(exports, "subYears", ()=>_indexJsDefault231.default
);
parcelHelpers.export(exports, "toDate", ()=>_indexJsDefault232.default
);
parcelHelpers.export(exports, "weeksToDays", ()=>_indexJsDefault233.default
);
parcelHelpers.export(exports, "yearsToMonths", ()=>_indexJsDefault234.default
);
parcelHelpers.export(exports, "yearsToQuarters", ()=>_indexJsDefault235.default
);
var _indexJs = require("./add/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./addBusinessDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./addDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./addHours/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./addISOWeekYears/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./addMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./addMinutes/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./addMonths/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./addQuarters/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./addSeconds/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./addWeeks/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./addYears/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./areIntervalsOverlapping/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./clamp/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./closestIndexTo/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
var _indexJs15 = require("./closestTo/index.js");
var _indexJsDefault15 = parcelHelpers.interopDefault(_indexJs15);
var _indexJs16 = require("./compareAsc/index.js");
var _indexJsDefault16 = parcelHelpers.interopDefault(_indexJs16);
var _indexJs17 = require("./compareDesc/index.js");
var _indexJsDefault17 = parcelHelpers.interopDefault(_indexJs17);
var _indexJs18 = require("./daysToWeeks/index.js");
var _indexJsDefault18 = parcelHelpers.interopDefault(_indexJs18);
var _indexJs19 = require("./differenceInBusinessDays/index.js");
var _indexJsDefault19 = parcelHelpers.interopDefault(_indexJs19);
var _indexJs20 = require("./differenceInCalendarDays/index.js");
var _indexJsDefault20 = parcelHelpers.interopDefault(_indexJs20);
var _indexJs21 = require("./differenceInCalendarISOWeekYears/index.js");
var _indexJsDefault21 = parcelHelpers.interopDefault(_indexJs21);
var _indexJs22 = require("./differenceInCalendarISOWeeks/index.js");
var _indexJsDefault22 = parcelHelpers.interopDefault(_indexJs22);
var _indexJs23 = require("./differenceInCalendarMonths/index.js");
var _indexJsDefault23 = parcelHelpers.interopDefault(_indexJs23);
var _indexJs24 = require("./differenceInCalendarQuarters/index.js");
var _indexJsDefault24 = parcelHelpers.interopDefault(_indexJs24);
var _indexJs25 = require("./differenceInCalendarWeeks/index.js");
var _indexJsDefault25 = parcelHelpers.interopDefault(_indexJs25);
var _indexJs26 = require("./differenceInCalendarYears/index.js");
var _indexJsDefault26 = parcelHelpers.interopDefault(_indexJs26);
var _indexJs27 = require("./differenceInDays/index.js");
var _indexJsDefault27 = parcelHelpers.interopDefault(_indexJs27);
var _indexJs28 = require("./differenceInHours/index.js");
var _indexJsDefault28 = parcelHelpers.interopDefault(_indexJs28);
var _indexJs29 = require("./differenceInISOWeekYears/index.js");
var _indexJsDefault29 = parcelHelpers.interopDefault(_indexJs29);
var _indexJs30 = require("./differenceInMilliseconds/index.js");
var _indexJsDefault30 = parcelHelpers.interopDefault(_indexJs30);
var _indexJs31 = require("./differenceInMinutes/index.js");
var _indexJsDefault31 = parcelHelpers.interopDefault(_indexJs31);
var _indexJs32 = require("./differenceInMonths/index.js");
var _indexJsDefault32 = parcelHelpers.interopDefault(_indexJs32);
var _indexJs33 = require("./differenceInQuarters/index.js");
var _indexJsDefault33 = parcelHelpers.interopDefault(_indexJs33);
var _indexJs34 = require("./differenceInSeconds/index.js");
var _indexJsDefault34 = parcelHelpers.interopDefault(_indexJs34);
var _indexJs35 = require("./differenceInWeeks/index.js");
var _indexJsDefault35 = parcelHelpers.interopDefault(_indexJs35);
var _indexJs36 = require("./differenceInYears/index.js");
var _indexJsDefault36 = parcelHelpers.interopDefault(_indexJs36);
var _indexJs37 = require("./eachDayOfInterval/index.js");
var _indexJsDefault37 = parcelHelpers.interopDefault(_indexJs37);
var _indexJs38 = require("./eachHourOfInterval/index.js");
var _indexJsDefault38 = parcelHelpers.interopDefault(_indexJs38);
var _indexJs39 = require("./eachMinuteOfInterval/index.js");
var _indexJsDefault39 = parcelHelpers.interopDefault(_indexJs39);
var _indexJs40 = require("./eachMonthOfInterval/index.js");
var _indexJsDefault40 = parcelHelpers.interopDefault(_indexJs40);
var _indexJs41 = require("./eachQuarterOfInterval/index.js");
var _indexJsDefault41 = parcelHelpers.interopDefault(_indexJs41);
var _indexJs42 = require("./eachWeekOfInterval/index.js");
var _indexJsDefault42 = parcelHelpers.interopDefault(_indexJs42);
var _indexJs43 = require("./eachWeekendOfInterval/index.js");
var _indexJsDefault43 = parcelHelpers.interopDefault(_indexJs43);
var _indexJs44 = require("./eachWeekendOfMonth/index.js");
var _indexJsDefault44 = parcelHelpers.interopDefault(_indexJs44);
var _indexJs45 = require("./eachWeekendOfYear/index.js");
var _indexJsDefault45 = parcelHelpers.interopDefault(_indexJs45);
var _indexJs46 = require("./eachYearOfInterval/index.js");
var _indexJsDefault46 = parcelHelpers.interopDefault(_indexJs46);
var _indexJs47 = require("./endOfDay/index.js");
var _indexJsDefault47 = parcelHelpers.interopDefault(_indexJs47);
var _indexJs48 = require("./endOfDecade/index.js");
var _indexJsDefault48 = parcelHelpers.interopDefault(_indexJs48);
var _indexJs49 = require("./endOfHour/index.js");
var _indexJsDefault49 = parcelHelpers.interopDefault(_indexJs49);
var _indexJs50 = require("./endOfISOWeek/index.js");
var _indexJsDefault50 = parcelHelpers.interopDefault(_indexJs50);
var _indexJs51 = require("./endOfISOWeekYear/index.js");
var _indexJsDefault51 = parcelHelpers.interopDefault(_indexJs51);
var _indexJs52 = require("./endOfMinute/index.js");
var _indexJsDefault52 = parcelHelpers.interopDefault(_indexJs52);
var _indexJs53 = require("./endOfMonth/index.js");
var _indexJsDefault53 = parcelHelpers.interopDefault(_indexJs53);
var _indexJs54 = require("./endOfQuarter/index.js");
var _indexJsDefault54 = parcelHelpers.interopDefault(_indexJs54);
var _indexJs55 = require("./endOfSecond/index.js");
var _indexJsDefault55 = parcelHelpers.interopDefault(_indexJs55);
var _indexJs56 = require("./endOfToday/index.js");
var _indexJsDefault56 = parcelHelpers.interopDefault(_indexJs56);
var _indexJs57 = require("./endOfTomorrow/index.js");
var _indexJsDefault57 = parcelHelpers.interopDefault(_indexJs57);
var _indexJs58 = require("./endOfWeek/index.js");
var _indexJsDefault58 = parcelHelpers.interopDefault(_indexJs58);
var _indexJs59 = require("./endOfYear/index.js");
var _indexJsDefault59 = parcelHelpers.interopDefault(_indexJs59);
var _indexJs60 = require("./endOfYesterday/index.js");
var _indexJsDefault60 = parcelHelpers.interopDefault(_indexJs60);
var _indexJs61 = require("./format/index.js");
var _indexJsDefault61 = parcelHelpers.interopDefault(_indexJs61);
var _indexJs62 = require("./formatDistance/index.js");
var _indexJsDefault62 = parcelHelpers.interopDefault(_indexJs62);
var _indexJs63 = require("./formatDistanceStrict/index.js");
var _indexJsDefault63 = parcelHelpers.interopDefault(_indexJs63);
var _indexJs64 = require("./formatDistanceToNow/index.js");
var _indexJsDefault64 = parcelHelpers.interopDefault(_indexJs64);
var _indexJs65 = require("./formatDistanceToNowStrict/index.js");
var _indexJsDefault65 = parcelHelpers.interopDefault(_indexJs65);
var _indexJs66 = require("./formatDuration/index.js");
var _indexJsDefault66 = parcelHelpers.interopDefault(_indexJs66);
var _indexJs67 = require("./formatISO/index.js");
var _indexJsDefault67 = parcelHelpers.interopDefault(_indexJs67);
var _indexJs68 = require("./formatISO9075/index.js");
var _indexJsDefault68 = parcelHelpers.interopDefault(_indexJs68);
var _indexJs69 = require("./formatISODuration/index.js");
var _indexJsDefault69 = parcelHelpers.interopDefault(_indexJs69);
var _indexJs70 = require("./formatRFC3339/index.js");
var _indexJsDefault70 = parcelHelpers.interopDefault(_indexJs70);
var _indexJs71 = require("./formatRFC7231/index.js");
var _indexJsDefault71 = parcelHelpers.interopDefault(_indexJs71);
var _indexJs72 = require("./formatRelative/index.js");
var _indexJsDefault72 = parcelHelpers.interopDefault(_indexJs72);
var _indexJs73 = require("./fromUnixTime/index.js");
var _indexJsDefault73 = parcelHelpers.interopDefault(_indexJs73);
var _indexJs74 = require("./getDate/index.js");
var _indexJsDefault74 = parcelHelpers.interopDefault(_indexJs74);
var _indexJs75 = require("./getDay/index.js");
var _indexJsDefault75 = parcelHelpers.interopDefault(_indexJs75);
var _indexJs76 = require("./getDayOfYear/index.js");
var _indexJsDefault76 = parcelHelpers.interopDefault(_indexJs76);
var _indexJs77 = require("./getDaysInMonth/index.js");
var _indexJsDefault77 = parcelHelpers.interopDefault(_indexJs77);
var _indexJs78 = require("./getDaysInYear/index.js");
var _indexJsDefault78 = parcelHelpers.interopDefault(_indexJs78);
var _indexJs79 = require("./getDecade/index.js");
var _indexJsDefault79 = parcelHelpers.interopDefault(_indexJs79);
var _indexJs80 = require("./getHours/index.js");
var _indexJsDefault80 = parcelHelpers.interopDefault(_indexJs80);
var _indexJs81 = require("./getISODay/index.js");
var _indexJsDefault81 = parcelHelpers.interopDefault(_indexJs81);
var _indexJs82 = require("./getISOWeek/index.js");
var _indexJsDefault82 = parcelHelpers.interopDefault(_indexJs82);
var _indexJs83 = require("./getISOWeekYear/index.js");
var _indexJsDefault83 = parcelHelpers.interopDefault(_indexJs83);
var _indexJs84 = require("./getISOWeeksInYear/index.js");
var _indexJsDefault84 = parcelHelpers.interopDefault(_indexJs84);
var _indexJs85 = require("./getMilliseconds/index.js");
var _indexJsDefault85 = parcelHelpers.interopDefault(_indexJs85);
var _indexJs86 = require("./getMinutes/index.js");
var _indexJsDefault86 = parcelHelpers.interopDefault(_indexJs86);
var _indexJs87 = require("./getMonth/index.js");
var _indexJsDefault87 = parcelHelpers.interopDefault(_indexJs87);
var _indexJs88 = require("./getOverlappingDaysInIntervals/index.js");
var _indexJsDefault88 = parcelHelpers.interopDefault(_indexJs88);
var _indexJs89 = require("./getQuarter/index.js");
var _indexJsDefault89 = parcelHelpers.interopDefault(_indexJs89);
var _indexJs90 = require("./getSeconds/index.js");
var _indexJsDefault90 = parcelHelpers.interopDefault(_indexJs90);
var _indexJs91 = require("./getTime/index.js");
var _indexJsDefault91 = parcelHelpers.interopDefault(_indexJs91);
var _indexJs92 = require("./getUnixTime/index.js");
var _indexJsDefault92 = parcelHelpers.interopDefault(_indexJs92);
var _indexJs93 = require("./getWeek/index.js");
var _indexJsDefault93 = parcelHelpers.interopDefault(_indexJs93);
var _indexJs94 = require("./getWeekOfMonth/index.js");
var _indexJsDefault94 = parcelHelpers.interopDefault(_indexJs94);
var _indexJs95 = require("./getWeekYear/index.js");
var _indexJsDefault95 = parcelHelpers.interopDefault(_indexJs95);
var _indexJs96 = require("./getWeeksInMonth/index.js");
var _indexJsDefault96 = parcelHelpers.interopDefault(_indexJs96);
var _indexJs97 = require("./getYear/index.js");
var _indexJsDefault97 = parcelHelpers.interopDefault(_indexJs97);
var _indexJs98 = require("./hoursToMilliseconds/index.js");
var _indexJsDefault98 = parcelHelpers.interopDefault(_indexJs98);
var _indexJs99 = require("./hoursToMinutes/index.js");
var _indexJsDefault99 = parcelHelpers.interopDefault(_indexJs99);
var _indexJs100 = require("./hoursToSeconds/index.js");
var _indexJsDefault100 = parcelHelpers.interopDefault(_indexJs100);
var _indexJs101 = require("./intervalToDuration/index.js");
var _indexJsDefault101 = parcelHelpers.interopDefault(_indexJs101);
var _indexJs102 = require("./intlFormat/index.js");
var _indexJsDefault102 = parcelHelpers.interopDefault(_indexJs102);
var _indexJs103 = require("./isAfter/index.js");
var _indexJsDefault103 = parcelHelpers.interopDefault(_indexJs103);
var _indexJs104 = require("./isBefore/index.js");
var _indexJsDefault104 = parcelHelpers.interopDefault(_indexJs104);
var _indexJs105 = require("./isDate/index.js");
var _indexJsDefault105 = parcelHelpers.interopDefault(_indexJs105);
var _indexJs106 = require("./isEqual/index.js");
var _indexJsDefault106 = parcelHelpers.interopDefault(_indexJs106);
var _indexJs107 = require("./isExists/index.js");
var _indexJsDefault107 = parcelHelpers.interopDefault(_indexJs107);
var _indexJs108 = require("./isFirstDayOfMonth/index.js");
var _indexJsDefault108 = parcelHelpers.interopDefault(_indexJs108);
var _indexJs109 = require("./isFriday/index.js");
var _indexJsDefault109 = parcelHelpers.interopDefault(_indexJs109);
var _indexJs110 = require("./isFuture/index.js");
var _indexJsDefault110 = parcelHelpers.interopDefault(_indexJs110);
var _indexJs111 = require("./isLastDayOfMonth/index.js");
var _indexJsDefault111 = parcelHelpers.interopDefault(_indexJs111);
var _indexJs112 = require("./isLeapYear/index.js");
var _indexJsDefault112 = parcelHelpers.interopDefault(_indexJs112);
var _indexJs113 = require("./isMatch/index.js");
var _indexJsDefault113 = parcelHelpers.interopDefault(_indexJs113);
var _indexJs114 = require("./isMonday/index.js");
var _indexJsDefault114 = parcelHelpers.interopDefault(_indexJs114);
var _indexJs115 = require("./isPast/index.js");
var _indexJsDefault115 = parcelHelpers.interopDefault(_indexJs115);
var _indexJs116 = require("./isSameDay/index.js");
var _indexJsDefault116 = parcelHelpers.interopDefault(_indexJs116);
var _indexJs117 = require("./isSameHour/index.js");
var _indexJsDefault117 = parcelHelpers.interopDefault(_indexJs117);
var _indexJs118 = require("./isSameISOWeek/index.js");
var _indexJsDefault118 = parcelHelpers.interopDefault(_indexJs118);
var _indexJs119 = require("./isSameISOWeekYear/index.js");
var _indexJsDefault119 = parcelHelpers.interopDefault(_indexJs119);
var _indexJs120 = require("./isSameMinute/index.js");
var _indexJsDefault120 = parcelHelpers.interopDefault(_indexJs120);
var _indexJs121 = require("./isSameMonth/index.js");
var _indexJsDefault121 = parcelHelpers.interopDefault(_indexJs121);
var _indexJs122 = require("./isSameQuarter/index.js");
var _indexJsDefault122 = parcelHelpers.interopDefault(_indexJs122);
var _indexJs123 = require("./isSameSecond/index.js");
var _indexJsDefault123 = parcelHelpers.interopDefault(_indexJs123);
var _indexJs124 = require("./isSameWeek/index.js");
var _indexJsDefault124 = parcelHelpers.interopDefault(_indexJs124);
var _indexJs125 = require("./isSameYear/index.js");
var _indexJsDefault125 = parcelHelpers.interopDefault(_indexJs125);
var _indexJs126 = require("./isSaturday/index.js");
var _indexJsDefault126 = parcelHelpers.interopDefault(_indexJs126);
var _indexJs127 = require("./isSunday/index.js");
var _indexJsDefault127 = parcelHelpers.interopDefault(_indexJs127);
var _indexJs128 = require("./isThisHour/index.js");
var _indexJsDefault128 = parcelHelpers.interopDefault(_indexJs128);
var _indexJs129 = require("./isThisISOWeek/index.js");
var _indexJsDefault129 = parcelHelpers.interopDefault(_indexJs129);
var _indexJs130 = require("./isThisMinute/index.js");
var _indexJsDefault130 = parcelHelpers.interopDefault(_indexJs130);
var _indexJs131 = require("./isThisMonth/index.js");
var _indexJsDefault131 = parcelHelpers.interopDefault(_indexJs131);
var _indexJs132 = require("./isThisQuarter/index.js");
var _indexJsDefault132 = parcelHelpers.interopDefault(_indexJs132);
var _indexJs133 = require("./isThisSecond/index.js");
var _indexJsDefault133 = parcelHelpers.interopDefault(_indexJs133);
var _indexJs134 = require("./isThisWeek/index.js");
var _indexJsDefault134 = parcelHelpers.interopDefault(_indexJs134);
var _indexJs135 = require("./isThisYear/index.js");
var _indexJsDefault135 = parcelHelpers.interopDefault(_indexJs135);
var _indexJs136 = require("./isThursday/index.js");
var _indexJsDefault136 = parcelHelpers.interopDefault(_indexJs136);
var _indexJs137 = require("./isToday/index.js");
var _indexJsDefault137 = parcelHelpers.interopDefault(_indexJs137);
var _indexJs138 = require("./isTomorrow/index.js");
var _indexJsDefault138 = parcelHelpers.interopDefault(_indexJs138);
var _indexJs139 = require("./isTuesday/index.js");
var _indexJsDefault139 = parcelHelpers.interopDefault(_indexJs139);
var _indexJs140 = require("./isValid/index.js");
var _indexJsDefault140 = parcelHelpers.interopDefault(_indexJs140);
var _indexJs141 = require("./isWednesday/index.js");
var _indexJsDefault141 = parcelHelpers.interopDefault(_indexJs141);
var _indexJs142 = require("./isWeekend/index.js");
var _indexJsDefault142 = parcelHelpers.interopDefault(_indexJs142);
var _indexJs143 = require("./isWithinInterval/index.js");
var _indexJsDefault143 = parcelHelpers.interopDefault(_indexJs143);
var _indexJs144 = require("./isYesterday/index.js");
var _indexJsDefault144 = parcelHelpers.interopDefault(_indexJs144);
var _indexJs145 = require("./lastDayOfDecade/index.js");
var _indexJsDefault145 = parcelHelpers.interopDefault(_indexJs145);
var _indexJs146 = require("./lastDayOfISOWeek/index.js");
var _indexJsDefault146 = parcelHelpers.interopDefault(_indexJs146);
var _indexJs147 = require("./lastDayOfISOWeekYear/index.js");
var _indexJsDefault147 = parcelHelpers.interopDefault(_indexJs147);
var _indexJs148 = require("./lastDayOfMonth/index.js");
var _indexJsDefault148 = parcelHelpers.interopDefault(_indexJs148);
var _indexJs149 = require("./lastDayOfQuarter/index.js");
var _indexJsDefault149 = parcelHelpers.interopDefault(_indexJs149);
var _indexJs150 = require("./lastDayOfWeek/index.js");
var _indexJsDefault150 = parcelHelpers.interopDefault(_indexJs150);
var _indexJs151 = require("./lastDayOfYear/index.js");
var _indexJsDefault151 = parcelHelpers.interopDefault(_indexJs151);
var _indexJs152 = require("./lightFormat/index.js");
var _indexJsDefault152 = parcelHelpers.interopDefault(_indexJs152);
var _indexJs153 = require("./max/index.js");
var _indexJsDefault153 = parcelHelpers.interopDefault(_indexJs153);
var _indexJs154 = require("./milliseconds/index.js");
var _indexJsDefault154 = parcelHelpers.interopDefault(_indexJs154);
var _indexJs155 = require("./millisecondsToHours/index.js");
var _indexJsDefault155 = parcelHelpers.interopDefault(_indexJs155);
var _indexJs156 = require("./millisecondsToMinutes/index.js");
var _indexJsDefault156 = parcelHelpers.interopDefault(_indexJs156);
var _indexJs157 = require("./millisecondsToSeconds/index.js");
var _indexJsDefault157 = parcelHelpers.interopDefault(_indexJs157);
var _indexJs158 = require("./min/index.js");
var _indexJsDefault158 = parcelHelpers.interopDefault(_indexJs158);
var _indexJs159 = require("./minutesToHours/index.js");
var _indexJsDefault159 = parcelHelpers.interopDefault(_indexJs159);
var _indexJs160 = require("./minutesToMilliseconds/index.js");
var _indexJsDefault160 = parcelHelpers.interopDefault(_indexJs160);
var _indexJs161 = require("./minutesToSeconds/index.js");
var _indexJsDefault161 = parcelHelpers.interopDefault(_indexJs161);
var _indexJs162 = require("./monthsToQuarters/index.js");
var _indexJsDefault162 = parcelHelpers.interopDefault(_indexJs162);
var _indexJs163 = require("./monthsToYears/index.js");
var _indexJsDefault163 = parcelHelpers.interopDefault(_indexJs163);
var _indexJs164 = require("./nextDay/index.js");
var _indexJsDefault164 = parcelHelpers.interopDefault(_indexJs164);
var _indexJs165 = require("./nextFriday/index.js");
var _indexJsDefault165 = parcelHelpers.interopDefault(_indexJs165);
var _indexJs166 = require("./nextMonday/index.js");
var _indexJsDefault166 = parcelHelpers.interopDefault(_indexJs166);
var _indexJs167 = require("./nextSaturday/index.js");
var _indexJsDefault167 = parcelHelpers.interopDefault(_indexJs167);
var _indexJs168 = require("./nextSunday/index.js");
var _indexJsDefault168 = parcelHelpers.interopDefault(_indexJs168);
var _indexJs169 = require("./nextThursday/index.js");
var _indexJsDefault169 = parcelHelpers.interopDefault(_indexJs169);
var _indexJs170 = require("./nextTuesday/index.js");
var _indexJsDefault170 = parcelHelpers.interopDefault(_indexJs170);
var _indexJs171 = require("./nextWednesday/index.js");
var _indexJsDefault171 = parcelHelpers.interopDefault(_indexJs171);
var _indexJs172 = require("./parse/index.js");
var _indexJsDefault172 = parcelHelpers.interopDefault(_indexJs172);
var _indexJs173 = require("./parseISO/index.js");
var _indexJsDefault173 = parcelHelpers.interopDefault(_indexJs173);
var _indexJs174 = require("./parseJSON/index.js");
var _indexJsDefault174 = parcelHelpers.interopDefault(_indexJs174);
var _indexJs175 = require("./previousDay/index.js");
var _indexJsDefault175 = parcelHelpers.interopDefault(_indexJs175);
var _indexJs176 = require("./previousFriday/index.js");
var _indexJsDefault176 = parcelHelpers.interopDefault(_indexJs176);
var _indexJs177 = require("./previousMonday/index.js");
var _indexJsDefault177 = parcelHelpers.interopDefault(_indexJs177);
var _indexJs178 = require("./previousSaturday/index.js");
var _indexJsDefault178 = parcelHelpers.interopDefault(_indexJs178);
var _indexJs179 = require("./previousSunday/index.js");
var _indexJsDefault179 = parcelHelpers.interopDefault(_indexJs179);
var _indexJs180 = require("./previousThursday/index.js");
var _indexJsDefault180 = parcelHelpers.interopDefault(_indexJs180);
var _indexJs181 = require("./previousTuesday/index.js");
var _indexJsDefault181 = parcelHelpers.interopDefault(_indexJs181);
var _indexJs182 = require("./previousWednesday/index.js");
var _indexJsDefault182 = parcelHelpers.interopDefault(_indexJs182);
var _indexJs183 = require("./quartersToMonths/index.js");
var _indexJsDefault183 = parcelHelpers.interopDefault(_indexJs183);
var _indexJs184 = require("./quartersToYears/index.js");
var _indexJsDefault184 = parcelHelpers.interopDefault(_indexJs184);
var _indexJs185 = require("./roundToNearestMinutes/index.js");
var _indexJsDefault185 = parcelHelpers.interopDefault(_indexJs185);
var _indexJs186 = require("./secondsToHours/index.js");
var _indexJsDefault186 = parcelHelpers.interopDefault(_indexJs186);
var _indexJs187 = require("./secondsToMilliseconds/index.js");
var _indexJsDefault187 = parcelHelpers.interopDefault(_indexJs187);
var _indexJs188 = require("./secondsToMinutes/index.js");
var _indexJsDefault188 = parcelHelpers.interopDefault(_indexJs188);
var _indexJs189 = require("./set/index.js");
var _indexJsDefault189 = parcelHelpers.interopDefault(_indexJs189);
var _indexJs190 = require("./setDate/index.js");
var _indexJsDefault190 = parcelHelpers.interopDefault(_indexJs190);
var _indexJs191 = require("./setDay/index.js");
var _indexJsDefault191 = parcelHelpers.interopDefault(_indexJs191);
var _indexJs192 = require("./setDayOfYear/index.js");
var _indexJsDefault192 = parcelHelpers.interopDefault(_indexJs192);
var _indexJs193 = require("./setHours/index.js");
var _indexJsDefault193 = parcelHelpers.interopDefault(_indexJs193);
var _indexJs194 = require("./setISODay/index.js");
var _indexJsDefault194 = parcelHelpers.interopDefault(_indexJs194);
var _indexJs195 = require("./setISOWeek/index.js");
var _indexJsDefault195 = parcelHelpers.interopDefault(_indexJs195);
var _indexJs196 = require("./setISOWeekYear/index.js");
var _indexJsDefault196 = parcelHelpers.interopDefault(_indexJs196);
var _indexJs197 = require("./setMilliseconds/index.js");
var _indexJsDefault197 = parcelHelpers.interopDefault(_indexJs197);
var _indexJs198 = require("./setMinutes/index.js");
var _indexJsDefault198 = parcelHelpers.interopDefault(_indexJs198);
var _indexJs199 = require("./setMonth/index.js");
var _indexJsDefault199 = parcelHelpers.interopDefault(_indexJs199);
var _indexJs200 = require("./setQuarter/index.js");
var _indexJsDefault200 = parcelHelpers.interopDefault(_indexJs200);
var _indexJs201 = require("./setSeconds/index.js");
var _indexJsDefault201 = parcelHelpers.interopDefault(_indexJs201);
var _indexJs202 = require("./setWeek/index.js");
var _indexJsDefault202 = parcelHelpers.interopDefault(_indexJs202);
var _indexJs203 = require("./setWeekYear/index.js");
var _indexJsDefault203 = parcelHelpers.interopDefault(_indexJs203);
var _indexJs204 = require("./setYear/index.js");
var _indexJsDefault204 = parcelHelpers.interopDefault(_indexJs204);
var _indexJs205 = require("./startOfDay/index.js");
var _indexJsDefault205 = parcelHelpers.interopDefault(_indexJs205);
var _indexJs206 = require("./startOfDecade/index.js");
var _indexJsDefault206 = parcelHelpers.interopDefault(_indexJs206);
var _indexJs207 = require("./startOfHour/index.js");
var _indexJsDefault207 = parcelHelpers.interopDefault(_indexJs207);
var _indexJs208 = require("./startOfISOWeek/index.js");
var _indexJsDefault208 = parcelHelpers.interopDefault(_indexJs208);
var _indexJs209 = require("./startOfISOWeekYear/index.js");
var _indexJsDefault209 = parcelHelpers.interopDefault(_indexJs209);
var _indexJs210 = require("./startOfMinute/index.js");
var _indexJsDefault210 = parcelHelpers.interopDefault(_indexJs210);
var _indexJs211 = require("./startOfMonth/index.js");
var _indexJsDefault211 = parcelHelpers.interopDefault(_indexJs211);
var _indexJs212 = require("./startOfQuarter/index.js");
var _indexJsDefault212 = parcelHelpers.interopDefault(_indexJs212);
var _indexJs213 = require("./startOfSecond/index.js");
var _indexJsDefault213 = parcelHelpers.interopDefault(_indexJs213);
var _indexJs214 = require("./startOfToday/index.js");
var _indexJsDefault214 = parcelHelpers.interopDefault(_indexJs214);
var _indexJs215 = require("./startOfTomorrow/index.js");
var _indexJsDefault215 = parcelHelpers.interopDefault(_indexJs215);
var _indexJs216 = require("./startOfWeek/index.js");
var _indexJsDefault216 = parcelHelpers.interopDefault(_indexJs216);
var _indexJs217 = require("./startOfWeekYear/index.js");
var _indexJsDefault217 = parcelHelpers.interopDefault(_indexJs217);
var _indexJs218 = require("./startOfYear/index.js");
var _indexJsDefault218 = parcelHelpers.interopDefault(_indexJs218);
var _indexJs219 = require("./startOfYesterday/index.js");
var _indexJsDefault219 = parcelHelpers.interopDefault(_indexJs219);
var _indexJs220 = require("./sub/index.js");
var _indexJsDefault220 = parcelHelpers.interopDefault(_indexJs220);
var _indexJs221 = require("./subBusinessDays/index.js");
var _indexJsDefault221 = parcelHelpers.interopDefault(_indexJs221);
var _indexJs222 = require("./subDays/index.js");
var _indexJsDefault222 = parcelHelpers.interopDefault(_indexJs222);
var _indexJs223 = require("./subHours/index.js");
var _indexJsDefault223 = parcelHelpers.interopDefault(_indexJs223);
var _indexJs224 = require("./subISOWeekYears/index.js");
var _indexJsDefault224 = parcelHelpers.interopDefault(_indexJs224);
var _indexJs225 = require("./subMilliseconds/index.js");
var _indexJsDefault225 = parcelHelpers.interopDefault(_indexJs225);
var _indexJs226 = require("./subMinutes/index.js");
var _indexJsDefault226 = parcelHelpers.interopDefault(_indexJs226);
var _indexJs227 = require("./subMonths/index.js");
var _indexJsDefault227 = parcelHelpers.interopDefault(_indexJs227);
var _indexJs228 = require("./subQuarters/index.js");
var _indexJsDefault228 = parcelHelpers.interopDefault(_indexJs228);
var _indexJs229 = require("./subSeconds/index.js");
var _indexJsDefault229 = parcelHelpers.interopDefault(_indexJs229);
var _indexJs230 = require("./subWeeks/index.js");
var _indexJsDefault230 = parcelHelpers.interopDefault(_indexJs230);
var _indexJs231 = require("./subYears/index.js");
var _indexJsDefault231 = parcelHelpers.interopDefault(_indexJs231);
var _indexJs232 = require("./toDate/index.js");
var _indexJsDefault232 = parcelHelpers.interopDefault(_indexJs232);
var _indexJs233 = require("./weeksToDays/index.js");
var _indexJsDefault233 = parcelHelpers.interopDefault(_indexJs233);
var _indexJs234 = require("./yearsToMonths/index.js");
var _indexJsDefault234 = parcelHelpers.interopDefault(_indexJs234);
var _indexJs235 = require("./yearsToQuarters/index.js");
var _indexJsDefault235 = parcelHelpers.interopDefault(_indexJs235);
var _indexJs236 = require("./constants/index.js");
parcelHelpers.exportAll(_indexJs236, exports);

},{"./add/index.js":false,"./addBusinessDays/index.js":false,"./addDays/index.js":false,"./addHours/index.js":false,"./addISOWeekYears/index.js":false,"./addMilliseconds/index.js":"e9dKs","./addMinutes/index.js":false,"./addMonths/index.js":false,"./addQuarters/index.js":false,"./addSeconds/index.js":false,"./addWeeks/index.js":false,"./addYears/index.js":false,"./areIntervalsOverlapping/index.js":false,"./clamp/index.js":false,"./closestIndexTo/index.js":false,"./closestTo/index.js":false,"./compareAsc/index.js":false,"./compareDesc/index.js":false,"./daysToWeeks/index.js":false,"./differenceInBusinessDays/index.js":false,"./differenceInCalendarDays/index.js":false,"./differenceInCalendarISOWeekYears/index.js":false,"./differenceInCalendarISOWeeks/index.js":false,"./differenceInCalendarMonths/index.js":false,"./differenceInCalendarQuarters/index.js":false,"./differenceInCalendarWeeks/index.js":false,"./differenceInCalendarYears/index.js":false,"./differenceInDays/index.js":false,"./differenceInHours/index.js":false,"./differenceInISOWeekYears/index.js":false,"./differenceInMilliseconds/index.js":false,"./differenceInMinutes/index.js":false,"./differenceInMonths/index.js":false,"./differenceInQuarters/index.js":false,"./differenceInSeconds/index.js":false,"./differenceInWeeks/index.js":false,"./differenceInYears/index.js":false,"./eachDayOfInterval/index.js":false,"./eachHourOfInterval/index.js":false,"./eachMinuteOfInterval/index.js":false,"./eachMonthOfInterval/index.js":false,"./eachQuarterOfInterval/index.js":false,"./eachWeekOfInterval/index.js":false,"./eachWeekendOfInterval/index.js":false,"./eachWeekendOfMonth/index.js":false,"./eachWeekendOfYear/index.js":false,"./eachYearOfInterval/index.js":false,"./endOfDay/index.js":false,"./endOfDecade/index.js":false,"./endOfHour/index.js":false,"./endOfISOWeek/index.js":false,"./endOfISOWeekYear/index.js":false,"./endOfMinute/index.js":false,"./endOfMonth/index.js":false,"./endOfQuarter/index.js":false,"./endOfSecond/index.js":false,"./endOfToday/index.js":false,"./endOfTomorrow/index.js":false,"./endOfWeek/index.js":false,"./endOfYear/index.js":false,"./endOfYesterday/index.js":false,"./format/index.js":"6LMpl","./formatDistance/index.js":false,"./formatDistanceStrict/index.js":false,"./formatDistanceToNow/index.js":false,"./formatDistanceToNowStrict/index.js":false,"./formatDuration/index.js":false,"./formatISO/index.js":false,"./formatISO9075/index.js":false,"./formatISODuration/index.js":false,"./formatRFC3339/index.js":false,"./formatRFC7231/index.js":false,"./formatRelative/index.js":false,"./fromUnixTime/index.js":false,"./getDate/index.js":false,"./getDay/index.js":false,"./getDayOfYear/index.js":false,"./getDaysInMonth/index.js":false,"./getDaysInYear/index.js":false,"./getDecade/index.js":false,"./getHours/index.js":false,"./getISODay/index.js":false,"./getISOWeek/index.js":false,"./getISOWeekYear/index.js":false,"./getISOWeeksInYear/index.js":false,"./getMilliseconds/index.js":false,"./getMinutes/index.js":false,"./getMonth/index.js":false,"./getOverlappingDaysInIntervals/index.js":false,"./getQuarter/index.js":false,"./getSeconds/index.js":false,"./getTime/index.js":false,"./getUnixTime/index.js":false,"./getWeek/index.js":false,"./getWeekOfMonth/index.js":false,"./getWeekYear/index.js":false,"./getWeeksInMonth/index.js":false,"./getYear/index.js":false,"./hoursToMilliseconds/index.js":false,"./hoursToMinutes/index.js":false,"./hoursToSeconds/index.js":false,"./intervalToDuration/index.js":false,"./intlFormat/index.js":false,"./isAfter/index.js":false,"./isBefore/index.js":false,"./isDate/index.js":"aGPO2","./isEqual/index.js":false,"./isExists/index.js":false,"./isFirstDayOfMonth/index.js":false,"./isFriday/index.js":false,"./isFuture/index.js":false,"./isLastDayOfMonth/index.js":false,"./isLeapYear/index.js":false,"./isMatch/index.js":false,"./isMonday/index.js":false,"./isPast/index.js":false,"./isSameDay/index.js":false,"./isSameHour/index.js":false,"./isSameISOWeek/index.js":false,"./isSameISOWeekYear/index.js":false,"./isSameMinute/index.js":false,"./isSameMonth/index.js":false,"./isSameQuarter/index.js":false,"./isSameSecond/index.js":false,"./isSameWeek/index.js":false,"./isSameYear/index.js":false,"./isSaturday/index.js":false,"./isSunday/index.js":false,"./isThisHour/index.js":false,"./isThisISOWeek/index.js":false,"./isThisMinute/index.js":false,"./isThisMonth/index.js":false,"./isThisQuarter/index.js":false,"./isThisSecond/index.js":false,"./isThisWeek/index.js":false,"./isThisYear/index.js":false,"./isThursday/index.js":false,"./isToday/index.js":false,"./isTomorrow/index.js":false,"./isTuesday/index.js":false,"./isValid/index.js":"aZcKB","./isWednesday/index.js":false,"./isWeekend/index.js":false,"./isWithinInterval/index.js":false,"./isYesterday/index.js":false,"./lastDayOfDecade/index.js":false,"./lastDayOfISOWeek/index.js":false,"./lastDayOfISOWeekYear/index.js":false,"./lastDayOfMonth/index.js":false,"./lastDayOfQuarter/index.js":false,"./lastDayOfWeek/index.js":false,"./lastDayOfYear/index.js":false,"./lightFormat/index.js":false,"./max/index.js":false,"./milliseconds/index.js":false,"./millisecondsToHours/index.js":false,"./millisecondsToMinutes/index.js":false,"./millisecondsToSeconds/index.js":false,"./min/index.js":false,"./minutesToHours/index.js":false,"./minutesToMilliseconds/index.js":false,"./minutesToSeconds/index.js":false,"./monthsToQuarters/index.js":false,"./monthsToYears/index.js":false,"./nextDay/index.js":false,"./nextFriday/index.js":false,"./nextMonday/index.js":false,"./nextSaturday/index.js":false,"./nextSunday/index.js":false,"./nextThursday/index.js":false,"./nextTuesday/index.js":false,"./nextWednesday/index.js":false,"./parse/index.js":false,"./parseISO/index.js":false,"./parseJSON/index.js":false,"./previousDay/index.js":false,"./previousFriday/index.js":false,"./previousMonday/index.js":false,"./previousSaturday/index.js":false,"./previousSunday/index.js":false,"./previousThursday/index.js":false,"./previousTuesday/index.js":false,"./previousWednesday/index.js":false,"./quartersToMonths/index.js":false,"./quartersToYears/index.js":false,"./roundToNearestMinutes/index.js":false,"./secondsToHours/index.js":false,"./secondsToMilliseconds/index.js":false,"./secondsToMinutes/index.js":false,"./set/index.js":false,"./setDate/index.js":false,"./setDay/index.js":false,"./setDayOfYear/index.js":false,"./setHours/index.js":false,"./setISODay/index.js":false,"./setISOWeek/index.js":false,"./setISOWeekYear/index.js":false,"./setMilliseconds/index.js":false,"./setMinutes/index.js":false,"./setMonth/index.js":false,"./setQuarter/index.js":false,"./setSeconds/index.js":false,"./setWeek/index.js":false,"./setWeekYear/index.js":false,"./setYear/index.js":false,"./startOfDay/index.js":false,"./startOfDecade/index.js":false,"./startOfHour/index.js":false,"./startOfISOWeek/index.js":false,"./startOfISOWeekYear/index.js":false,"./startOfMinute/index.js":false,"./startOfMonth/index.js":false,"./startOfQuarter/index.js":false,"./startOfSecond/index.js":false,"./startOfToday/index.js":false,"./startOfTomorrow/index.js":false,"./startOfWeek/index.js":false,"./startOfWeekYear/index.js":false,"./startOfYear/index.js":false,"./startOfYesterday/index.js":false,"./sub/index.js":false,"./subBusinessDays/index.js":false,"./subDays/index.js":false,"./subHours/index.js":false,"./subISOWeekYears/index.js":false,"./subMilliseconds/index.js":"c7uw3","./subMinutes/index.js":false,"./subMonths/index.js":false,"./subQuarters/index.js":false,"./subSeconds/index.js":false,"./subWeeks/index.js":false,"./subYears/index.js":false,"./toDate/index.js":"b8BXL","./weeksToDays/index.js":false,"./yearsToMonths/index.js":false,"./yearsToQuarters/index.js":false,"./constants/index.js":"8msh5","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"e9dKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMilliseconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var timestamp = _indexJsDefault1.default(dirtyDate).getTime();
    var amount = _indexJsDefault.default(dirtyAmount);
    return new Date(timestamp + amount);
}
exports.default = addMilliseconds;

},{"../_lib/toInteger/index.js":"6AyxE","../toDate/index.js":"b8BXL","../_lib/requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6AyxE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
exports.default = toInteger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"b8BXL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function toDate(argument) {
    _indexJsDefault.default(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === 'number' || argStr === '[object Number]') return new Date(argument);
    else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1Hz00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6LMpl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isValid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../locale/en-US/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../subMilliseconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toDate/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/formatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/protectedTokens/index.js");
var _indexJs8 = require("../_lib/toInteger/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs9);
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    _indexJsDefault8.default(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {
    };
    var locale = options.locale || _indexJsDefault1.default;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault7.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault7.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault7.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault7.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!locale.localize) throw new RangeError('locale must contain localize property');
    if (!locale.formatLong) throw new RangeError('locale must contain formatLong property');
    var originalDate = _indexJsDefault3.default(dirtyDate);
    if (!_indexJsDefault.default(originalDate)) throw new RangeError('Invalid time value');
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = _indexJsDefault6.default(originalDate);
    var utcDate = _indexJsDefault2.default(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = _indexJsDefault5.default[firstCharacter];
            return longFormatter(substring, locale.formatLong, formatterOptions);
        }
        return substring;
    }).join('').match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = _indexJsDefault4.default[firstCharacter];
        if (formatter) {
            if (!options.useAdditionalWeekYearTokens && _indexJs7.isProtectedWeekYearToken(substring)) _indexJs7.throwProtectedError(substring, dirtyFormatStr, dirtyDate);
            if (!options.useAdditionalDayOfYearTokens && _indexJs7.isProtectedDayOfYearToken(substring)) _indexJs7.throwProtectedError(substring, dirtyFormatStr, dirtyDate);
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        return substring;
    }).join('');
    return result;
}
exports.default = format;
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

},{"../isValid/index.js":"aZcKB","../locale/en-US/index.js":"hsyAO","../subMilliseconds/index.js":"c7uw3","../toDate/index.js":"b8BXL","../_lib/format/formatters/index.js":"2FI2S","../_lib/format/longFormatters/index.js":"9mTl5","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f9apB","../_lib/protectedTokens/index.js":"cRvc7","../_lib/toInteger/index.js":"6AyxE","../_lib/requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"aZcKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isValid(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    if (!_indexJsDefault.default(dirtyDate) && typeof dirtyDate !== 'number') return false;
    var date = _indexJsDefault1.default(dirtyDate);
    return !isNaN(Number(date));
}
exports.default = isValid;

},{"../isDate/index.js":"aGPO2","../toDate/index.js":"b8BXL","../_lib/requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"aGPO2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function isDate(value) {
    _indexJsDefault.default(1, arguments);
    return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
exports.default = isDate;

},{"../_lib/requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hsyAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: 'en-US',
    formatDistance: _indexJsDefault.default,
    formatLong: _indexJsDefault1.default,
    formatRelative: _indexJsDefault2.default,
    localize: _indexJsDefault3.default,
    match: _indexJsDefault4.default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"h5m8z","./_lib/formatLong/index.js":"1mmtm","./_lib/formatRelative/index.js":"eGehI","./_lib/localize/index.js":"9RvB9","./_lib/match/index.js":"iDI6x","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"h5m8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXWeeks: {
        one: 'about 1 week',
        other: 'about {{count}} weeks'
    },
    xWeeks: {
        one: '1 week',
        other: '{{count}} weeks'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === 'string') result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace('{{count}}', count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return 'in ' + result;
        else return result + ' ago';
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1mmtm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: _indexJsDefault.default({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: _indexJsDefault.default({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: _indexJsDefault.default({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"gq2oP","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gq2oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.default = buildFormatLongFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"eGehI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9RvB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        'B',
        'A'
    ],
    abbreviated: [
        'BC',
        'AD'
    ],
    wide: [
        'Before Christ',
        'Anno Domini'
    ]
};
var quarterValues = {
    narrow: [
        '1',
        '2',
        '3',
        '4'
    ],
    abbreviated: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
    ],
    wide: [
        '1st quarter',
        '2nd quarter',
        '3rd quarter',
        '4th quarter'
    ]
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D'
    ],
    abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    wide: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
var dayValues = {
    narrow: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],
    short: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ],
    abbreviated: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ],
    wide: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + 'st';
        case 2:
            return number + 'nd';
        case 3:
            return number + 'rd';
    }
    return number + 'th';
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: _indexJsDefault.default({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: _indexJsDefault.default({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function(quarter) {
            return quarter - 1;
        }
    }),
    month: _indexJsDefault.default({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: _indexJsDefault.default({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: _indexJsDefault.default({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"bZWEL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bZWEL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {
        };
        var context = options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
exports.default = buildLocalizeFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iDI6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: _indexJsDefault1.default({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
            return parseInt(value, 10);
        }
    }),
    era: _indexJsDefault.default({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: _indexJsDefault.default({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function(index) {
            return index + 1;
        }
    }),
    month: _indexJsDefault.default({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: _indexJsDefault.default({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: _indexJsDefault.default({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
exports.default = match;

},{"../../../_lib/buildMatchFn/index.js":"81Ymg","../../../_lib/buildMatchPatternFn/index.js":"g6Zw0","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"81Ymg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchFn;
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"g6Zw0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchPatternFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"c7uw3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMilliseconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subMilliseconds;

},{"../_lib/toInteger/index.js":"6AyxE","../addMilliseconds/index.js":"e9dKs","../_lib/requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2FI2S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/getUTCDayOfYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/getUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/getUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/getUTCWeek/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../addLeadingZeros/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../lightFormatters/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
                return localize.era(era, {
                    width: 'abbreviated'
                });
            // A, B
            case 'GGGGG':
                return localize.era(era, {
                    width: 'narrow'
                });
            // Anno Domini, Before Christ
            case 'GGGG':
            default:
                return localize.era(era, {
                    width: 'wide'
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === 'yo') {
            var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: 'year'
            });
        }
        return _indexJsDefault6.default.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        var signedWeekYear = _indexJsDefault4.default(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year
        if (token === 'YY') {
            var twoDigitYear = weekYear % 100;
            return _indexJsDefault5.default(twoDigitYear, 2);
        } // Ordinal number
        if (token === 'Yo') return localize.ordinalNumber(weekYear, {
            unit: 'year'
        });
         // Padding
        return _indexJsDefault5.default(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        var isoWeekYear = _indexJsDefault2.default(date); // Padding
        return _indexJsDefault5.default(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        var year = date.getUTCFullYear();
        return _indexJsDefault5.default(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'Q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'QQ':
                return _indexJsDefault5.default(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'Qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'QQQ':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'QQQQQ':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // 1st quarter, 2nd quarter, ...
            case 'QQQQ':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'qq':
                return _indexJsDefault5.default(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'qqq':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'qqqqq':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // 1st quarter, 2nd quarter, ...
            case 'qqqq':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case 'M':
            case 'MM':
                return _indexJsDefault6.default.M(date, token);
            // 1st, 2nd, ..., 12th
            case 'Mo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'MMM':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // J, F, ..., D
            case 'MMMMM':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // January, February, ..., December
            case 'MMMM':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case 'L':
                return String(month + 1);
            // 01, 02, ..., 12
            case 'LL':
                return _indexJsDefault5.default(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case 'Lo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'LLL':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // J, F, ..., D
            case 'LLLLL':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // January, February, ..., December
            case 'LLLL':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        var week = _indexJsDefault3.default(date, options);
        if (token === 'wo') return localize.ordinalNumber(week, {
            unit: 'week'
        });
        return _indexJsDefault5.default(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        var isoWeek = _indexJsDefault1.default(date);
        if (token === 'Io') return localize.ordinalNumber(isoWeek, {
            unit: 'week'
        });
        return _indexJsDefault5.default(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === 'do') return localize.ordinalNumber(date.getUTCDate(), {
            unit: 'date'
        });
        return _indexJsDefault6.default.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        var dayOfYear = _indexJsDefault.default(date);
        if (token === 'Do') return localize.ordinalNumber(dayOfYear, {
            unit: 'dayOfYear'
        });
        return _indexJsDefault5.default(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'EEEEE':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'EEEEEE':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'EEEE':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case 'e':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'ee':
                return _indexJsDefault5.default(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case 'eo':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'eee':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'eeeee':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'eeeeee':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'eeee':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case 'c':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'cc':
                return _indexJsDefault5.default(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case 'co':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'ccc':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // T
            case 'ccccc':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // Tu
            case 'cccccc':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'standalone'
                });
            // Tuesday
            case 'cccc':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case 'i':
                return String(isoDayOfWeek);
            // 02
            case 'ii':
                return _indexJsDefault5.default(isoDayOfWeek, token.length);
            // 2nd
            case 'io':
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: 'day'
                });
            // Tue
            case 'iii':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'iiiii':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'iiiiii':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'iiii':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'aaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'aaaaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'aaaa':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'b':
            case 'bb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'bbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'bbbbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'bbbb':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case 'B':
            case 'BB':
            case 'BBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'BBBBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'BBBB':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === 'ho') {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return _indexJsDefault6.default.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === 'Ho') return localize.ordinalNumber(date.getUTCHours(), {
            unit: 'hour'
        });
        return _indexJsDefault6.default.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === 'Ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return _indexJsDefault5.default(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === 'ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return _indexJsDefault5.default(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === 'mo') return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: 'minute'
        });
        return _indexJsDefault6.default.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === 'so') return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: 'second'
        });
        return _indexJsDefault6.default.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return _indexJsDefault6.default.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return 'Z';
        switch(token){
            // Hours and optional minutes
            case 'X':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case 'XXXX':
            case 'XX':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case 'XXXXX':
            case 'XXX':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case 'x':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case 'xxxx':
            case 'xx':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case 'xxxxx':
            case 'xxx':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'O':
            case 'OO':
            case 'OOO':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'OOOO':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'z':
            case 'zz':
            case 'zzz':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'zzzz':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return _indexJsDefault5.default(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return _indexJsDefault5.default(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + _indexJsDefault5.default(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? '-' : '+';
        return sign + _indexJsDefault5.default(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = _indexJsDefault5.default(Math.floor(absOffset / 60), 2);
    var minutes = _indexJsDefault5.default(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
exports.default = formatters;

},{"../../../_lib/getUTCDayOfYear/index.js":"cqbpM","../../../_lib/getUTCISOWeek/index.js":"gTavm","../../../_lib/getUTCISOWeekYear/index.js":"1rXIh","../../../_lib/getUTCWeek/index.js":"bqgW8","../../../_lib/getUTCWeekYear/index.js":"2N3Dh","../../addLeadingZeros/index.js":"80lWC","../lightFormatters/index.js":"1lEF6","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cqbpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
function getUTCDayOfYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
exports.default = getUTCDayOfYear;

},{"../../toDate/index.js":"b8BXL","../requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gTavm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
function getUTCISOWeek(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date).getTime() - _indexJsDefault2.default(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCISOWeek;

},{"../../toDate/index.js":"b8BXL","../startOfUTCISOWeek/index.js":"4PfYL","../startOfUTCISOWeekYear/index.js":"gHihu","../requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4PfYL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfUTCISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var weekStartsOn = 1;
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCISOWeek;

},{"../../toDate/index.js":"b8BXL","../requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gHihu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var year = _indexJsDefault.default(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(fourthOfJanuary);
    return date;
}
exports.default = startOfUTCISOWeekYear;

},{"../getUTCISOWeekYear/index.js":"1rXIh","../startOfUTCISOWeek/index.js":"4PfYL","../requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1rXIh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeek/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getUTCISOWeekYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault2.default(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault2.default(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCISOWeekYear;

},{"../../toDate/index.js":"b8BXL","../requiredArgs/index.js":"1Hz00","../startOfUTCISOWeek/index.js":"4PfYL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bqgW8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
function getUTCWeek(dirtyDate, options) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date, options).getTime() - _indexJsDefault2.default(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCWeek;

},{"../../toDate/index.js":"b8BXL","../startOfUTCWeek/index.js":"cfPXI","../startOfUTCWeekYear/index.js":"awtLj","../requiredArgs/index.js":"1Hz00","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cfPXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCWeek(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault2.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault2.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCWeek;

},{"../../toDate/index.js":"b8BXL","../requiredArgs/index.js":"1Hz00","../toInteger/index.js":"6AyxE","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"awtLj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate);
    var year = _indexJsDefault.default(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = _indexJsDefault2.default(firstWeek, dirtyOptions);
    return date;
}
exports.default = startOfUTCWeekYear;

},{"../getUTCWeekYear/index.js":"2N3Dh","../requiredArgs/index.js":"1Hz00","../startOfUTCWeek/index.js":"cfPXI","../toInteger/index.js":"6AyxE","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2N3Dh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getUTCWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault2.default(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault2.default(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCWeekYear;

},{"../../toDate/index.js":"b8BXL","../requiredArgs/index.js":"1Hz00","../startOfUTCWeek/index.js":"cfPXI","../toInteger/index.js":"6AyxE","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"80lWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = '0' + output;
    return sign + output;
}
exports.default = addLeadingZeros;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1lEF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../addLeadingZeros/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return _indexJsDefault.default(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function(date, token) {
        var month = date.getUTCMonth();
        return token === 'M' ? String(month + 1) : _indexJsDefault.default(month + 1, 2);
    },
    // Day of the month
    d: function(date, token) {
        return _indexJsDefault.default(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return dayPeriodEnumValue.toUpperCase();
            case 'aaa':
                return dayPeriodEnumValue;
            case 'aaaaa':
                return dayPeriodEnumValue[0];
            case 'aaaa':
            default:
                return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
        }
    },
    // Hour [1-12]
    h: function(date, token) {
        return _indexJsDefault.default(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function(date, token) {
        return _indexJsDefault.default(date.getUTCHours(), token.length);
    },
    // Minute
    m: function(date, token) {
        return _indexJsDefault.default(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function(date, token) {
        return _indexJsDefault.default(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return _indexJsDefault.default(fractionalSeconds, token.length);
    }
};
exports.default = formatters;

},{"../../addLeadingZeros/index.js":"80lWC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9mTl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'P':
            return formatLong.date({
                width: 'short'
            });
        case 'PP':
            return formatLong.date({
                width: 'medium'
            });
        case 'PPP':
            return formatLong.date({
                width: 'long'
            });
        case 'PPPP':
        default:
            return formatLong.date({
                width: 'full'
            });
    }
}
function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'p':
            return formatLong.time({
                width: 'short'
            });
        case 'pp':
            return formatLong.time({
                width: 'medium'
            });
        case 'ppp':
            return formatLong.time({
                width: 'long'
            });
        case 'pppp':
        default:
            return formatLong.time({
                width: 'full'
            });
    }
}
function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case 'P':
            dateTimeFormat = formatLong.dateTime({
                width: 'short'
            });
            break;
        case 'PP':
            dateTimeFormat = formatLong.dateTime({
                width: 'medium'
            });
            break;
        case 'PPP':
            dateTimeFormat = formatLong.dateTime({
                width: 'long'
            });
            break;
        case 'PPPP':
        default:
            dateTimeFormat = formatLong.dateTime({
                width: 'full'
            });
            break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
exports.default = longFormatters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"f9apB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
exports.default = getTimezoneOffsetInMilliseconds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cRvc7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken
);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken
);
parcelHelpers.export(exports, "throwProtectedError", ()=>throwProtectedError
);
var protectedDayOfYearTokens = [
    'D',
    'DD'
];
var protectedWeekYearTokens = [
    'YY',
    'YYYY'
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === 'YYYY') throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'YY') throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'D') throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'DD') throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8msh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek
);
parcelHelpers.export(exports, "maxTime", ()=>maxTime
);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute
);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour
);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond
);
parcelHelpers.export(exports, "minTime", ()=>minTime
);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour
);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter
);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear
);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear
);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour
);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute
);
var daysInWeek = 7;
var maxTime = Math.pow(10, 8) * 86400000;
var millisecondsInMinute = 60000;
var millisecondsInHour = 3600000;
var millisecondsInSecond = 1000;
var minTime = -maxTime;
var minutesInHour = 60;
var monthsInQuarter = 3;
var monthsInYear = 12;
var quartersInYear = 4;
var secondsInHour = 3600;
var secondsInMinute = 60;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["kzhsr","aKvBm"], "aKvBm", "parcelRequire6143")

