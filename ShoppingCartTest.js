// Shopping Cart Functions 
let cart = []; 
function addItem(item, quantity) { 
if (quantity < 1) { 
console.log("Error: Quantity must be at least 1"); 
return; 
} 
cart.push({ item, quantity }); 
} 
function removeItem(item) { 
cart = cart.filter(cartItem => cartItem.item !== item); // Doesn't handle case sensitivity 
} 
function getCartTotal() { 
return cart.reduce((total, cartItem) => total + cartItem.quantity, 0); } 
// Test Cases 
addItem("Apple", 3); 
addItem("Banana", 0); // Should throw an error but still adds to cart removeItem("apple"); // Doesn't remove "Apple" due to case sensitivity 
console.log("Cart Total Test 1:", getCartTotal() === 3 ? "Pass" : "Fail"); // Fails due to bug 
// Missing Tests 
// - Adding duplicate items 
// - Removing an item not in the cart 
// - Handling empty cart scenarios
