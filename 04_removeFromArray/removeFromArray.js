const removeFromArray = function(theArray, ...args) {
    let newArr = theArray;
    for (let i = 0; i < args.length; i++){
        newArr=newArr.filter(function(value){
            if(typeof(value)===typeof(args[i])){
                return  value != args[i]; 
            }
            else
                return value;
        });
    }
    return newArr;
};

module.exports = removeFromArray;
