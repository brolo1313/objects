let user = {
    name: 'John',
    age:30
}

user.isAdmin = true;
delete user.name

console.log(user);
console.log(user.name);
console.log(user.isAdmin);