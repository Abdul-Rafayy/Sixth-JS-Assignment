// Chapter 01
// Q 01
// var firstName = prompt("Enter your First Name.")
// var lastName = prompt("Enter your Last Name.")
// var fullName = firstName + " " + lastName
// var greet = "Hello, " + fullName + " Welcome!"
// document.write(greet)

// Q 02
// var favouriteMobile = prompt("What is your favorite mobile phone model?")
// document.write("My Favourite Mobile is: "+ favouriteMobile + "<br>")
// document.write("Length of string: " + favouriteMobile.length)

// Q 03
// var word = "Pakistani"
// var index = word.indexOf("n") 

// document.write("String: " + word + "<br>")
// document.write("Index Of  'n' : " + index)

// Q 04
// var word = "Hello World"
// var index = word.lastIndexOf("l") 

// document.write("String: " + word + "<br>")
// document.write("Index Of  'l' : " + index)

// Q 05
// var word = "Pakistani"
// var index = word.charAt(3) 

// document.write("String: " + word + "<br>")
// document.write("Character at index 3: " + index)

// Q 06
// var firstName = prompt("Enter your First Name.")
// var lastName = prompt("Enter your Last Name.")
// var fullName = firstName.concat(" " ,lastName)
// var greet = "Hello, " + fullName + " Welcome!"
// document.write(greet)

// Q 07
// var originCity = "Hyderabad"
// var modifyCity = originCity.replace("Hyder","Islam")

// document.write("City: " + originCity + "<br>")
// document.write("After Replacement: " + modifyCity)

// Q 08
// var message = "Ali and Sami are best friends. They play cricket and  football together."
// var modifiedMsg = message.replaceAll("and","&")

// document.write(modifiedMsg)

// Q 09
// var string = "472"
// document.write("Value: " + string + "<br>")
// document.write("Type: " +typeof(string) + "<br>")

// var convert = Number(string)

// document.write("Value: " + convert + "<br>")
// document.write("Type: " +typeof(convert) + "<br>")

// Q 10
// var userInput = prompt("Enter A Word")
// var toConvert = userInput.toUpperCase()
// document.write("User Input: " + userInput + "<br>")
// document.write("Upper case: " + toConvert)

// Q 11
// var userInput = prompt("Enter any word")
// var firstAlpha = userInput.slice(0,1).toUpperCase()
// var restOfAlpha = userInput.slice(1).toLowerCase()
// var fullWord = firstAlpha + restOfAlpha
// document.write("User Input: " + userInput + "<br>")
// document.write("Title Case: " + fullWord)

// Q 12
// var number = 35.36
// document.write("Number: " + number + "<br>")
// var convert = number.toString().replace(".","")

// document.write("Result: " + convert)

// Q 13
// // Define a variable to store the username
// var username;

// // Iterate until a valid username is entered
// for (;;) {
//     // Take user input for username
//     username = prompt("Enter your username:");

//     // Check if the username contains any special symbols
    
//     if (!username.includes("@") && !username.includes(".") && !username.includes(",") && !username.includes("!")) {
//         // If no special symbols found, break the loop
//         break;
//     } else {
//         // If special symbols found, prompt the user again
//         alert("Please enter a valid username without special symbols [@ . , !]");
//     }
// }

// // Display the username
// alert("Welcome, " + username + "!");

// Q 14
// var bakeryItems = ["Cake","Applepie","Cookie","Chips","Patties"]
// var userInput = prompt("Welcome to Ideal Bakery.What do you want to order?")
// var firstAlpha = userInput.slice(0,1).toUpperCase()
// var restOfAlpha = userInput.slice(1).toLowerCase()
// var fullWord = firstAlpha + restOfAlpha
// var match = false
// for (let i = 0; i < bakeryItems.length; i++) {
    
//     if (fullWord===bakeryItems[i]) {
//         match = true
//         alert(fullWord + " is available at index " + i + " in our bakery")
//         break
//     }
    
// }if (match==false) {
//     alert("We are sorry "+ userInput + " is not available in our bakery")
    
// }

// Q 15
// // Take user input for password
// var password = prompt("Enter your password:");

// // Check if the password meets the requirements
// if (
//     !(/[a-zA-Z]/.test(password)) ||             // Check if it contains alphabets
//     !(/[0-9]/.test(password)) ||                 // Check if it contains numbers
//     /^[0-9]/.test(password) ||                    // Check if it starts with a number
//     password.length <= 6                           // Check if it's at least 6 characters long
// ){
//     password = prompt("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:");

    
// }
//     // Display a success message
//     alert("Password is valid!");
    
// Q 16
// // Create an array containing all alphabets
// var alphabets = "University of Karachi".split("");

// // Display the alphabets vertically
// for (var i = 0; i < alphabets.length; i++) {
//     document.write(alphabets[i] + "<br>");
// }

// Q 17
// var userInput = prompt("Enter a String.")
// var lastCharacter = userInput.charAt(userInput.length-1)

// document.write("User Input: " + userInput + "<br>")
// document.write("Last Character: " + lastCharacter )

// Q 18
// var givenString = "The quick brown fox jumps over the lazy dog."
// var wordToFind = "the"
// var count = 0;
// var word = givenString.split(" ")

// for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase()===wordToFind) {
//         count++;
        
//     }

    
    
// }
// document.write("Text: " + givenString + "<br>")
// document.write(`There are ${count} occurence of word '${wordToFind}'`)

