// Shopping Cart Functions 
let cart = []; 
function addItem(item, quantity) { 
if (1 >= quantity) { //flipped quantity logic to elimante the bug of 0 items being added, must add 1 or more items to cart
//console.log("Error: Quantity must be at least 1"); this output not needed with quantity having to be 1 or more
return; 
} 
cart.push({ item, quantity }); 
} 
function removeItem(item) { //needs to define the quantity being removed
cart = cart.filter(cartItem => cartItem.item !== item); //case-sensitive, needs method to adjust for the string to be recognized no matter the case
} 
function getCartTotal() { 
return cart.reduce((total, cartItem) => total + cartItem.quantity, 0); } 

// Test Cases 
addItem("Apple", 3); 
// addItem("Banana", 0); function call no longer needed as code for function adjusted to prevent from 0 quantities from being added 
console.log("Cart Total Test 1:", getCartTotal() === 3 ? "Pass" : "Fail"); 
cart = [];//clearing cart for next test scenario
addItem("Apple", 3); 
removeItem("Apple");
console.log("Cart Total Test 2:", getCartTotal() === 0 ? "Pass" : "Fail");// removeItem function removes ALL apples and doesn't specify the quantity of item being removed. A new function needs to be add that leaves the item but adjusts the quantity.
cart = [];
addItem("Apple", 3); 
removeItem("apple");
console.log("Cart Total Test 3:", getCartTotal() === 0 ? "Pass" : "Fail");//fails, function is case sensitive
cart =[];
addItem("Orange", 1);
addItem("Orange", 4);
console.log("Cart Total Test 4:", getCartTotal() === 5 ? "Pass" : "Fail");//function not adding duplicate items
removeItem("Orange");
console.log("Cart Total Test 5:", getCartTotal() === 0 ? "Pass" : "Fail");
cart = [];
removeItem("Apple");
console.log("Cart Total Test 6:", getCartTotal());//removing an item not in the cart results in 0; function needs to define "error" or another similar string
cart = [];
console.log("Cart Total Test 7:", getCartTotal() === "Empty Cart" ? "Pass" : "Fail");//empty cart needs to prompt "Empty Cart" or a similar string
addItem("Apple", 2);
addItem("Banana", 4);
removeItem("Apple");
addItem("Orange", 3);
addItem("Mango", 2);
console.log("Cart Total Test 8:", getCartTotal() === 9 ? "Pass" : "Fail");

/* Test case:
case sensitivity: I'm not sure how to re-write the code for the console.log test to accept lower-case as well*/
