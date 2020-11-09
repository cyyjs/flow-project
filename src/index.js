// @flow
function foo(x: ?number): Result {
  if (x) {
    return x;
  }
  return "default string";
}
