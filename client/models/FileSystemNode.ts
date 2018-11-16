import { getCurrentTime } from "../utils/date";
import { Directory } from "./Directory";

export class FileSystemNode {
  name: string;
  createdAt: string;
  parent: FileSystemNode;

  constructor (params) {
    this.name = params.name;
    this.createdAt = getCurrentTime();
  }

  // mock usage. should be chagned to instanceOf Directory later
  isDirectory (): boolean { return this instanceof Directory; }
}
