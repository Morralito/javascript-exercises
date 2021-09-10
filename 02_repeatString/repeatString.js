const repeatString = function(string, num) {
  let hold = '';
  for (let i=0; i < num; i++){
    hold += string;
  }
  return (num < 0 ? 'ERROR' : hold);
};
module.exports = repeatString;