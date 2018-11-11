import _ from "lodash";
import { Command } from "../Command.js";

// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Ls extends Command {
  constructor (params) {
    super(params);
  }

  static test (message) {
    return super.checkCommand('ls', message);
  }

  execute () {
    const { children } = this.currentDirectory;
    const listMessage = _.reduce(
      children,
      ( accum, current ) => accum + ' ' + current.name,
      ''
    );

    return {
      status: 'success',
      messages: [
        {
          type: 'system',
          texts: [
            { text: listMessage }
          ]
        }
      ]
    };
  }
}
