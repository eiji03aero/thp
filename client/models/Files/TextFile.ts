import { FileSystemNodeBasis } from "../FileSystemNode";
import { File } from "../File";

export interface TextFileBasis extends FileSystemNodeBasis {
  content: string;
}

export class TextFile extends File {
  content: string;

  constructor (params: TextFileBasis) {
    super(params);
    this.content = params.content;
  }
}
