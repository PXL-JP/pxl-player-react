'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var PxlPlayer = function (_a) {
    var options = _a.options, className = _a.className;
    var element = React.useRef(null);
    var _b = React.useState(false), loaded = _b[0], isLoaded = _b[1];
    React.useEffect(function () {
        loadPlayerScript(function () {
            isLoaded(true);
        });
    });
    React.useEffect(function () {
        if (loaded) {
            if (!element.current) {
                return;
            }
            var data = __assign(__assign({}, options), { rootElement: element.current });
            window.initPxlPlayer(data);
        }
    }, [loaded]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { style: { width: '100%', height: '100%' }, className: className, ref: element })));
};
var loadPlayerScript = function (callback) {
    var existingScript = document.getElementById('pxl-player-script');
    if (!existingScript) {
        var script = document.createElement('script');
        script.src = 'https://player.pxl.jp/l/en-US/player.js';
        script.async = false;
        script.id = 'pxl-player-script';
        document.body.appendChild(script);
        script.onload = function () {
            if (callback) {
                callback();
            }
        };
    }
    if (existingScript && callback) {
        callback();
    }
};

exports.PxlPlayer = PxlPlayer;
//# sourceMappingURL=main.js.map