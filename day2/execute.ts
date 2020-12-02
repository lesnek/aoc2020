import { readFileSync } from "fs";

const input = readFileSync("./data.txt", "utf-8").split("\n");

const counter = (input: string[]) => {
    var correct = 0;

    for (const entry of input) {
	if (entry == "") {break};
       	const [range, letter, password] = entry.split(" ");
    	const [min, max] = range.split("-").map(Number);
	const rightLetters = (password.match(new RegExp(letter.charAt(0), "g")) || []).length;
	if (min <= rightLetters && max >= rightLetters) {
	    correct++;
	}
    }
    return correct;
}

console.log(counter(input));
