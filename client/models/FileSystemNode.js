import { getCurrentTime } from "../utils/date.js";
import { Directory } from "./Directory.js";

// interface {
//   type: constructor.name;
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

  isDirectory () { return this.type === 'Directory' }
}
