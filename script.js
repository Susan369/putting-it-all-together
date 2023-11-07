//1
// Define the Person class
// Constructor to initialize the properties
// Method to introduce the person
// Create an instance of the Person class
// Return the introduction string
// Call the introduce method to get the introduction
// Call the introduce method on the john object
class person {
constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }
  
    
introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
} 
const john = new person("John", 25); 
const introduction = john.introduce();  
console.log(introduction);

//2
// Define the Person class
// Constructor to initialize the properties
//introduce the person
// Create an instance of the Person class
// Create a Person object with name "John" and age 25
// Create a function called describePerson
// Call the callback function
// Define a callback function
// Call the introduce method using "this"
// Call the describePerson function with the customCallback
class person1 {
    
constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }
  
introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
  
const person2 = new person1("John", 25); 
    
function describePerson(callback) {
     
    callback.call(person2);
}
  
function customCallback() {
    console.log(this.introduce()); 
}
describePerson(customCallback); 

//3
// Define a function called wait
// Return a new Promise
// Use setTimeout to delay the resolution of the Promise.
// The Promise resolves after the specified time
// Call the wait function
function wait(milliseconds) {
    
  return new Promise((resolve) => {
      
  setTimeout(() => {
        
  resolve("Waited for " + milliseconds + " milliseconds.");
    }, milliseconds);
  });
}
  
  
const waitPromise = wait(2000);
  
waitPromise.then((result) => {
  console.log(result); // Output: "Waited for 2000 milliseconds."
});

//4
// Function to handle the button click event
// Select the paragraph element by its id
// Change the text content of the paragraph
// Get a reference to the button element by its id
// Add a click event listener
// Function to handle the button click event

function handleButtonClick() {
    
const outputElement = console; 

    
outputElement.log("Button clicked!");
}

const buttonElement = { addEventListener: function() {} }; 

buttonElement.addEventListener("click", handleButtonClick);

handleButtonClick(); 

  
  
  
  
  