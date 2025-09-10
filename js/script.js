// Javascript functions - parameters, return values, scope
// Global variables
const globalMessage = 'This is a global variable!';
// Function with parameters and return value
function calculateSquare(number) {
    // Local variables
    const localMessage = "Calculating square...";
    console.log(localMessage);
    console.log(globalMessage);   // Accesssing global variables

    return number * number;
}

// function to demonstrate multiple parameters and return object

function calculateAreaAndPerimeter(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);

    return {
        area: area,
        perimeter: perimeter,
        dimensions: { length, width}

    };
}

// function to update the result display
function updateResult(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
}

// Event listener for the calculate button
document.getElementById('calculate-btn').addEventListener('click', function() {
    // get random number between 1 - 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // Calculate the square
    const squareNumber = calculateSquare(randomNumber);
    // Calculate area and perimeter
    const areaAndPerimeter = calculateAreaAndPerimeter(randomNumber, randomNumber + 2);
    // update the result display
    updateResult('calulate-result',
        `Square of ${randomNumber} is ${squareNumber}\n` + 
        `Rectangle ${areaAndPerimeter.dimensions.length} * ${areaAndPerimeter.dimensions.width}:` + 
        `Area = ${areaAndPerimeter.area}, perimeter = ${areaAndPerimeter.perimeter}`
    );

});

// 3. CSS Animation with JS
// function to toggle the animation
function toggleAnimation() {
    const box = document.getElementById('animated-box');
    box.classList.toggle('slide-animation');

    // button changes - text based on animation state
    const button = document.getElementById('animie-btn');
    if(box.classList.contains('slide-animation')) {
        button.textContent = 'Reset Animation';
    } 
    else {
        button.textContent = 'Animate Box';
    }
}
// Event Listener to the animation btn
document.getElementById('animie-btn').addEventListener('click', toggleAnimation);

// Reusable animation function with parameters
function applyAnimation(elementId, animationClass, duration = 500) {
    const element = document.getElementById(elementId);
}

// Apply the animation class
element.classList.add(animationClass);

// Remove animation class after specified duration
setTimeout(() => {
    element.classList.remove(animationClass);
}, duration);




