import { FileSystemNode } from "./FileSystemNode.js";

// interface {
//   type: constructor;
//   name: String;
//   parent: FileSystemNode;
//   createdAt: String;
// }

export class File extends FileSystemNode {
  constructor (params) {
    super(params);
  }
}
