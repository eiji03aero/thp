import * as _ from "lodash";
import { Command, CommandBasis, CommandResult } from "../Command";

export class Ls extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
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
