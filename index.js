const merge = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  const remaining = leftIndex === left.length ? right.slice(rightIndex) : left.slice(leftIndex);
  return result.concat(remaining);
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  // recursive approach
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

module.exports = mergeSort;
