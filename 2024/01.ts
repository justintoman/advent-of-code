import chalk from "chalk";
import { DAY1_INPUT } from "./inputs/01";
import { printAnswer } from "../utils";

function findDistance(list1: number[], list2: number[]): number {
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < list1.length; i++) {
    const a = list1[i];
    const b = list2[i];
    sum += Math.abs(a - b);
  }

  return sum;
}

function findSimilarity(list1: number[], list2: number[]): number {
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
}

export async function day1() {
  const list1: number[] = [];
  const list2: number[] = [];
  const lines = DAY1_INPUT.split("\n");
  lines.forEach((line) => {
    const [a, b] = line.split(/\s+/);
    list1.push(Number(a));
    list2.push(Number(b));
  });

  printAnswer(2024, 1, 1, () => findDistance(list1, list2));
  printAnswer(2024, 1, 1, () => findSimilarity(list1, list2));
}
