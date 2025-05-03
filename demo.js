// import c from './index'

const c = require('./index')

// Basic colors
c.p('purple')
c.b('blue')
c.c('cyan')
c.g('green')
c.y('yellow')
c.o('orange')
c.m('magenta')
c.r('red')

// Background colors
c.pb('purple background')
c.bb('blue background')
c.cb('cyan background')
c.gb('green background')
c.yb('yellow background')
c.ob('orange background')
c.mb('magenta background')
c.rb('red background')

// Headers
c.ph('purple header')
c.bh('blue header')
c.ch('cyan header')
c.gh('green header')
c.yh('yellow header')
c.oh('orange header')
c.mh('magenta header')
c.rh('red header')

// Background + headers
c.pbh('purple background + header')
c.bbh('blue background + header')
c.cbh('cyan background + header')
c.gbh('green background + header')
c.ybh('yellow background + header')
c.obh('orange background + header')
c.mbh('magenta background + header')
c.rbh('red background + header')

// Multiple arguments examples
c.b('Multiple', 'arguments', 'work', 'like', 'console.log')
c.g('Status:', 'Success')
c.r('Error:', 'File not found')
c.y('Warning:', 'Disk space low', '(10% remaining)')

// Objects and mixed types
c.c('User:', { name: 'John', age: 30 })
c.m('Mixed types:', 'string', 123, { key: 'value' }, true)
