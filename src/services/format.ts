export const splitLengthIntoPages = (length: number, splitInto: number) => {
  if (length === 0) return 0;
  return Math.ceil(length / splitInto);
};

export const createArray = (limitItmes: number, currentPosition: number) => {
  const positionModel = (position: number) => ({ position });

  return Array.from({ length: limitItmes }, () => {
    if (currentPosition - 1 < 1) return positionModel(currentPosition);
    return positionModel(currentPosition - 1);
  });
};
