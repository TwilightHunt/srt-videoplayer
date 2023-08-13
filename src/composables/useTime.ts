export function secondsToTimePad(unformatted: number) {
  const time = new Date(unformatted * 1000);
  const localHours = time.getHours() + time.getTimezoneOffset() / 60;
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const hours = localHours.toString().padStart(2, "0");
  return `${localHours ? hours + ":" : ""}${minutes}:${seconds}`;
}
