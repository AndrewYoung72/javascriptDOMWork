const userOne = {
  email: "bob@bob.com",
  name: "Bob",
  login() {
    console.log(this.email, "Has logged in")
  },
  logout() {
    console.log(this.email, "Has logged out")
  }
};

console.log(userOne.name);