//(maskify('4556364607935616'), '############5616')
// return masked string
// return masked string
function maskify(cc) {
  let arr = cc.split("").reverse();
  let newStr = arr.slice(0, 4);
  let newArr = [];
  for (let i = 4; i < arr.length; i++) {
    newArr.push(arr[i].replace(/[0-9]/g, "#").replace(/[a-z]/g, "#"));
  }
  return newStr
    .concat(newArr)
    .reverse()
    .join("");
}
/*
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/
