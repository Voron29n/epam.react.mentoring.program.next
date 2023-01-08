export const mapRuntimeToString = (runtimeValue: number | string): string => {
  const runtimeInMinutes =
    typeof runtimeValue === 'string' ? parseInt(runtimeValue) : runtimeValue;

  if (runtimeInMinutes === 0) {
    return '0';
  }
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const hoursStr = hours > 0 ? `${hours}h` : '';
  const minutesStr = minutes > 0 ? `${minutes}min` : '';

  return `${hoursStr} ${minutesStr}`.trim();
};
