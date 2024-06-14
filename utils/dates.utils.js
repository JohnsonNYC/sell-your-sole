const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formattedDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const getTwoDaysFromNow = () => {
  const currentDate = new Date();
  const offset = 12;

  let secondDay = new Date(currentDate);
  secondDay.setDate(currentDate.getDate() + offset);

  let formattedDate = `${weekdays[secondDay.getDay()]}, ${
    months[secondDay.getMonth()]
  } ${secondDay.getDate()}`;

  return formattedDate;
};
