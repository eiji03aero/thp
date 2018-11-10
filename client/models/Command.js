// interface {
//   type: constructor;
//   arguments: Array<String>;
// }

export class Command {
  constructor (params) {
    this.type = this.constructor.name;
    this.arguments = this._parseArgument(params.message);
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
