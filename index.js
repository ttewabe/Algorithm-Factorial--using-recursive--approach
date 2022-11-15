// As stated above, the factorial of n can be found by finding the factorial of a number one less than n, and then multiplying this answer with n. So the factorial of n-1 can be thought of as a subproblem that needs to be computed first.

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
/*  
    function call	return value
    factorial(1)	1 (base case)
    factorial(2)	2 * 1 = 2
    factorial(3)	3 * 2 = 6
    factorial(4)	4 * 6 = 24
*/
}
let n = 4;
let y =36;
x = factorial(n)
z = factorial (n) * 5
console.log("The factorial of " + n + " is " + x + " "+ z);