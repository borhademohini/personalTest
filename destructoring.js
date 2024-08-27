let person = {
    firstName: "Mohini",
    lastName: "Thorat",
    age: 35,
    address: {
        city: 'Thane',
        pincode: 400708
    }
}

const { firstName, lastName = "Borhade", age: myAge = 24, address: { city = 'Pune' }, randomProp = 'default'} = person;

console.log("Result :: ", firstName, lastName, myAge, city, randomProp); // Prints Mohini Thorat 35 Thane default