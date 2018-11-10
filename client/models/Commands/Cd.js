import { Command } from "../Command.js";

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

    return {
      status: 'success',
      messages: [ ],
    };
  }
}
