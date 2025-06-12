function overlapPoint(c1, c2) {
  const [x1, y1, r1_raw] = c1;
  const [x2, y2, r2_raw] = c2;

  const r1 = Math.abs(r1_raw);
  const r2 = Math.abs(r2_raw);

  const minX = Math.min(x1 - r1, x2 - r2);
  const maxX = Math.max(x1 + r1, x2 + r2);
  const minY = Math.min(y1 - r1, y2 - r2);
  const maxY = Math.max(y1 + r1, y2 + r2);

  let count = 0;

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      const inCircle1 = (x - x1) ** 2 + (y - y1) ** 2 <= r1 ** 2;
      const inCircle2 = (x - x2) ** 2 + (y - y2) ** 2 <= r2 ** 2;

      if (inCircle1 && inCircle2) {
        count++;
      }
    }
  }

  return count;
}