import { readFileSync } from "fs";

const groups = readFileSync("./data.txt", "utf-8").split("\n\n");

const groupCnt = (input: string[]) => {
  var count = 0;
  for (let group of input) {
    const localCnt = new Set(group.replace(/\s/g, "")).size;
    count = localCnt + count;
  }
  console.log(count);
};

groupCnt(groups);
