let user = {
    name: 'John',
    age:30,
    'two word' : true
}

let key = 'prompt("What y wont?", "age")'

user.isAdmin = true;
delete user.name

// console.log(user[key]);
// console.log(user.name);
// console.log(user.isAdmin);
// console.log(user["two word"]);

let fruit = "Какой фрукт купить?";

let bag = {
  
};
// console.log( bag[fruit] = 'banan' ); 

function makeUser(name, age,city){
    return {
        name: name,
        age: age,
        city: city,
    }
}

const David = makeUser( 'David', 30, 'Rom')
// console.log(David);
// console.log('Имя:' + David.age);

let user2 = { name: "John", age: 30, city: 'Kiev' };

// for ( key in user2){
//     console.log(user2[key]);
// }

// console.log("age" in user2);
// console.log("city" in user2); 

let info = { 
    name : 'js',
    surnmae : 'ECMAScript',

}
info.name = 'c++'
delete info.name
// console.log(info.name);

let shedule = {};

function isEmpty(obj){
    for(let key in obj) {
        if(key) {
            console.log(false);
        }else {
            return true
        }
    }
}
// isEmpty(shedule);

const target = {
    house: 'first'
}
target.house = 'second'
// console.log(target.house);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let key in salaries){
     sum += salaries[key];
    
}
// console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

 function multiplyNumeric(obj){
     for (let key in obj){
         console.log(typeof(obj[key]));
         if(typeof(obj[key]) == 'number' ){
             obj[key] *= 2
             console.log(menu);
         }
     }
 }

//  multiplyNumeric(menu)