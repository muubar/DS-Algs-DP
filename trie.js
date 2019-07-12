class Node {
  constructor() {
    this.keys = new Map();
    this.isWord = false;
  }

  endWord() { this.isWord = true; return true; }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(value, node = this.root) {
    if (value.length === 0) {
      if (node === this.root) throw new Error("empty string is not a valid argument");
      else return node.endWord();
    }
    if (node.keys.has(value[0])) this.add(value.slice([1]), node.keys.get(value[0]));
    else {
      node.keys.set(value[0], new Node());
      this.add(value.slice([1]), node.keys.get(value[0]));
    }
  }


  includes(str, node = this.root) {
    if (str.length === 0) return node.isWord;
    if (!node.keys.get(str[0])) return false;
    return this.includes(str.slice(1), node.keys.get(str[0]));
  }


  autoComplete(value) {
    var words = [];
    const startNode = this.search(value);
    if (startNode) traverse(startNode);
    return words;

    function traverse(node, str = value) {
      if (node.isWord) words.push(str);
      for (var letter of node.keys.keys()) {
        traverse(node.keys.get(letter), str + letter);
      }
    }
  }


  search(str, node = this.root) {
    if (str.length === 0) return node;
    if (!node.keys.get(str[0])) return false;
    return this.search(str.slice(1), node.keys.get(str[0]));
  }


}