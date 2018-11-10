import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Ls extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('ls', message);
  }

  execute () {
    return {
      status: 'success',
      messages: [
        'domo kore nakanaka',
        'eena eiji osakabe',
      ]
    };
  }
}
