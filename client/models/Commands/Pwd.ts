import { Command, CommandBasis } from "../Command";
import { CommandResult } from "../CommandResult";

export class Pwd extends Command {
  constructor (params: CommandBasis) {
    super(params);
  }

  static test (input: string): boolean {
    return super.detectCommand('pwd', input);
  }

  execute (): CommandResult {
    return CommandResult.success([
      '/home/hoge/korekore'
    ]);
  }
}
