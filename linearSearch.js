// A linear search runs in at worst linear time and makes at most n comparisons, 
// where n is the length of the list. 

const linearSearch = (array, itemToFind) => {
    for(let i = 0; i < array.length; i++){
      if(array[i] === itemToFind) return i;
    }
    return -1;
}
const numbers = [1,2,3,4,5,6,3,2,2,5,7,4];
// prints either the first index value of the number to be found or -1
console.log(linearSearch(numbers, 5))