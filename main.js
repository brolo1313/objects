let user = {
    name: 'John',
    age:30,
    'two word' : true
}

user.isAdmin = true;
delete user.name

console.log(user);
console.log(user.name);
console.log(user.isAdmin);
console.log(user["two word"]);