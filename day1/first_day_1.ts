import { readFileSync } from "fs";

const input = readFileSync("./data2.txt", "utf-8").split("\n").map(Number);

const epicSum = (arr, target) => {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          result.push(i);
          result.push(j);
          result.push(k);
        }
      }
    }
  }
  return result;
};
const eSum = epicSum(input, 2020);
console.log(input[eSum[0]] * input[eSum[1]] * input[eSum[2]]);
