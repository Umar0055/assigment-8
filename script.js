// assigment no 1
// var inputuser1=prompt("first number");
// var inputuser2=prompt("second number");
// if(inputuser1 > inputuser2){
//     console.log("user1 win")
// }else if(inputuser2> inputuser1){
//     console.log("user2 win")
// }else{
//     console.log("invilade option")
// }

//assigment no 2
// var inputuser1=prompt("first number");
// var inputuser2=prompt("second number");
// var inputuser3=prompt("third number");
// if(inputuser1 > inputuser2 && inputuser1>inputuser3){
//     console.log("user1 win")
// }else if(inputuser2> inputuser1 && inputuser2> inputuser3){
//     console.log("user2 win")
// }else if(inputuser3> inputuser1 && inputuser3> inputuser2){
//     console.log("user3 win")
// }
// else{
//     console.log("invilade option")
// }

//assigment no 3
// var inputuser=prompt("Enter number");
// if(inputuser <= -1){
//     console.log("number is  negative")
// }else if(inputuser == 0){
//     console.log("number is zero")
// }else{
//     console.log("number is positive")
// }

// assigment no 4
// var inputuser=prompt("enter number");
// if(inputuser % 5 == 0 || inputuser %11 ==0){
// console.log("number is divisible")
// }else{
//     console.log("numver is not divisible")
// }

// assigemnt no 5
// var inputuser=prompt("enter number");
// if(inputuser % 2 == 0 ){
// console.log("number is even")
// }else{
//     console.log("numver is odd")
// }

// assigment no 8 
// var inputuser=prompt("enter ");
// if(inputuser ==='a'|| inputuser==='e' || inputuser==='e' ||inputuser==='i'|| inputuser==='o'|| inputuser==='u'){
//     console.log("vowels")
// }else{
//     console.log("constant")
// }


//assigment no 9
// var inputuser=prompt("enter ");
// if(inputuser >= "a" && inputuser <= "z"){
//     console.log("abc")
// }else if (inputuser >= '1'&&inputuser<='1000000000'){
//     console.log("number")
// }
// else{
//     console.log(" special character")
// }


// assigemnt no 10
// var inputuser=prompt("enter ");
// if(inputuser >= "A" && inputuser <= "Z"){
//     console.log("uppercase")
// }else if (inputuser >= "a"&&inputuser<="z"){
//     console.log("lowecase")
// }
// else{
//     console.log("invilade option")
//}

// assigment no 11
// var inputuser=prompt("enter a number ");
// var monday =1;
// var tuesday =2;
// var wednesday =3;
// var thusday =4;
// var friday =5;
// var satuday =6;
// var sunday =7;
// if(inputuser== monday){
//     console.log("monday")
// }else if(inputuser == tuesday){
//     console.log("tuesday")
// }else if(inputuser == wednesday){
//     console.log(" wednesday")
// }else if(inputuser == thusday){
//     console.log("thusday")
// }else if(inputuser == friday){
//     console.log("friday")
// }else if(inputuser == satuday){
//     console.log("satuday")
// }else if(inputuser == sunday){
//     console.log("sunday")
// }else{
//     console.log("invilade")
// }

// assigment no 12
// var inputuser = prompt("enter month ");
// var jan ="january";
// var feb ="febtuary";
// var  march="march";
// var april ="april";
// var may ="may";
// var june ="june";
// var july ="july";
// var aug ="august";
// var sep ="september";
// var oct ="october";
// var nov ="november";
// var dec= "december";
// if (inputuser === "jan" || inputuser === "march" || inputuser === "may" || inputuser === "july" || inputuser === "aug" || inputuser === "oct" || inputuser === "dec") {
//     console.log("31 days");
// } else if (inputuser === "april" || inputuser === "june" || inputuser === "sep" || inputuser === "nov") {
//     console.log("30 days");
// } else if (inputuser === "feb") {
//     console.log("28 or 29 days");
// } else {
//     console.log("Invalid ");
// }


// assigment no 14
// var angle1 = parseInt(prompt("Enter the angle of the first side:"));
// var angle2 = parseInt(prompt("Enter the angle of the second side:"));
// var angle3 = parseInt(prompt("Enter the angle of the third side:"));

// if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
//     console.log("Angle must be greater than 0");
// } else if (angle1 + angle2 + angle3 === 180) {
//     console.log("Your triangle is valid");
// } else {
//     console.log("Your Triangle is not valid. The sum of angles is always equal to 180");
// }

//assigment no 15
// var side1 = parseFloat(prompt("Enter the length of the first side:"));
// var side2 = parseFloat(prompt("Enter the length of the second side:"));
// var side3 = parseFloat(prompt("Enter the length of the third side:"));


// if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//     console.log("Side lengths must be greater than 0.");
// } else if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//     console.log("The triangle is valid.");
// } else {
//     console.log("The triangle is not valid. The sum of the lengths of any two sides must be greater than the third side.");
// }

// assigment no 16
// var side1 = prompt("Enter the length of the first side:");
// var side2 = prompt("Enter the length of the second side:");
// var side3 = prompt("Enter the length of the third side:");


// if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//     console.log("The sides of the triangle must be positive values.");
// } else if (side1 === side2 && side2 === side3) {
//     console.log("The triangle is an equilateral triangle.");
// } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log("The triangle is an isosceles triangle.");
// } else {
//     console.log("The triangle is a scalene triangle.");
// }

//assigment no 18
// var costprice = prompt("Enter cost price");
// var sellingprice = prompt("Enter selling price");

// if (costprice > sellingprice) {
//     console.log("You are selling at a loss");
// } else if (costprice < sellingprice) {
//     console.log("You are selling at a profit");
// } else {
//     console.log("No profit, no loss");
// }

// assigment no 19

let english = Number(prompt("Enter Your English Marks /100"));
let math = Number(prompt("Enter Your Math Marks /100")); 
let computer = Number(prompt("Enter Your Computer Marks /100"));
let physics = Number(prompt("Enter Your Physics Marks /75"));
let chemistry = Number(prompt("Enter Your Chemistry Marks /75"));

var totalmarks = english + math + computer + physics + chemistry;
var percentage = (totalmarks / 450) * 100;

if (percentage >= 90 && percentage <= 100) {
    console.log("grade A");
}
else if (percentage >= 80 && percentage <= 89) {
    console.log("grade B");
}
else if (percentage >= 70 && percentage <= 79) {
    console.log("grade C");
}
else if (percentage >= 60 && percentage <= 69) {
    console.log("grade D");
}
else if (percentage >= 40 && percentage <= 59) {
    console.log("grade E");
}
else if (percentage < 40 && percentage >= 0) {
    console.log("grade F");
}
else {
    console.log("Invalid percentage");
}




// assigment no 21
// function calculatebill(units) {
//     var totalbill = 0;

//     if (units <= 50) {
//         totalbill = units * 0.50;
//     } else if (units <= 100) {
//         totalbill = 50 * 0.50 + (units - 50) * 0.75;
//     } else if (units <= 150) {
//         totalbill = 50 * 0.50 + 100 * 0.75 + (units - 100) * 1.20;
//     } else { 
//         totalbill = 50 * 0.50 + 100 * 0.75 + 50 * 1.20 + (units - 150) * 1.50;
//     }
    
 
//     totalbill = totalbill + (totalbill * 0.20);

//     return totalbill;
// }

// var units = prompt("Enter the units: ");

// console.log("Total bill is = " + calculatebill(units).toFixed(2));

