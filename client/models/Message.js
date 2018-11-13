import * as uuid from 'uuid/v4';
import { colors } from "../utils/colors.js";

// const text = {
//   text: String;
//   color: String<HexColor>;
// };

export class Message {
  constructor ({
    type,
    texts,
  }) {
    this.id = uuid();
    this.type = type;
    this.texts = texts;
  }
}
