// let message = document.getElementById("paraghraph");
// message.innerHTML = "We are leaning JavaScript";

// let num = 0;
// let name = "Shivangi";

// let empty = null;
// let age;
// console.log(empty);
// console.log(age);

// let number = 12;
// let Fname = "shivi";
// let price = 12.12;
// let alive = true;
// let order = null;
// let contact;

// console.log(typeof number);
// console.log(typeof Fname);
// console.log(typeof price);
// console.log(typeof alive);
// console.log(typeof order);
// console.log(typeof contact);

// alert("Hello, i  am Shivangi");
// prompt("How old are you?");
// confirm("Are you Shivangi?");

// let conversion = String(9);
// console.log(typeof conversion);

// let check = Number("we are converting string to number");
// console.log(typeof check);

// console.log(check);

// let work = Number("0");
// console.log(typeof work);
// console.log(work);

//mathematical
// let fnum = 12;
// let lnum = 45;
// let sum = fnum + lnum; //Addition
// let min = fnum - lnum; //sub
// let mul = fnum * lnum; //Mul
// let divi = fnum / lnum; //Div
// let remain = fnum % lnum; //remainder
// console.log(sum);
// console.log(min);
// console.log(mul);
// console.log(divi);
// console.log(remain);

// let val1 = 3;
// let val2 = 2;

// let result = val1 ** val2;
// console.log(result);

// let fname = "shivi";
// let lname = "patel";

// let fullname = fname + " " + lname;
// console.log(fullname);

// let num3 = "2";
// let num4 = 9;

// let plus = Number(num3) + num4;
// console.log(plus);

// let minus = num4 - num3;
// console.log(minus);

// let a, b, c;
// a = b = c = 2 + 2;
// console.log(a, b, c);

// let [a1, b1, c1] = [1, 2, 3];
// console.log(a1, b1, c1);

//Comparision operator

// alert(2 < 3);

// const num1 = null; //12
// let num2; //22

// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 === num2);
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(9 == "9");
// console.log(9 === "9");
// console.log(typeof num1);
// console.log(typeof num2);

// let year = prompt("your birth year?", " ");
// if (year == 1999) {
//   alert("i am so smart");
// }

// let num = 6;
// if (num >= 0) {
//   if (num % 2 == 0) {
//     console.log("it is positive and even number");
//   } else {
//     console.log("it is positive and odd number");
//   }
// } else {
//   console.log("it is a negative number, please add positive number");
// }

// let num = -9;

// if (num > 0) {
//   console.log("it is positive");
// } else if (num < 0) {
//   console.log("it is negative");
// } else {
//   console.log("it is 0");
// }

// let num = 20;

// if (num >= 18) {
//   console.log("you are eligible");
// } else {
//   console.log("you are not eligible");
// }

// "A" if the score is 90-100

// "B" if the score is 80-89

// "C" if the score is 70-79

// "D" if the score is 60-69

// "E" if the score is below 60

// let num = 20;

// if (num >= 90 && num <= 100) {
//   console.log("A");
// } else if (num >= 80 && num <= 89) {
//   console.log("B");
// } else if (num >= 70 && num <= 79) {
//   console.log("C");
// } else if (num >= 60 && num <= 69) {
//   console.log("D");
// } else {
//   console.log("E");
// }

// let username = "";

// if (username !== "shivi" || username === " ") {
//   console.log("Hello Guest");
// } else {
//   console.log(username);
// }

// let age = 17;

// if (age >= 18 && age <= 65) {
//   console.log("You are eligible");
// } else {
//   console.log("You're not eligible");
// }

// let input = "";

// if (!input) {
//   console.log("input required");
// } else {
//   console.log(`input received ${input} `);
// }

// let a;
// let b = 9;

// let c = a ?? "shivi";

// console.log(c);

// let user;
// let age = 19;

// let final = user ?? "guest";
// console.log(final);

// let num = 0;
// while (num < 9) {
//   console.log(num);
//   num++;
// }

