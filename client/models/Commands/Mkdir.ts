import { Command, CommandBasis, CommandResult } from "../Command";
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

    const { error, node, data } = FileSystem.resolveNodeFromPath(this.args[1], this.currentDirectory, { omitLast: true });

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
      const directory = new Directory({ name: data.lastFragment });
      node.addChild(directory);
      return {
        status: 'success',
        messages: [
          {
            type: 'system',
            texts: [
              { text: `Created directory: ${directory.name}` }
            ]
          }
        ],
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
