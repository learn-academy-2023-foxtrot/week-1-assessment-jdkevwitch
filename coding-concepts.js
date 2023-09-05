// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil"]
// b) Verify and explain: The answer is 5, the reason for this is because the output is displying the length of the array rather than the array's contents.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: The output will be 9 because the length is displaying the number of chracters within the string.
// b) Verify and explain: As I suspected and was curious of, the output was actually 10 because it also counted the space in the string. I could not remember if that was part of it.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: My assumption - due to the indexes true scope evading my mind - is that it will output the greeting 4 separate times.
// My other thought was that it may output the letter "l" but the issue with that is that this is a string, not an array.
// b) Verify and explain: After verifying, it appears that my gut feeling was actually not for off. The output was "o", which immediately remembered we are working with indexes where counting begins at 0.
// This outcome does make sense to me and I will be aure to pay more mind in the future to it.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: After learning from the previous question, I believe the output to be "Ruby" as that falls within the index placement of one in the displayed array.
// b) Verify and explain: After verification, I was correct in my analysis. The variable "index" was calling for the index slot of 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]

// console.log(weekendDays.toUpperCase())

// a) Your answer: The output will cause both values to log in capital case.
// ["SATURDAY", "SUNDAY"]
// b) Verify and explain: When I ran the code, it logged "TypeError: weekendDays.toUpperCase is not a function"
// After a little research I have found that the method of "toUpperCase()" does not work on arrays"
// I realized that I can utilize a loop to help fix this issue.
// for(let i = 0; i = weekendDays.toUpperCase;){
    // console.log(weekendDays)
// }

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: The console log is calling for the "typeof" of the dataTypes array with the property of ".length"
// This is going to output "number" because "dataTypes.length" would output a numeric value.
// b) Verify and explain: After verifying, the output is in fact "number." This outcome was due to the reasoning within my explanation above.
