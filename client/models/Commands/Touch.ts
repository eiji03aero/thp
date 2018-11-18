import { Command, CommandBasis, CommandResult } from "../Command";
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
    if (this.args.length !== 2) {
      return {
        status: 'error',
        messages: [
          {
            type: 'system',
            texts: [
              { text: '-mash: cd: 2arguments must be given' }
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
      const file = new TextFile({ name: data.lastFragment, content: '' });
      node.addChild(file);
      return {
        status: 'success',
        messages: [
          {
            type: 'system',
            texts: [
              { text: `Created file: ${data.lastFragment}` },
            ]
          }
        ],
      };
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
