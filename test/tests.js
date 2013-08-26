describe('callback', function () {

var assert = require('assert')
  , callback = require('callback');

it('should be an alias for sync', function () {
  assert(callback === callback.sync);
});

describe('#sync', function () {
  it('should callback right away', function (done) {
    var sync = true;
    function fn () {
      assert(sync);
      done();
    }
    callback.sync(fn);
    sync = false;
  });
});

describe('#async', function () {
  it('should callback on next tick', function (done) {
    var async = false;
    function fn () {
      assert(async);
      done();
    }
    callback.async(fn);
    async = true;
  });

  it('should callback after wait time', function (done) {
    var async = false;
    function fn () {
      assert(async);
      done();
    }
    callback.async(fn, 50);
    setTimeout(function () {
      async = true;
    }, 49);
  });
});

});