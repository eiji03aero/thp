import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import { Text, TextBasis } from "./Text";

export interface MessageBasis {
  type: string;
  texts: TextBasis[];
}

export class Message {
  id: string;
  type: string;
  texts: Text[];

  constructor ({
    type,
    texts,
  }) {
    this.id = uuid();
    this.type = type;
    this.texts = this.createTexts(texts);
  }

  private createTexts (texts: TextBasis[]): Text[] {
    return _.map(texts, t => {
      const text = t.text || '';
      const color = t.color || 'white';
      return new Text({ text: text, color: color });
    })
  }
}
