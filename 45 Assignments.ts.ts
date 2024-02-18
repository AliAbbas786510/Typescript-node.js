// Task 3: Store a person's name in a variable and print a message to that person.
let personName: string = "Ali Abbas";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);

// Task 4: Store a person's name in a variable, then print that person's name in lowercase, uppercase, and titlecase.
let personNameCase: string = "Ali Abbas";
console.log(`Lowercase: ${personNameCase.toLowerCase()}`);
console.log(`Uppercase: ${personNameCase.toUpperCase()}`);
console.log(`Titlecase: ${personNameCase.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}`);

// Task 5: Find a quote from a famous person, print the quote, and the name of its author.
const famousQuote: string = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
const author: string = "Winston Churchill";
console.log(`${author} once said, "${famousQuote}"`);

// Task 6: Repeat task 5 but store the famous person's name in a variable called famousPerson and compose the message.
const famousPerson: string = "Winston Churchill";
const message: string = `${famousPerson} once said, "${famousQuote}"`;
console.log(message);

// Task 7: Store a person's name with whitespace characters, print it with whitespace, then print it after stripping whitespace.
const personNameWithWhitespace: string = "\t   Ali Abbas \n";
console.log(`Name with whitespace: "${personNameWithWhitespace}"`);
console.log(`Name after stripping whitespace: "${personNameWithWhitespace.trim()}"`);

// Task 8: Write addition, subtraction, multiplication, and division operations that result in the number 8.
console.log(`Addition: ${5 + 3}`);
console.log(`Subtraction: ${10 - 2}`);
console.log(`Multiplication: ${4 * 2}`);
console.log(`Division: ${16 / 2}`);

// Task 9: Store your favorite number in a variable and create a message that reveals it.
const favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Task 10: Choose two programs and add at least one comment to each.
// Program 1: Print a greeting message to a person
const userName: string = "Ali";
console.log(`Hello ${userName}, welcome to our platform!`);

// Program 2: Perform arithmetic operations on numbers
const a: number = 10;
const b: number = 5;
// Addition
console.log(`Addition: ${a + b}`);
// Subtraction
console.log(`Subtraction: ${a - b}`);

// Task 11: Store names of friends in an array and print each person's name.
const names: string[] = ["Bob", "Alice", "Charlie"];
for (const name of names) {
    console.log(name);
}

// Task 12: Print personalized messages to friends using the array from Step 9.
for (const name of names) {
    console.log(`Hello ${name}, how are you?`);
}

// Task 13: Create a list of favorite modes of transportation and print statements about them.
const transportationModes: string[] = ["car", "bicycle", "motorcycle"];
for (const mode of transportationModes) {
    console.log(`I would like to own a ${mode}.`);
}

// Task 14: Make a list of people to invite to dinner and print invitation messages.
const dinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner tonight.`);
}

// Task 15: Handle a guest who can't make it to dinner and invite someone else.
const unableToAttend: string = dinnerGuests.pop()!;
console.log(`${unableToAttend} can't make it to dinner.`);
dinnerGuests.push("Stephen Hawking");
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner tonight.`);
}

// Task 16: Find a bigger dinner table and invite more guests.
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("Nikola Tesla"); // Add a new guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Galileo Galilei"); // Add a new guest to the middle
dinnerGuests.push("Leonardo da Vinci"); // Add a new guest to the end
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner tonight.`);
}

