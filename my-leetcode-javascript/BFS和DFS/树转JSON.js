
let tree = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [
      {
        id: 3,
        name: '部门C',
        parentId: 1,
        children: [
          {
            id: 6,
            name: '部门F',
            parentId: 3
          }
        ]
      },
      {
        id: 4,
        name: '部门D',
        parentId: 1,
        children: [
          {
            id: 8,
            name: '部门H',
            parentId: 4
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '部门B',
    parentId: 0,
    children: [
      {
        id: 5,
        name: '部门E',
        parentId: 2
      },
      {
        id: 7,
        name: '部门G',
        parentId: 2
      }
    ]
  }  
];
function dfs(tree) {
  let queue = []
  let list = []
  for(let i = 0; i < tree.length; i++) {
    queue.push(tree[i])
  }

  while(queue.length) {
    let top = queue.shift();
    list.push({id:top.id, name:top.name, parentId:top.parentId})
    if(top.children) {
       list.push(...dfs(top.children))
    }
  }
  return list
}
console.log(dfs(tree))


function bfs(tree) {
  let queue = []
  let list = []
  for(let i = 0; i < tree.length; i++) {
    queue.push(tree[i])
  }
  while(queue.length) {
    let top = queue.shift()
    list.push({id:top.id, name:top.name, parentId:top.parentId})
    if(top.children) {
      queue.push(...top.children)
    }
  }
  return list
}
console.log(bfs(tree))