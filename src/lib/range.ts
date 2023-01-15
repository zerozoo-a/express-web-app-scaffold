export function* range(l: number) {
  if (l < 0) return 0;
  let i = 0;
  while (i < l) {
    yield ++i;
  }
}
