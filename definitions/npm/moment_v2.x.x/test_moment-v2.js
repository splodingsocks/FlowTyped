// @flow
import moment from 'moment';
import { duration } from 'moment';

// $ExpectError
import { moment } from 'moment';

// Parse
const m3: moment = moment([123, 123]);

// $ExpectError
moment.unix('1234');

// Display
const A: Date = moment().toDate();
const x: string = moment().toISOString();

// Get + Set
// $ExpectError
moment().millisecond().seconds();
moment().milliseconds(100).seconds();

// Manipulate
const m1: moment = moment().add(2, 'day');
moment().add({day: 1})
const m2: moment = moment().subtract(1, 's');
moment().subtract({day: 1})
const m: moment = moment.utc();

// Query
moment().isBefore();
moment().isSame();
moment().isAfter();
moment().isSameOrBefore();
moment().isSameOrAfter();
moment.isDate(new Date());


// CalendarTime
moment().calendar(null, {
  sameDay: 'HH:mm',
});
moment().calendar(null, {
  sameDay: () => 'HH:mm',
});
// $ExpectError
moment().calendar(null, {
  sameDay: (a: number) => 'HH:mm',
});
// $ExpectError
moment().calendar(null, {
  sameDay: 2,
});
// $ExpectError
moment().calendar(null, {
  sameElse: () => {},
});


// UTC offsets
let n: number;
n = moment().utcOffset();
n = m.utcOffset(0).utcOffset();
n = m.utcOffset(-1.5).utcOffset();
n = m.utcOffset(-90).utcOffset();
n = m.utcOffset('-01:30').utcOffset();
n = m.utcOffset('+00:10').utcOffset();

// Optional 2nd and 3rd arguments
n = m.utcOffset(0, true).utcOffset();
n = m.utcOffset(0, false).utcOffset();
n = m.utcOffset(0, true, true).utcOffset();


// Durations
let d: duration;
d = duration(1, 'second');
d = moment.duration(100);
d = duration({
  months: 2,
  years: 3,
});
d.humanize();
// $ExpectError
d.months().years();
