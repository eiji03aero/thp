import { Command, CommandBasis, CommandResult } from "../Command";
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
      return {
        status: 'error',
        messages: [
          {
            type: 'system',
            texts: [
              { text: '-mash: cd: no destination given' }
            ]
          }
        ]
      };
    }

    const { error, node } = FileSystem.resolveNodeFromPath(this.args[1], this.currentDirectory);

    if (error) {
      return {
        status: 'error',
        messages: [
          {
            type: 'system',
            texts: [
              { text: error.message, color: 'red' }
            ]
          },
        ],
      };
    }

    if (node.isDirectory()) {
      return {
        status: 'success',
        moveTo: node,
        messages: [],
      }
    } else {
      return {
        status: 'error',
        messages: [
          {
            type: 'system',
            texts: [
              { text: `Not a directory: ${node.name}`, color: 'red' }
            ]
          },
        ],
      };
    }
  }
}
