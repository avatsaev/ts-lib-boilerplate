export function sealed(isSealed: boolean): Function {

  return (constructor: Function) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
}