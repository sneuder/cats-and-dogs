export const splitLengthIntoPages = (length: number, splitInto: number) => {
  return Math.ceil(length / splitInto);
};
