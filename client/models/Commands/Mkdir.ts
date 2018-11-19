import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";
import { FileSystem } from "../FileSystem";
import { Directory } from "../Directory";

export class Mkdir extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('mkdir', input);
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
      const directory = new Directory({ name: data.lastFragment });
      node.addChild(directory);
      return CommandResult.success([
        `Created directory: ${directory.name}`
      ]);
    } else {
      return CommandResult.notDirectory(node.name);
    }
  }
}
