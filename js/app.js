$(document).foundation();

// Today's Event Switcher START
var today = new Date();
var dayOfWeek = today.getDay();

  console.log(today);
  console.log(dayOfWeek);

var todayevent;

if (dayOfWeek == 0)
    { todayevent = 'Sunday'; }

  else if (dayOfWeek == 1)
    { todayevent = 'Monday'; }

  else if (dayOfWeek == 2)
    { todayevent = 'Tuesday'; }

  else if (dayOfWeek == 3)
    { todayevent = 'Wednesday'; }

  else if (dayOfWeek == 4)
    { todayevent = 'Thursday'; }

  else if (dayOfWeek == 5)
    { todayevent = 'Friday'; }

  else if (dayOfWeek == 6)
    { todayevent = 'Saturday'; }

  else
    { todayevent = 'See Our Event Page'; }

document.getElementById('todaysevent').innerHTML = todayevent;
// Today's Event Switcher END
