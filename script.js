slowMath.add(6, 2)
.then((sum) => {
    console.log(`This is the sum of 6 + 2 = ${sum}`);
    return slowMath.multiply(sum, 2);
})
.then((results) => {
    console.log('This is the results multipled by 2 = ' + results);
    return slowMath.divide(results, 4);
})
.then((product) => {
    console.log('This is the results of the product divided by 4 = ' + '' + product);
    return slowMath.subtract(product, 3);
})
.then((difference) => {
    console.log('This is the difference of the product minus 3 = '+ difference );
    return slowMath.add(difference, 98);
})
.then((sum) => {
    console.log('This is the sum of the difference plus 98 = ' + sum);
    return slowMath.divide(sum, 2);
})
.then((remainder) => {
    console.log('This is the remainder of the sum divided by 2 = ' + remainder);
    return slowMath.multiply(remainder, 50);
})
.then((resultz) => {
    console.log('This is the result of the remainder being multiplied by 50 = ' + resultz);
    return slowMath.divide(resultz, 40);
})
.then((remainders) => {
    console.log('This is the remainder of the resultz being divided by 40 = ' + remainders );
    return slowMath.add(remainders, 32);
})
.then((sum) => {
    console.log('The final result is ' + sum);

})
.catch((err) => {
    console.log(Error)
});