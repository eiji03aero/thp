import { Directory } from "./Directory";
import { MessageBasis } from "./Message";

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

  constructor (params) {
    this.input = params.input
    this.args = this._parseArgs(params.input);
    this.currentDirectory = params.currentDirectory;
  }

  static test (input: string): boolean {
    return false;
  }

  static detectCommand (name, input): boolean {
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
  _parseArgs (input): string[] {
    return input.split(' ');
  }
}
