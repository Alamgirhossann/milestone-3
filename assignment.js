function feetToMile(feet) {
   var mile = feet * 0.000189394 ; 
   return mile;
        
}
var resultOne = feetToMile(5).toFixed(3);
console.log(resultOne, 'mile');


function woodCalculator(chair, table, bed) {
    var chairCalculator = chair * 1;
    var tableCalculator = table * 3;
    var bedCalculator = bed * 5;
    var sum = chairCalculator + tableCalculator + bedCalculator;

    return sum;
}

var resultTwo = woodCalculator(5, 3, 4);
console.log(resultTwo, 'Cubic feet wood is needed');



function brickCalculator(floor) {
   if (floor <= 15) {
       var height = floor * 15;
       return brick = height * 1000;
   } else if (floor > 10 && floor <= 20) {
       var height = (10 * 15) + (floor - 10) * 12;
       return brick = height * 1000;
   }else if (floor > 20) {
    var height = (10 * 15) + (10 + 12) + (floor - 20) * 10;
    return brick = height * 1000;
    
   }       
}
var resultThree = brickCalculator(12)
console.log(resultThree);



function tinyFriend(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) =>{
        return currentWord.length < shortestWord.length ?        currentWord : shortestWord;}, words[0])
    return shortest;
  }
  var resultFour = tinyFriend('alamgir alam alamgi');
  console.log('shortest word is', resultFour);