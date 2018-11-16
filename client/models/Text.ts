import * as uuid from 'uuid/v4';

export interface TextBasis {
  text: string;
  color?: string;
}

export class Text {
  id: string;
  text: string;
  color: string;

  constructor({
    text,
    color = 'white',
  }) {
    this.id = uuid();
    this.text = text;
    this.color = color;
  }
}
