const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'
let chalk

if (!isBrowser) chalk = require('chalk')

nodeColors = {

    p: (str) => { nodePrint('#C16DFF', 'hex', str) },
    b: (str) => { nodePrint('#7B8DFF', 'hex', str) },
    c: (str) => { nodePrint('#7BE9FF', 'hex', str) },
    g: (str) => { nodePrint('#31D80C', 'hex', str) },
    y: (str) => { nodePrint('#E4D600', 'hex', str) },
    o: (str) => { nodePrint('#E86400', 'hex', str) },
    r: (str) => { nodePrint('#F00000', 'hex', str) },

    ph: (str) => { nodePrint('#C16DFF', 'hex', makeHeader(str)) },
    bh: (str) => { nodePrint('#7B8DFF', 'hex', makeHeader(str)) },
    ch: (str) => { nodePrint('#7BE9FF', 'hex', makeHeader(str)) },
    gh: (str) => { nodePrint('#31D80C', 'hex', makeHeader(str)) },
    yh: (str) => { nodePrint('#E4D600', 'hex', makeHeader(str)) },
    oh: (str) => { nodePrint('#E86400', 'hex', makeHeader(str)) },
    rh: (str) => { nodePrint('#F00000', 'hex', makeHeader(str)) },

    pb: (str) => { nodePrint('#5E00A0', 'bgHex', str) },
    bb: (str) => { nodePrint('#002BFF', 'bgHex', str) },
    cb: (str) => { nodePrint('#00A9B2', 'bgHex', str) },
    gb: (str) => { nodePrint('#177F00', 'bgHex', str) },
    yb: (str) => { nodePrint('#A39800', 'bgHex', str) },
    ob: (str) => { nodePrint('#E86400', 'bgHex', str) },
    rb: (str) => { nodePrint('#F00000', 'bgHex', str) },

    pbh: (str) => { nodePrint('#5E00A0', 'bgHex', makeHeader(str)) },
    bbh: (str) => { nodePrint('#002BFF', 'bgHex', makeHeader(str)) },
    cbh: (str) => { nodePrint('#00A9B2', 'bgHex', makeHeader(str)) },
    gbh: (str) => { nodePrint('#177F00', 'bgHex', makeHeader(str)) },
    ybh: (str) => { nodePrint('#A39800', 'bgHex', makeHeader(str)) },
    obh: (str) => { nodePrint('#E86400', 'bgHex', makeHeader(str)) },
    rbh: (str) => { nodePrint('#F00000', 'bgHex', makeHeader(str)) }
}

function nodePrint(color, type, str) {
    if (typeof str === 'object') str = JSON.stringify(str, null, 2)
    console.log(chalk[type](color)(str))
}

browserColors = {

    p(str) { this.browserPrint(str, 'color: #8a2be2;') },
    b(str) { this.browserPrint(str, 'color: blue;') },
    c(str) { this.browserPrint(str, 'color: #00bbcc;') },
    g(str) { this.browserPrint(str, 'color: green;') },
    y(str) { this.browserPrint(str, 'color: #ffcc00;') },
    o(str) { this.browserPrint(str, 'color: #ffa500;') },
    r(str) { this.browserPrint(str, 'color: red;') },

    ph(str) { this.p(makeHeader(str)); },
    bh(str) { this.b(makeHeader(str)); },
    ch(str) { this.c(makeHeader(str)); },
    gh(str) { this.g(makeHeader(str)); },
    yh(str) { this.y(makeHeader(str)); },
    oh(str) { this.o(makeHeader(str)); },
    rh(str) { this.r(makeHeader(str)); },

    pb(str) { this.browserPrint(str, 'background: #8a2be2; color: white; padding: 3px;') },
    bb(str) { this.browserPrint(str, 'background: blue; color: white; padding: 3px;') },
    cb(str) { this.browserPrint(str, 'background: #00bbcc; color: white; padding: 3px;') },
    gb(str) { this.browserPrint(str, 'background: green; color: white; padding: 3px;') },
    yb(str) { this.browserPrint(str, 'background: #ffcc00; color: black; padding: 3px;') },
    ob(str) { this.browserPrint(str, 'background: #ffa500; color: white; padding: 3px;') },
    rb(str) { this.browserPrint(str, 'background: red; color: white; padding: 3px;') },

    pbh(str) { this.pb(makeHeader(str)); },
    bbh(str) { this.bb(makeHeader(str)); },
    cbh(str) { this.cb(makeHeader(str)); },
    gbh(str) { this.gb(makeHeader(str)); },
    ybh(str) { this.yb(makeHeader(str)); },
    obh(str) { this.ob(makeHeader(str)); },
    rbh(str) { this.rb(makeHeader(str)); }

}

function browserPrint(str, css) {
    if (typeof str === 'object') str = JSON.stringify(str, null, 2)
    console.log('%c ' + str + ' ', css)
}

function makeHeader(str) { return '======== ' + str + ' ========' }

module.exports = isBrowser ? browserColors : nodeColors
