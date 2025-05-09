// ES Module import test
import c from './index.js';

console.log('Testing ES Module import:');

// Basic colors
c.p('purple');
c.b('blue');
c.g('green');
c.r('red');

// Multiple arguments
c.b('Hello', 'World');
c.g('Status:', 'Success');

// Objects
c.c('User:', { name: 'John', age: 30 });
