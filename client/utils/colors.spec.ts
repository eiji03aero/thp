import { colors, getColor } from "./colors";

describe('colors', () => {
  it('colors.white to be #fcfcfc', () => {
    expect(colors.white).toBe('#fcfcfc');
  });
});

describe('getColor', () => {
  it('should return hex color value', () => {
    expect(getColor('white')).toBe('#fcfcfc');
  });
});
