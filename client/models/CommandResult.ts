import * as _ from 'lodash';
import { Command } from "./Command";
import { MessageBasis } from "./Message";
import { Directory } from "./Directory";

interface CommandResultBasisOptional {
  moveTo?: Directory;
  navigateTo?: string;
}

export interface CommandResultBasis {
  status: string;
  messages: MessageBasis[];
  data?: CommandResultBasisOptional;
}

export class CommandResult {
  status: string;
  messages: MessageBasis[];
  data: CommandResultBasisOptional;

  constructor (params: CommandResultBasis) {
    this.status = params.status;
    this.messages = params.messages;
    this.data = params.data || {};
  }

  static success (strings: string[], data?: CommandResultBasisOptional): CommandResult {
    const messages = _.map(strings, (str: string) => ({
      type: 'system',
      texts: [ { text: str } ],
    }));
    return new CommandResult({ status: 'success', messages: messages, data: data });
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
