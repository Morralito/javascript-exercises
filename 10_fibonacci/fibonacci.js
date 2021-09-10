const fibonacci = function(num) {
    let fibo = [];
    for (let i = 0; i <= +num; i++){
        if (i <= 1){ fibo.push(i); }
        else {
            fibo.push(fibo[i - 1] + fibo[i - 2])
        }
 
    }
    return (num >= 0) ? fibo[num] : "OOPS" ;  
};

/* const fibonacci = function(num) {
    let before2 = 0;
    let before1 = 1;
    for (let i = 2; i <= +num; i++){
        let nb1 = before1 + before2;
        before2 = before1;
        before1 = nb1;
    }
    return (num > 0) ? before1 : "OOPS" ;  
}; */

module.exports = fibonacci;
