const sumAll = function(n1, n2) {
    let hold = 0;
    let mayor = n1;
    let menor = n2;
    if ((n1 < 0 || n2 < 0) || (typeof(n1) != 'number' || typeof(n2) != 'number')){
        return 'ERROR';
    }
    else if(n2 > n1 ){
        for (n1; n1 <= n2; n1++){
            hold += n1;
        }
    }
    else {
        for(menor; menor <= mayor; menor++){
            hold += menor;
        }
    }
    return hold;
};

module.exports = sumAll;
