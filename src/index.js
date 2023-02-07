module.exports = function towelSort (matrix) {
 let newArray=[]
  if (typeof(matrix) === "undefined") {
        return [];
    }
      for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix[0].length; j++) {
        newArray.push(matrix[i][j])
        }       
      }
      return newArray.sort((a,b)=>a-b)
}
