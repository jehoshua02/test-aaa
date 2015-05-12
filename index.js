var aaa = function (props) {
  return function () {
    var subject = props.arrange();
    var actual = props.act(subject);
    props.assert(actual);
  };
};

module.exports = aaa;
