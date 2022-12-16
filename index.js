var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655], // change for this one will be 984655
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

console.log(finances.length) // print out the total number of months, says 86 but I counted 85 is the first one counts at 0?



// TASK: 
// The total number of months included in the dataset.
// HOW TO:
// figure out how many rows there are in the finances variable
// the number of rows in that array = the length of that array ✅

// TASK: 
// The net total amount of Profit/Losses over the entire period.
// HOW TO:
// add everything together
// probably a loop

// TASK: 
// The average of the changes in Profit/Losses over the entire period.
// HOW TO:
// calculate each change by subtracting the previous month from this month
// You will need to track what the total change in profits is from month to month and then find the average.
// (Total/total number of changes) ===> total change/(months - 1)
// maybe put all the changes into an array? using .push(...) ?
// FURTHER HOW TO:
// You will need to track what the total change in profits is from month to month and then find the average.
// (Total/Number of months)
// The bottom data point should read:
// (Total/Number of records)
// So in this case, we would have:
// (Total/(Number of months - 1)
// Because there will be one fewer change than there are data points.
// For example, if the profit/loss were:
// 110
// 50
// 125 
// Then the month-over-month changes would be
// -60 (from the first month to the second month... 50 - 110)
// 75 (from the second month to the third month... 125 - 50) 
// And the average of those would be: 
// (-60 + 75)/2 or 7.5
// Dividing by 2 because there are two changes (-60 and 75) even though there are three months of data.
// So, generally, when calculating the average, you can divide the sum of the changes by (months - 1)


// TASK:
// The greatest increase in profits (date and amount) over the entire period.
// HOW TO:
// start with 0
//   check the last increase. If it's bigger than 0, keep track of the new biggest one.
//   in a loop

// TASK:
// The greatest decrease in losses (date and amount) over the entire period.
// HOW TO:
// the requirement says 'the greatest decrease in losses (date and amount) over the entire period'
// it should say 'the greatest decrease in profits (date and amount) over the entire period'

// FROM STUDENT:
// So I created a "for" loop to calculate the difference between the numbers. All I would say is make sure you start the loop at 1 otherwise an error is produced and it took me hours to get around 

//------------------------------------------------------

// console output format:

// Financial Analysis
// ----------------------------
// Total Months: 25
// Total: $2561231
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)

// (the numbers in this aren't correct, but the wording is)

//------------------------------------------------------

// An example of calculating the average change over the first 5 months:
// var finances = [
//    ['Jan-2010', 867884], // A
//    ['Feb-2010', 984655], // B
//    ['Mar-2010', 322013], // C
//    ['Apr-2010', -69417], // D
//    ['May-2010', 310503]  // E

//    To calculate the average change, I need to
//    1. calculate the change from month to month
//    2.    .... for each month
//        First change is B - A: 984655 - 867884 =  116771
//        Next  change is C - B: 322013 - 984655 = -662642
//        Next  change is D - C: -69417 - 322013 = -391430
//        Next  change is E - D: 310503 - -69417 =  379920

//    3. Add all those changes together
//    116771 + -662642 + -391430 + 379920 = -557381

//    4. Divide by the total number of changes I calculated
//    -557381 / 4 = -139345.25

//------------------------------------------------------

// How do I reference a value in a TWO-DIMENSIONAL array?
// A two-dimensional array is an array that contains arrays. Like this:
// var myArray = [ [ "Dan", 10 ], [ "Tucker", 42 ], [ "Hunter", 666 ], [ "Andrew", 99 ] ];
// If I use bracket notation, I can grab an individual element. Like this:
// myArray[2] is [ "Hunter", 666 ]
// If I want to just get Hunter's name, I can get it like this:
// myArray[2][0]
// OR I could do this: var anotherArray = myArray[2];
// var primeroElemento = myFavorite[0];