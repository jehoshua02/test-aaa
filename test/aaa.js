var expect = require('expect');
var aaa = require('../');
var emptyFunc = function () {};

describe('aaa', function () {
  it('should return a function', function () {
    expect(aaa({
      arrange: emptyFunc,
      act: emptyFunc,
      assert: emptyFunc
    })).toBeA(Function);
  });

  describe('returned function', function () {
    it('should call arrange', function () {
      var called = false;

      var subject = aaa({
        arrange: function () {
          called = true;
        },
        act: emptyFunc,
        assert: emptyFunc
      });

      subject();

      expect(called).toBe(true);
    });

    it('should call act with subject from arrange', function () {
      var actual = null;

      var subject = aaa({
        arrange: function () {
          return 'subject';
        },
        act: function (subject) {
          actual = subject;
        },
        assert: emptyFunc
      });

      subject();

      expect(actual).toBe('subject');
    });

    it('should call assert with the actual from act', function () {
      var actual = null;

      var subject = aaa({
        arrange: emptyFunc,
        act: function () {
          return 'actual';
        },
        assert: function (a) {
          actual = a;
        }
      });

      subject();

      expect(actual).toBe('actual');
    });
  });
});
