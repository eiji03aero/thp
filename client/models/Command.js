// interface {
//   type: constructor;
//   arguments: Array<String>;
//   currentDirectory: Directory;
// }

export class Command {
  constructor ({
    message,
    currentDirectory,
  }) {
    this.type = this.constructor.name;
    this.arguments = this._parseArgument(message);
    this.currentDirectory = currentDirectory;
  }

  static test () {
    return false;
  }

  static checkCommand (name, message) {
    return message.split(' ')[0] === name;
  }

  execute () {
    return [ 'command' ];
  }

  /* -------------------- Private methods -------------------- */
  _parseArgument (message) {
    return message.split(' ');
  }
}
