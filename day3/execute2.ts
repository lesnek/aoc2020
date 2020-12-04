import { readFileSync } from "fs";

const input = readFileSync("./data.txt", "utf-8").split("\n");

var pathMap = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

interface Path {
  right: number;
  down: number;
}

const treeCnt = (input: string[], path: Path) => {
  return input
    .filter((_, index) => index % path.down === 0)
    .reduce((acc, value, index) => {
      return value[(index * path.right) % value.length] === "#" ? acc + 1 : acc;
    }, 0);
};

console.log(pathMap.reduce((acc, value) => acc * treeCnt(input, value), 1));
