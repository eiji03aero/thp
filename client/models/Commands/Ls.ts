import * as _ from "lodash";
import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";
import { FileSystem } from "../FileSystem";

export class Ls extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('ls', input);
  }

  execute (): CommandResult {
    const childNameList = FileSystem.getChildNameList(this.currentDirectory);

    return new CommandResult({
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: childNameList
        }
      ]
    });
  }
}
