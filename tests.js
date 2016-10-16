window.onload = function() {
  test('Name of block of tests 1', function() {
    assert(true, 'Description 1');
    assert(true, 'Description 2');
    assert(true, 'Description 3');
    assert(true, 'Description 3');
  });
  test('Name of block of tests 2', function() {
    assert(false, 'Description 1');
    assert(false, 'Description 2');
    assert(false, 'Description 3');
    assert(false, 'Description 3');
  });
  test('Name of block of tests 3', function() {
    assert(true, 'Description 1');
    assert(false, 'Description 2');
    assert(true, 'Description 3');
    assert(false, 'Description 3');
  });
}
