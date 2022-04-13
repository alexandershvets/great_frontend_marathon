function convertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;

  return `${hours}:${minutes.slice(-2)}`;;
}

function convertDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleString('en-US', { day: 'numeric' });
  const month = date.toLocaleString('en-US', { month: 'short' });

  return `${day} ${month}`;
}

export {
  convertTime,
  convertDate
};