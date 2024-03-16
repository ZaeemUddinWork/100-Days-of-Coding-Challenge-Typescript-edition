/*
Question 37: Large Shirts: Default values in make_shirt().
*/
//function for make_shirt
function make_shirt(size, color, message) {
    if (size === void 0) { size = 'large'; }
    if (color === void 0) { color = 'Red'; }
    if (message === void 0) { message = 'I hate you'; }
    console.log("\n\n    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n    The new order of shirt contain following information:\n    Size: ".concat(size, "\n    Color: ").concat(color, "\n    Message: ").concat(message, "\n    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n    "));
}
make_shirt(); //by default
make_shirt('Small', 'Green', 'Be a Cool not a Fool'); //for small with message
make_shirt('Medium', 'Pink', 'I love Barbie'); //for medium with message
