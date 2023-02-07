module.exports = function towelSort (matrix) {
let newArray=[]
  if (typeof(matrix) === "undefined") {
    return [];
}
  for (let i = 0; i < matrix.length; i++) {
    if(i%2!==0)matrix[i].reverse()
   for (let j = 0; j < matrix[i].length; j++) {
    newArray.push(matrix[i][j])}
    }      
  return newArray
}
