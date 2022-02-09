
const a = Date.now()
console.log('start app.js time is: ', a)
global.tttt = a;
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')