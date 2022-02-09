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
var fakeWindow = {};var fakeDocument = {};(function(window, document) {})(fakeWindow, fakeDocument);var appConfig = fakeWindow.appOptions || {};

const LIFE_CYCLE_METHODS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange']
const extraConfig = {}
for (const key in appConfig) {
    if (LIFE_CYCLE_METHODS.indexOf(key) === -1) extraConfig[key] = appConfig[key]
}

App({
    onLaunch(options) {
        if (appConfig.onLaunch) appConfig.onLaunch.call(this, options)
    },
    onShow(options) {
        if (appConfig.onShow) appConfig.onShow.call(this, options)
    },
    onHide() {
        if (appConfig.onHide) appConfig.onHide.call(this)
    },
    onError(err) {
        // 支持 window 的 error 事件
        const pages = getCurrentPages() || []
        const currentPage = pages[pages.length - 1]
        if (currentPage && currentPage.window) {
            currentPage.window.$$trigger('error', {
                event: err,
            })
        }

        if (appConfig.onError) appConfig.onError.call(this, err)
    },
    onPageNotFound(options) {
        if (appConfig.onPageNotFound) appConfig.onPageNotFound.call(this, options)
    },
    onUnhandledRejection(options) {
        const pages = getCurrentPages() || []
        const currentPage = pages[pages.length - 1]
        if (currentPage && currentPage.window) {
            const event = new currentPage.window.Event({
                timeStamp: currentPage.window.performance.now(),
                touches: [],
                changedTouches: [],
                name: 'unhandledrejection',
                target: currentPage.window,
                eventPhase: currentPage.window.Event.AT_TARGET,
                $$extra: {
                    promise: options.promise,
                    reason: options.reason,
                }
            })
            currentPage.window.$$trigger('unhandledrejection', {event})
        }

        if (appConfig.onUnhandledRejection) appConfig.onUnhandledRejection.call(this, options)
    },
    onThemeChange(options) {
        if (appConfig.onThemeChange) appConfig.onThemeChange.call(this, options)
    },

    ...extraConfig,
})
