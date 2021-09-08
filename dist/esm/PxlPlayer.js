var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useRef } from 'react';
import { initPxlPlayer } from 'pxl-player';
export var PxlPlayer = function (_a) {
    var options = _a.options, className = _a.className;
    var element = useRef(null);
    useEffect(function () {
        if (!element.current) {
            return;
        }
        var data = __assign(__assign({}, options), { rootElement: element.current });
        initPxlPlayer(data);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { width: '100%', height: '100%' }, className: className, ref: element })));
};
