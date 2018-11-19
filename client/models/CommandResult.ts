import { Command } from "./Command";
import { MessageBasis } from "./Message";
import { Directory } from "./Directory";

export interface CommandResultBasis {
  status: string;
  messages: MessageBasis[];
  moveTo?: Directory;
}

export class CommandResult {
  status: string;
  messages: MessageBasis[];
  moveTo: Directory

  constructor (params: CommandResultBasis) {
    this.status = params.status;
    this.messages = params.messages;
    this.moveTo = params.moveTo;
  }

  static success (strings: string[], moveTo?: Directory): CommandResult {
    const messages = _.map(strings, (str: string) => ({
      type: 'system',
      texts: [ { text: str } ],
    }));
    return new CommandResult({ status: 'success', messages: messages, moveTo: moveTo });
  }

  static error (strings: string[]): CommandResult {
    const messages = _.map(strings, (str: string) => ({
      type: 'system',
      texts: [ { text: str, color: 'red' } ]
    }));
    return new CommandResult({ status: 'error', messages: messages });
  }

  static commandError (command: Command, text: string): CommandResult {
    const commandName = command.typeName;
    const messages = [
      {
        type: 'system',
        texts: [ { text: `-mash: ${commandName}: ${text}`, color: 'red' } ]
      }
    ];
    return new CommandResult({ status: 'error', messages: messages })
  }

  static noSuchFileOrDirectory (nodeName: string): CommandResult {
    return new CommandResult({
      status: 'error',
      messages: [
        {
          type: 'system',
          texts: [ { text: `-mash: No such file or directory: ${nodeName}`, color: 'red' } ]
        }
      ]
    });
  }

  static notDirectory (nodeName: string): CommandResult {
    return new CommandResult({
      status: 'error',
      messages: [
        {
          type: 'system',
          texts: [ { text: `-mash: Not a directory: ${nodeName}`, color: 'red' }]
        }
      ]
    })
  }
}
