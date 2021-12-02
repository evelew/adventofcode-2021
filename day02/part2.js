const { data } = require("./data.json");

let result = 0;
const directions = {
  horizontal: 0,
  depth: 0,
  aim: 0,
};

const actions = {
  forward: (value) => {
    directions.horizontal += value;

    if (directions.aim !== 0) {
      directions.depth += value * directions.aim;
    }
  },
  down: (value) => (directions.aim += value),
  up: (value) => (directions.aim -= value),
};

const commands = data.map((command) => command.split(" "));
for (let i = 0; i < commands.length; i++) {
  const command = commands[i];
  const exec = actions[command[0]];
  exec(Number(command[1]));
}

result = directions.depth * directions.horizontal;

console.log({ result });
