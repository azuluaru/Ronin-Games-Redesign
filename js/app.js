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
