// jshint esversion: 6
// // function binarySearch (list, value) {
// //   // initial values for start, middle and end
// //   let start = 0
// //   let stop = list.length - 1
// //   let middle = Math.floor((start + stop) / 2)

// //   // While the middle is not what we're looking for and the list does not have a single item
// //   while (list[middle] !== value && start < stop) {
// //     if (value < list[middle]) {
// //       stop = middle - 1
// //     } else {
// //       start = middle + 1
// //     }

// //     // recalculate middle on every iteration
// //     middle = Math.floor((start + stop) / 2)
// //   }

// //   // if the current middle item is what we're looking for return it's index, else return -1
// //   return (list[middle] !== value) ? -1 : middle
// // }

// // const list = [2, 5, 8, 9, 13, 45, 67, 99]
// // console.log(binarySearch(list, 99)) // 7 -> returns the index of the item



// // //Given an array of numbers
// // //Given a number
// // //This program uses the binary search algorithm to check if the number is in the array
// // // it returns true if the number is in the array and false if otherwise

// // function binarySearch(array, number) {
// //   //Type your solutions here



// //   let first = 0;    //left endpoint
// //     let last = array.length - 1;   //right endpoint
// //     let position = -1;
// //     let found = false;
// //     let middle;
// //     let count=0;

// //     while (found === false && first <= last) {
// //         middle = Math.floor((first + last)/2);
// //         if (array[middle] == number) {
// //             found = true;
// //             position = middle;
// //         } else if (array[middle] > number) {  //if in lower half
// //             last = middle - 1;
// //         } else {  //in in upper half
// //             first = middle + 1;
// //         }
// //         count=count+1;
        

// //     }
    
// //     return {
// //       "index":position,
// //       "count" :count
// //     };
// // }

// // module.exports = binarySearch;



// // /*
// // *This script as developed fro the exercises for javascript.info
// // *most of the commented statement are correct and working just commenting them out
// // *
// // */
// // //word count app
// // /*
// // let  objCount = {};
// //     arrayOfStrings.map(a => {
// //         if(!objCount[a]){
// //             objCount[a]= 1;
           
// //         }else{
// //             objCount[a] += 1
// //         }
// //     })
// //     return objCount






// // var newObject  = {};
// //     arrayOfStrings.map(i => {
// //         if(!newObject[i]){
// //             newObject[i]= 1;
// //            i
// //         }else{
// //             newObject[i] += 1;
// //         }
// //     })
// //     return newObject




// // */

// // //'use strict'; // enables this script to run in a modern way
// // let textDisplay=document.querySelector("#console-display");

// // let run= document.querySelector('#run');
// // let todayDate=document.querySelector("#date");
// // //var isEven=false;
// // //var arr1=[];

// // //function arr(arr1){
// //     //var arrayLength=arr1.length;
// //     //var arraySum=0;
// //     //for(let i=0;i<=arrayLength;i++){
// //         //var arraySum=0;
// //         //arraySum=arraySum+arr1[i];
// //         //if(arraysum%2==0){
// //             //isEven=true;
// //         //}else{
// //             //isEven=false;
// //         //}
// //     //}
// // //}
// // //arr(arr1[1,2]);
// // //console.log(isEven);
// // /*var arr=[2,2,3,1];
// // var arrSum=0;
// // for(var i=0;i<=arr.length-1;i++){
  
// //     arrSum = Number(arrSum + arr[i]);

    
// // }if(arrSum%2==0){
// // console.log("even"); 
// // }else{
// //     console.log("odd"); 
// // }*/

// // /*
// // var arr=[];
// // var isEven=false;
// // var arrSum=0;
// // console.log(arraySum(arr[1,2,3]));
// // function arraySum(arr){

// //     for(var i=0;i<=arr.length-1;i++){
// //         arrSum+=arr[i];

// //     }
// //     if(arrSum%2!==0){
// //         return isEven;
// //     }else{
// //         isEven=true;
// //         return isEven;
// //     }
// // }
// // */

// // //var a=[1,2,3,4,5];
// // //var sum=0;
// // //for(var i=0;i<=a.length-1;i++){
// //     //sum+=a[i];
// // //}
// // /*
// // var product = 1;
// // function multiplyAll(arr) {
    
// //     // Only change code below this line
// //     for(var i=0;i<arr.length;i++){
// //       for(var j=0;j<arr[i].length;j++){
// //         product=product*arr[i][j];
// //       }
// //       console.log(arr.length);
// //     }
// //     // Only change code above this line
// //     return product;
// //   }
  
