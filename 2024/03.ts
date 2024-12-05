import { printAnswer } from "../utils";

export async function day3() {
  const inputFile = Bun.file("./2024/inputs/03.txt");
  const INPUT = await inputFile.text();

  printAnswer(2024, 3, 1, () => part1(INPUT));
  printAnswer(2024, 3, 2, () => part2(INPUT));
}

function part1(input: string): number {
  const regexp = /mul\((\d{1,3}),(\d{1,3})\)/gm;
  const matches = [...input.matchAll(regexp)];
  let sum = 0;
  matches.forEach((match) => {
    const [, a, b] = match;
    sum += Number(a) * Number(b);
  });
  return sum;
}

function part2(input: string): number {
  const replaceRegexp = /don't\(\).*?do\(\)/gm;
  const regexp = /mul\((\d{1,3}),(\d{1,3})\)/gm;
  const realInput = input.replace(/\n/gm, "").replace(replaceRegexp, "");

  const matches = [...realInput.matchAll(regexp)];
  let sum = 0;
  matches.forEach((match) => {
    const [, a, b] = match;
    sum += Number(a) * Number(b);
  });
  return sum;
}
