export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function differenceInDays(date1, date2) {
  const timeDiff = Math.abs(date1.getTime() - date2.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}
