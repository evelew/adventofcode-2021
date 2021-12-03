const { data } = require("./data.json");
const charsNum = data[0].split("").length;

const getBitCriteriaNumber = (arr, ratingType) => {
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(hashmap).reduce((a, b) => {
    if (hashmap[a] === hashmap[b]) {
      return ratingType === "oxygen" ? 1 : 0;
    }

    if (ratingType === "oxygen") {
      if (hashmap[a] > hashmap[b]) {
        return a;
      } else {
        return b;
      }
    } else {
      if (hashmap[a] < hashmap[b]) {
        return a;
      } else {
        return b;
      }
    }
  });
};

const getBit = (ratingType) => {
  let filteredItems = data;

  for (let i = 0; i < charsNum; i++) {
    const position = i;
    let numsAtCurrentPosition = [];

    for (let lineIndex = 0; lineIndex < filteredItems.length; lineIndex++) {
      const line = filteredItems[lineIndex];
      numsAtCurrentPosition.push(line[position]);
    }

    const bitCriteriaNumber = getBitCriteriaNumber(
      numsAtCurrentPosition,
      ratingType
    );

    if (filteredItems.length === 1) {
      break;
    }

    filteredItems = filteredItems.filter(
      (item) => Number(item[position]) === Number(bitCriteriaNumber)
    );
  }

  return parseInt(filteredItems[0], 2);
};

const oxygenGeneratorRating = getBit("oxygen");
const co2ScrubberRating = getBit("");
const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;
console.log({ lifeSupportRating });
