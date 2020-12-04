import { readFileSync } from "fs";

const input = readFileSync("./data.txt", "utf-8").split("\n");

const treeCnt = (input: string[]) => {
  return input.reduce((acc, value, index) => {
    return value[(index * 3) % value.length] === "#" ? acc + 1 : acc;
  }, 0);
};
console.log(treeCnt(input));
