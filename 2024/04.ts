import { day } from "./2024";

day(4, (input) => {
  const lines = input.split(/\r?\n/);
  return {
    part1() {
      const words = new Set<string>();
      for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[y].length; x++) {
          if (lines[y][x] === "X") {
            [-1, 0, 1].forEach((dx) => {
              [-1, 0, 1].forEach((dy) => {
                if (dx === 0 && dy === 0) return;
                for (let i = 0; i < 4; i++) {
                  if (lines[y + dy * i]?.[x + dx * i] !== "XMAS".charAt(i))
                    break;
                  if (i === 3) {
                    const word = `${y},${x}|${dx},${dy}`;
                    words.add(word);
                  }
                }
              });
            });
          }
        }
      }
      return words.size;
    },
    part2() {
      let count = 0;

      for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[y].length; x++) {
          if (lines[y + 1]?.[x + 1] !== "A") {
            continue;
          }
          if (lines[y][x] === "S") {
            if (lines[y][x + 2] === "S") {
              if (lines[y + 2]?.[x] === "M" && lines[y + 2]?.[x + 2] === "M") {
                count++;
              }
            } else if (lines[y + 2]?.[x] === "S") {
              if (lines[y][x + 2] === "M" && lines[y + 2]?.[x + 2] === "M") {
                count++;
              }
            }
          } else if (lines[y][x] === "M") {
            if (lines[y][x + 2] === "M") {
              if (lines[y + 2]?.[x] === "S" && lines[y + 2]?.[x + 2] === "S") {
                count++;
              }
            } else if (lines[y + 2]?.[x] === "M") {
              if (lines[y][x + 2] === "S" && lines[y + 2]?.[x + 2] === "S") {
                count++;
              }
            }
          }
        }
      }

      return count;
    },
  };
});
