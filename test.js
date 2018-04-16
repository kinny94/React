var matrix = [
    [0,0,0,1,0,0,0,1,1,1],
    [0,0,0,0,0,0,1,1,0,1],
    [1,0,0,1,1,0,0,0,0,1],
    [0,1,0,0,0,0,0,0,0,1],
    [0,0,0,0,1,1,1,1,0,0],
    [1,0,0,0,0,0,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,0,0,0]
];

function findIslands( matrix, x, y ){
    try{
        if(matrix[x][y] === 1) {
            matrix[x][y] = 0;
            findIslands(matrix, x + 1, y);
            findIslands(matrix, x, y + 1);
            findIslands(matrix, x - 1, y);
            findIslands(matrix, x, y - 1);
            findIslands(matrix, x + 1, y + 1);
            findIslands(matrix, x - 1, y - 1);
            findIslands(matrix, x + 1, y - 1);
            findIslands(matrix, x - 1, y + 1);
        }
    }catch( err ){
        console.log( err );
    }
}

let total = 0;
for( let i=0; i<matrix.length; i++ ){
    for( let j=0; j<matrix[i].length; j++ ){
        if( matrix[i][j] == 1 ){
            total++;
            findIslands( matrix, i, j );
        }
    }
}
