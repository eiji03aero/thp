import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Pwd extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('pwd', message);
  }

  execute () {
    return {
      status: 'success',
      messages: [
        '/home/domo'
      ]
    };
  }
}
