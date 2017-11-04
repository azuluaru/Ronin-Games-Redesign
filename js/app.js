$(document).foundation();

// Today's Event Switcher START
var today = new Date();
var dayOfWeek = today.getDay();

  console.log(today);
  console.log(dayOfWeek);

var todayevent;

// Sunday
if (dayOfWeek == 0)
    { todayevent = 'Today&apos;s Event&colon; Open Gaming and Bonus Tournament'; }

// Monday
  else if (dayOfWeek == 1)
    { todayevent = 'Today&apos;s Event&colon; Heroclix'; }

// Tuesday
  else if (dayOfWeek == 2)
    { todayevent = 'Today&apos;s Event&colon; Dice Masters and Star Wars Destiny'; }

// Wednesday
  else if (dayOfWeek == 3)
    { todayevent = 'Today&apos;s Event&colon; Dungeons &amp; Dragons and Pathfinder Society'; }

// Thursday
  else if (dayOfWeek == 4)
    { todayevent = 'Today&apos;s Event&colon; Dungeons &amp; Dragons and Final Fantasy TCG'; }

// Friday
  else if (dayOfWeek == 5)
    { todayevent = 'Today&apos;s Event&colon; Magic Standard 6pm and Magic Commander'; }

// Saturday
  else if (dayOfWeek == 6)
    { todayevent = 'Today&apos;s Event&colon; Magic Booster Draft 6pm'; }

  else
    { todayevent = 'Today&apos;s Event&colon; See Our Event Page'; }

document.getElementById('todaysevent').innerHTML = todayevent;
// Today's Event Switcher END

// Hours of Operation Switcher START
// var today = new Date();
// var dayOfWeek = today.getDay();

  // console.log(today);
  // console.log(dayOfWeek);

var todayhoo;

// Sunday
if (dayOfWeek == 0)
    { todayhoo = 'Sunday&colon; 12&colon;00pm &mdash; 9&colon;00pm'; }

// Monday
  else if (dayOfWeek == 1)
    { todayhoo = 'Monday&colon; 12&colon;00pm &mdash; 10&colon;00pm'; }

// Tuesday
  else if (dayOfWeek == 2)
    { todayhoo = 'Tuesday&colon; 12&colon;00pm &mdash; 10&colon;00pm'; }

// Wednesday
  else if (dayOfWeek == 3)
    { todayhoo = 'Wednesday&colon; 12&colon;00pm &mdash; 12&colon;00pm'; }

// Thursday
  else if (dayOfWeek == 4)
    { todayhoo = 'Thursday&colon; 12&colon;00pm &mdash; 10&colon;00pm'; }

// Friday
  else if (dayOfWeek == 5)
    { todayhoo = 'Friday&colon; 12&colon;00pm &mdash; 12&colon;00pm'; }

// Saturday
  else if (dayOfWeek == 6)
    { todayhoo = 'Saturday&colon; 12&colon;00pm &mdash; 11&colon;00pm'; }

  else
    { todayhoo = 'Hours of Operation on About Page'; }

document.getElementById('todayshoo').innerHTML = todayhoo;

// Hours of Operation Switcher END
