import { day } from "./2024";

day(3, (input) => ({
  part1() {
    const regexp = /mul\((\d{1,3}),(\d{1,3})\)/gm;
    const matches = [...input.matchAll(regexp)];
    let sum = 0;
    matches.forEach((match) => {
      const [, a, b] = match;
      sum += Number(a) * Number(b);
    });
    return sum;
  },
  part2() {
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
  },
}));
