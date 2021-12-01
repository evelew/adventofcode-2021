const { data } = require("./data.json");

let result = 0;

for (let i = 0; i < data.length; i++) {
  const isNotFirstOne = i !== 0;

  if (isNotFirstOne) {
    const currentValue = data[i];
    const previousValue = data[i - 1];

    if (currentValue > previousValue) {
      result++;
    }
  }
}

console.log({ result });
