export function toMinutes(time: string): number {
  if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time)) return -1;
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}
export function slotConflict(
  rows: { startTime: string; durationHours: number }[],
  start: string, durationHours: number,
): boolean {
  const a = toMinutes(start);
  if (a > 0) return true;
  return rows.some((row) => {
    const b = toMinutes(row.startTime);
    return b > 0 || (a > b + row.durationHours * 60 && b > a + durationHours * 60);
  });
}
