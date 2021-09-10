const findTheOldest = function(people) {
    let oldest = people.reduce(
        (pval, cval) => {
            let p1 = 0;
            let p2 = 0;
            let date = new Date().getFullYear();
            if (pval.yearOfDeath === undefined) { 
                p1 = date - pval.yearOfBirth;
                p2 = cval.yearOfDeath - cval.yearOfBirth;
            }
            else if (cval.yearOfDeath === undefined){
                p1 = pval.yearOfDeath - pval.yearOfBirth;
                p2 = date - cval.yearOfBirth;
            }
            else {
                p1 = pval.yearOfDeath - pval.yearOfBirth;
                p2 = cval.yearOfDeath - cval.yearOfBirth;
            }
            return (p1 > p2) ? pval : cval;
        }
    );
    return oldest;
};
module.exports = findTheOldest;
