const { data } = require("./data.json");

let linesSum = [];
let result = 0;

for (let currentLineI = 0; currentLineI < data.length; currentLineI++) {
  if (data[currentLineI + 2]) {
    const selectedItems = data.slice(currentLineI, currentLineI + 3);
    const lineSum = selectedItems.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0);

    linesSum.push(lineSum);
  }
}

for (let i = 0; i < linesSum.length; i++) {
  const isNotFirstOne = i !== 0;

  if (isNotFirstOne) {
    const currentValue = linesSum[i];
    const previousValue = linesSum[i - 1];

    if (currentValue > previousValue) {
      result++;
    }
  }
}

console.log({ result });
