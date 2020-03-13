import { DateTime } from "luxon";

const searchFlights = async (origin, destination, direct) => {
  const when = DateTime.local()
    .plus({ days: 1 })
    .toFormat("dd/MM/yyyy");
  const todayDate = DateTime.local().toFormat("dd/MM/yyyy");
  console.log("todays date", todayDate);
  console.log("tomorrowsdate", when);

  const query = new URLSearchParams({
    partner: "picky",
    v: 3,
    flyFrom: "WAW",
    to: "ATH",
    dateFrom: todayDate,
    dateTo: when,
    limit: 5
  });
  const url = new URL(`?${query}`, "https://api.skypicker.com/flights");
  console.log("url", url);
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data.data);
};

export default searchFlights;
