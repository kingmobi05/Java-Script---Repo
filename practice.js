// Form assignment
// const formato = document.getElementsByClassName("text")[0];
// const sub = document.getElementsByClassName("but")[0];
// const outputDiv = document.getElementById("output");
// sub.addEventListener("click", (event) => {
//     event.preventDefault();
//     const wow = formato.value;
//     outputDiv.textContent = wow;
// })
// let the_click = document.getElementsByClassName("clicker")[0];
// let div_t = document.getElementsByClassName("tunde-cli")[0];
// the_click.addEventListener("click", () => {
//     div_t.innerHTML = "WELCOME TO DOM JAVASCRIPT"
// })

// Create button and say Javascript is simple
// let button_1 = document.createElement("button");
// button_1.innerHTML = "Click Me";
// document.body.appendChild(button_1);
// button_1.addEventListener("click", () => {
//     let diver = document.createElement("p");
//     diver.innerHTML = "Javascript is simple"
//     document.body.appendChild(diver)
// })

// Add and substract button
// let btn_1 = document.createElement("button");
// btn_1.innerHTML = "+";
// document.body.appendChild(btn_1);
// let numbers_1 = document.createElement("span");
// numbers_1.innerHTML = "0";
// document.body.appendChild(numbers_1);
// let btn_2 = document.createElement("button");
// btn_2.innerHTML = "-";
// document.body.appendChild(btn_2);
// btn_1.addEventListener("click", () => {
//     numbers_1.innerHTML = parseInt(numbers_1.innerHTML) + 1;
// })
// btn_2.addEventListener("click", () => {
//     numbers_1.innerHTML = parseInt(numbers_1.innerHTML) - 1;
// })



// let user_name = prompt("Enter your username here: ");
// let password = prompt("Enter our password here: ");
// console.log(`Hello ${user_name} you are welcome!`);

// let Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let number = [21, 22, 23, 24, 25, 26, 27];
// let week = [...Days, ...number];
// console.log(week);



// // DOM = ADDITION AND SUBTRACTION BUTTON
// let addButton = document.createElement("button");
// addButton.innerHTML = "+";
// document.body.appendChild(addButton);

// let newParagraph = document.createElement("p");
// newParagraph.innerHTML = "0";
// document.body.appendChild(newParagraph);

// let minusButton = document.createElement("button");
// minusButton.innerHTML = "-";
// document.body.appendChild(minusButton);

// let count = 0;

// addButton.addEventListener("click", () => {
// console.log("You clicked the addition button");
// newParagraph.innerHTML = ++count;
// })


// minusButton.addEventListener("click", () => {
// console.log("You clicked the addition button");
// newParagraph.innerHTML = --count;
// })


// // MORE EXAMPLES ON DOM
// Form assignment
// const formato = document.getElementsByClassName("text")[0];
// const sub = document.getElementsByClassName("but")[0];
// const outputDiv = document.getElementById("output");
// sub.addEventListener("click", (event) => {
//     event.preventDefault();
//     const wow = formato.value;
//     outputDiv.textContent = wow;
// })
// let the_click = document.getElementsByClassName("clicker")[0];
// let div_t = document.getElementsByClassName("tunde-cli")[0];
// the_click.addEventListener("click", () => {
//     div_t.innerHTML = "WELCOME TO DOM JAVASCRIPT"
// })

// // Create button and say Javascript is simple
// let button_1 = document.createElement("button");
// button_1.innerHTML = "Click Me";
// document.body.appendChild(button_1);
// button_1.addEventListener("click", () => {
//     let diver = document.createElement("p");
//     diver.innerHTML = "Javascript is simple"
//     document.body.appendChild(diver)
// })

// let btn = document.createElement("button");
// btn.innerHTML = "Click Here!";
// document.body.appendChild(btn)

// btn.addEventListener("click", () => {
// 	let new_para = document.createElement("p");
// 	new_para.innerHTML = "Welcome to Mobi Tech International";
// 	document.body.appendChild(new_para)
// })


// // LOCAL STORAGE 

// let company_name = "Mobi Tech";
// let mysave = localStorage.setItem("localname", myName);

// let employees = [

// 	{
// 		name: "tunde",
// 		age: 30,
// 		position: "Developer",
// 		salary: 30000	
// 	},

// 	{
// 		name: "Bola",
// 		age: 27,
// 		position: "Frontend Developer",
// 		salary: 20000
// 	}

// ];


// // Build a clock
// let myClock = document.querySelector(".clock");
// let myTime = () => {
//     let myDate = new Date();
//     let myHours = myDate.getHours();
//     let myMinutes = myDate.getMinutes();
//     let mySeconds = myDate.getSeconds();
    // myClock.innerHTML = `${myHours}:${myMinutes}:${mySeconds}`;
// }
// setInterval(myTime, 1000)


// let clock = document.createElement("p");
// clock.innerHTML = "00:00:00";
// document.body.appendChild(clock)


// let myTime = () => {
//     let myDate = new Date();
//     let myHours = myDate.getHours();
//     let myMinutes = myDate.getMinutes();
//     let mySeconds = myDate.getSeconds();
//     clock.innerHTML = `${myHours}:${myMinutes}:${mySeconds}`;
// }
// setInterval(myTime, 1000)


// // Strings
// let mynew = "Digital Fortress";
// let address = "104, Herbert Macauly Road, Off University Road, Akoba Yaba Lagos State ";
// console.log(address.slice(0, 16));
// console.log(address[7]);
// console.log(address.replace("Lagos", "Ogun"))
// console.log(address.concat(mynew));
// console.log(address.lastIndexOf("e"));
// console.log(address.toUpperCase());
// console.log(address.toLowerCase());
// console.log(address.length);
// // To get the data type of the variable
// console.log(typeof (address))
// // To change to a string/array format
// console.log(address.split());
// // To reverse the string
// console.log(address.split().reverse());
// // To change back to string by removing the square brackets
// console.log(address.split().reverse().join());
// // Returns true or false value depending on whether the string starts with the character or not
// console.log(address.startsWith(1));
// // Returns true or false value depending on whether the string ends with the character or not
// console.log(address.endsWith("f"));
// let newAddress = address.split();
// console.log(newAddress);
// // To add a new element to the array
// newAddress.push("Green");
// console.log(newAddress);
// // To add a new element to the beginning of the array
// newAddress.unshift("Red");
// console.log(newAddress);


let unorder = document.getElementsByTagName("ul")[0];
unorder.style.padding = "20px";
unorder.style.background = "red";
unorder.style.display = "flex";
unorder.style.listStyleType = "none"
unorder.style.justifyContent = "space-between";
let first = document.getElementById("one");
first.innerHTML = "Home"
first.style.textDecoration = "none";
let second = document.getElementById("two");
second.innerHTML = "About"
second.style.textDecoration = "none";
let third = document.getElementById("three");
third.innerHTML = "Contact"
third.style.textDecoration = "none";
let fourth = document.getElementById("four")
fourth.textContent = "More"
fourth.style.textDecoration = "none";
let fifth = document.getElementById("five")
fifth.textContent = "Features"
fifth.style.textDecoration = "none";



