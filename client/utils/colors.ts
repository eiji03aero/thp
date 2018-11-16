interface Colors {
  [colorName: string]: string;
}

export const colors: Colors = {
  white: '#fcfcfc',
  pureBlack: '#000000',
  black: '#333333',
  blue: '#396fe2',
  red: '#e54b4b',
  yellow: '#faed70',
  deepGreen: '#202c32',

  cursorBlue: '#2060a0',
};

export const getColor = (color: string): string => colors[color] || colors.white;
