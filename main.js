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

for ( key in user2){
    console.log(user2[key]);
}

// console.log("age" in user2);
// console.log("city" in user2); 