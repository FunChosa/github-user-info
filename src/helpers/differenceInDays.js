export default function differenceInDays(date1, date2) {
  const timeDiff = Math.abs(date1.getTime() - date2.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}
