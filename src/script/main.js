const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

// Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})

// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const bill = {
    officeName: "Bills Dr.",
    streetAddress: "301 Plus Park Blvd",
    patientName: "Leigh Rogers",
    visitDate: "09/16/2019",
    amountBilled: "$100",
    dueDate: "O9/30/2019",
}

//square bracket notation
const dateVisited = bill["visitDate"];
const owed = bill["amountBilled"];
const patient = bill["patientName"];


//instead of using a nested loop, use object methods 
// get the value of the object
for (const value of Object.values(bill)) {
    console.log(value);
}

//get the key of the object
for (const key of Object.keys(bill)) {
    console.log(key);
}

//get the whole component - innumerate through object to create an array
for (const entry of Object.defineProperties(bill)) {
    console.log(entry[0], ": ", entry[1]);
}



//Use square bracket notation to output the value of those three properties to the console in Chrome.

//Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.