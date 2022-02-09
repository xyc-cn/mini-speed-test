const a = Date.now()
console.log('start app.js time is: ', a)
global.tttt = a;
const performance = wx.getPerformance()
const observer = performance.createObserver((entryList) => {
    entryList.getEntries().forEach((v)=>{
        console.log('name: ', v.name, 'coast: ', v.duration)
    })
})
observer.observe({ entryTypes: ['render', 'script', 'navigation'] })
var __CML__GLOBAL = require('/static/js/manifest.js')
__CML__GLOBAL.App = App;
__CML__GLOBAL.startTT = a;
require('/static/js/common.js')
require('/static/js/app.js')()
