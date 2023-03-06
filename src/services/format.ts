export const splitLengthIntoPages = (length: number, splitInto: number) => {
  if (length === 0) return 0;
  return Math.ceil(length / splitInto);
};
