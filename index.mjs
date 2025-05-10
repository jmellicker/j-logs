// ES Module version of jlogs
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

// Browser colors implementation
const browserColors = {
  p(...args) { browserPrint(formatArgs(args), 'color: #a875d9;') },
  b(...args) { browserPrint(formatArgs(args), 'color: #6485cc;') },
  c(...args) { browserPrint(formatArgs(args), 'color: #00bbcc;') },
  g(...args) { browserPrint(formatArgs(args), 'color: green;') },
  y(...args) { browserPrint(formatArgs(args), 'color: #ffcc00;') },
  o(...args) { browserPrint(formatArgs(args), 'color: #ffa500;') },
  m(...args) { browserPrint(formatArgs(args), 'color: #f533b7;') },
  r(...args) { browserPrint(formatArgs(args), 'color: red;') },

  // Hashtag color code function
  l(...args) { processHashtagColors(args, this) },

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
};

// Helper functions
function browserPrint(str, css) {
  console.log('%c ' + pretty(str) + ' ', css);
}

function pretty(str) {
  if (typeof str === 'object') str = JSON.stringify(str, null, 2);
  return str;
}

function formatArgs(args) {
  return args.map(arg => pretty(arg)).join(' ');
}

function makeHeader(str) {
  return '======== ' + pretty(str) + ' ========';
}

// Process hashtag color codes
function processHashtagColors(args, colors) {
  for (const arg of args) {
    if (typeof arg === 'string' && arg.startsWith('#')) {
      const match = arg.match(/^#([a-z]{1,3})\s(.*)$/);
      if (match) {
        const [, colorCode, text] = match;
        if (colors[colorCode]) {
          colors[colorCode](text);
        } else {
          console.log(arg);
        }
      } else {
        console.log(arg);
      }
    } else {
      console.log(arg);
    }
  }
}

// Export the browser colors object as default
export default browserColors;
