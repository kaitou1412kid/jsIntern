const input = [['a','b','c'],['c','d','f'],['d','f','g']];
let result = {};
for (const row of input) {
    for (const element of row) {
      // Check if the element is already in the object
      if (result.hasOwnProperty(element)) {
        // If yes, increment the count
        result[element]++;
      } else {
        // If no, initialize the count to 1
        result[element] = 1;
      }
    }
}
console.log(result)