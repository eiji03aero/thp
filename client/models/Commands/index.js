import { Cd } from "./Cd.js";
import { Ls } from "./Ls.js";
import { Rm } from "./Rm.js";
import { Open } from "./Open.js";
import { Pwd } from "./Pwd.js";
import { Touch } from "./Touch.js";

export const executeCommand = ({
  message,
  currentDirectory,
}) => {
  switch (true) {
    case message === '':
      return {
        status: 'noCommand',
        messages: [],
      };

    case Cd.test(message):
      return new Cd({ message: message }).execute();

    case Ls.test(message):
      return new Ls({ message: message }).execute();

    case Rm.test(message):
      return new Rm({ message: message }).execute();

    case Open.test(message):
      return new Open({ message: message }).execute();

    case Pwd.test(message):
      return new Pwd({ message: message }).execute();

    case Touch.test(message):
      return new Touch({ message: message }).execute();

    default:
      return {
        status: 'error',
        messages: [
          `-mash: ${message.split(' ')[0]}: command not found`,
        ]
      }
  }
}
