import uuid from 'uuid/v4';
import { colors } from "../utils/colors.js";

export class Message {
  constructor ({
    type,
    texts,
    color = 'white',
  }) {
    this.id = uuid();
    this.type = type;
    this.texts = texts;
    this.color = this._getColor(color);
  }

  /* -------------------- Private methods -------------------- */
  _getColor (color) {
    switch (color) {
      case 'blue':
        return colors.blue;

      case 'white':
      default:
        return colors.white;
    }
  }
}

// const text = {
//   text: String;
//   color: String<HexColor>;
// };
