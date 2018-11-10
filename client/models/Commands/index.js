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
  const commandParams = {
    message: message,
    currentDirectory: currentDirectory,
  };

  switch (true) {
    case message === '':
      return {
        status: 'noCommand',
        messages: [],
      };

    case Cd.test(message):
      return new Cd(commandParams).execute();

    case Ls.test(message):
      return new Ls(commandParams).execute();

    case Rm.test(message):
      return new Rm(commandParams).execute();

    case Open.test(message):
      return new Open(commandParams).execute();

    case Pwd.test(message):
      return new Pwd(commandParams).execute();

    case Touch.test(message):
      return new Touch(commandParams).execute();

    default:
      return {
        status: 'error',
        messages: [
          `-mash: ${message.split(' ')[0]}: command not found`,
        ]
      }
  }
}
