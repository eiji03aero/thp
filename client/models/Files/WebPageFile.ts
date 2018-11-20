import { FileSystemNodeBasis } from "../FileSystemNode";
import { File } from "../File";

export interface WebPageFileBasis extends FileSystemNodeBasis {
  pagePath: string;
}

export class WebPageFile extends File {
  pagePath: string;

  constructor (params: WebPageFileBasis) {
    super(params);
    this.pagePath = params.pagePath;
  }
}
