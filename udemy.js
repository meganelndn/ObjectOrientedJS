// CLASSES
// A class is like a blueprint for an object (it describes how one should be made)
// Has properties & functionality

// the "new" keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of "this" to the new empty object
// 3 - it calls the constructor function to "build" the object
class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this; // in order to make methods chainable
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    increaseScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

// inheritance (sub-class)
class Admin extends User {
    constructor(username, email, title){
        // super() looks for parent class & runs the constructor in it
        super(username, email); 
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin("shaun", "shaun@thenetninja.co.uk", "black-belt-ninja");
console.log(userOne, userTwo, userThree)

userOne.login().increaseScore().increaseScore().logout(); // chain methods together

// inheritance
let users = [userOne, userTwo, userThree]
console.log(users)

userThree.deleteUser(userTwo)
console.log(users)

// super()
console.log(userThree)


/* // (!) THIS IS WHAT HAPPENS UNDER THE HOOD WHEN WE USE CLASS SYNTAX (!)
// constructors (deconstructed)
function User(username, email){
    this.username = username;
    this.email = email;
}

// prototype
// stores the login function on the User prototype, to access it from any User object
User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
}

function Admin(username, email){
    User.call(this, username, email)
}

// creates an object based on User prototype
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){
    // delete a user
}

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin("shaun", "shaun@thenetninja.co.uk");

console.log(userOne, userTwo, userThree)
userOne.login() 
userOne.logout() 

// PROTOTYPE model
// every object in JS has a prototype
// prototypes contain all the methods for that object type */