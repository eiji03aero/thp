import * as lodash from "lodash";
import * as R from "ramda";

export class FileSystem {

  static resolveNodeFromPath (path, currentDirectory) {
    let error = null;

    const fragments = this._parsePathString(path);
    let targetNode = currentDirectory;

    lodash.each(fragments, fragment => {
      if (lodash.isNil(targetNode)) {
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
  static _parsePathString (pathString) {
    return R.pipe(
      R.split('/'),
      R.filter(R.identity),
    )(pathString);
  }
}
