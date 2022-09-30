///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1] // acres
const galaAcres = [5, 2, 4, 3, 6, 2, 4] // just making it easier to remind myself what the values represent
const pinkAcres = [1, 5, 4, 2, 1, 5, 4] // acres

const fujiPrice = .89 // $0.89 per pound
const galaPrice = .64 // $0.64 per pound
const pinkPrice = .55 // $0.55 per pound, maybe this was excessive but whatever



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// copy of the arrays so I don't have to scroll for reference
//
    // const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
    // const galaAcres = [5, 2, 4, 3, 6, 2, 4] 
    // const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

let totalAcres = 0; // I needed to declare the variable with a number value outside of the loop, or else I was given an error that totalAcres is undefined

for (let i = 0; i < (fujiAcres.length || galaAcres.length || pinkAcres.length); i++) { 
    totalAcres = totalAcres + ((fujiAcres[i] || 0) + (galaAcres[i] || 0) + (pinkAcres[i] || 0));
};

// I used || (or) in my stopping condition because I want to make sure that if the arrays happen to be different lengths, the loop will still completely iterate through the longest array.
// For my code block in the for loop, I needed to add the value of the current index (determined by i) of EACH array together, so as i increased, I needed to access that index at each array and add the three values of that index together, and save that added value to the totalAcres variable.

console.log(`Total acres picked this week: ${totalAcres}.`); 

// I prefer to add the value to a string just so I can understand my console logs better. 
// Doing the math manually, I found a total of 63. This logged 'Total acres picked this week: 63.' to the console, so the math worked properly.



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let totalDaysPicked = (fujiAcres.length || galaAcres.length || pinkAcres.length); 

// I wanted to store the number of days picked as a variable so that I can avoid hard-coding any numbers where possible
// Again, I decided to use || (or) because I wanted to make sure that I am accounting for the longest array, just in case one happens to be longer
    // Although I didn't test what would happen with one array being longer

// console.log(totalDaysPicked); 
//     logged '7' to the console. Math looks correct

let averageDailyAcres = totalAcres / totalDaysPicked; // Math should be: average = 63 acres / 7 days picked

console.log(`Average daily acres picked: ${averageDailyAcres}.`); 

// Logged 
    // Average daily acres picked: 9. // 63/7 = 9, so math looks correct.


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

// CODE HERE

let acresLeft = 174 
let daysLeft = 0    // Changed the variable name from days to daysLeft so I can understand its context better

while (acresLeft > 0) {
    acresLeft -= averageDailyAcres;
    daysLeft++
};

// Used the -= assignment operator to assign acresLeft a new value of (acresLeft - averageDailyAcres).

console.log(`Days of work left: ${daysLeft}.`);
    // Logged 
        // Days of work left: 20.


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// 1 acre = 6.5 tons
for (let i = 0; i < (fujiAcres.length || galaAcres.length || pinkAcres.length); i++) {
    fujiTons.push((fujiAcres[i] || 0) * 6.5)
    galaTons.push((galaAcres[i] || 0) * 6.5)
    pinkTons.push((pinkAcres[i] || 0) * 6.5)
};

// Used || (or) again in my stopping condition, just to account for the chance that if one array is longer, the loop still iterates through that entire array.

console.log('Fuji picked, in tons:', fujiTons);
console.log('Gala picked, in tons:', galaTons);
console.log('Pink picked, in tons:', pinkTons);
    // Didn't use template literals in these, because I wanted the variables to be logged as arrays, not as strings.
        // Logged
            // Fuji picked, in tons: [
            //    13, 19.5, 19.5,
            //    13,   13,   13,
            //   6.5
            // ]
            // Gala picked, in tons: [
            //   32.5, 13, 26,
            //   19.5, 39, 13,
            //     26
            // ]
            // Pink picked, in tons: [
            //   6.5, 32.5,   26,
            //    13,  6.5, 32.5,
            //    26
            // ]


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// I wanted variables for the total number of tons per variety in order to more easily convert those numbers to pounds
let totalFujiTons = 0;
let totalGalaTons = 0;
let totalPinkTons = 0;

// I found the .reduce() method for finding the sum of all elements in an array
totalFujiTons = fujiTons.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
);
totalGalaTons = galaTons.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
);
totalPinkTons = pinkTons.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
);

// console.log(totalFujiTons, totalGalaTons, totalPinkTons);
    // Logged 97.5, 169, 143

fujiPounds = totalFujiTons * 2000;
galaPounds = totalGalaTons * 2000;
pinkPounds = totalPinkTons * 2000;

console.log(`Fuji: ${fujiPounds} lbs. Gala: ${galaPounds} lbs. Pink: ${pinkPounds} lbs.`);

    // Logged 
        // Fuji: 195000 lbs. Gala: 338000 lbs. Pink: 286000 lbs.


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// Copy of variables for easier reference
    // const fujiPrice = // $0.89 per pound
    // const galaPrice = // $0.64 per pound
    // const pinkPrice = // $0.55 per pound

// Set to zero to give the variables a number value
let fujiProfit = 0; 
let galaProfit = 0; 
let pinkProfit = 0; 

// Pounds of apples * price per pound
fujiProfit = fujiPounds * fujiPrice;
galaProfit = galaPounds * galaPrice;
pinkProfit = pinkPounds * pinkPrice;

console.log(`Fuji sales: $${fujiProfit}.`);
console.log(`Gala sales: $${galaProfit}.`);
console.log(`Pink sales: $${pinkProfit}.`);

    // Logged 
        // Fuji sales: $173550.
        // Gala sales: $216320.
        // Pink sales: $157300.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log(`Total profits: $${totalProfit}.`);
    // Logged
        // Total profits: $547170.