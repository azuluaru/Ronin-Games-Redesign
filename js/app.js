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

// Testimonial Text Randomizer START
var randTest = new Array(
                        "Codi Smith on Facebook Said&colon;<br/> An awesome store, Ed is super patient, helpful, and covered pretty much every question I had. [...]",
                        "Carl Francis on Facebook Said&colon;<br/> I've been a customer of ronin for many years now, I've been so pleased with my experiences. [...]",
                        "Robert Goodall on Facebook Said&colon;<br/> Mighty fine game store. With ample table space and decent hours of operation.",
                        "Gilbert Christopher Antón on Facebook Said&colon;<br/> Hands down the best store in the Bay Area. Great community of people, multitude of games played across different formats and an owner who definitely knows how to treat customers extremely well. [...]",
                        "Ruby Wood on Facebook Said&colon;<br/> This place is amazing! Ed is just an epic guy! I'm at this shop with my best friend any chance I get, and at one point that was every day. [...]",
                        "Tony Perata on Facebook Said&colon;<br/> This is by far one of the best gaming stores I have ever gone to. The owner Ed is very knowledgeable and loves talking in length to his customers about all things nerd related. [...]",
                        "Jonathan Denno on Facebook Said&colon;<br/> Ronin has some of the best staff around who will gladly answer all your questions and explain anything you need to know about the games you can buy and play there. [...]",
                        "Casey Ghysels on Facebook Said&colon;<br/> The owner, Ed, is an asbolute amazing guy. Awesome environment, would play and shop here any day.",
                        "Indy Montoya on Facebook Said&colon;<br/> The only place I go to for MTG. If you're into games, this is the spot to go. Ed has made Ronin the hidden gem of the Bay Area.",
                        "Andrew Heilborn on Facebook Said&colon;<br/> This place is like walking into a living room with a bunch of gamer friends! The only thing it's missing is a couch.",
                        "Sasha Kovalkov on Facebook Said&colon;<br/> My favorite place to hang out. Ed is awesome! Great community and awesome place in general. Also, Pizza express is conveniently nearby. ",
                        "Vicki Hudson on Facebook Said&colon;<br/> Outstanding customer service. A family friendly environment with a present owner who wants to be sure everyone has good, clean fun. [...]",
                        "Carl Evans on Facebook Said&colon;<br/> Friendly staff, good selection, and fair pricing. Small parking lot, but good turnover of spots. [...]" ,
                        "Alex Reinwald on Facebook Said&colon;<br/> This store is Soo cool. Great games. Great people. Owner is very nice and knowledgeable. Can't say enough good things about it.",
                        "Greg James Nunes Jr. on Facebook Said&colon;<br/> Definitely the best we'll rounded hobby store in the bay. Great mtg, hordes/warmachine, warhammer 40k, and pathfinder communities.",
                        "Erick Barnes on Facebook Said&colon;<br/> It's a great place :) I get all my mtg packs and info here!",
                        "Alex Ford on Facebook Said&colon;<br/> Great crowd, great staff. Highly knowledgable. Events are scheduled on highly convinient days.",
                        "Jude Vais on Facebook Said&colon;<br/> Great store. Owner is awesome. Best place for ccgs, rpgs, etc in the east bay.",
                        "Ed Lehto on Facebook Said&colon;<br/> Best store ever! The Owner is wicked cool!",
                        "Peter Bollwerk on Facebook Said&colon;<br/> Best tabletop gaming store in the known multiverse!",
                        "Tawny Walling on Facebook Said&colon;<br/> Awesome friendly atmosphere. The owner was very welcoming and informative. Supports what gaming is all about...FUN!",
                        "Thomas Tesler on Facebook Said&colon;<br/> Awesome place! Store owner and players were great and very friendly! I will definitely be back!",
                        "Blair Gray on Facebook Said&colon;<br/> Great shop, excellent service and really helpful staff, well worth a visit.",
                        "Matthew Kapidian Allen on Facebook Said&colon;<br/> Good people, Good place, good fun. All types of games for all types of players.",
                        "Karl Christopher Mena on Facebook Said&colon;<br/> I love this place but we need to get more pokemon card players so we could start a league there again like before.",
                        "Nick Huggett on Facebook Said&colon;<br/> Very friendly and knowledgable staff, good group of players.",
                        "Jerry M Kirk on Facebook Said&colon;<br/> Excellent Store. Great Knowledgeable Employees, who are Friendly and Just all around Awesome. :)",
                        "Sean Perry on Facebook Said&colon;<br/> Honest. Straightforward. Usually a good group of players.",
                      );

var randNum1 = Math.floor(Math.random() * randTest.length);

var randNum2 = Math.floor(Math.random() * randTest.length);

document.getElementById("randtest1").innerHTML = randTest[randNum1];

document.getElementById("randtest2").innerHTML = randTest[randNum2];

// Testimonial Text Randomizer END
