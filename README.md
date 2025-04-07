# Project3
Module 3 Project - debugging practice for calculator, login, and shopping cart functions.

For this project, I took the code and sample tests for each script provided and analyzed them to improve functionality. I have created samples of my code and tests for each script as separate files belonging to this project. Each script file begins with the original script and the committed changes for the end result of my analyses.

Calculator Test
Issues:
- incorrect expected results
- redundant and simple JS code
- test were not all-encompassing of edge cases and other operations an individual might attempt.

Steps to debug and improve:
- I corrected obvious problems within the code and tests to yield better results and proficiency. One test case called the subtraction function of 10 minus 4 with the expected value as 5. This is an incorrect value, so I updated the expected result to 6.
- I noticed that each math operation (+, -, *, /) were listed out as individual functions. This can be simplified by creating one function with if...else applied for various functions and scenarios. I tried to simplify the code where I knew how, but for more complex if...else functions (for a beginner) but did not commit them as changes and left my adjustments as a multi-line comment.

Challenges:
- The number one challenge I face is not being well-versed or proficient in JS yet.


Login Test
Issues:
- I thought the login tests didn't cover a lot of scenarios that users might attempt.
- I added test cases for extra whitespace when a username or password was used, username/passwords were put in the wrong place, special characters, case sensitivity, and strings added to the password.
  
Steps to debug:
- Corrected the expected value as the original code prompted an "unexpected value."
- I wasn't sure what bug was present in this script. I think this is largely due to my inexperience with JS and still learning the language.

Challenges:
- I wasn't sure what edits or debugs for the original script. Beacuse of this, I mainly focused on creating test cases that would cover various login scenarios. For those tests that I think are needed but don't know how to write or fix the code, I added a multi-line comment.
- I'm aware that there were some falsy results in this script, but I wasn't sure how to adjust the code to overcome this.
- There are several things I think need to be adjusted in the code to properly test for all cases, but I didn't know how to do it. I wanted to test for scenarios like long passwords or two users having the same user name.
  
  
Shopping Cart Test:
Issues:
- The original script would allow you to add 0 items to the cart, so I adjusted the rule to prevent this from happening.
- Items are case-sensitive, so you cannot remove items with any case setting. I know there is a way to fix this with the console.log test, but I don't know it yet.
- Removing items from the cart results in removing the item without the possibility of adjusting the quantity.
- If you add duplicates of one item, the cart total is updated to reflect the last addItem entry instead of adding the total of duplicate items.

Steps to debug:
- For items that could be added to the cart with the quantity of 0, I adjusted the function to require at least 1 or more quantity to be added.
  
Challenges:
- Again, my biggest challenge is not knowing enough JS to fix everything that I know needs to be fixed or simplified. 
