const ios4emoji = require('../dist/main.js')

const exampleStr = 'I love  ~'

console.log(ios4emoji.convert2EmojiCurrent(exampleStr))

ios4emoji.setConvertLib('customLib.json')

console.log(ios4emoji.convert2EmojiCurrent(exampleStr))