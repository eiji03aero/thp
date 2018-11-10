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
          '-mash: cd: no destination given',
        ]
      };
    }

    const targetDirectory = FileSystem.resolveNodeFromPath(this.arguments[1], this.currentDirectory);

    return {
      status: 'success',
      moveTo: targetDirectory,
      messages: [ ],
    };
  }
}
