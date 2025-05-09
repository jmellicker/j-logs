# jlogs

Cool colored console logs for Node and browser.

## Installation

```bash
yarn add @jmellicker/jlogs
```

## Usage

Import the library:

### CommonJS (Node.js)
```javascript
const c = require('@jmellicker/jlogs');
```

### ES Modules (Browser)
```javascript
import c from '@jmellicker/jlogs';
```

For browser projects using bundlers like Vite, Webpack, or Rollup:
```javascript
// In your Vue component or JavaScript file
import c from '@jmellicker/jlogs';

// Now you can use it
c.b('Hello from the browser!');
```

For direct use in HTML:
```html
<script type="module">
  import c from './node_modules/@jmellicker/jlogs/index.js';

  c.r('This is a red message in the console');
</script>
```

Use the various color functions:

```javascript
c.p('purple')
c.b('blue')
c.c('cyan')
c.g('green')
c.y('yellow')
c.o('orange')
c.m('magenta')
c.r('red')
```

You can also use multiple arguments, just like console.log:

```javascript
c.b('Hello', 'World')
c.g('Status:', 'Success')
c.r('Error:', 'File not found')
c.y('Warning:', 'Disk space low', '(10% remaining)')

// Works with objects and mixed types too
c.c('User:', { name: 'John', age: 30 })
c.m('Mixed types:', 'string', 123, { key: 'value' }, true)
```

## Demo

Run the included demo to see all available colors:

```bash
node demo
```

## For Contributors

### Release Process

To release a new version of the package:

1. Make sure all your changes are committed and pushed
2. Run the release script:

```bash
yarn release
```

This will:
- Increment the patch version in package.json
- Publish the package to npm
- Commit the version change
- Create a git tag
- Push changes and tags to GitHub

You'll need to be logged in to npm (`npm login`) before running the release script.