// //   // Modify values below to test your code
// //   multiplyAll([[1,2],[3,4],[5,6,7]]);

// // console.log(product);
// // */
// // //const arr=[2,8,1,4,6];
// // //let member;

// // //arr.forEach(member of arr){
// //    // console.log(member(arr));
// // //}
// // //console.log(arr.sort(function(a,b){return b-a}));
// // //let convert=parseInt(arr);
// // //console.log(convert);
// // //console.log(Math.max(1,5,8,5,9));
// // //console.log(arr[0]);




// // // Setup
// // /*
// // var myArray = [];
// // var i = 10;

// // // Only change code below this line.
// // do{
// // myArray.push(i);
// //   i--
// // }
// // while (i >=1);
// // console.log(myArray);

// // var arr2 = arr.map(function(x){
// //     return x.toLowerCase()
// // })

// // var noDuplicates = [];
// // for(let i=0; i<arr2.length; i++){
// //     if (arr2.includes(i)){
// //         continue;
// //     }
// //     else noDuplicates.push(arr2[i]);
// // }

// //  var lengths = noDuplicates.map(function(x){
// //      return x.length;
// //  })

// // var answer = new Map;
// // for(i=0; i<lengths.length; i++){
// //     answer.set(noDuplicates[i], lengths[i]);
// // }
// //     return answer;
// // }


// // */




// // var contacts = [
// //     {
// //         "firstName": "Akira",
// //         "lastName": "Laine",
// //         "number": "0543236543",
// //         "likes": ["Pizza", "Coding", "Brownie Points"]
// //     },
// //     {
// //         "firstName": "Harry",
// //         "lastName": "Potter",
// //         "number": "0994372684",
// //         "likes": ["Hogwarts", "Magic", "Hagrid"]
// //     },
// //     {
// //         "firstName": "Sherlock",
// //         "lastName": "Holmes",
// //         "number": "0487345643",
// //         "likes": ["Intriguing Cases", "Violin"]
// //     },
// //     {
// //         "firstName": "Kristian",
// //         "lastName": "Vos",
// //         "number": "unknown",
// //         "likes": ["JavaScript", "Gaming", "Foxes"]
// //     }
// // ];
// // console.log(contacts[3].likes);
// // console.log(contacts[3].likes[2]);


// // /*
// // var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// // function randomWholeNum() {

// //   // Only change code below this line.

// //   return  Math.floor(Math.random()*10);
// // }
// // console.log(randomWholeNum());
// // */

// // /*
// // // Example
// // function ourRandomRange(ourMin, ourMax) {

// //     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// //   }
  
// //   ourRandomRange(1, 9);
  
// //   // Only change code below this line.
  
// //   function randomRange(myMin, myMax) {
  
// //     return Math.floor(Math.random()*(myMax-myMin+1))*myMin; // Change this line
  
// //   }
  
// //   // Change these values to test your function
// //   var myRandom = randomRange(5, 15);
// //   console.log(myRandom);
// // */


// // /*
// // function convertToInteger(str) {
// //     return parseInt(str);
// //   }
  
// //  console.log(convertToInteger("56")) ;


// // */
// // /*
// // var obj={
// //     "1":4
// // }
// // console.log(obj[1]);
// // */
// // run.addEventListener('click',()=>{
// //     //textDisplay.innerHTML="i'm  javaScript";
// //    // let name ="john"; //variable declaration 
// //    // let admin =name;// variale admin being assigned the value of variable name
// //     //let num =6;
// //     //if(isNaN(num)){//working with isNaN method
// //         //textDisplay.innerHTML="yes its a number";   
// //     //}else{
// //         //let arr=[
// //             //[1,3,6],
// //             //[9,5,7],
// //             //[5,6,2],
// //             //[[3,5,1],[3,5,8]]

// //         //];
  
// // //} // displays the value of admin
// // //let a=prompt('enter num 1');
// // //let b=prompt('enter num 2');
// // //alert(Number(a)+Number(b));
// // //var a =prompt("enter a number to check if it is even or odd");
// // //var num=Number(a);
// // //if(num % 2 == 0){
// //     //textDisplay.innerHTML= num + " is even number";  
// // //}else{
// // //textDisplay.innerHTML=num +" is odd number";
// // //}
// // //const person ={
// //     //name:"chinedu",
// //     //age: 10,
// //     //gender:["male","female"]

// // //var i = 1;
// // //while(i<=9){
// //     //let odd=(2*i)-1;
// //     //if(odd){
        
