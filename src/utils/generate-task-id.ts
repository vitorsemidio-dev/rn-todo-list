export function generateTaskId(): string {
  return new Date().getTime().toString();
}
