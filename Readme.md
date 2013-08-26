# callback

  Sugar for nicely calling back functions, while [maintaining sanity](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony).

## Installation

    $ component install ianstormtaylor/callback

## Example

For synchronous calls, this:

```js
function (fn) {
  // stuff
  if ('function' === typeof fn) fn();
}
```

Becomes:

```js
var callback = require('callback');

function get (fn) {
  // stuff
  callback(fn);
}
```

And for asynchronous calls, this:

```js
var nextTick = require('next-tick');

function (fn) {
  // stuff
  if ('function' === typeof fn) nextTick(fn);
}
```

Becomes:

```js
var callback = require('callback');

function (fn) {
  // stuff
  callback.async(fn);
}
```

## API

### callback(fn)
  Call the `fn` back synchronously if it exists.

### callback.async(fn[, wait])
  Call the `fn` back _asynchronously_ if it exists. Optionally after a certain `wait` time in milliseconds. Uses [`timoxley/next-tick`](https://github.com/timoxley/next-tick) if no wait time is specified.

### callback.sync(fn)
  Symmetry.

## License

  MIT
