// Fix chalk import issue
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'
let chalk

// Use a simple color fallback while waiting for chalk to load
chalk = {
  hex: (color) => (text) => text,
  bgHex: (color) => (text) => text
}

const nodeColors = {

    p: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#C16DFF', 'hex', formattedStr)
        }
        nodePrint('#C16DFF', 'hex', formatArgs(args))
    },
    b: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#7B8DFF', 'hex', formattedStr)
        }
        nodePrint('#7B8DFF', 'hex', formatArgs(args))
    },
    c: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#7BE9FF', 'hex', formattedStr)
        }
        nodePrint('#7BE9FF', 'hex', formatArgs(args))
    },
    g: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#31D80C', 'hex', formattedStr)
        }
        nodePrint('#31D80C', 'hex', formatArgs(args))
    },
    y: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#E4D600', 'hex', formattedStr)
        }
        nodePrint('#E4D600', 'hex', formatArgs(args))
    },
    o: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#E86400', 'hex', formattedStr)
        }
        nodePrint('#E86400', 'hex', formatArgs(args))
    },
    m: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#f533b7', 'hex', formattedStr)
        }
        nodePrint('#f533b7', 'hex', formatArgs(args))
    },
    r: (...args) => {
        const returnString = args[args.length - 1] === true
        if (returnString) {
            args = args.slice(0, -1)
            const formattedStr = formatArgs(args)
            return colorizeText('#F00000', 'hex', formattedStr)
        }
        nodePrint('#F00000', 'hex', formatArgs(args))
    },

    ph: (...args) => { nodePrint('#C16DFF', 'hex', makeHeader(formatArgs(args))) },
    bh: (...args) => { nodePrint('#7B8DFF', 'hex', makeHeader(formatArgs(args))) },
    ch: (...args) => { nodePrint('#7BE9FF', 'hex', makeHeader(formatArgs(args))) },
    gh: (...args) => { nodePrint('#31D80C', 'hex', makeHeader(formatArgs(args))) },
    yh: (...args) => { nodePrint('#E4D600', 'hex', makeHeader(formatArgs(args))) },
    oh: (...args) => { nodePrint('#E86400', 'hex', makeHeader(formatArgs(args))) },
    mh: (...args) => { nodePrint('#f533b7', 'hex', makeHeader(formatArgs(args))) },
    rh: (...args) => { nodePrint('#F00000', 'hex', makeHeader(formatArgs(args))) },

    pb: (...args) => { nodePrint('#5E00A0', 'bgHex', formatArgs(args)) },
    bb: (...args) => { nodePrint('#002BFF', 'bgHex', formatArgs(args)) },
    cb: (...args) => { nodePrint('#00A9B2', 'bgHex', formatArgs(args)) },
    gb: (...args) => { nodePrint('#177F00', 'bgHex', formatArgs(args)) },
    yb: (...args) => { nodePrint('#A39800', 'bgHex', formatArgs(args)) },
    ob: (...args) => { nodePrint('#E86400', 'bgHex', formatArgs(args)) },
    mb: (...args) => { nodePrint('#f533b7', 'bgHex', formatArgs(args)) },
    rb: (...args) => { nodePrint('#F00000', 'bgHex', formatArgs(args)) },

    pbh: (...args) => { nodePrint('#5E00A0', 'bgHex', makeHeader(formatArgs(args))) },
    bbh: (...args) => { nodePrint('#002BFF', 'bgHex', makeHeader(formatArgs(args))) },
    cbh: (...args) => { nodePrint('#00A9B2', 'bgHex', makeHeader(formatArgs(args))) },
    gbh: (...args) => { nodePrint('#177F00', 'bgHex', makeHeader(formatArgs(args))) },
    ybh: (...args) => { nodePrint('#A39800', 'bgHex', makeHeader(formatArgs(args))) },
    obh: (...args) => { nodePrint('#E86400', 'bgHex', makeHeader(formatArgs(args))) },
    mbh: (...args) => { nodePrint('#f533b7', 'bgHex', makeHeader(formatArgs(args))) },
    rbh: (...args) => { nodePrint('#F00000', 'bgHex', makeHeader(formatArgs(args))) },
    async l(...args) {
        // Handle multiple arguments like console.log
        if (args.length === 0) return

        // Check if any of the arguments contain color tags
        const hasColorTags = args.some(arg =>
            typeof arg === 'string' && arg.match(/#[rgbycpom]\s/)
        )

        // If no color tags, just join and print normally
        if (!hasColorTags) {
            console.log(...args)
            return
        }

        // Process each argument for color tags
        let combinedStr = ''
        for (let arg of args) {
            // Convert non-string arguments to string
            if (typeof arg !== 'string') {
                arg = pretty(arg)
            }

            // Add a space between arguments
            if (combinedStr && !combinedStr.endsWith(' ')) {
                if (typeof arg === 'string' && arg.startsWith(' ')) {
                    // Don't add extra space if arg already starts with space
                } else {
                    combinedStr += ' '
                }
            }

            combinedStr += arg
        }

        // Parse the combined string for color tags (#x)
        const parts = combinedStr.split(/(#[rgbycpom]\s)/)
        const segments = []

        let currentColor = null
        let buffer = ''

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]

            if (part.match(/^#[rgbycpom]\s$/)) {
                // If we have accumulated text with a color, add it to segments
                if (buffer) {
                    segments.push({ text: buffer, color: currentColor })
                    buffer = ''
                }
                // Set new current color
                currentColor = part.trim().substring(1)
            } else if (part) {
                // Accumulate text
                buffer += part
            }
        }

        // Add any remaining text
        if (buffer) {
            segments.push({ text: buffer, color: currentColor })
        }

        // Process each segment
        let output = ''
        for (const segment of segments) {
            if (segment.color) {
                // Use the corresponding color function directly
                const coloredText = await colorizeText(getColorHex(segment.color), 'hex', segment.text)
                output += coloredText
            } else {
                output += segment.text
            }
        }

        // Print the final output
        console.log(output)
    }
}

async function nodePrint(color, type, str) {
    // Dynamically import chalk if not in browser and chalk is not fully loaded
    if (!isBrowser && (!chalk.hex || typeof chalk.hex !== 'function' || chalk.hex.toString().includes('=> text'))) {
        try {
            const chalkModule = await import('chalk')
            chalk = chalkModule.default
        } catch (err) {
            console.error('Failed to load chalk module. Colors will not be displayed.')
            console.log(pretty(str))
            return
        }
    }
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
    rbh(...args) { this.rb(makeHeader(formatArgs(args))); },
    l(...args) {
        // Handle multiple arguments like console.log
        if (args.length === 0) return

        // Check if any of the arguments contain color tags
        const hasColorTags = args.some(arg =>
            typeof arg === 'string' && arg.match(/#[rgbycpom]\s/)
        )

        // If no color tags, just join and print normally
        if (!hasColorTags) {
            console.log(...args)
            return
        }

        // Process each argument for color tags
        let combinedStr = ''
        for (let arg of args) {
            // Convert non-string arguments to string
            if (typeof arg !== 'string') {
                arg = pretty(arg)
            }

            // Add a space between arguments
            if (combinedStr && !combinedStr.endsWith(' ')) {
                if (typeof arg === 'string' && arg.startsWith(' ')) {
                    // Don't add extra space if arg already starts with space
                } else {
                    combinedStr += ' '
                }
            }

            combinedStr += arg
        }

        // Parse the combined string for color tags (#x)
        const parts = combinedStr.split(/(#[rgbycpom]\s)/)
        const segments = []
        const styles = []

        let currentColor = null
        let buffer = ''

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]

            if (part.match(/^#[rgbycpom]\s$/)) {
                // If we have accumulated text with a color, add it to segments
                if (buffer) {
                    if (currentColor) {
                        segments.push(`%c${buffer}`)

                        // Map color code to CSS
                        let css = ''
                        if (currentColor === 'r') css = 'color: red;'
                        else if (currentColor === 'g') css = 'color: green;'
                        else if (currentColor === 'b') css = 'color: #6485cc;'
                        else if (currentColor === 'y') css = 'color: #ffcc00;'
                        else if (currentColor === 'p') css = 'color: #a875d9;'
                        else if (currentColor === 'c') css = 'color: #00bbcc;'
                        else if (currentColor === 'o') css = 'color: #ffa500;'
                        else if (currentColor === 'm') css = 'color: #f533b7;'

                        styles.push(css)
                    } else {
                        segments.push(buffer)
                    }
                    buffer = ''
                }
                // Set new current color
                currentColor = part.trim().substring(1)
            } else if (part) {
                // Accumulate text
                buffer += part
            }
        }

        // Add any remaining text
        if (buffer) {
            if (currentColor) {
                segments.push(`%c${buffer}`)

                // Map color code to CSS
                let css = ''
                if (currentColor === 'r') css = 'color: red;'
                else if (currentColor === 'g') css = 'color: green;'
                else if (currentColor === 'b') css = 'color: #6485cc;'
                else if (currentColor === 'y') css = 'color: #ffcc00;'
                else if (currentColor === 'p') css = 'color: #a875d9;'
                else if (currentColor === 'c') css = 'color: #00bbcc;'
                else if (currentColor === 'o') css = 'color: #ffa500;'
                else if (currentColor === 'm') css = 'color: #f533b7;'

                styles.push(css)
            } else {
                segments.push(buffer)
            }
        }

        // Print the formatted string
        console.log(segments.join(''), ...styles)
    }
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

// Helper function to get hex color code from color letter
function getColorHex(colorCode) {
    switch(colorCode) {
        case 'p': return '#C16DFF'
        case 'b': return '#7B8DFF'
        case 'c': return '#7BE9FF'
        case 'g': return '#31D80C'
        case 'y': return '#E4D600'
        case 'o': return '#E86400'
        case 'm': return '#f533b7'
        case 'r': return '#F00000'
        default: return '#FFFFFF'
    }
}

// Function to colorize text without printing
async function colorizeText(color, type, str) {
    // Dynamically import chalk if not in browser and chalk is not fully loaded
    if (!isBrowser && (!chalk.hex || typeof chalk.hex !== 'function' || chalk.hex.toString().includes('=> text'))) {
        try {
            const chalkModule = await import('chalk')
            chalk = chalkModule.default
        } catch (err) {
            return str // Return plain text if chalk fails to load
        }
    }
    return chalk[type](color)(pretty(str))
}

module.exports = isBrowser ? browserColors : nodeColors
