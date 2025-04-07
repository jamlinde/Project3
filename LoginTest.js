// Login Validation Function 
function validateLogin(username, password) { 
if (!username || !password) { 
return false; // Missing input check is correct 
} 
if (username === "admin" && password === "1234") { 
return true; // Only valid login credentials are hardcoded 
} 
return false; 
} 
// Test Cases 
console.log("Login Test 1:", validateLogin("admin", "1234") === true ? "Pass" : "Fail"); 
console.log("Login Test 2:", validateLogin("", "1234") === false ? "Pass" : "Fail"); 
console.log("Login Test 3:", validateLogin("admin", "") === false ? "Pass" : "Fail"); // Corrected expected value 
console.log("Login Test 4:", validateLogin("admin", " 1234 ") === false ? "Pass" : "Fail");//password whitespace test
console.log("Login Test 5:", validateLogin(" admin ", "1234") === false ? "Pass" : "Fail");//username whitespace test
console.log("Login Test 6:", validateLogin("admin + admin", "1234") === false ? "Pass" : "Fail");//duplicate username test
console.log("Login Test 7:", validateLogin("1234", "admin") === false ? "Pass" : "Fail");//username and password switched
console.log("Login Test 8:", validateLogin("", "") === false ? "Pass" : "Fail");//empty fields test
console.log("Login Test 9:", validateLogin("admin", "1234!") === false ? "Pass" : "Fail");//special character test
console.log("Login Test 10:", validateLogin("aDmin", "1234") === false ? "Pass" : "Fail");//case-sensitivity
console.log("Login Test 11:", validateLogin("admin", "password1234") === false ? "Pass" : "Fail");//string plus password test


/* Some edge cases that I would want to test, but don't know how to write:
duplicate names test - two users have the same name
username vs. email username - user entering an email address instead of the username
long password - an excessively long password is entered */
