import { Cd } from "./Cd";
import { Ls } from "./Ls";
import { Rm } from "./Rm";
import { Open } from "./Open";
import { Pwd } from "./Pwd";
import { Touch } from "./Touch";
import { Mkdir } from "./Mkdir";
import { Directory } from "../Directory";
import { CommandResult } from "../CommandResult";

export const executeCommand = (params: {
  input: string;
  currentDirectory: Directory;
}): CommandResult => {
  const { input, currentDirectory } = params;
  const commandParams = {
    input: input,
    currentDirectory: currentDirectory,
  };

  switch (true) {
    case params.input === '':
      return CommandResult.success([]);

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

    case Mkdir.test(input):
      return new Mkdir(commandParams).execute();

    default:
      return CommandResult.error([
        `-mash: ${input.split(' ')[0]}: command not found`
      ]);
  }
}
