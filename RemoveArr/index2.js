function tryRemoveFromArray(arr, index) {
  if (index < 0 || index >= arr.length) {
    return arr;
  }

  let a = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      a.push(arr[i]);
    }
  }

  return a;
}

let myArray = [1, 2, 5, 7, 8];
let removeIndex = 2;
let newArray = tryRemoveFromArray(myArray, removeIndex);
document.write(newArray);
