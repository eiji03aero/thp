import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Touch extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('touch', message);
  }

  execute () {
    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: [
            { text: 'created the file' }
          ]
        }
      ]
    };
  }
}
