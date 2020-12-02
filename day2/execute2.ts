import { readFileSync } from "fs";

const input = readFileSync("./data.txt", "utf-8").split("\n");

const counter = (input: string[]) => {
  var correct = 0;

  for (const entry of input) {
    // weird, last character from split by \n is empty string
    if (entry == "") {
      break;
    }
    const [range, letter, password] = entry.split(" ");
    const [first, second] = range.split("-").map(Number);
    const passIndex1 = password.charAt(first - 1);
    const passIndex2 = password.charAt(second - 1);
    if (
      (passIndex1 == letter.charAt(0) || passIndex2 == letter.charAt(0)) &&
      passIndex1 != passIndex2
    ) {
      correct++;
    }
  }
  return correct;
};

console.log(counter(input));
