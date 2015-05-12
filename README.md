# Test AAA

Arrange, Act, Assert because nobody likes messy tests.


## Install

```shell
npm install --save-dev test-aaa
```


## Use

```javascript
var aaa = require('test-aaa');

describe('Foo', function () {
  it('should bar', aaa({
    arrange: function () {
      // do stuff and return test subject
    },
    act: function (subject) {
      // act on test subject and return actual value
    },
    assert: function (actual) {
      // assert on the actual value
    }
  }));
});
```

The `aaa` function takes a props object with `arrange`, `act`, and `assert` keys
and returns a new function that executes `arrange`, `act`, and `assert` in
sequence. The `arrange` function should return the test subject. The `act`
function receives the test subject to act upon it and returns the actual value.
Then `assert` receives the actual value to perform assertions on it.
