import { File } from "../File.js";

// interface {
//   type: constructor;
//   name: String;
//   parent: FileSystemNode;
//   createdAt: String;
//
//   content: String;
// }

export class TextFile extends File {
  constructor (params) {
    super(params);
    this.content = params.content;
  }
}
