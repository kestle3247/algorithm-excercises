//Mode Function
function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}
console.log(mode(['4', '12', '7', '7']))

//Leap year
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
console.log(leapYear(2017))
//integer
var testArray = ['1', '2', '5']

var firstMissingInt = function(number) {
	for ( var i = 1; true; i++) {
		if ( number.indexOf(i) === 1 ) {
			return 1
		}
	}
}
console.log(firstMissingInt(testArray))
// Square code

// var input = "Have a nice day!"
// var root = Math.sqrt(input.length)
//
// console.log(root)
// inputAsArray = input.split('')
// var output = {
//   [],
//   [],
//   [],
//   [],
// }
// for ( var i = 0; i < output.length); i++) {
//   for ( var j = 0; j < 4; j++){
//     output[i].push(inputAsArray.shift())
//   }
// }
// console.log(output)
// for (var i = 0; i < output.length; i++) {
//   output[i] = output[i].join('')
// }
//
// for (var i = 0; i < output.length; i++) {
//   console.log(output[i])
// }
//Duplicates
function getduplicates(Array){
    returnArray = [];

    for(i=0; i<Array.length; i++){
        if (i<Array.length-1){
            if(Array[i]==Array[i+1]){
                returnArray.push(Array[i])
            }
        }
    }
    return returnArray;
}
console.log(getduplicates([6,7,5],[6,12,8]))
//contains the same numbers
function containsSameNumbers(arrayOne, arrayTwo){

    if(!arrayOne.length==arrayTwo.length){
        return false;
    }

    for(i=0; i<arrayOne.length; i++){
        contains = false;

        for(x=0; x<arrayTwo.length;x++){
            if(arrayOne[i]==arrayTwo[x]){
                contains = true;
            }
        }
        if(!contains){
            return false;
        }
    }
    return true;

}
console.log(containsSameNumbers([8,4,7],[8,5,9]))
