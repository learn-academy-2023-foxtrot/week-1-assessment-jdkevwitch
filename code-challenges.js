// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// First we need to apply concatination to add the arrays together.
// padres1984WorldSeriesRuns.concat(padres1984WorldSeriesRuns)
// Now we need the console to output the total length of the newly added arrays.
// console.log(padres1984WorldSeriesRuns.length)

// padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padres1984WorldSeriesRuns.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
// We need to apply the reverse property to flip the characters entirely backwards.
// console.log(currentCohort.reverse)

// Above I forgot to tag the reverse property onto a new variable

// const backwardsCohort = (currentCohort.reverse())
// console.log(backwardsCohort)

// I have once again improperly used syntax, it returned that currentCohort.reverse is not a function.
// When it returned that it dawned on me that eve n if it worked, it would only switch the values.
// I need to emply the "split()" method.

// const backwardsCohort = currentCohort.("");
// console.log(backwardsCohort)

// I am on the right track here, but before it gets too complicated, I have one other thing I will try: a forloop.

let backwardsCohort = ""
for (let i = backwardsCohort.length - 1; i >= 0; i--) [
    backwardsCohort += currentCohort[i]
]
console.log(backwardsCohort)

// it seems to be outputting nothing at all at this point, and rather than toil with it, I shall leave it as is

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
