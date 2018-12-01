import { TextBasis } from "./Text";
import { Directory } from "./Directory";
import { FileSystem } from "./FileSystem";

export interface SuggesterResult {
  suggested: boolean;
  suggestions?: TextBasis[];
}

export class Suggester {
  static suggested (texts: TextBasis[]): SuggesterResult {
    return { suggested: true, suggestions: texts };
  }

  static notSuggested (): SuggesterResult {
    return { suggested: false };
  }

  static execute (message: string, currentDirectory: Directory): SuggesterResult {
    if (message === '') return this.notSuggested();

    const fileNodeNameResult = this.fileNodeNameSuggester(message, currentDirectory);
    if (fileNodeNameResult.suggested) {
      return fileNodeNameResult;
    }

    return this.notSuggested();
  }

  private static fileNodeNameSuggester (message: string, currentDirectory: Directory): SuggesterResult {
    const splitMessage = message.split(' ');
    const last = _.last(splitMessage);

    const { error, node } = FileSystem.resolveNodeFromPath(last, currentDirectory);

    if (error || !node) return this.notSuggested();

    if (node.isDirectory()) {
      const suggestions = FileSystem.getChildNameList(node);
      return this.suggested(suggestions);
    }

    return this.notSuggested();
  }
}
