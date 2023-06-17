// object creation
const person2 = { 
    name: 'nazmlu',
    age: 20
};
//console.log(typeof person);


const names = { 
    name: 'razu', 
    age: 20, 
};


//console.log(names.name);


const Age = { 
    name: 'razu', 
    age: 20, 
};

///console.log(person["age"]);




// nested object
const student2 = { 
    name: 'RAZU', 
    age: 18/3,
    marks: {
        science: 17,
        math: 18
    }
}


//console.log(student.marks);

//console.log(student.marks.science); 


const person22 = {
    name: 'Sam',
    age: 30,
    
    greet: function() { console.log('HI') }
}

//person.greet();




const student = { 
    name: 'mmmm', 
    age: 20,
    marks: {
        science: 'razu',
        math: 75
    }
}


//console.log(student.marks);


//console.log(student.marks.science);


const person1 = {
    name: 'John',
    greet: function() { console.log('hello','hello','hello','hello',111); }
};

//person.name;

//person.greet(); 


const person = {
    name: 'RAZU',
    age: 18,


    greet: function() { console.log('The age is' + ' ' + this.age); }
};

//person.greet();

const text = {
    name: 'razu',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

text.greet();