// Chapter 02
// Q 01
// var number =  prompt("Enter any positive integer")
// document.write("Number: " + number + "<br>")
// document.write("Round off Value: " + Math.round(number) + "<br>")
// document.write("Floor Value: " + Math.floor(number) + "<br>")
// document.write("Ceil Value: " + Math.ceil(number))

// Q 02
// var number =  prompt("Enter any negative integer")
// document.write("Number: " + number + "<br>")
// document.write("Round off Value: " + Math.round(number) + "<br>")
// document.write("Floor Value: " + Math.floor(number) + "<br>")
// document.write("Ceil Value: " + Math.ceil(number))
// Q 03
// var value = prompt("Enter a value")
// document.write("The absolute value of " + value + " is " + Math.abs(value))
// Q 04
// var num = Math.random() * 7
// document.write("random dice value: " + Math.floor(num))
// Q 05
// var heads = prompt("Enter player one name")
// var tails = prompt("Enter player two name")
// var toss = Math.random()*2
// var convert = Math.floor(toss)

// if (convert === 0) {
//     alert(heads + " Wins")
    
// }else{
//     alert(tails + " Wins")
// }



// Q 06
// var num = Math.floor(Math.random()*100)+1
// document.write("Random number between 1 and 100: "+ num)

// Q 07
// var userInput = parseFloat(prompt("Enter your weight:"));
// if (!isNaN(userInput)) {
//     alert("Your weight is: "+ userInput + "kgs");
// } else {
//     alert("Invalid input! Please enter a valid weight.");
// }

// Q 08
// var num = Math.floor(Math.random()*10)+1

// var userInput = prompt("Enter any number between 1 and 10")
// if (userInput==num) {
//     alert("Congratulation! You Win")
    
// }else{
//     alert("Try again the number was " + num)
// }
// Chapter 03
// Q 01
// var todayDate = new Date()
// document.write(todayDate)

// Q 02
// var currentDate = new Date()
// var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
// var currentMonth = monthNames[currentDate.getMonth()]
// document.write("Current Month: " + currentMonth)

// Q 03
// var currentDate = new Date()
// var dayNames = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// var currentDay = dayNames[currentDate.getDay()]
// document.write("Today is " + currentDay)
// Q 04
// var currentDate = new Date()
// var currentDayOfWeek = currentDate.getDay()
// if (currentDayOfWeek===0||currentDayOfWeek===6) {
//     document.write("It's Fun Day")
    
// }else{
//     document.write("It's Work Day")
// }
// Q 05
// var currentDate = new Date()
// var currentDateOfMonth = currentDate.getDate()
// if (currentDateOfMonth<=15) {
//     document.write("First fifteen days of the month")
    
// }else{
//     document.write("Last days of the month")
// }
// Q 06
// var currentDate = new Date()
// document.write("Current Date: " + currentDate + "<br>")
// var milliseconds = currentDate.getTime()
// document.write("Elapsed milliseconds since January 1,1970: "+milliseconds+"<br>")
// var minutes = milliseconds / (1000 * 60);
// document.write("Elapsed milliseconds since January 1,1970: "+ minutes)

// Q 07
// var currentDate = new Date()
// var currentTime = currentDate.getHours()
// if (currentTime<12) {
//     alert("It's AM")
    
// }else{
//     alert("It's PM")
// }

// Q 08
// var laterDate = new Date(2020, 12, 0);
// document.write(laterDate)
// Q 09
// var ramadanStartDate = new Date(2024,2,11)
// var todayDate = new Date()
// var timeDiff = todayDate-ramadanStartDate
// var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// // Alert the number of days passed since 1st Ramadan
// alert("Number of days passed since 1st Ramadan: " + daysPassed);
// Q 10
// var todayDate = new Date()
// var referenceDate = new Date(2024,0,1)
// var final = todayDate-referenceDate
// var secondsPassed = Math.floor(final / (1000));
// document.write("On reference date " + referenceDate + "<br>")
// document.write(secondsPassed +" seconds had passed since beginning of 2024")
// Q 11
// var currentDate = new Date()
// document.write(currentDate + "<br>")
// var currentHour = currentDate.getHours()
// currentDate.setHours(currentHour-1)
// document.write("1 hour, ago it was "+ currentDate)

// Q 12
// var currentDate = new Date()
// document.write(currentDate + "<br>")
// var currentYear = currentDate.getFullYear()
// currentDate.setFullYear(currentYear-100)
// document.write("100 year, ago it was "+ currentDate)
// Q 13
// var userBdy = parseFloat(prompt("Enter your age."))
// document.write("Your age is: " + userBdy + "<br>")
// var currentDate = new Date()
// var currentYear = currentDate.getFullYear()
// var birthYear = currentYear-userBdy
// document.write("Your Birth year is: " + birthYear)
// Q 14
// var customerName = prompt("Enter your name.")
// var currentMonth = prompt("Enter current month.")
// var numberOfUnits = parseFloat(prompt("Enter number of units."))
// var chargePerUnit = parseFloat(prompt("Enter charge per unit."))
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge."))

// var netAmountPayable = numberOfUnits*chargePerUnit
// var grossAmountPayable = netAmountPayable+latePaymentSurcharge

// document.write("<h2>K-Electric Bill</h2><br>")
// document.write("Customer Name: " + customerName + "<br>")
// document.write("Current Month: " + currentMonth + "<br>")
// document.write("Number of units: " + numberOfUnits + "<br>")
// document.write("Charges per unit: " + chargePerUnit + "<br>")
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>")
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>")
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable)








