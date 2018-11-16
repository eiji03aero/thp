import * as _ from "lodash";
import { FileSystemNode } from "./FileSystemNode";

export class Directory extends FileSystemNode {
  children: FileSystemNode[];

  constructor (params) {
    super(params);
    this.children = [];

    _.each(params.children, (child) => this.addChild(child));
  }

  addChild (child: FileSystemNode): void {
    child.parent = this;
    this.children = _.concat(this.children, child);
  }

  removeChild (child: FileSystemNode): void {
    this.children = _.filter(this.children, c => child !== c);
  }

  contains (childName: string): boolean {
    const childrenNames = _.map(this.children, child => child.name);
    return _.includes(childrenNames, childName);
  }

  find (childName: string): FileSystemNode {
    return _.find(this.children, { name: childName });
  }
}
