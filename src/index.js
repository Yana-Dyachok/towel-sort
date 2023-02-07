module.exports = function towelSort (matrix) {
let newArray = [];
  if (typeof matrix === "undefined") {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[0].length; j++) {
        newArray.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[0].length; j >= 0; j--) {
        newArray.push(matrix[i][j]);
      }
    }
  }
  return newArray;
}
