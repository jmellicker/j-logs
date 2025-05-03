const c = require('./index')

// Test with multiple arguments
c.b('Hello', 'World')
c.g('Multiple', 'arguments', 'work', 'now')
c.r('Error:', 'Something went wrong')

// Test with objects
c.y('User data:', { name: 'John', age: 30 })

// Test with numbers
c.c('Count:', 42)

// Test with mixed types
c.m('Mixed types:', 'string', 123, { key: 'value' }, true)

// Test headers
c.bh('Header with', 'multiple args')

// Test backgrounds
c.rb('Background with', 'multiple args')

// Test background headers
c.gbh('Background header with', 'multiple args')
