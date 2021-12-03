const { data } = require("./data.json");

let gamma_rate = 0;
let epsilon_rate = 0;

const calculateGamaRate = () => {
  const counts = [];

  data.map((line) => {
    for (let i = 0; i < line.length; i++) {
      if (!counts[i]) {
        counts.push({
          zero: 0,
          one: 0,
        });
      }

      if (line[i] === "1") {
        counts[i].one++;
      } else {
        counts[i].zero++;
      }
    }
  });

  let gamaArr = [];
  let epsilonArr = [];

  for (let i = 0; i < counts.length; i++) {
    if (counts[i].zero > counts[i].one) {
      gamaArr.push(0);
      epsilonArr.push(1);
    } else {
      gamaArr.push(1);
      epsilonArr.push(0);
    }
  }

  gamma_rate = parseInt(gamaArr.join(""), 2);
  epsilon_rate = parseInt(epsilonArr.join(""), 2);
};

calculateGamaRate();

const result = gamma_rate * epsilon_rate;
console.log({ result });
