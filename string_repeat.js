// Let's modify our function to return a scream alternating between lower and capital case. For example:
// console.log( scream(5) ); // aAaAa
// console.log( scream(10) ); // aAaAaAaAaA

function scream(n) {
  let str = "";
  let smallStr = "a";
  let capitalStr = "A";
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      str += capitalStr;
    } else str += smallStr;
  }
  return str;
}

module.exports = scream;
