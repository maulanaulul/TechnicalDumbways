// function bubbleSort(array) {
//   for (var i = array.length; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }

//   return array;
// }

// var res = bubbleSort([9, 2, 3, 4, 5]);

// console.log(res);

// Step by Step

function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          console.log("arrat[j]"+array[j])
          console.log("arrat[j+1]"+array[j+1])
          var temp = array[j];
          console.log("temp = "+temp)
          array[j] = array[j + 1];
          console.log("array[j]= "+array[j])
          array[j + 1] = temp;
          console.log(temp)
          console.log(array)
        }
      }
    }
  
  }
  


  bubbleSort([20, 12, 35, 11, 17, 9, 58, 23, 69, 21]);
  
  // function bubbleSort(array) {
//   for (var i = array.length; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }

//   return array;
// }

// var res = bubbleSort([9, 2, 3, 4, 5]);

// console.log(res);
