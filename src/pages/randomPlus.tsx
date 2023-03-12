export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = 1; i < result.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [result[i], result[random]] = [result[random], result[i]];
  }
  return result;
}
export function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
export function randomInt(min: number, max: number) {
  return Math.round(randomNumber(min, max));
}
