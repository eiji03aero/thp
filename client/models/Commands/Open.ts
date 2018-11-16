import { Command, CommandResult } from "../Command";

export class Open extends Command {
  constructor (params) {
    super(params);
  }

  static test (input): boolean {
    return super.detectCommand('open', input);
  }

  execute (): CommandResult {
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
