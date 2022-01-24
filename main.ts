function doSomething() {
    //wrong
    // for(let i = 0; i < 5; i++) {
    //     console.log(i);
    // }
    // console.log(i);
    //correct
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
    // difference between let and var is that var can be used 
    // outside blocks
}
doSomething();