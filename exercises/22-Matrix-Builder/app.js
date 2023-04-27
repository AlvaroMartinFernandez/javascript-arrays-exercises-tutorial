function matrixBuilder(number){
    let matrix;
    for (let i= 0;i<5;i++){
        for (let j= 0;j<5;j++){
           matrix[i][j].push(Math.floor(Math.random()*2)); 
        }
    }
    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))