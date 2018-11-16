import * as _ from "lodash";
import { Command, CommandResult } from "../Command";
import { FileSystemNode } from "../FileSystemNode";
// import { TextBasis } from "../Text";

export class Ls extends Command {
  constructor (params) {
    super(params);
  }

  static test (input): boolean {
    return super.detectCommand('ls', input);
  }

  execute (): CommandResult {
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
