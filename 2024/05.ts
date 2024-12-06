import chalk from "chalk";
import { day } from "./2024";

day(5, (input) => {
  const lines = input.split(/\r?\n/);
  const rules = lines
    .filter((line) => line.includes("|"))
    .map((line) => line.split("|").map((num) => Number(num)));
  const updates = lines
    .filter((line) => line.includes(","))
    .map((line) => line.split(",").map((num) => Number(num)));
  return {
    part1() {
      let sum = 0;
      updates.forEach((update, i) => {
        const applicableRules = rules.filter((rule) =>
          rule.every((num) => update.includes(num))
        );
        // console.log(
        //   `Update ${i} rules: ${applicableRules.map((rule) => rule.join("|"))}`
        // );
        if (
          applicableRules.every(([before, after]) => {
            const valid = update.indexOf(before) < update.indexOf(after);
            if (!valid) {
              // console.log(
              //   `Update ${i}: ${
              //     valid ? "valid" : "invalid"
              //   }-${before} must come before ${after} in ${update}`
              // );
            }
            return valid;
          })
        ) {
          const itoAdd = Math.round(update.length / 2) - 1;
          const inc = update[itoAdd];
          // console.log(
          //   `${i} is valid: len=${update.length}, mid=${itoAdd}, ${update.map(
          //     (num, ix) => (ix === itoAdd ? chalk.bold(num) : chalk.gray(num))
          //   )} | adding ${inc}`
          // );
          sum += inc;
        }
      });
      return sum;
    },
    part2() {
      return "";
    },
  };
});
