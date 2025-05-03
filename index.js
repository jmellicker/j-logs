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
            typeof arg === 'string' && arg.match(/#[a-z]+\s/)
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

        // Parse the combined string for color tags (#xxx)
        // Match any tag that starts with # followed by 1-3 lowercase letters and a space
        const parts = combinedStr.split(/(#[a-z]{1,3}\s)/)
        const segments = []

        let currentColorCode = null
        let buffer = ''

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]

            if (part.match(/^#[a-z]{1,3}\s$/)) {
                // If we have accumulated text with a color, add it to segments
                if (buffer) {
                    segments.push({ text: buffer, colorCode: currentColorCode })
                    buffer = ''
                }
                // Set new current color code
                currentColorCode = part.trim().substring(1)
            } else if (part) {
                // Accumulate text
                buffer += part
            }
        }

        // Add any remaining text
        if (buffer) {
            segments.push({ text: buffer, colorCode: currentColorCode })
        }

        // Process each segment
        let output = ''
        for (const segment of segments) {
            if (segment.colorCode) {
                // Process the color code to determine the styling
                const coloredText = await applyColorCode(segment.colorCode, segment.text)
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
            typeof arg === 'string' && arg.match(/#[a-z]+\s/)
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

        // Parse the combined string for color tags (#xxx)
        // Match any tag that starts with # followed by 1-3 lowercase letters and a space
        const parts = combinedStr.split(/(#[a-z]{1,3}\s)/)
        const segments = []
        const styles = []

        let currentColorCode = null
        let buffer = ''

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]

            if (part.match(/^#[a-z]{1,3}\s$/)) {
                // If we have accumulated text with a color, add it to segments
                if (buffer) {
                    if (currentColorCode) {
                        // Check if it's a header
                        let text = buffer
                        if (currentColorCode.includes('h')) {
                            text = makeHeader(text)
                        }

                        segments.push(`%c${text}`)

                        // Get CSS for the color code
                        const css = getColorCodeCSS(currentColorCode)
                        styles.push(css)
                    } else {
                        segments.push(buffer)
                    }
                    buffer = ''
                }
                // Set new current color code
                currentColorCode = part.trim().substring(1)
            } else if (part) {
                // Accumulate text
                buffer += part
            }
        }

        // Add any remaining text
        if (buffer) {
            if (currentColorCode) {
                // Check if it's a header
                let text = buffer
                if (currentColorCode.includes('h')) {
                    text = makeHeader(text)
                }

                segments.push(`%c${text}`)

                // Get CSS for the color code
                const css = getColorCodeCSS(currentColorCode)
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

// Function to get background hex color
function getBgColorHex(colorCode) {
    switch(colorCode) {
        case 'p': return '#5E00A0'
        case 'b': return '#002BFF'
        case 'c': return '#00A9B2'
        case 'g': return '#177F00'
        case 'y': return '#A39800'
        case 'o': return '#E86400'
        case 'm': return '#f533b7'
        case 'r': return '#F00000'
        default: return '#000000'
    }
}

// Function to process complex color codes for node environment
async function applyColorCode(colorCode, text) {
    // Dynamically import chalk if not in browser and chalk is not fully loaded
    if (!isBrowser && (!chalk.hex || typeof chalk.hex !== 'function' || chalk.hex.toString().includes('=> text'))) {
        try {
            const chalkModule = await import('chalk')
            chalk = chalkModule.default
        } catch (err) {
            return text // Return plain text if chalk fails to load
        }
    }

    // Process the color code
    let result = text

    // Check if it's a complex code (2-3 characters)
    if (colorCode.length > 1) {
        // Handle background color (second character is 'b')
        if (colorCode.includes('b')) {
            const colorChar = colorCode.replace('b', '')[0]
            const bgColor = getBgColorHex(colorChar)
            result = chalk.bgHex(bgColor)(result)
        }

        // Handle header (code includes 'h')
        if (colorCode.includes('h')) {
            result = makeHeader(result)
        }

        // Apply foreground color (first character)
        const colorChar = colorCode[0]
        const fgColor = getColorHex(colorChar)
        result = chalk.hex(fgColor)(result)
    } else {
        // Simple color code (just one character)
        const fgColor = getColorHex(colorCode)
        result = chalk.hex(fgColor)(result)
    }

    return result
}

// Function to get CSS for complex color codes in browser environment
function getColorCodeCSS(colorCode) {
    let css = ''
    let isHeader = colorCode.includes('h')

    // Check if it's a complex code (2-3 characters)
    if (colorCode.length > 1) {
        // Handle background color (second character is 'b')
        if (colorCode.includes('b')) {
            const colorChar = colorCode.replace(/[bh]/g, '')[0]
            switch(colorChar) {
                case 'p': css += 'background: #8a2be2; color: white; padding: 3px;'; break
                case 'b': css += 'background: blue; color: white; padding: 3px;'; break
                case 'c': css += 'background: #00bbcc; color: white; padding: 3px;'; break
                case 'g': css += 'background: green; color: white; padding: 3px;'; break
                case 'y': css += 'background: #ffcc00; color: black; padding: 3px;'; break
                case 'o': css += 'background: #ffa500; color: white; padding: 3px;'; break
                case 'm': css += 'background: #f533b7; color: white; padding: 3px;'; break
                case 'r': css += 'background: red; color: white; padding: 3px;'; break
                default: css += 'background: black; color: white; padding: 3px;'
            }

            // Add font-weight for headers
            if (isHeader) {
                css += ' font-weight: bold;'
            }

            return css // Background color already includes text color
        }
    }

    // Apply foreground color (first character)
    const colorChar = colorCode.replace(/[bh]/g, '')[0]
    switch(colorChar) {
        case 'r': css += 'color: red;'; break
        case 'g': css += 'color: green;'; break
        case 'b': css += 'color: #6485cc;'; break
        case 'y': css += 'color: #ffcc00;'; break
        case 'p': css += 'color: #a875d9;'; break
        case 'c': css += 'color: #00bbcc;'; break
        case 'o': css += 'color: #ffa500;'; break
        case 'm': css += 'color: #f533b7;'; break
        default: css += 'color: black;'
    }

    // Add font-weight for headers
    if (isHeader) {
        css += ' font-weight: bold;'
    }

    return css
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
