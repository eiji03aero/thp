import * as _ from "lodash";

import { Directory } from "./Directory";

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
      if (_.isNil(targetNode) ) {
        error = { message: `Could not resolve path` };
        return false;
      }
      else if (fragment === '..' && !(_.isNil(targetNode.parent))) {
        targetNode = targetNode.parent;
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

  /* -------------------- Private methods -------------------- */
  private static parsePathString (pathString: string): string[] {
    return pathString.split('/').filter(node => node !== "");
  }
}
