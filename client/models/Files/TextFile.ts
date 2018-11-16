import { File } from "../File";

export class TextFile extends File {
  content: string;

  constructor (params) {
    super(params);
    this.content = params.content;
  }
}
