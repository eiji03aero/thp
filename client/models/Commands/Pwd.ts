import { Command, CommandResult } from "../Command";

export class Pwd extends Command {
  constructor (params) {
    super(params);
  }

  static test (input): boolean {
    return super.detectCommand('pwd', input);
  }

  execute (): CommandResult {
    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: [
            { text: '/home/hoge/korekore' }
          ]
        }
      ]
    };
  }
}
