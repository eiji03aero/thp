import { Directory } from "./Directory";
import { FileSystem } from "./FileSystem";

export interface CompleterResult {
  completed: boolean;
  completedText?: string;
}

export class Completer {
  static completed (text: string): CompleterResult {
    return { completed: true, completedText: text};
  }

  static notCompleted (): CompleterResult {
    return { completed: false };
  }

  static execute (message: string, currentDirectory: Directory): CompleterResult {
    if (message === '') return this.notCompleted();

    const commandNameResult = this.commandNameCompleter(message);
    if (commandNameResult.completed) {
      return commandNameResult;
    }
    const fileNodeNameResult = this.fileNodeNameCompleter(message, currentDirectory);
    if (fileNodeNameResult.completed) {
      return fileNodeNameResult;
    }
    return this.notCompleted();
  }

  private static commandNameCompleter (message: string): CompleterResult {
    const commandNameList = [
      'cd', 'ls', 'mkdir', 'open',
      'pwd', 'rm', 'touch',
    ];
    const nameRegexp = this.getNameRegExp(message);

    for (let name of commandNameList) {
      if (nameRegexp.test(name)) {
        return this.completed(name);
      }
    }

    return this.notCompleted();
  }

  private static fileNodeNameCompleter (message: string, currentDirectory: Directory): CompleterResult {
    const splitMessage = message.split(' ');
    const initial = splitMessage.length > 1
      ? _.initial(splitMessage)
      : [];
    const last = _.last(splitMessage);

    const { error, node, data } = FileSystem.resolveNodeFromPath(last, currentDirectory, { omitLast: true });

    if (error || !node || data.lastFragment === '..') return this.notCompleted();

    const nameRegExp = this.getNameRegExp(data.lastFragment);

    for (let child of node.children) {
      if (nameRegExp.test(child.name)) {
        const modifiedPathName = last.substring(0, last.length - data.lastFragment.length) + child.name;
        const completedMessage = [ ...initial, modifiedPathName].join(' ');
        return this.completed(completedMessage);
      }
    }

    return this.notCompleted();
  }

  private static getNameRegExp (name: string): RegExp {
    return new RegExp('^' + name);
  }
}
