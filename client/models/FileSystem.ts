import * as _ from "lodash";

import { Directory } from "./Directory";

export class FileSystem {

  static resolveNodeFromPath (path: string, currentDirectory: Directory) {
    let error: any = null;

    const fragments = this._parsePathString(path);
    let targetNode: any = currentDirectory;

    _.each(fragments, fragment => {
      if (_.isNil(targetNode)) {
        error = { message: `Could not resolve path` };
        return false;
      }
      else if (fragment === '..') {
        targetNode = targetNode.parent;
      }
      else if (targetNode.contains(fragment)) {
        targetNode = targetNode.find(fragment);
      }
      else {
        error = { message: `No such file or Directory: ${fragment}` };
        return false;
      }
    });

    return { error: error, node: targetNode };
  }

  /* -------------------- Private methods -------------------- */
  static _parsePathString (pathString: string): string[] {
    return pathString.split('/').filter(node => node !== "");
  }
}
