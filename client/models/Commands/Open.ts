import { Command, CommandBasis, CommandResult } from "../Command";

export class Open extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
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