// Task 17: Announce that only two guests can be invited due to a delayed dinner table.
console.log("Unfortunately, the new dinner table won't arrive in time. Only two guests can be invited.");
while (dinnerGuests.length > 2) {
    const removedGuest: string = dinnerGuests.pop()!;
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner tonight.`);
}

// Task 18: Remove the last two names from the list to make it empty.
dinnerGuests.pop();
dinnerGuests.pop();
console.log("The guest list is now empty:", dinnerGuests);

// Task 19: Make a list of places to visit and manipulate it in various ways.
const placesToVisit: string[] = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];

// Original order
console.log("Original order:", placesToVisit);

// Alphabetical order
console.log("Alphabetical order:", placesToVisit.slice().sort());

// Original order (to show list is not modified)
console.log("Original order:", placesToVisit);

// Reverse alphabetical order
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());

// Original order (to show list is not modified)
console.log("Original order:", placesToVisit);

// Reverse the order
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse again to get back original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort in alphabetical order
placesToVisit.sort();
console.log("Sorted order:", placesToVisit);

// Sort in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse sorted order:", placesToVisit);

// Task 20: Print the number of people invited to dinner.
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);

// Task 21: Make a list of items stored in an array.
const favoriteAssets: string[] = ["Governor House Sindh", "Lahore Fort", "Quaid-e-Azam Residency"];
console.log("List of favorite assets:", favoriteAssets);

// Task 22: Think of something to store in a TypeScript object and create it
interface Asset {
    name: string;
    location: string;
}

const pakistanAssets: Asset[] = [
    { name: "Governor House Sindh", location: "Karachi" },
    { name: "Lahore Fort", location: "Lahore" },
    { name: "Quaid-e-Azam Residency", location: "Ziarat" }
];

console.log("Pakistan's Assets:");
for (const asset of pakistanAssets) {
    console.log(`Name: ${asset.name}, Location: ${asset.location}`);
}
// Task 23: Generate an intentional array index error.
const fruits: string[] = ["apple", "banana", "orange"];
// Access an index that doesn't exist to generate an error
// console.log(fruits[3]); // This line will cause an error

// Task 24: Write a series of conditional tests.
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');

console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car === 'subaru' or car != 'audi'? I predict True.");
console.log(car === 'subaru' || car != 'audi');

console.log("Is car === 'subaru' and car != 'audi2'? I predict True.");
console.log(car === 'subaru' || car != 'audi2');

console.log("Is 'subaru' in car? I predict True.");
console.log(car.includes('subaru'));

console.log("Is 'ford' not in car? I predict True.");
console.log(!car.includes('ford'));

// Task 25: Write more conditional tests.
let color: string = 'Red';

console.log("Is color == 'Red'? I predict True.");
console.log(color == 'Red');

console.log("Is color != 'Blue'? I predict True.");
console.log(color != 'Blue');

console.log("Is color.toLowerCase() == 'red'? I predict True.");
console.log(color.toLowerCase() == 'red');

console.log("Is color.toUpperCase() == 'RED'? I predict True.");
console.log(color.toUpperCase() == 'RED');

console.log("Is color === 'Red' and color != 'Blue'? I predict True.");
//console.log(color === 'Red' && color !== 'Blue');

console.log("Is color === 'Red' or color === 'Blue1'? I predict True.");
console.log(color === 'Red' || color === 'Blue1');

// Task 26: Imagine an alien shot down in a game. Write an if statement to test the alien's color.
const alienColor: string = 'green';
if (alienColor === 'green') {
    console.log('The player just earned 5 points.');
}

// Task 27: Write an if-else chain based on the alien's color.
if (alienColor === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
} else {
    console.log('The player just earned 10 points.');
}

// Task 28: Turn the if-else chain into an if-else-if-else chain.
if (alienColor === 'green') {
    console.log('The player earned 5 points.');
} else if (alienColor === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alienColor === 'red') {
    console.log('The player earned 15 points.');
}

// Task 29: Write an if-else chain to determine a person's stage of life based on their age.
const age: number = 25;
if (age < 2) {
    console.log('The person is a baby.');
} else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
} else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
} else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
} else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
} else {
    console.log('The person is an elder.');
}

// Task 30: Make a list of favorite fruits and print if statements for each.
const favoriteFruits: string[] = ["apple", "banana", "orange"];
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favoriteFruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

// Task 31: Make a list of usernames and print personalized greetings.
const usernames: string[] = ["admin", "john", "alice", "bob", "smith"];
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}
}
// Task 32: Add a check to ensure the list of users is not empty.
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (const username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Task 33: Create current and new users lists and check for unique usernames.
const currentUsers: string[] = ["john", "alice", "admin", "bob", "smith"];
const newUsers: string[] = ["jane", "mary", "alice", "mike", "bob"];
for (const newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username "${newUser}" is available.`);
    }
}

