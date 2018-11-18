import { Command, CommandBasis, CommandResult } from "../Command";
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
      const fileToRemove = node.find(data.lastFragment);

      if (fileToRemove) {
        node.removeChild(fileToRemove);
        return {
          status: 'success',
          messages: [
            {
              type: 'system',
              texts: [
                { text: `Removed file: ${fileToRemove.name}` }
              ]
            }
          ]
        }
      } else {
        return {
          status: 'error',
          messages: [
            {
              type: 'system',
              texts: [
                { text: `No such file: ${node.name}`, color: 'red' }
              ]
            },
          ],
        };
      }
    } else {
      return {
        status: 'error',
        messages: [
          {
            type: 'system',
            texts: [
              { text: `No such file or directory: ${node.name}`, color: 'red' }
            ]
          }
        ],
      }
    }
  }
}
