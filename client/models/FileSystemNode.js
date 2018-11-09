import { getCurrentTime } from "../utils/date.js";

// interface {
//   type: constructor;
//   name: String;
//   parent: FileSystemNode;
//   createdAt: String;
// }

export class FileSystemNode {
  constructor (params) {
    this.type = this.constructor.name;
    this.name = params.name;
    this.createdAt = getCurrentTime();
  }
}
