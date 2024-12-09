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
        if (
          applicableRules.every(([before, after]) => {
            const valid = update.indexOf(before) < update.indexOf(after);
            if (!valid) {
            }
            return valid;
          })
        ) {
          const itoAdd = Math.round(update.length / 2) - 1;
          const inc = update[itoAdd];
          sum += inc;
        }
      });
      return sum;
    },
    part2() {
      let sum = 0;
      updates.forEach((update, i) => {
        const applicableRules = rules.filter((rule) =>
          rule.every((num) => update.includes(num))
        );
        if (
          applicableRules.some(([before, after]) => {
            const valid = update.indexOf(before) < update.indexOf(after);
            return !valid;
          })
        ) {
          let ruleIndex = 0;
          while (
            applicableRules.some(([before, after]) => {
              const valid = update.indexOf(before) < update.indexOf(after);
              return !valid;
            })
          ) {
            const [before, after] =
              applicableRules[ruleIndex % applicableRules.length];
            const beforeIndex = update.indexOf(before);
            const afterIndex = update.indexOf(after);
            if (beforeIndex > afterIndex) {
              update.splice(beforeIndex, 1);
              update.splice(afterIndex, 0, before);
            }
            ruleIndex++;
          }
          const itoAdd = Math.round(update.length / 2) - 1;
          const inc = update[itoAdd];
          sum += inc;
        }
      });
      return sum;
    },
  };
});