// for (let i = 0; i < 9; i++) {
//   for (let a = 0; a < 9; a++) {
//     console.log(a, i);
//   }
// }

// for (let i = 0; i < 9; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }

//function

// function hello() {
//   alert("hello");
// }

// hello();

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 2));

// function even(c) {
//   if (c % 2 === 0) {
//     console.log("it is even");
//   }
// }

// even(6);

// function greater(a, b) {
//   if (a > b) {
//     console.log("a is greater number");
//   } else {
//     console.log("b is greater number");
//   }
// }

// greater(7, 9);

// function weather(a) {
//   return (a - 30) / 2;
// }

// console.log(weather(130));

// let name = "shivi";

// function localVal() {
//   name = "patel";
//   console.log(name);
// }

// localVal();

// function localVal() {
//   let surname = "shivi";
// }

// console.log(surname);
// localVal();

//function can access an outer variable but we can not access any varibale declared inside the function from outside the function.

// let func = (a, b) => a + b;
// console.log(func(2, 4));

// let numbers = [10, 3, 5, 7];
// let name = ["shivi", "vatsal", "maharshi"];

// console.log(numbers.length); //length of an array
// console.log(numbers.concat(name)); //concatination of two arrays

// numbers.forEach((num) => {
//   console.log(num * 2);
// });

// name.forEach((name, index, arr) => {
//   arr[index] = name.toUpperCase();
// });
// console.log(name);

//let numbers = [3, 5, 7, 9];

//  numbers.push(10);             //to add element in the end
// console.log(numbers);

// numbers.pop(1);                  // to remove element from the end
// console.log(numbers);

// numbers.shift();
// console.log(numbers);               //to remove element from the front

// numbers.unshift(1);                    //to add element in the front
// console.log(numbers);

//let animals = ["dog", "cat", "camel", "lion"];

// animals.splice(2, 1, "tiger");          // to replace an element on index 2  (index,where we need change, new value)
// animals.splice(2, 0, "tiger");         // to add new element on index 2

//animals.reverse();                    // to reverse an array
// animals.sort();                        // will set element alphabetically
// console.log(animals);

// let newarray = numbers.concat(animals);   //to merge two arrays
//console.log(newarray);

// let newnum = numbers.join("-");    //to join with mentioned string
// console.log(typeof newnum);

//let newanimal = animals.slice(2, 3);  //to cut any perticulars element from an array
//console.log(newanimal);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let newVar = numbers.map((num) => num * 2); //return a new element with result of calling a provided function on every element
// console.log(newVar);

// let filter = numbers.filter((num) => num % 2 === 0); //return a new array with all the elements that passes the test
// console.log(filter);

// let every = numbers.every((num) => num % 2 === 0); //returns TRUE if ALL the elements passes the condition
// console.log(every);

// let some = numbers.some((num) => num % 2 === 0); // returns TRUE if atleast one element passes the condition
// console.log(some);

// let find = numbers.find((num) => num > 3); //return first element that satisfies the provided condition
// console.log(find);

// let fIndex = numbers.findIndex((num) => num > 3); //return an index of an element which satisfies the condition
// console.log(fIndex);

// const registration = {
//   fname: "shivi",
//   lname: "patel",
//   email: "abc@gmail.com",
//   phone: "9048615766",
// };
// console.log(registration["fname"]);

// let name = "shivangi";
// let copyName = name;
// name = "patel";
// console.log(name);
// console.log(copyName);

// const login = {
//   id: "abc",
// };

// const refrance = login;
// login.id = "xyz";
// console.log(login.id);
// console.log(refrance.id);

const originalObject = {
  a: "1",
  b: "2",
  c: {
    d: "3",
  },
};

// const newVar = { ...originalObject };  //spreadOprator
// newVar.c.d = "shivi";
// console.log(originalObject.c.d);

const deepCopy = JSON.parse(JSON.stringify(originalObject)); //deepcopy
originalObject.c.d = "shivi";
console.log(originalObject);
console.log(deepCopy);
