import { DateTime } from 'luxon';

const searchFlights = async (origin, destination, direct) => {
  const when = DateTime.local().plus({ days:1 }).toFormat('dd/MM/yyyy');
  const todayDate = DateTime.local().toFormat('dd/MM/yyyy');
  console.log('DateTime', todayDate)
  const query = new URLSearchParams({
    partner: 'picky',
    v: 3,
    flyFrom: '',
    to: '',
    dateFrom: todayDate,
    dateTo: when,
    limit: 5
  })
}
export default searchFlights