// Purpose of this javascript 
// ➔ create an array of dishes,
// ➔ pick by day
// ➔ show it on the page.
// What you will learn in this javascript ➔ variables, arrays, Date() function, getDay() function, innerHTML

// special.js

// Define specials for each day (Sunday = 0, Monday = 1, etc.)
const dailySpecials = [
    "Sweet and Sour Pork",  // Sunday
    "Peking Duck",          // Monday
    "Kung Pao Chicken",     // Tuesday
    "Beef Stir Fry",        // Wednesday
    "Mapo Tofu",            // Thursday
    "Seafood BBQ",          // Friday
    "Steamed Fish"          // Saturday
  ];
  
  // Get today's day number (0-6)
  const today = new Date().getDay();
  
  // Pick the special based on the day
  const todaysSpecial = dailySpecials[today];
  
  // Find the special div and insert the special
  const specialDiv = document.getElementById("special");
  specialDiv.innerHTML = `<h2>Today's Special:</h2><p>🍽️ ${todaysSpecial}</p>`;
  