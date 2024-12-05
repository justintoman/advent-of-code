import { printAnswer } from "../utils";
import { DAY2_INPUT } from "./inputs/02";

export function day2() {
  const lines = DAY2_INPUT.split(/\n/gm);
  const reports: number[][] = [];
  lines.forEach((line) => {
    const report = line.split(/\s+/).map((str) => Number(str));
    reports.push(report);
  });
  printAnswer(2024, 2, 1, () => countSafeReports(reports));
  printAnswer(2024, 2, 2, () => countSafeReportsWithDampener(reports));
}

function countSafeReportsWithDampener(reports: number[][]): number {
  let sum = 0;
  for (const report of reports) {
    const reportVariations = [
      report,
      ...Array(report.length)
        .fill(null)
        .map((_, i) => report.filter((_, oi) => i !== oi)),
    ];
    if (
      reportVariations.some((r) => {
        if (r[0] > r[1]) {
          if (verifyDecreasing(r)) {
            return true;
          }
        }
        if (verifyIncreasing(r)) {
          return true;
        }
      })
    ) {
      sum++;
    }
  }

  return sum;

  function verifyIncreasing(report: number[]): boolean {
    for (let i = 0; i < report.length - 1; i++) {
      const a = report[i];
      const b = report[i + 1];
      if (a >= b || b - a > 3) {
        return false;
      }
    }
    return true;
  }

  function verifyDecreasing(report: number[]): boolean {
    for (let i = 0; i < report.length - 1; i++) {
      const a = report[i];
      const b = report[i + 1];
      if (a <= b || a - b > 3) {
        return false;
      }
      continue;
    }
    return true;
  }
}

function countSafeReports(reports: number[][]): number {
  let sum = 0;
  for (const report of reports) {
    if (report[0] > report[1]) {
      if (verifyDecreasing(report)) {
        sum++;
      }
    }
    if (verifyIncreasing(report)) {
      sum++;
    }
  }

  return sum;

  function verifyIncreasing(report: number[]): boolean {
    for (let i = 0; i < report.length - 1; i++) {
      const a = report[i];
      const b = report[i + 1];
      if (a >= b || b - a > 3) {
        return false;
      }
    }
    return true;
  }

  function verifyDecreasing(report: number[]): boolean {
    for (let i = 0; i < report.length - 1; i++) {
      const a = report[i];
      const b = report[i + 1];
      if (a <= b || a - b > 3) {
        return false;
      }
      continue;
    }
    return true;
  }
}
