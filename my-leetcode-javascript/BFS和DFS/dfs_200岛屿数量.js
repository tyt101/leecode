/**
 * @param {character[][]} grid
 * @return {number}
 */
//  Array.from({ length: m }, () => Array(n).fill(0))
// 覆水难收
var numIslands = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let count = 0

    const dfs = function(x, y){
        if(grid[x][y] === '0') return
        grid[x][y] = '0'
        // 上
        if(y - 1 >= 0) dfs(x, y-1)
        // 下
        if(y + 1 < n) dfs(x, y+1)
        // 左
        if(x - 1 >= 0) dfs(x-1, y)
        // 右
        if(x + 1 < m) dfs(x+1, y)
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }
    return count
};
// 1 1 1
// 0 1 0
// 1 1 1
