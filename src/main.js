const fs = require('fs')

function ios4emojiConvertor() {
    let convertObj = undefined
}

/**
 * ios4emojiConvertor.setConvertLib
 * Set a convertLib to ios4emojiConvertor.
 * @param {String=} [convertLib='defaultLib'] - ConvertLib object or the path of convertLib file.
 */
ios4emojiConvertor.setConvertLib = (convertLib) => {
    convertLib = convertLib ? convertLib : __dirname.replace(/\/dist$/g, '/lib/defaultLib.json')
    if (typeof convertLib == 'string') {
        if (fs.existsSync(convertLib)) {
            convertLib = fs.readFileSync(convertLib, 'utf8')
            try {
                convertLib = JSON.parse(convertLib)
            } catch (err) {
                convertLib = {}
            }
        }
    }
    if (typeof convertLib == 'object') {
        ios4emojiConvertor.convertObj = convertLib
    }
}

/**
 * ios4emojiConvertor.convert2EmojiCurrent
 * Convert ios4emoji to current version emoji in string.
 * @param {String} input - The string you want to convert.
 * @returns {String} The string ouput after convert.
 */
ios4emojiConvertor.convert2EmojiCurrent = (input) => {
    if (!ios4emojiConvertor.convertObj) {
        console.error('can not load convert lib')
    } else {
        for (let key of Object.keys(ios4emojiConvertor.convertObj)) {
            input = input.replace(new RegExp(key, 'ug'), nullObjProp(ios4emojiConvertor.convertObj, [key], ''))
        }
    }
    return input
}

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
const nullObjProp = (obj, prop = [], undefinedReturn = '') => {
    for (let i = 0; i < prop.length; i++) {
        obj = obj[prop[i]]
        if (obj === undefined) return undefinedReturn
    }
    return obj
}

ios4emojiConvertor.setConvertLib()
module.exports = ios4emojiConvertor