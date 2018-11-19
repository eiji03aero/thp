import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";
import { FileSystem } from "../FileSystem";

export class Pwd extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('pwd', input);
  }

  execute (): CommandResult {
    const currentWorkingDirectory = FileSystem.getAbsoluteNodePath(this.currentDirectory);
    return CommandResult.success([
      currentWorkingDirectory
    ]);
  }
}
