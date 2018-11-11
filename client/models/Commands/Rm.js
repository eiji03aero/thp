import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Rm extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('Rm', message);
  }

  execute () {
    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: [
            { text: 'deleted the file' }
          ]
        }
      ]
    };
  }
}
