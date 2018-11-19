import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";
import { FileSystem } from "../FileSystem";

export class Rm extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('rm', input);
  }

  execute (): CommandResult {
    if (this.args.length < 2) {
      return CommandResult.commandError(this, `No destination given`);
    }

    const { error, node, data } = FileSystem.resolveNodeFromPath(this.args[1], this.currentDirectory, { omitLast: true });

    if (error) {
      return CommandResult.commandError(this, error.message);
    }

    if (node.isDirectory()) {
      const fileToRemove = node.find(data.lastFragment);

      if (fileToRemove) {
        node.removeChild(fileToRemove);
        return CommandResult.success([
          `Removed file: ${fileToRemove.name}`
        ]);
      } else {
        return CommandResult.error([
          `No such file: ${node.name}`
        ]);
      }
    } else {
      return CommandResult.error([
        `Directory was designated: ${node.name}`
      ]);
    }
  }
}
