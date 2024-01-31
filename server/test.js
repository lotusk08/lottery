const fs = require("fs");

// The correctness of the test draw results data
var selected = {},
  repeat = [],
  luckyData = require("/Users/steve/Documents/Nova/lottery/product/dist/temp.json"),
  errorData = require("/Users/steve/Documents/Nova/lottery/product/dist/error.json");

for (let key in luckyData) {
  let item = luckyData[key];
  item.forEach(user => {
    let id = user[0];
    if (selected[id]) {
      repeat.push(user[1]);
      return;
    }
    selected[id] = true;
  });
}

errorData.forEach(user => {
  let id = user[0];
  if (selected[id]) {
    repeat.push(user[1]);
    return;
  }
  selected[id] = true;
});

if (repeat.length > 0) {
  console.log(repeat);
  return;
}
console.log("No repeated options");
