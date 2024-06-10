//your JS code here. If required.
let student = {
    name: "John Doe"
};

// Adding the getKeys method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Testing the getKeys method
console.log(student.getKeys()); // Output: ["name"]