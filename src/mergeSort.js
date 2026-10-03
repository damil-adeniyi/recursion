function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from left and right arrays and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate any remaining elements from either array
  return result.concat(left.slice(i)).concat(right.slice(j));
} 


function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;

  const mid = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);

    
} 
export { mergeSort };
  

