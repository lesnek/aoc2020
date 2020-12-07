import { readFileSync } from "fs";

const input = readFileSync("./data.txt", "utf-8")
  .split("\n\n") // double new line == empty line
  .map((input) =>
    input.split(/ |\n/).map((field) => {
      // regex " " or "\n"
      const data = field.split(":");
      return { key: data[0], value: data[1] };
    })
  );

const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
console.log(
  input.filter((passport) => {
    return (
      requiredKeys.filter((field) => !passport.find((e) => e.key === field))
        .length === 0
    );
  }).length
);
