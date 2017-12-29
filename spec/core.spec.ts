import {add, sealed, swap} from '../src'


describe('core functions', () => {

  it('should swap',  () => {
    const obj = {a: 1, b: 2};
    const res = swap(obj);

    expect(res.a).toBe(2);
    expect(res.b).toBe(1);

  });

  it('should add', () => {
    expect(add(1,1)).toBe(2);
  });
});


describe('core decorators', () => {

  it('should seal',  () => {

    @sealed(true)
    class Dog{
      constructor(public readonly name: string){
      }
    }

    expect(Object.isSealed(Dog.prototype)).toBeTruthy();
    expect(Object.isSealed(Dog.prototype.constructor)).toBeTruthy();

  });
});


