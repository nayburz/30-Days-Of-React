// 1. Arrays

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat"');
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
// remove 'Honey' if you are allergic to honey
let allergicHoney = true;

if (allergicHoney == true) {
  shoppingCart.slice(3);
} else {
}
// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";

// console.log(shoppingCart);

// 2. Conditionals

//Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// give feedback:'You are old enough to drive' but if not 18 give another feedback
//stating to wait for the number of years he needs to turn 18.

// const userAge = prompt("Enter Age");
// if (userAge < 18) {
//   console.log("You are not old enough to drive");
// } else if (userAge > 18) {
//   console.log("You are old enough to drive!");
// }

// Ternary Operators

// const userAge = prompt("Enter your Age");
// const message =
//   userAge < 18
//     ? "You are not not old enough to drive"
//     : "You are old enough to drive";
// console.log(message);

// Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you)
// Use prompt(“Enter your age:”) to get the age as input.

// const myAge = 35;
// const userAge = prompt("Enter your Age");
// if (userAge < myAge) {
//   console.log("You are younger than me");
// } else if (userAge > myAge) {
//   console.log("You are older than me");
// } else {
//   console.log("We are the samge age!!");
// }

// 5. Loops
// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//   console.log(number);
// }

// const nation = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];

// for (const nations of nation) {
//   console.log(nations.toUpperCase());
// }

// const nums = [1, 2, 3, 4, 5];
// nums.forEach((number, i) => {
//   console.log(number, i);
// });

// const user = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   skills: ["HTML", "CSS", "JS", "React", "Node", "Python", "D3.js"],
// };

// for (let prop in user) {
//   console.log(user[prop]);
// }

// 6. Scope
//scope.js

// 7 Objects

// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "Heitamienkatu 16",
//     pobox: 2002,
//     city: "Helsinki",
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
//   },
// };

// const copyPerson = Object.assign({}, person);

// const keys = Object.keys(person);
// console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']

// const address = Object.keys(copyPerson.address);
// console.log(address); //['street', 'pobox', 'city']

// const values = Object.values(copyPerson);
// console.log(values);

// const entries = Object.entries(copyPerson);
// console.log(entries);

// console.log(copyPerson.hasOwnProperty("age"));

const dog = {
  name: "Rex",
  legs: 4,
  color: "Brown",
  age: 3,
  bark: function () {
    return "woof woof";
  },
};

dog.breed = "labrador";

for (let prop in dog) {
  // console.log(dog[prop]);
}

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find people who are MERN stack developer from the users object

// Define the skills to check for MERN stack development
const mernSkills = ["MongoDB", "Express", "React", "Node"];

// Create an array to store MERN stack developers
const mernStackDevelopers = [];

// Iterate through the "users" object and check for MERN stack skills
for (const user in users) {
  const userSkills = users[user].skills;

  // Check if the user has all MERN stack skills
  if (mernSkills.every((skill) => userSkills.includes(skill))) {
    mernStackDevelopers.push(user);
  }
}

// console.log("MERN Stack Developers:", mernStackDevelopers);

// // Get all keys or properties of users object

// const userProperties = Object.keys(users);
// console.log(userProperties);

// // Get all the values of users object

// const userValues = Object.values(users);
// console.log(userValues);

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account.
//b. Create a function called signIn which allows user to sign in to the application

function signUp(newUser) {
  // Check if a user with the same email already exists
  const existingUser = users2.find((user) => user.email === newUser.email);

  if (existingUser) {
    return "User already has an account.";
  }

  // If the user doesn't exist, add them to the collection
  users2.push(newUser);
  return "User has been added successfully.";
}

function signIn(email, password) {
  // Find the user with the given email
  const user = users2.find((user) => user.email === email);

  if (user) {
    // Check if the provided password matches the stored password
    if (user.password === password) {
      // Set isLoggedIn to true to indicate the user is now signed in
      user.isLoggedIn = true;
      return "Sign-in successful.";
    } else {
      return "Incorrect password. Please try again.";
    }
  } else {
    return "User not found. Please sign up first.";
  }
}

// Example usage:
// console.log(
//   signUp({
//     _id: "newuser123",
//     username: "NewUser",
//     email: "newuser@email.com",
//     password: "newpassword",
//     createdAt: "09/01/2020 11:00 AM",
//     isLoggedIn: false,
//   })
// );

// console.log(signIn("alex@alex.com", "123123"));

// 8. Functions

//10 Destructuring
const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

// console.log(sumAllNums(1, 2, 3, 4, 5));

//11. Functional Programming

const nations = ["Finland", "Estonia", "Sweden", "Norway"];
const nationWithLands = nations.filter((nation) => !nation.includes("land"));

// console.log(nationWithLands);

// 12. Classes

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person1.score);
console.log(person2.score);

console.log(person1.skills);
console.log(person2.skills);