// Task 34: Store numbers 1 through 9 in an array and print their ordinal endings.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let suffix: string;
    switch (number) {
        case 1:
            suffix = "st";
            break;
        case 2:
            suffix = "nd";
            break;
        case 3:
            suffix = "rd";
            break;
        default:
            suffix = "th";
    }
    console.log(`${number}${suffix}`);
}

// Task 35: Make a list of favorite pizza flavors and print statements about them.
const pizzaFlavors: string[] = ["pepperoni", "margherita", "vegetarian"];
for (const flavor of pizzaFlavors) {
    console.log(`I like ${flavor} pizza.`);
}
console.log("I really love pizza!");

// Task 36: Make a list of animals and print statements about them.
const animals: string[] = ["dog", "cat", "rabbit"];
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// Task 37: Write a function to create a T-shirt with a given size and message.
function makeShirt(size: string = 'large', message: string = 'I love TypeScript') {
    console.log(`Summary: Size - ${size}, Message - ${message}`);
}

// Create different shirts using the function
makeShirt(); // Large shirt with default message
makeShirt('medium'); // Medium shirt with default message
makeShirt('small', 'Hello, World!'); // Small shirt with custom message

// Task 38: Write a function to describe a city with its country.
function describeCity(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for different cities
describeCity('Karachi');
describeCity('Islamabad');
describeCity('New York', 'USA');

// Task 39: Write a function to format city and country into a string.
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with different city-country pairs and print the returned value
console.log(cityCountry('Lahore', 'Pakistan'));
console.log(cityCountry('Tokyo', 'Japan'));
console.log(cityCountry('Paris', 'France'));

// Task 40: Write a function to create an album Object.
function makeAlbum(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album: { artist: string; title: string; tracks?: number } = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create different albums using the function and print them
console.log(makeAlbum('Artist1', 'Album1'));
console.log(makeAlbum('Artist2', 'Album2', 12));

// Task 41: Write a function to show magicians from a list.
function showMagicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Call the function with a list of magicians
const magicians: string[] = ["Merlin", "Houdini", "David Blaine"];
showMagicians(magicians);

// Task 42: Write a function to make magicians great by modifying the list.
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Call the function and show the modified list
const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);

// Task 43: Write a function to ensure unique usernames in new users list.
function ensureUniqueUsernames(currentUsers: string[], newUsers: string[]): string[] {
    const uniqueNewUsers: string[] = [];
    for (const newUser of newUsers) {
        if (!currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
            uniqueNewUsers.push(newUser);
        }
    }
    return uniqueNewUsers;
}

// Call the function and show the result
const uniqueNewUsers = ensureUniqueUsernames(currentUsers, newUsers);
console.log(uniqueNewUsers);
// Task 44: Write a function to order a sandwich with variable number of ingredients.
function orderSandwich(...ingredients: string[]) {
    console.log("You ordered a sandwich with the following ingredients:");
    for (const ingredient of ingredients) {
        console.log(`- ${ingredient}`);
    }
}

// Call the function with different numbers of ingredients
orderSandwich('ham', 'cheese', 'lettuce');
orderSandwich('turkey', 'bacon');
orderSandwich('peanut butter', 'jelly');

// Task 45: Write a function to store car information in an Object.

interface CarInfo {
    manufacturer: string;
    model: string;
}
function carInfo(manufacturer: string, model: string, ...features: string[]): CarInfo {
    if (features.length % 2 !== 0) {
        throw new Error('Features array must contain an even number of elements (key-value pairs).');
    }

    const car: CarInfo = { manufacturer, model };

    for (let i = 0; i < features.length; i += 2) {
        const key = features[i];
        const value = features[i + 1];
        car[key] = value; 
    }

    return car;
}