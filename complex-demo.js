// import c from './index'

const c = require('./index')

console.log('=== Testing c.l with complex color codes ===')

// Test single color codes
c.l('#r This is red text')
c.l('#g This is green text')
c.l('#b This is blue text')

// Test background colors
c.l('#rb This is red text with background')
c.l('#gb This is green text with background')
c.l('#bb This is blue text with background')

// Test headers
c.l('#rh This is red header')
c.l('#gh This is green header')
c.l('#bh This is blue header')

// Test background + headers
c.l('#rbh This is red background + header')
c.l('#gbh This is green background + header')
c.l('#bbh This is blue background + header')

// Test multiple color codes in one string
c.l('#r Red text #g Green text #b Blue text')

// Test multiple arguments with different color codes
c.l('#r Red text', '#g Green text', '#b Blue text')
c.l('#rb Red background', '#gb Green background', '#bb Blue background')
c.l('#rh Red header', '#gh Green header', '#bh Blue header')
c.l('#rbh Red bg+header', '#gbh Green bg+header', '#bbh Blue bg+header')

// Test mixing complex codes with regular text
c.l('#gb This is green with a background', 'This is normal text', '#bbh This is a blue header with a background')
