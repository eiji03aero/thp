import * as _ from 'lodash';
import { getCurrentTime } from "../utils/date";

export interface FileSystemNodeBasis {
  name: string;
}

export class FileSystemNode {
  name: string;
  createdAt: string;
  parent: FileSystemNode;

  constructor (params: FileSystemNodeBasis) {
    this.name = params.name;
    this.createdAt = getCurrentTime();
  }

  isDirectory (): boolean { return this.constructor.name === 'Directory'; }
  isWebPageFile (): boolean { return this.constructor.name === 'WebPageFile'; }

  isRoot (): boolean { return _.isNil(this.parent); }
}
