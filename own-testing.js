(function() {
  var results; // output

  // the function check if test valid or not
  // and add styles for test
  this.assert = function assert(value, desc) {
    var li = document.createElement('li'); // cleare li tag
    li.className = value ? 'pass' : 'fail'; // add class for li if test valid or not
    li.appendChild(document.createTextNode(desc)); // add discription for test
    results.appendChild(li); // add to output
    // if some test in block of tests invalid add class to test block
    if(!value) {
      li.parentNode.parentNode.className = 'fail';
    }
    return li;
  };
  // the function create block of test
  // inputs: name of test of block; fn - function with tests
  this.test = function test(name, fn) {
    results = document.getElementById('results');
    results = assert(true, name).appendChild(
    document.createElement('ul'));
    fn();
  };
})();
