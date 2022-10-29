// Bubble sort has a worst-case and average complexity of O(n2), 
// where n is the number of items being sorted. 
// When the list is already sorted (best-case), the complexity of bubble sort is only O(n). 
// The space complexity for Bubble Sort is O(1), because only single additional memory space is required (for temp swap element).

const bubbleSort = (array, pointer = array.length - 1) => {
    // Base Case
    if (pointer === 0) {
      return array;
    }
  
    for (let i = 0; i < pointer; i++) {
        // if the current item is greater then the next eg: 7,1
        if (array[i] > array[i + 1]) {
            // temp store the smallest value (next item) eg: 1
            let temp = array[i + 1];
            // swap the current with next and next with current
            array[i + 1] = array[i];
            array[i] = temp;
            // should be 1,7
        }
    }
    // Recursive call to compare the next value
    console.log(array);
    return bubbleSort(array, pointer - 1);  
  };
  console.log(bubbleSort([3,4,6,7,1,2,5]))