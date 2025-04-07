// Calculator Functions 
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
    if (a === 0 || b === 0) { //added 0 value for a as well
    return 0; // division by 0 added
    } 
    return a / b; 
    } 

    /* suggest re-writing functions to simplify code
    function addSubtract(a, b, operator){
        if (operator === '+'){
            return a + b;}
        else if (operator === '-') {
            return a - b;}
      } //combined add and subtract functions
console.log("Addition Test:", addSubtract(4, 5, "+") === 9 ? "Pass" : "Fail");
console.log("Subtraction Test:", addSubtract(12, 10, "-") === 2 ? "Pass" : "Fail");

// I would combine multiply/divide like I did add/subtract, but I haven't figured out how to write that code yet.
    function multiply(a, b) { 
        if (a === 0 || b === 0){
            return 0;} 
    return a * b;} 

    function divide(a, b) { 
    if (a === 0 || b === 0) { 
    return 0;  
    } 
    return a / b; 
    } 
*/

    // Test Cases 
    console.log("Addition Test 1:", add(5, 3) === 8 ? "Pass" : "Fail");
    console.log('Addition Test 2:', add(5, -19) === -14 ? 'Pass' : 'Fail');//single negative addition test
    console.log('Addition Test 3:', add(-9, -30) === -39 ? "Pass" : "Fail");//double negative addition test
    console.log('Addition nonInteger Test:', add(12.5, 68.7) === 81.2 ? "Pass" : "Fail");//non-integer test
    console.log('Addition Fraction Test:', add(2/3, 4/5) === 1.4666666666666668 || 22/15 ? "Pass" : "Fail");//fraction test
    console.log('Addition Large Number Test:', add(123456789123456789, 9876554321987987) === 133333343445444770 ? "Pass" : "Fail");

    console.log("Subtraction Test 1:", subtract(10, 4) === 6 ? "Pass" : "Fail");
    console.log('Subtraction Test 2:', subtract(17, -100)  === 117 ? "Pass" : "Fail"); 
    console.log('Subtraction Test 3:', subtract(-12, -45) === 33 ? "Pass" : "Fail");
    console.log('Subtraction nonInteger Test:', subtract(23.75, 45) === -21.25 ? "Pass" : "Fail");
    console.log('Subtraction Fraction Test:', subtract(7/8, 45) === -44.125 || -353/8 ? "Pass" : "Fail");
    console.log('Subtraction Large Test:', subtract(10000000000, 6478292756473849874976) === -6.47829275646385e+21 ? "Pass" : "Fail");//large number test

    console.log("Multiplication Test 1:", multiply(7, 6) === 42 ? "Pass" : "Fail"); 
    console.log("Multiplication Test 2:", multiply(5, 0) === 0 ? "Pass" : "Fail");
    console.log('Multiplication Test 3:', multiply(77, -47) === -3619 ? "Pass" : "Fail");//single negative multiplication test
    console.log('Multiplication Test 4:', multiply(-64, -10) === 640 ? "Pass" : "Fail");//double negative multiplication test
    console.log("Multiplication nonInteger 3:", multiply(5, 7.5) === 37.5 ? "Pass" : "Fail");//non-integer test
    console.log("Multiplication Fraction:", multiply(8/16, 7/15) === 7/30 || 0.23333333333333334 ? "Pass" : "Fail");//fraction test
    console.log("Multiplication Large Number 3:", multiply(34987239875, 98678909975567888656) ===  3.452502693918724e+30 ? "Pass" : "Fail");//large number test

    console.log("Division Test 1:", divide(12, 4) === 3 ? "Pass" : "Fail"); 
    console.log("Division Test 2:", divide(0, 12) === 0 ? "Pass" : "Fail");
    console.log("Division Test 3:", divide(56, -1) === -56 ? "Pass" : "Fail");//single negative division test
    console.log("Division Test 4:", divide(-11, -53) === 0.20754716981132076 ? "Pass" : "Fail");//double negative division test
    console.log("Division nonInteger Test:", divide(.16, 8.02) === 0.019950124688279305 ? "Pass" : "Fail");//non-integer test
    console.log("Division Fraction Test:", divide(6/10, 15/3) === 3/25 || 0.12 ? "Pass" : "Fail");//fraction test
    console.log("Division Large Number:", divide(465765374892836752394, 4890000000000000000000) === 0.09524854292287052 ? "Pass" : "Fail");//large number test
    
   
