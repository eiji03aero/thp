import { Command, CommandResult } from "../Command";

export class Rm extends Command {
  constructor (params) {
    super(params);
  }

  static test (input): boolean {
    return super.detectCommand('Rm', input);
  }

  execute (): CommandResult {
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
