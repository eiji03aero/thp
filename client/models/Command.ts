import { CommandResult } from "./CommandResult";
import { Directory } from "./Directory";

export interface CommandBasis {
  input: string;
  currentDirectory: Directory;
}

export class Command {
  type: string;
  input: string;
  args: string[];
  currentDirectory: Directory;

  constructor (params: CommandBasis) {
    this.input = params.input
    this.args = this.parseArgs(params.input);
    this.currentDirectory = params.currentDirectory;
  }

  static test (input: string): boolean {
    return false;
  }

  static detectCommand (name: string, input: string): boolean {
    return input.split(' ')[0] === name;
  }

  get typeName (): string {
    return this.constructor.name.toLowerCase();
  }

  execute (): CommandResult {
    return CommandResult.success([
      'System desu'
    ]);
  }

  /* -------------------- Private methods -------------------- */
  private parseArgs (input: string): string[] {
    return input.split(' ').filter(arg => arg !== '');
  }
}
