# Extra Lab

## General Instructions
1. Create 4 functions, each one should wait 1s longer than the previous function before resolving or rejecting
2. Each of the 4 functions should return a promise object
3. You should wrap your "library" the same way David did
4. Once you have written your library you should use it, as you did with the previous lab (essentially call a chain of promises using your new String library)


## Functions
1. Function 1: Should return an array of strings (should wait one second before resolving/rejecting)
2. Function 2: Should take that array of strings and map over it to create a new array with each string appended with a "!" (wait 2s)
3. Function 3: Should take that array of strings and map over it to create a new array with each string uppercased (wait 3s)
4. Function 4: Should take that array of strings and map over it to create a new array that removes the "!" and pluralizes the word (wait 4s)




































































# Promising Results
Covalence

## Info
* You have been given a starter project containing an index.html file and an async-math.js file
* async-math.js contains a JavaScript library called SlowMath. It has already been imported into your index.html file and will be available in a global variable called `slowMath`.
* SlowMath contains a series of functions that take two numbers as arguments, and return Promises that resolve with the answer or reject under certain conditions
    * `slowMath.add(val1, val2)`- Returns a Promise that waits 1 second, and then resolves with the result of adding `val1` and `val2`. Rejects if `val1` or `val2` are negative numbers.
    * `slowMath.subtract(val1, val2)`- Returns a Promise that waits 1 second, and then resolves with the result of subtracting `val1` and `val2`. Rejects if `val1` or `val2` are negative numbers.
    * `slowMath.multiply(val1, val2)`- Returns a Promise that waits 1 second, and then resolves with the result of multiplying `val1` and `val2`. Rejects if `val1` or `val2` are negative numbers.
    * `slowMath.divide(val1, val2)`- Returns a Promise that waits 1 second, and then resolves with the result of dividing `val1` by `val2`. Rejects if `val1` or `val2` are negative numbers, or if `val2` is zero.
    * `slowMath.remainder(val1, val2)`- Returns a Promise that waits 1 second, and then resolves with the remainder after dividing `val1` by `val2`. Rejects if `val1` or `val2` are negative numbers, or if `val2` is zero.

## Objectives
1. Create your own JavaScript file in which to write your code, and import it into your index.html file BELOW the import for `async-math.js`.
2. In your JavaScript file, create a Promise chain that uses SlowMath to perform all of the following operations, in this exact order:
    1. Add together 6 and 2.
    2. Wait on the result, log it, and then multiply the result by 2.
    3. Wait on the result, log it, and then divide the result by 4.
    4. Wait on the result, log it, and then subtract 3 from the result.
    5. Wait on the result, log it, and then add 98 to the result.
    6. Wait on the result, log it, and then find the remainder from dividing the result by 2.
    7. Wait on the result, log it, and then multiply the result by 50.
    8. Wait on the result, log it, and then find the remainder from dividing the result by 40.
    9. Wait on the result, log it, and then add 32 to the result.
    10. Wait on the result, and then log: The final result is ___, where you fill in the blank with the final result.
    11. Add a `.catch` function to handle any errors that occur. Log the error to the console.
3. Open index.html in your browser and open the developer console. If you've done everything correctly, you should see values being logged to the console once per second, ending with a final result of 42.
4. When you are finished with that, try changing the very first step to add together 1 and 1, instead of 6 and 2. What happens? What could cause one of the SlowMath functions to reject? How do rejections affect the execution of our Promise chain?

That's pretty much it when it comes to using Promises. If you want to keep working, you can play around with different values, construct your own chain, etc.

You can also try adjusting the code to print the output to the web page instead of the developer console.



# Promise-Lab
