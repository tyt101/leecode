class TrieNode {  
  constructor() {  
    this.children = {}; // 保存子节点的对象，键是字符  
    this.isEndOfWord = false; // 标记该节点是否为一个单词的结尾  
  }  
}  
  
class Trie {  
  constructor() {  
    this.root = new TrieNode(); // 根节点不包含任何字符  
  }  
  
  // 插入一个单词到前缀树中  
  insert(word) {  
    let node = this.root;  
    // apple
    for (let char of word) { 
      if (!node.children[char]) {  
        node.children[char] = new TrieNode();
      }
      node = node.children[char];  
    }  
    console.log(this.root)
    node.isEndOfWord = true; // 标记单词的最后一个字符  
  }  
  
  // 搜索一个单词是否在前缀树中  
  search(word) {  
    let node = this.root;  
    for (let char of word) {  
      if (!node.children[char]) {  
        return false;  
      }  
      node = node.children[char];  
    }  
    return node.isEndOfWord; // 只有当标记为单词的最后一个字符时才返回true  
  }  
  
  // 检查前缀树中是否有以给定前缀开头的单词  
  startsWith(prefix) {  
    let node = this.root;  
    for (let char of prefix) {  
      if (!node.children[char]) {  
        return false;  
      }  
      node = node.children[char];  
    }  
    return true; // 找到前缀，但不一定是单词的结尾  
  }  
}  
  
// 使用示例  
const trie = new Trie();  
trie.insert("apple");  
// trie.insert("banana");  
// trie.insert("app");  
  
// console.log(trie.search("apple"));   // 输出: true  
// console.log(trie.search("app"));     // 输出: true  
// console.log(trie.search("ap"));      // 输出: false（'ap' 不是一个完整的单词）  
// console.log(trie.search("banana"));  // 输出: true  
// console.log(trie.search("ban"));     // 输出: false（'ban' 不是一个完整的单词）  
// console.log(trie.startsWith("ban")); // 输出: true  
// console.log(trie.startsWith("ba"));  // 输出: true  
// console.log(trie.startsWith("xyz")); // 输出: false