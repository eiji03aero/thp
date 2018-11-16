import { Command, CommandResult } from "../Command";

export class Touch extends Command {
  constructor (params) {
    super(params);
  }

  static test (input): boolean {
    return super.detectCommand('touch', input);
  }

  execute (): CommandResult {
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
