import { readFileSync } from "fs";

const groups = readFileSync("./data.txt", "utf-8").split("\n\n");

function intersect(a: string[], b: string[]) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter((x) => setB.has(x)));
  return Array.from(intersection);
}

const groupCnt = (input: string[]) => {
  var count = 0;
  var localCnt = 0;
  var result: string[] = [];
  for (let group of input) {
    const answers = group.split("\n");
    for (let i = 0; i < answers.length; i++) {
      var answerArr = answers[i].replace(/\s/g, "").split("");
      if (i == 0) {
        result = answerArr;
      } else {
        result = intersect(result, answerArr);
      }
      localCnt = result.length;
    }
    count = localCnt + count;
  }
  console.log(count);
};

groupCnt(groups);
