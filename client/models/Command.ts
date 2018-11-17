import { Directory } from "./Directory";
import { MessageBasis } from "./Message";

export interface CommandBasis {
  input: string;
  currentDirectory: Directory;
}

export interface CommandResult {
  status: string;
  messages: MessageBasis[];
  moveTo?: Directory;
}

export class Command {
  type: string;
  input: string;
  args: string[];
  currentDirectory: Directory;

  constructor (params: CommandBasis) {
    this.input = params.input
    this.args = this._parseArgs(params.input);
    this.currentDirectory = params.currentDirectory;
  }

  static test (input: string): boolean {
    return false;
  }

  static detectCommand (name: string, input: string): boolean {
    return input.split(' ')[0] === name;
  }

  execute (): CommandResult {
    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: [
            { text: 'system desu' }
          ]
        }
      ]
    }
  }

  /* -------------------- Private methods -------------------- */
  _parseArgs (input: string): string[] {
    return input.split(' ');
  }
}
