import * as _ from "lodash";

import { Directory } from "./Directory";
import { TextBasis } from "./Text";
import { FileSystemNode } from "./FileSystemNode";

interface resolveNodeResult { error: any; node: any; data: any; }

export class FileSystem {

  static resolveNodeFromPath (path: string, currentDirectory: Directory, option: any = {}): resolveNodeResult {
    let error: any = null;
    let data: any = {};

    let targetNode: any = currentDirectory;
    let fragments = this.parsePathString(path);

    if (option.omitLast) {
      data.lastFragment = fragments.pop();
    }

    _.each(fragments, (fragment: string) => {
      if (_.isNil(targetNode)) {
        error = { message: `Could not resolve path` };
        return false;
      }
      else if (fragment === '..' && !targetNode.isRoot()) {
        if (targetNode.isRoot()) {
          error = { message: 'Could not resolve path' };
          return false;
        } else {
          targetNode = targetNode.parent;
        }
      }
      else if (targetNode.isDirectory() && targetNode.contains(fragment)) {
        targetNode = targetNode.find(fragment);
      }
      else {
        error = { message: `No such file or Directory: ${fragment}` };
        return false;
      }
    });

    return { error: error, node: targetNode, data: data };
  }

  static getAbsoluteNodePath (node: FileSystemNode): string {
    let targetNode: FileSystemNode = node;
    let nodes: FileSystemNode[] = [];

    while (!targetNode.isRoot()) {
      nodes = [ targetNode, ...nodes ];
      targetNode = targetNode.parent;

      if (targetNode.isRoot()) break;
    }

    const nodeNames = _.map(nodes, (node: FileSystemNode) => node.name);
    return targetNode.name + nodeNames.join('/');
  }

  static getChildNameList (directory: Directory): TextBasis[] {
    const { children } = directory;
    const maxNameLength = Math.max(...children.map(child => child.name.length));
    const paddedNameLength = maxNameLength + 1;
    const childNameList = children.map(child => ({
      color: child.isDirectory() ? 'blue' : 'white',
      text: _.padEnd(child.name, paddedNameLength),
    }));
    return childNameList;
  }

  /* -------------------- Private methods -------------------- */
  private static parsePathString (pathString: string): string[] {
    return pathString.split('/').filter(node => node !== "");
  }
}
