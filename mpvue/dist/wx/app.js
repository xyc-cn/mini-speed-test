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
require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],{M93x:function(o,e,n){"use strict";var t=n("Mw+1");var a=function(o){n("fHfK")},l=n("ybqe")(t.a,null,a,null,null);e.a=l.exports},"Mw+1":function(o,e,n){"use strict";e.a={created:function(){var o=void 0;"my"===global.mpvuePlatform?((o=global.mpvue.getStorageSync({key:"logs"}).data||[]).unshift(Date.now()),global.mpvue.setStorageSync({key:"logs",data:o})):((o=global.mpvue.getStorageSync("logs")||[]).unshift(Date.now()),global.mpvue.setStorageSync("logs",o))},log:function(){console.log("log at:"+Date.now())}}},NHnr:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n("5nAL"),a=n.n(t),l=n("M93x");a.a.config.productionTip=!1,l.a.mpType="app",new a.a(l.a).$mount()},fHfK:function(o,e){}},["NHnr"]);