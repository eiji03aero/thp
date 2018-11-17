import { FileSystemNode, FileSystemNodeBasis } from "./FileSystemNode";

export class File extends FileSystemNode {
  constructor (params: FileSystemNodeBasis) {
    super(params);
  }
}
