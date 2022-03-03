import "./trees.css";
import { useEffect, useState } from "react";
// class Node {
//   constructor(data = null) {
//     this.node = { data: data, children: [] };
//   }

//   remove(element) {
//     if (!element || !this.node) {
//       return "No Value to delete";
//     }
//     let newNode = this.node;
//     if (this.node.data === element) {
//       this.node = { data: null, children: [] };
//       return;
//     }
//     while (newNode) {
//       if (!newNode.children.length) {
//         return "Not match";
//       }
//       if (element > newNode.data) {
//         if (newNode.children[1].data === element) {
//           newNode.children[1] = null;
//           return;
//         } else {
//           newNode = newNode.children[1];
//         }
//       } else if (element < newNode.data) {
//         if (newNode.children[0].data === element) {
//           newNode.children[0] = null;
//           return;
//         } else {
//           newNode = newNode.children[0];
//         }
//       }
//     }
//   }
// }

// class Tree {
//   constructor(root = null) {
//     this.root = root;
//   }
//   // this method should iterate over the tree, then it should invoke a function in every data inside the tree by level from left to right
//   traverseBF(fn) {
//     let index = 0;
//     let arr = [this.root.node];
//     while (arr.length) {
//       let node;
//       if (arr[0]) {
//         node = arr.shift();
//       } else {
//         arr = arr.slice(1);
//         node = arr.shift();
//       }
//       if (node.children[0] || node.children[1]) {
//         arr.push(...node.children);
//       }
//       index++;
//       fn(node.data);
//     }
//   }
// }
function Trees() {
  const nodes = [];
  const [nodeList, setNodeList] = useState([]);
  const [treeNode, setTreeNode] = useState("");
  const [data, setData] = useState("");
  const [tree, setTree] = useState([]);
  let nodeCopy = tree;
  // Add function
  // --------------------------------
  const add = (element) => {
    let newNode = nodeCopy;
    if (!element) {
      return "No Value to add";
    } else if (nodeCopy.length === 0) {
      nodeCopy[0] = { data: element, children: [] };
      setTree(nodeCopy[0]);
      setNodeList([nodeCopy[0].data]);
      setData("");
      return;
    } else {
      while (newNode) {
        if (parseInt(element) === parseInt(newNode.data)) {
          return "already exist";
        }
        if (parseInt(element) !== parseInt(newNode.data)) {
          setNodeList([...nodeList, element]);
        }

        setData("");
        if (parseInt(element) > parseInt(newNode.data)) {
          if (!newNode.children[1]) {
            newNode.children[1] = { data: element, children: [] };
            setTree(nodeCopy);
            return;
          } else {
            newNode = newNode.children[1];
          }
        } else if (parseInt(element) < parseInt(newNode.data)) {
          if (!newNode.children[0]) {
            newNode.children[0] = { data: element, children: [] };
            setTree(nodeCopy);
            return;
          } else {
            newNode = newNode.children[0];
          }
        }
      }
    }
  };

  //   // this method should iterate over the tree, then it should invoke a function in every data inside the tree by level from left to right
  const traverseBF1 = () => {
    let arr = [nodeCopy];
    let node;
    while (arr.length) {
      if (arr[0]) {
        node = arr.shift();
      } else {
        arr = arr.slice(1);
        node = arr.shift();
      }
      if ((node && node.children[0]) || (node && node.children[1])) {
        arr.push(...node.children);
      }
      nodes.push(node.data);
      setTreeNode(nodes);
    }
  };

  return (
    <div className="Tree_container">
      <div className="tree_box">
        {treeNode
          ? treeNode.map((node, i) => {
              console.log(node);
            
              // return (
              //   <div style={{ top: 0 }} className="node" key={i} id={i}>
              //     <span>{node}</span>
              //   </div>
              // );
            })
          : null}
      </div>
      <div className="nodes_list">
        {nodeList
          ? nodeList.map((node, i) => {
              return (
                <div className="list" key={i} id={i}>
                  <span>{node}</span>
                </div>
              );
            })
          : null}
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
            add(data);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            traverseBF1();
          }}
        >
          Render
        </button>
      </div>
    </div>
  );
}

export default Trees;
