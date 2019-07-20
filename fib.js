function lcm(x, y) {
  return Math.abs(x * y) / gcf(x, y);
}


function gcf(x, y) {
  while (b != 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcf(48, 18))