// //         //if(odd<=9){
            

// //         //console.log(odd);
// //         //i++;
// //         //}
        

// //     //}
    
    
    
   
    
// // //}

// // //var sentence="chinedu is learning javascript";
// // //var result=sentence.length;
// // //var num1 = 2e3;
// // //var num2 = 3e3;
// // //var num = 10;
// // //var result= num.toString(2);


// // //var a =1000;
// // //var result=a.toExponential();

// // //var b =3.5858
// // //var result= b.toFixed(6);
// // //var str="45";
// // //var str2="5";
// // //var result=parseInt(str)+parseInt(str2);
// // //var deg= 90;
// // //var result=math.random();//Math.sin(deg * Math.PI / 180);//math.sin(deg);
// // //var deg=45;
// // //var result= Math.floor(Math.random()*100);//Math.sin(deg);

// // //var today= new Date();
// // //var result=today.toDateString();
// // //textDisplay.innerHTML=result;
// // //var d= new Date();
// // //var h = d.getDay();
// // //var arr =[
// //     //1,
// //     //8,
// //     //9,
// //     //3
// // //];
// // //let more=arr.push("is cool");
// // //let add= arr.push(5);
// // //let sort=arr.sort();
// // //var points = [40, 100, 1, 5, 25, 10];
// // //var result=points.sort(function(a,b){return a-b});







// //  let lInputChar=inputChar.length;
// //  let lActualChar=actualChar.length;
// //  let lChangeChar=changeChar.length;

// // let arrInputChar=inputChar.split('');
// // let arrActualChar=actualChar.split('');

// // let str="";
// // let index=-1;

// // if(lActualChar<lChangeChar||lActualChar>lChangeChar){
// //     return "Length mismatch";
// // }else if(lInputChar>lActualChar){
// //     return -1;
// // }else if(inputChar.length<=0){
// //     return str;
// // }

// // else {
// //     for(let t=0;t<actualChar.length;t++){
// //         if(actualChar.indexOf(actualChar[t])!=t){
// //         return "Repeated value";
// //     }
// //     }
    
// //     for(let k=0;k<=inputChar.length;k++){
// //         for(let m=0;m<actualChar.length;m++){
// //             if(inputChar[k]!=actualChar[m]){
// //                 return -1;
// //             }else{
// //                 for(let i=0;i<inputChar.length;i++){
// //                     for(let j=0;j<actualChar.length;j++){
// //                         if(inputChar[i]==actualChar[j]){
// //                              index=actualChar.indexOf(actualChar[j]);
// //                             str+=changeChar[index];
                
// //                         }
// //                     }
                     
// //                 }
               
// //             }
// //             return str;
// //         }
// //     }

// // }
// //     //textDisplay.innerHTML=points[0];



// // //textDisplay.innerHTML= person.name +" is "+person.age+ "  years";
// // //alert(person.age);
// // });
// // run.addEventListener('dblclick',()=>{
// //     textDisplay.innerHTML="";

// // });




// var arr=[1,2,3,4,5,6,7,2];
// var [a,b]=arr;


// //console.log(arr.reduce((a,i)=>i));


// //console.log(b);
// //https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c

// // let input=document.querySelector('input[placeholder="mm/yy"]');
// // console.log(input.value);

// // let mybtn=document.querySelector('#run');
// // mybtn.addEventListener('click',()=>{
// // let k=	input.value.split('/');
// // console.log(k);
// // let str1=k[0];
// // console.log(str1);
// // });
// let int=02;
// if(int>2){
// 	console.log(">2");
// }else{
// 	console.log('<2');
// }

//  var result = false;
//   dValue = dValue.split('/');
//   var pattern = /^\d{2}$/;

//   if (dValue[0] < 1 || dValue[0] > 12)
//       result = true;

//   if (!pattern.test(dValue[0]) || !pattern.test(dValue[1]))
//       result = true;

//   if (dValue[2])
//       result = true;

//   if (result) alert("Please enter a valid date in MM/YY format.");

//    regex = /^[a-zA-Z].*[\s\.]*$/g;


//     const elem=document.querySelector('[data-bill]');
//         elem.textContent=appState.billFormated;
//  https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c

// const arr= [1,2,3,4,5,6];
// for(let i=0;i<=arr.length;i=i+2){
  
//   console.log(arr[i]);


  
// }


// let arr1 =[

