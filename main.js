let user = {
    name: 'John',
    age:30,
    'two word' : true
}

let key = 'prompt("What y wont?", "age")'

user.isAdmin = true;
delete user.name

console.log(user[key]);
// console.log(user.name);
// console.log(user.isAdmin);
// console.log(user["two word"]);

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5,
};
console.log( bag.apple ); // 
