/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//  所有与边上O相邻的O都不会被修改，其他的O都修改
var solve = function(board) {

    

    let m = board.length
    let n = board[0].length

    const dfs = function(x, y) {
        // 判断上下左右位置，如果为O则深度遍历，并将其改为#
        if(board[x][y] !== 'O') return;
        board[x][y] = '#'
        // 上
        if(y-1 > 0) dfs(x, y-1)
        // 下
        if(y+1 < n) dfs(x, y+1)
        // 左
        if(x-1 > 0) dfs(x-1, y)
        // 右
        if(x+1 < m) dfs(x+1, y)
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++){
            // 找到边界为O的位置, 进行递归，若递归值为O，则更改为#
            if ((i === 0 || j === 0 || i === m - 1 || j === n - 1) && board[i][j] === 'O') {
                dfs(i, j)
            }
        }
    }


    // 遍历，如果是#，改为O, 如果是O，改为X
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++){
            if(board[i][j] === '#') {
                board[i][j] = 'O'
            }
            else if(board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    return board
};