// {name:"chinedu", age: 13, id:1},
// {name: "joy", age: 23, id: 2},
// {name: "ben" ,age: 34, id:3}

// ];




// for (let i = 1; i <= 5; i++) {

//   let wobj={
//   name: "oko",
//   age: 23,
//   id: (arr1.length -i)+ 1
// };
//   arr1.push(wobj);
// }


// //arr1.push(wobj);
// console.log(arr1.length);
// console.log(arr1);

// let today= new Date

// console.log(today.getFullYear() +" "+ ((today.getMonth()+1)) + " " + today.getDate() );

// console.log(Date.now)

// fizz buzz challenge
// var arr=[];
// for (i = 1 ; i <=100; i++) {

// 	if( i%3==0 && i%5==0){
// 		arr.push("fizzbuzz");

// 	}else if(i%5==0){
// 		arr.push('buzz');
// 	}else if(i%3==0){
// 		arr.push("fiz")
// 	}else{
// 		arr.push(i);
// 	}	
// }
// console.log(arr);
// var count=0;
// if(arr.length>0){
// for (var j = 0; j <=arr.length; i++) {
// 	if(arr[j]="fizzbuzz"){
// 		count++;
// 	}
// }
// console.log(count);
// }

document.querySelector('#run').addEventListener('click',()=>{
	document.querySelector('header h2.dob').style.color = "blue";
});

let arr1 =[5,"3",true];
console.log(arr1);
//let t =[1,2,3];
//const reducer = (acc,val)=> acc+val;
console.log([1,2,3].reduce((acc,val)=> acc+val)); //reduce implementation

//working with include
// let strInclude = "chinedu";

// const checkInclude = strToCheck =>{
// 	if(strToCheck.includes("u")){
// 		console.log("yes");
// 	}else{
// 		console.log("no");
// 	}
// };

// checkInclude(strInclude);

[1,2,3].forEach(x=>{
	
	console.log(x);
});

//working with map

const arrMap =["KEN","BEN","Boot"];
const mapArray = arrMap.map(x=>x.toLowerCase());
console.log('mapAarry', mapArray);

console.log(mapArray.map(x=>x.toUpperCase()));


// tostring method and join;
console.log(arrMap.join(''));


// working with filter
const arrFilter = [1,3,5,8,9,3,5,6,8];
const filterArray =arrFilter.filter(x=>x%2==0);
console.log("filteredArray", filterArray);


// working with sort method
const unSortedArray = [39,5,8,0,2,1,4,5,7];
//const sortedAccending = unSortedArray.sort((a,b)=>a-b); // sorting accending
const sortedDecending = unSortedArray.sort((a,b)=>b-a); // sorting desending
//console.log("sorted accending", sortedAccending); 
console.log("sortedDecending",sortedDecending);

//sorting strings

const strArray = ["ben", "bal", "zad", "man"];
const sortedStrArray = strArray.sort();
console.log("sortedStringArray", sortedStrArray);


//working with array of object

const arrOfObjects = [
	{
		name: "okoro",
		age: 24,
		isMarried: false
	},
	{
		name: "chinedu",
		age: 24,
		isMarried: true
	},
	{
		name: "ben",
		age: 24,
		isMarried: false
	}
];

//printing all names
arrOfObjects.forEach(x=>x.sex="male"); // added new property to each object in the array
console.log(arrOfObjects);

const filterUser = arrOfObjects.filter((x)=>x.name=="ben" && x.age==24);
console.log("filtered user", filterUser);

const addedOneToAge = arrOfObjects.map(x => x.age + 1);
console.log("added one to age", addedOneToAge);


// working with for -- in of object

const forInObjcet =[{
	name: "chinedu",
	age: 3,
	gender: "male"
}];

for(let property in forInObjcet){
	console.log(forInObjcet[property].name);
}

// working with for.... of

const forOfArray =["ben", true,2,{hobbies:["ball","game"]}];

for(let item of forOfArray){
	if(typeof(item)==="object") console.log(item);


}
const bj ={
	name:"ben"
};
console.log(typeof(bj));
//start with demo
const startWithStr = "chinedu";

if(startWithStr.startsWith("c")){
	console.log(`${startWithStr} starts with c`)
}else{
	console.log("no");
}

//working with indexOf and lastIndexOf
console.log("Chinedooooo".indexOf("o"));


console.log("chinedu".replace("c","p"));

//working with settimeout

setTimeout(()=>console.log("hey this is setTimeout in action"),3000);

///working with setInterval
//setInterval(()=>console.log("working with set interval"),2000);