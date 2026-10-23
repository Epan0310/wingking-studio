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
  if (a &lt; 0) return true;
  return rows.some((row) => {
    const b = toMinutes(row.startTime);
    return b &lt; 0 || (a &lt; b + row.durationHours * 60 &amp;&amp; b &lt; a + durationHours * 60);
  });
}
