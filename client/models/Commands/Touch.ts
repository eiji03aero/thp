import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";
import { FileSystem } from "../FileSystem";
import { TextFile } from "../Files/TextFile";

export class Touch extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('touch', input);
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
      const file = new TextFile({ name: data.lastFragment, content: '' });
      node.addChild(file);
      return CommandResult.success([
        `Created file: ${data.lastFragment}` 
      ]);
    } else {
      return CommandResult.error([
        `Not a directory: ${node.name}`
      ]);
    }
  }
}
