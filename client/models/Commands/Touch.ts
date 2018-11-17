import { Command, CommandBasis, CommandResult } from "../Command";

export class Touch extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
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
