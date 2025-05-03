// Dynamic import for chalk
let chalk
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'
// Use dynamic import for chalk in Node.js environment
async function loadChalk() {
  if (!isBrowser) {
    chalk = (await import('chalk')).default
  }
}
// Initialize chalk
loadChalk()


const nodeColors = {

    p: (...args) => { nodePrint('#C16DFF', 'hex', formatArgs(args)).catch(console.error) },
    b: (...args) => { nodePrint('#7B8DFF', 'hex', formatArgs(args)).catch(console.error) },
    c: (...args) => { nodePrint('#7BE9FF', 'hex', formatArgs(args)).catch(console.error) },
    g: (...args) => { nodePrint('#31D80C', 'hex', formatArgs(args)).catch(console.error) },
    y: (...args) => { nodePrint('#E4D600', 'hex', formatArgs(args)).catch(console.error) },
    o: (...args) => { nodePrint('#E86400', 'hex', formatArgs(args)).catch(console.error) },
    m: (...args) => { nodePrint('#f533b7', 'hex', formatArgs(args)).catch(console.error) },
    r: (...args) => { nodePrint('#F00000', 'hex', formatArgs(args)).catch(console.error) },

    ph: (...args) => { nodePrint('#C16DFF', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    bh: (...args) => { nodePrint('#7B8DFF', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    ch: (...args) => { nodePrint('#7BE9FF', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    gh: (...args) => { nodePrint('#31D80C', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    yh: (...args) => { nodePrint('#E4D600', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    oh: (...args) => { nodePrint('#E86400', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    mh: (...args) => { nodePrint('#f533b7', 'hex', makeHeader(formatArgs(args))).catch(console.error) },
    rh: (...args) => { nodePrint('#F00000', 'hex', makeHeader(formatArgs(args))).catch(console.error) },

    pb: (...args) => { nodePrint('#5E00A0', 'bgHex', formatArgs(args)).catch(console.error) },
    bb: (...args) => { nodePrint('#002BFF', 'bgHex', formatArgs(args)).catch(console.error) },
    cb: (...args) => { nodePrint('#00A9B2', 'bgHex', formatArgs(args)).catch(console.error) },
    gb: (...args) => { nodePrint('#177F00', 'bgHex', formatArgs(args)).catch(console.error) },
    yb: (...args) => { nodePrint('#A39800', 'bgHex', formatArgs(args)).catch(console.error) },
    ob: (...args) => { nodePrint('#E86400', 'bgHex', formatArgs(args)).catch(console.error) },
    mb: (...args) => { nodePrint('#f533b7', 'bgHex', formatArgs(args)).catch(console.error) },
    rb: (...args) => { nodePrint('#F00000', 'bgHex', formatArgs(args)).catch(console.error) },

    pbh: (...args) => { nodePrint('#5E00A0', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    bbh: (...args) => { nodePrint('#002BFF', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    cbh: (...args) => { nodePrint('#00A9B2', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    gbh: (...args) => { nodePrint('#177F00', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    ybh: (...args) => { nodePrint('#A39800', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    obh: (...args) => { nodePrint('#E86400', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    mbh: (...args) => { nodePrint('#f533b7', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) },
    rbh: (...args) => { nodePrint('#F00000', 'bgHex', makeHeader(formatArgs(args))).catch(console.error) }
}

async function nodePrint(color, type, str) {
    // Make sure chalk is loaded
    if (!chalk) await loadChalk()
    console.log(chalk[type](color)(pretty(str)))
}

const browserColors = {

    p(...args) { browserPrint(formatArgs(args), 'color: #a875d9;') },
    b(...args) { browserPrint(formatArgs(args), 'color: #6485cc;') },
    c(...args) { browserPrint(formatArgs(args), 'color: #00bbcc;') },
    g(...args) { browserPrint(formatArgs(args), 'color: green;') },
    y(...args) { browserPrint(formatArgs(args), 'color: #ffcc00;') },
    o(...args) { browserPrint(formatArgs(args), 'color: #ffa500;') },
    m(...args) { browserPrint(formatArgs(args), 'color: #f533b7;') },
    r(...args) { browserPrint(formatArgs(args), 'color: red;') },

    ph(...args) { this.p(makeHeader(formatArgs(args))); },
    bh(...args) { this.b(makeHeader(formatArgs(args))); },
    ch(...args) { this.c(makeHeader(formatArgs(args))); },
    gh(...args) { this.g(makeHeader(formatArgs(args))); },
    yh(...args) { this.y(makeHeader(formatArgs(args))); },
    oh(...args) { this.o(makeHeader(formatArgs(args))); },
    mh(...args) { this.m(makeHeader(formatArgs(args))); },
    rh(...args) { this.r(makeHeader(formatArgs(args))); },

    pb(...args) { browserPrint(formatArgs(args), 'background: #8a2be2; color: white; padding: 3px;') },
    bb(...args) { browserPrint(formatArgs(args), 'background: blue; color: white; padding: 3px;') },
    cb(...args) { browserPrint(formatArgs(args), 'background: #00bbcc; color: white; padding: 3px;') },
    gb(...args) { browserPrint(formatArgs(args), 'background: green; color: white; padding: 3px;') },
    yb(...args) { browserPrint(formatArgs(args), 'background: #ffcc00; color: black; padding: 3px;') },
    ob(...args) { browserPrint(formatArgs(args), 'background: #ffa500; color: white; padding: 3px;') },
    mb(...args) { browserPrint(formatArgs(args), 'background: #f533b7; color: white; padding: 3px;') },
    rb(...args) { browserPrint(formatArgs(args), 'background: red; color: white; padding: 3px;') },

    pbh(...args) { this.pb(makeHeader(formatArgs(args))); },
    bbh(...args) { this.bb(makeHeader(formatArgs(args))); },
    cbh(...args) { this.cb(makeHeader(formatArgs(args))); },
    gbh(...args) { this.gb(makeHeader(formatArgs(args))); },
    ybh(...args) { this.yb(makeHeader(formatArgs(args))); },
    obh(...args) { this.ob(makeHeader(formatArgs(args))); },
    mbh(...args) { this.mb(makeHeader(formatArgs(args))); },
    rbh(...args) { this.rb(makeHeader(formatArgs(args))); }

}

function browserPrint(str, css) {
    console.log('%c ' + pretty(str) + ' ', css)
}

function pretty(str) {
    if (typeof str === 'object') str = JSON.stringify(str, null, 2)
    return str
}

function formatArgs(args) {
    return args.map(arg => pretty(arg)).join(' ')
}

function makeHeader(str) { return '======== ' + pretty(str) + ' ========' }

module.exports = isBrowser ? browserColors : nodeColors
