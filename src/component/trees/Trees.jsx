import "./trees.css";
import { useEffect, useState } from "react";
class Node {
  constructor(data = null) {
    this.node = { data: data, children: [] };
  }
  add(element) {
    if (!element) {
      return "No Value to add";
    }
    let newNode = this.node;
    if (!this.node || this.node.data === null) {
      this.node = { data: element, children: [] };
    }
    if (element === newNode.data) {
      return "already exist";
    }
    while (newNode) {
      if (element === newNode.data) {
        return "already exist";
      }
      if (element > newNode.data) {
        if (!newNode.children[1]) {
          newNode.children[1] = { data: element, children: [] };
          return;
        } else {
          newNode = newNode.children[1];
        }
      } else if (element < newNode.data) {
        if (!newNode.children[0]) {
          newNode.children[0] = { data: element, children: [] };
          return;
        } else {
          newNode = newNode.children[0];
        }
      }
    }
  }
  remove(element) {
    if (!element || !this.node) {
      return "No Value to delete";
    }
    let newNode = this.node;
    if (this.node.data === element) {
      this.node = { data: null, children: [] };
      return;
    }
    while (newNode) {
      if (!newNode.children.length) {
        return "Not match";
      }
      if (element > newNode.data) {
        if (newNode.children[1].data === element) {
          newNode.children[1] = null;
          return;
        } else {
          newNode = newNode.children[1];
        }
      } else if (element < newNode.data) {
        if (newNode.children[0].data === element) {
          newNode.children[0] = null;
          return;
        } else {
          newNode = newNode.children[0];
        }
      }
    }
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  // this method should iterate over the tree, then it should invoke a function in every data inside the tree by level from left to right
  traverseBF(fn) {
    let index = 0;
    let arr = [this.root.node];
    while (arr.length) {
      let node;
      if (arr[0]) {
        node = arr.shift();
      } else {
        arr = arr.slice(1);
        node = arr.shift();
      }
      if (node.children[0] || node.children[1]) {
        arr.push(...node.children);
      }
      index++;
      fn(node.data);
    }
  }
  // this method should iterate over the tree, then it should invoke a function in every data inside the tree where(root~left~right)in order
  traverseDF(fn) {
    let arr = [this.root.node];
    while (arr.length) {
      let node;
      if (arr[arr.length - 1]) {
        node = arr.shift();
      } else {
        arr = arr.slice(0, arr.length - 2);
        node = arr.shift();
      }
      if ((!node && node.children[0]) || node.children[1]) {
        arr.unshift(...node.children);
      }

      fn(node.data);
    }
  }
}
function Trees() {
  const [data, setData] = useState(null);
  const nodes = [];

  const node = new Node(25);
  const tree = new Tree(node);
  node.add(10);
  node.add(7);
  node.add(9);
  node.add(3);
  node.add(2);
  node.add(14);
  node.add(12);
  node.add(15);
  node.add(29);
  node.add(4);
  node.add(30);
  node.add(35);

  tree.traverseBF((node, i) => {
    nodes.push(node);
    console.log(node);
  });
  const addNode = () => {
    node.add(parseInt(data));
    console.log(node);
    tree.traverseBF((node, i) => {
      nodes.push(node);
      console.log(node);
    });
  };
  return (
    <div className="Tree_container">
      <div className="tree_box">
        {nodes.map((node, i) => {
          return (
            <div className="node" key={i} id={i}>
              <span>{node}</span>
            </div>
          );
        })}
      </div>

      <div>
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
          placeholder="Inter new data"
          type="number"
        />

        <button
          onClick={() => {
            addNode();
            // node.add(parseInt(data));
            // console.log(node);
          }}
        >
          add
        </button>
        <button>remove</button>
      </div>
    </div>
  );
}

export default Trees;
