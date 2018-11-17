import { Command, CommandBasis, CommandResult } from "../Command";

export class Rm extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
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
