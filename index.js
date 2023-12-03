// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let FirstName = prompt("Enter First user Name")
// let LastName = prompt("Enter Last user Name")

// let fullName = ` ${FirstName} ${LastName} `
// console.log(fullName)
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let favoriteMobile = "samsung Galaxy S6 Edge Plus "

console.log(`My favourite phone is: ${favoriteMobile} 
Length of string:${favoriteMobile.length} `)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let countryName = "pakistan"

console.log( `Index of n :${countryName.indexOf("n")}`)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let letter = "Hello World";
console.log(`string ${letter}
lastIndexOf of "l: ${letter.lastIndexOf("l")}`)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let character = "Pakistani"

console.log(`string ${character}
character at index 3: ${character.charAt(3)}
`)

// 6. Repeat Q1 using string concat() method.



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


let city = "Hyderabad"
console.log(` city :${city} 
 After replacement: ${city.replace("Hyder" ,"Islam")}`)

//  8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let sentence = "Ali and Sami are best friends. They play cricket and football together."
console.log(`${sentence.replaceAll("and"  ,  "&")}`)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

let str = "472";
console.log(`Value ${str}  
type: ${typeof str} 
Value ${str}
Type: ${typeof parseInt(str)}     
`)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

let userInput ="peanut";
console.log(`user input : ${userInput}
 uppercase : ${userInput.toUpperCase()}`)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

let word = "javascript"
console.log(`user input : ${word} 
Title Case: ${word.charAt(0).toUpperCase() + word.slice(1) }`)
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

let variableNum = 35.36;
let num = variableNum.toString().replaceAll("." , "")

console.log(`${num}`)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

let university = "University of Karachi";

let universityName= university.split("")
console.log(universityName)

// 17. Write a program to display the last character of a user
// input.

let Lastcharacter = "Pakistan"
console.log(`user Input ${Lastcharacter}
Last character of input : ${Lastcharacter.charAt(7)}`)

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.