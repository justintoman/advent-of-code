import { day } from "./2024";

day(1, (input) => {
  const list1: number[] = [];
  const list2: number[] = [];
  const lines = input.split("\n");
  lines.forEach((line) => {
    const [a, b] = line.split(/\s+/);
    list1.push(Number(a));
    list2.push(Number(b));
  });
  return {
    part1() {
      list1.sort((a, b) => a - b);
      list2.sort((a, b) => a - b);
      let sum = 0;
      for (let i = 0; i < list1.length; i++) {
        const a = list1[i];
        const b = list2[i];
        sum += Math.abs(a - b);
      }

      return sum;
    },
    part2() {
      const map = new Map<number, number>();
      let sum = 0;
      list1.forEach((num) => {
        if (!map.has(num)) {
          map.set(num, list2.filter((n) => n === num).length);
        }
        const count = map.get(num)!;
        sum += num * count;
      });
      return sum;
    },
  };
});
