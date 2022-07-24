function getReadableDuration(duration) {
  const minutes = duration % 60;
  const hours = (duration - minutes) / 60;
  return `${hours}ч ${minutes}мин`;
}
export default getReadableDuration;