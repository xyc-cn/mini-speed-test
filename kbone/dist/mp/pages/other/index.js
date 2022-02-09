const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~home~other.js')(window, document);require('../../common/vendors~other.js')(window, document);require('../../common/default~home~other.js')(window, document);require('../../common/other.js')(window, document)}

Page({
    ...getBaseConfig(mp, config, init),
    
    
    
})
