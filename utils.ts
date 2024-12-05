import chalk from "chalk";

export function printAnswer(
  year: number,
  day: number,
  part: 1 | 2,
  func: () => string | number
) {
  const start = performance.now();
  const answer = func();
  const end = performance.now();
  const elapsed = Math.round(end - start);
  console.log(
    chalk.cyan(`${year} • Day ${day} •\tPart ${part === 1 ? "One" : "Two"}`),
    chalk.gray(`${elapsed}ms`)
  );
  console.log(chalk.bold.white("=> Answer: "), chalk.green(answer), "\n");
}
