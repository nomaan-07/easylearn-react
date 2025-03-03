export function getToday(locale) {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (locale === "en") return today.toLocaleDateString("en-US", options);

  const date = today.toLocaleDateString("fa-IR", options);

  const [rest, dayName] = date.split(", ");
  const [year, month, day] = rest.split(" ");

  return `${dayName}، ${day} ${month} ${year}`;
}
