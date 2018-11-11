import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Open extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('open', message);
  }

  execute () {
    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: [
            { text: 'opend the file!' }
          ]
        }
      ]
    };
  }
}
