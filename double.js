function topDouble(value, top) {
  let double = value;
  while (double * 2 <= top) {
    double *= 2;
  }
  return double;
}

module.exports = topDouble;

// Let's say our value is 2 and our top is 100. We would double it like so:

// 2, 4, 8, 16, 32, 64, 128
