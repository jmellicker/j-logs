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
  import c from './node_modules/@jmellicker/jlogs/index.mjs';

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

### Using hashtag color codes

You can also use the `l()` function with hashtag color codes:

```javascript
// Basic color codes
c.l('#r This is red text')
c.l('#g This is green text')
c.l('#b This is blue text')

// Background colors
c.l('#rb This is red text with background')
c.l('#gb This is green text with background')

// Headers
c.l('#rh This is red header')
c.l('#gh This is green header')

// Background + headers
c.l('#rbh This is red background + header')
c.l('#gbh This is green background + header')

// Multiple arguments with different color codes
c.l('#r Red text', '#g Green text', '#b Blue text')
c.l('#gb This is green with a background', 'This is normal text')
```

## TypeScript Support

This package includes TypeScript declarations. No additional installation is needed.

```typescript
import c from '@jmellicker/jlogs';

c.b('This is typed!');
c.l('#r Red text with TypeScript');
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
