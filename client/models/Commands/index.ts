import { Cd } from "./Cd";
import { Ls } from "./Ls";
import { Rm } from "./Rm";
import { Open } from "./Open";
import { Pwd } from "./Pwd";
import { Touch } from "./Touch";
import { CommandResult } from "../Command";

export const executeCommand = ({
  input,
  currentDirectory,
}): CommandResult => {
  const commandParams = {
    input: input,
    currentDirectory: currentDirectory,
  };

  switch (true) {
    case input === '':
      return {
        status: 'noCommand',
        messages: [],
      };

    case Cd.test(input):
      return new Cd(commandParams).execute();

    case Ls.test(input):
      return new Ls(commandParams).execute();

    case Rm.test(input):
      return new Rm(commandParams).execute();

    case Open.test(input):
      return new Open(commandParams).execute();

    case Pwd.test(input):
      return new Pwd(commandParams).execute();

    case Touch.test(input):
      return new Touch(commandParams).execute();

    default:
      return {
        status: 'error',
        messages: [
          {
            type: 'system',
            texts: [
              { text: `-mash: ${input.split(' ')[0]}: command not found` }
            ]
          }
        ]
      }
  }
}
