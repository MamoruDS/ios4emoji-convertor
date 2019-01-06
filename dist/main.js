'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fs = require('fs');

function ios4emojiConvertor() {
    var convertObj = undefined;
}

/**
 * ios4emojiConvertor.setConvertLib
 * Set a convertLib to ios4emojiConvertor.
 * @param {String=} [convertLib='defaultLib'] - ConvertLib object or the path of convertLib file.
 */
ios4emojiConvertor.setConvertLib = function (convertLib) {
    convertLib = convertLib ? convertLib : __dirname.replace(/\/dist$/g, '/lib/defaultLib.json');
    if (typeof convertLib == 'string') {
        if (fs.existsSync(convertLib)) {
            convertLib = fs.readFileSync(convertLib, 'utf8');
            try {
                convertLib = JSON.parse(convertLib);
            } catch (err) {
                convertLib = {};
            }
        }
    }
    if ((typeof convertLib === 'undefined' ? 'undefined' : _typeof(convertLib)) == 'object') {
        ios4emojiConvertor.convertObj = convertLib;
    }
};

/**
 * ios4emojiConvertor.convert2EmojiCurrent
 * Convert ios4emoji to current version emoji in string.
 * @param {String} input - The string you want to convert.
 * @returns {String} The string ouput after convert.
 */
ios4emojiConvertor.convert2EmojiCurrent = function (input) {
    if (!ios4emojiConvertor.convertObj) {
        console.error('can not load convert lib');
    } else {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(ios4emojiConvertor.convertObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                input = input.replace(new RegExp(key, 'ug'), nullObjProp(ios4emojiConvertor.convertObj, [key], ''));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return input;
};

/**
 * nullObjProp
 * Get property of object safety.
 * @param {Object} obj 
 * @param {String[]} [prop=[]] - If you want obj.a.b.c, prop should be \['a','b','c'\]
 * @param {*=} [undefinedReturn=''] - If failed to get property from 'obj', this will be returned
 * - optional param
 * - default value: ''
 * @returns {*}
 */
var nullObjProp = function nullObjProp(obj) {
    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var undefinedReturn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    for (var i = 0; i < prop.length; i++) {
        obj = obj[prop[i]];
        if (obj === undefined) return undefinedReturn;
    }
    return obj;
};

ios4emojiConvertor.setConvertLib();
module.exports = ios4emojiConvertor;