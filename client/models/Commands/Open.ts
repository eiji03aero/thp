import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";

export class Open extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('open', input);
  }

  execute (): CommandResult {
    return CommandResult.success([
      'opened the file!',
    ]);
  }
}
