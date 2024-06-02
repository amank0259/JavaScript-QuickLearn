const user = {
    name: "John Doe",
    loginCount: 5,
    signIn: true,

    getUserDetails: function () {
        // console.log("Get User Detail")
        // console.log(`User Name: ${this.name}, Login Count: ${this.loginCount}, Signed: ${this.signIn}`)
        // console.log(this);
    }
}
// console.log(user.name);
// console.log(user.getUserDetails());




// Constructor    *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = new User("Aman", 12, true);
// const userTwo = new User("Techboy", 15, false);
// console.log(userOne, userTwo);

// Note *****
//1. when we use new keyword a empty object create which called estance.
//2. Constructor function call because of new keyword and pack all agrument
//3. all arguments inject into this keyword
//4. and then return... 