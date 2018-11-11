import _ from "lodash";
import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Ls extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('ls', message);
  }

  execute () {
    const { children } = this.currentDirectory;
    const maxNameLength = Math.max(...children.map(child => child.name.length));
    const paddedNameLength = maxNameLength + 1;
    const childNameList = children.map(child => ({
      color: child.isDirectory() ? 'blue' : 'white',
      text: _.padEnd(child.name, paddedNameLength),
    }));

    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: childNameList
        }
      ]
    };
  }
}
