import chalk from "chalk";

type DayFunc = {
  (input: string): {
    part1(): string | number;
    part2(): string | number;
  };
};

export function year(year: number) {
  type Day = { day: number; func: DayFunc };
  const days: Day[] = [];
  return {
    async run() {
      for (let i = 1; i <= 25; i++) {
        const day = days.find((d) => d.day === i);
        if (day) {
          await runDay(day);
        }
      }
    },
    async day(day: number, func: DayFunc) {
      days.push({ day, func });
    },
  };
  async function runDay({ day, func }: Day) {
    let mark = performance.now();
    const path = `${year}/inputs/${day.toString().padStart(2, "0")}.txt`;
    const file = Bun.file(path);
    const exists = await file.exists();
    if (!exists) {
      throw new Error(
        `Input file for ${year} day ${day} (${path}) does not exist`
      );
    }
    const input = await file.text();
    const { part1, part2 } = func(input);
    const loadTime = Math.round(performance.now() - mark);

    console.log(
      chalk.cyan(`${year} • Day ${day}`),
      chalk.gray(`${loadTime}ms`)
    );

    mark = performance.now();
    const part1Answer = part1();
    const part1Time = Math.round(performance.now() - mark);
    console.log(
      chalk.bold.white("=> Part One: "),
      chalk.green(part1Answer),
      chalk.gray(` ${part1Time}ms`)
    );

    mark = performance.now();
    const part2Answer = part2();
    const part2Time = Math.round(performance.now() - mark);
    console.log(
      chalk.bold.white("=> Part Two: "),
      chalk.green(part2Answer),
      chalk.gray(` ${part2Time}ms`),
      "\n"
    );
  }
}
