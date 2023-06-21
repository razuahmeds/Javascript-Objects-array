

const employees = [
  { name: "Nazmul", tax: 25 },
  { name: "Razu", tax: 18 },
 
];


const getAges = employees.map(item=>{item.name, item.name})

// console.log(getAges);

const calcAmt = (obj) => {
  newObj = {};
  newObj.name = obj.name;
  newObj.ary =obj.tax;
  return newObj;
};

let newArr = employees.map(calcAmt);
// console.log(newArr);




const string = [1,3,5,7,8,3,5];

const newString = string.map(item=>item.toString())


//console.log("Strign:",newString);




const text = "Razu, Nazmul";
const textArr = text.split(); 
//console.log(textArr);





let numbers = [1, 2, 5];

function square(number) {
return number * 5;
}

let square_numbers = numbers.map(square);
// console.log(square_numbers);

5*4*3*2*1


// convert in h2 tag
const h2Array = [
  {
    name:"nazmul",
    age:22
  },
  {
    name:"nazmul",
    age:22
  }
];

const h2TagArry = h2Array.map(item=>{
  return `<h2>${item.name} </h2>`
});


//console.log({h2TagArry});



const numArray2 = [ 
  {
    name:"razu",
    age:18
  },
  {
    name:"razu",
    age:10
  }
];

const numarray2 = numArray2.map(num=>{
  return `<h1>Age: ${num.age}</h1>`
  return `<h1>Name: ${num.name}</h1>`
})
//console.log(numarray2)


// convert in text

const textArray =[
  {
    name:"RAZU",
    age:18
  },
  {
    name:"AKSHE",
    asg:14,
    
  },
  {
    name:"Mayre",
    age:3
  },
  {
    name:"RAZU",
    age:18
  },
  {
    name:"AKSHE",
    asg:14,
    
  },
  {
    name:"Mayre",
    age:3
  }
];

const textArray44 = textArray.map(text=>{
  return  `<p>${text} </p>`
})
//console.log(textArray)


let numArray =[
  {
    name:"Razu",
    age:55
  }
];
let numArray3 = numArray.map(item=>{
  return `<h2>${item.name} </h2>`
});


//console.log(numArray);






const myArray3 = ['h', 'e', 'l', 'i', 'o'];

//console.log(myArray[1]);


//console.log(myArray[3]);

//console.log(myArray[4]);

//console.log(myArray[0]);




let dailyActivities = ['eat', 'sleep'];


dailyActivities.push('exercise','isFinite');

//console.log(dailyActivities);



let dailyActivities2 = ['whet', 'is'];

dailyActivities2.unshift('razu'); 


//console.log(dailyActivities2);



let dailyActivities3 = [ 'Suppose', 'undefined'];


dailyActivities3[2] = 'jhgi';

//console.log(dailyActivities3); 


let dailyarray = [ 'If', 'need '];

dailyarray[3] = 'element ';

///console.log(dailyarray);


let myArray = [ 'eat', 'sleep'];


myArray.razu= 'exercise';

//console.log(myArray); 



let barray = ['work', 'eat', 'sleep', 'exercise'];


barray.pop();
//console.log(barray); 


const student = {
  name: 'RAJU',
  class: 12,
  age: 18
}

for ( let key in student ) {

  //console.log(`${key} => ${student[key]}`);
}


const salaries= {
  RAZU : 24000,
  AKSHE : 34000,
  AJMERE : 55000
}

for ( let i in salaries) {

  let salary = "$" + salaries[i];


  //console.log(`${i} : ${salary}`);
}

const stringn = 'Rukunuzzaman';

for (let i in stringn) {
    //console.log(stringn[i]);
}



const arr = [ 'Hello', 6, 'RAZU',  'text' ];

for (let x in arr) {
   // console.log(arr[x]);
}


const a = 45;
const b = 49;
const c = 50;
const d = [60, 70];

console.log(a + b);
console.log(b - a); 
console.log(c * b * a);
console.log(c - b - a);
console.log(c / b / a);
console.log(c + b + a);
console.log(d);
console.log(c);