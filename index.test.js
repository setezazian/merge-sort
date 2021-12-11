const mergeSort = require('./index');

describe('Test the Implementation of merge sort', () => {
  it('should sort an unsorted array', () => {
    expect(mergeSort([4, 7, 4, 3, 9, 1, 2])).toEqual([1, 2, 3, 4, 4, 7, 9]);
  });

  it('should return an already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 4, 7, 9])).toEqual([1, 2, 3, 4, 4, 7, 9]);
  });

  it('should return an array of length one', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('should sort an array', () => {
    expect(mergeSort([9, 7, 4, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 4, 7, 9]);
  });
});
