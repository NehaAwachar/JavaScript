// JavaScript Document
//Array Methods 
var QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log(QA_Intern);

//Converting Arrays to Strings
var QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log(QA_Intern.toString());

//Popping and Pushing arrrays
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before Popping an array- "+QA_Intern);
QA_Intern.pop(); 
console.log("After Popping an array- "+QA_Intern);

QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before Popping an array- "+QA_Intern);
var poped = QA_Intern.pop();
console.log("Popped an array- "+poped);
console.log("After Popping an array- "+QA_Intern);

QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before Pushing an array- "+QA_Intern);
QA_Intern.push();
console.log("After Pushing an array- "+QA_Intern);

//Shifting Elements
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before shift() an array- "+QA_Intern);
QA_Intern.shift();
console.log("After shift() an array- "+QA_Intern);

//UnShifting Elements
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before unshift() an array- "+QA_Intern);
QA_Intern.unshift("Suhani");
console.log("After unshift() an array- "+QA_Intern);

//Changing Elements
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Original array- "+QA_Intern);
QA_Intern[0]="Suhani";
QA_Intern[QA_Intern.length]="Girme";
console.log("changing element of an array- "+QA_Intern);

//Deleting Elements
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Original array- "+QA_Intern);
delete QA_Intern[0] ;
console.log("Deleted first element- "+QA_Intern);
delete QA_Intern[QA_Intern.length-1] ;
console.log("Deleted last element- "+QA_Intern);

//Splicing an Array
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before splice- "+QA_Intern);
QA_Intern.splice(2, 0, "Suhani", "Girme");
console.log("After splice- "+QA_Intern); 

//Concatenating Arrays with values
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
var My_Details=QA_Intern.concat("Selenuim"); 
console.log("After concatinating to an array- "+My_Details); 

QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
My_Skills =new Array("C", "C++", "Java", "Selenuim");
var My_Details=QA_Intern.concat(My_Skills); 
console.log("After Merging two arrays- "+My_Details); 
 
//Merging three arrays
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
My_Skills =new Array("C", "C++", "Java", "Selenuim");
My_Location =new Array("Pune","Delhi","Mumbai");
var My_Details=QA_Intern.concat(My_Skills,My_Location); 
console.log("After Merging three arrays- "+My_Details); 

//Slicing an Array
QA_Intern =new Array("Neha", "Awachar", "B.E.", "SDET+");
console.log("Before slice an array- "+QA_Intern); 
var Slice = QA_Intern.slice(0);
console.log("After slice(0) an array- "+Slice); 
var Slice_1 = QA_Intern.slice(1);
console.log("After slice(1) an array- "+Slice_1); 
var Slice_2 = QA_Intern.slice(2);
console.log("After slice(2) an array- "+Slice_2); 
