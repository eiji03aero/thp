import _ from "lodash";
import { FileSystemNode } from "./FileSystemNode.js";

// interface {
//   type: constructor;
//   name: String;
//   parent: FileSystemNode;
//   createdAt: String;
//
//   children: Array<FileSystemNode>;
// }

export class Directory extends FileSystemNode {
  constructor (params) {
    super(params);
    this.children = [];

    _.each(params.children, (child) => this.addChild(child));
  }

  addChild (child) {
    child.parent = this;
    this.children.push(child);
  }

  removeChild (child) {
    this.children = this.children.filter(c => child !== c);
  }
}
