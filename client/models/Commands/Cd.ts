import { Command, CommandBasis } from "../Command";
import { CommandResult } from '../CommandResult'
import { FileSystem } from "../FileSystem";

export class Cd extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('cd', input);
  }

  execute (): CommandResult {
    if (this.args.length < 2) {
      return CommandResult.commandError(this, `No destination given`);
    }

    const { error, node } = FileSystem.resolveNodeFromPath(this.args[1], this.currentDirectory);

    if (error) {
      return CommandResult.commandError(this, error.message);
    }

    if (node.isDirectory()) {
      return CommandResult.success([], node);
    } else {
      return CommandResult.notDirectory(node.name);
    }
  }
}
