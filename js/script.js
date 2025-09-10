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



