import { Command, CommandBasis, CommandResult } from "../Command";

export class Pwd extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
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
