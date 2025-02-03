export function formatDate(time) {
  const date = new Date(time);
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day}-${month + 1} ${hours}:${minutes}`;
}
