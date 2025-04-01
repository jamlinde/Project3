function add(a, b) { 
    return a + b; 
    } 
    function subtract(a, b) { 
    return a - b; 
    } 
    function multiply(a, b) { 
    return a * b; 
    } 
    function divide(a, b) { 
    if (b === 0) { 
    return "Error: Division by zero"; // Incorrect handling for division by zero 
    } 
    return a / b; 
    } 
    // Test Cases 
    console.log("Addition Test 1:", add(5, 3) === 8 ? "Pass" : "Fail"); 
    console.log("Subtraction Test 1:", subtract(10, 4) === 5 ? "Pass" : "Fail"); // Incorrect expected value 
    console.log("Multiplication Test 1:", multiply(7, 6) === 42 ? "Pass" : "Fail"); 
    console.log("Division Test 1:", divide(12, 4) === 3 ? "Pass" : "Fail"); 
    