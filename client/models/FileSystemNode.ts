import * as _ from 'lodash';
import { getCurrentTime } from "../utils/date";
import { Directory } from "./Directory";

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

  isDirectory (): boolean { return this instanceof Directory; }

  isRoot (): boolean { return _.isNil(this.parent); }
}
