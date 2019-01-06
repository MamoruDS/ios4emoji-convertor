# ios4emoji-convertor
> Convert iOS 4.0 emoji to current version emoji  

[![](https://img.shields.io/npm/v/ios4emoji-convertor.svg?style=flat-square)](https://www.npmjs.com/package/ios4emoji-convertor)

iOS 4 emoji has a huge difference on `Unicode` with current version emoji. This project aims to solve coverting problem on old version of emoji.😉  

[More info about iOS 4 Emoji](https://emojipedia.org/apple/ios-4.0/)

## Installation
```shell
npm i ios4emoji-convertor
```

## Example
```javascript
const ios4emoji = require('ios4emoji-convertor')

const exampleStr = 'I love  ~'

console.log(ios4emoji.convert2EmojiCurrent(exampleStr))
// => I love 🍺 ~

ios4emoji.setConvertLib('customLib.json')

console.log(ios4emoji.convert2EmojiCurrent(exampleStr))
// => I love 🍵 ~
```

## License
MIT © MamoruDS