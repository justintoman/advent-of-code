import { day } from "./2024";

day(6, (input) => {
  const lines = input.split("\n");
  const part1Visited = new Set<string>();
  return {
    part1() {
      const guardChars = ["v", "<", "^", ">"] as const;
      const startY = lines.findIndex((line) =>
        guardChars.some((char) => line.includes(char))
      );
      const startX = lines[startY].indexOf(
        guardChars.find((char) => lines[startY].includes(char))!
      );
      const pos = [startX, startY];
      let direction = lines[startY][startX] as (typeof guardChars)[number];
      const directions: Record<(typeof guardChars)[number], [number, number]> =
        {
          ">": [1, 0],
          "<": [-1, 0],
          "^": [0, -1],
          v: [0, 1],
        };
      while (true) {
        part1Visited.add(pos.join(","));
        const [dx, dy] = directions[direction];
        pos[0] += dx;
        pos[1] += dy;
        const [x, y] = pos;
        if (y < 0 || y > lines.length - 1) {
          break;
        }

        if (x < 0 || x > lines[y].length - 1) {
          break;
        }

        const char = lines[y][x];
        if (char === ".") {
          continue;
        }
        if (char === "#") {
          direction =
            guardChars[(guardChars.indexOf(direction) + 1) % guardChars.length];
          pos[0] -= dx;
          pos[1] -= dy;
          continue;
        }
      }
      return part1Visited.size;
    },
    part2() {
      const guardChars = ["v", "<", "^", ">"] as const;
      const startY = lines.findIndex((line) =>
        guardChars.some((char) => line.includes(char))
      );
      const startX = lines[startY].indexOf(
        guardChars.find((char) => lines[startY].includes(char))!
      );

      let count = 0;
      for (let objY = 0; objY < lines.length; objY++) {
        for (let objX = 0; objX < lines[objY].length; objX++) {
          if (!part1Visited.has([objX, objY].join(","))) {
            continue;
          }
          if (lines[objY][objX] !== ".") {
            continue;
          }
          const pos = [startX, startY];
          let direction = lines[startY][startX] as (typeof guardChars)[number];
          const directions: Record<
            (typeof guardChars)[number],
            [number, number]
          > = {
            ">": [1, 0],
            "<": [-1, 0],
            "^": [0, -1],
            v: [0, 1],
          };
          const visited = new Set<string>();
          while (true) {
            const loc = pos.join(",") + "," + direction;
            if (visited.has(loc)) {
              count++;
              break;
            }
            visited.add(loc);
            const [dx, dy] = directions[direction];
            pos[0] += dx;
            pos[1] += dy;
            const [x, y] = pos;
            if (y < 0 || y > lines.length - 1) {
              break;
            }

            if (x < 0 || x > lines[y].length - 1) {
              break;
            }

            const char = lines[y][x];
            if (char === "#" || (y === objY && x === objX)) {
              direction =
                guardChars[
                  (guardChars.indexOf(direction) + 1) % guardChars.length
                ];
              pos[0] -= dx;
              pos[1] -= dy;
              continue;
            }
          }
        }
      }
      return count;
    },
  };
});
