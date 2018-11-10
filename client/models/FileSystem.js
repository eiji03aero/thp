import _ from "lodash";
export class FileSystem {

  static resolveNodeFromPath (path, currentDirectory) {
    const fragments = path.split('/');
    let targetNode = currentDirectory;

    _.each(fragments, fragment => {
      if (fragment === '..') targetNode = targetNode.parent;
      else if (targetNode.contains(fragment)) targetNode = targetNode.find(fragment);
    });

    return targetNode;
  }
}
