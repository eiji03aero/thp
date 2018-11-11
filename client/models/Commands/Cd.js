import { Command } from "../Command.js";
import { FileSystem } from "../FileSystem.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Cd extends Command {
  constructor (params) {
    super(params);
    console.log('this', this);
  }

  static test (message) {
    return super.checkCommand('cd', message);
  }

  execute (currentDirectory) {
    if (this.arguments.length < 2) {
      return {
        status: 'success',
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

    const { error, node } = FileSystem.resolveNodeFromPath(this.arguments[1], this.currentDirectory);

    if (error) {
      return {
        status: 'error',
        messages: [
          { texts: [ { text: error.message, color: 'red' }]},
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
          { texts: [ { text: `Not a directory: ${node.name}`, color: 'red' }]},
        ],
      };
    }
  }
}
