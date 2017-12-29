export const swap = (data: {readonly a: number, readonly b: number}) => {
  const {a, b} = data;
  return {a: b, b: a}
};


export const add = (a: number, b: number) => a + b;
