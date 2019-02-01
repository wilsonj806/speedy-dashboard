const isFunc = (obj: any): obj is Function =>
  typeof obj === 'function' && obj != undefined;

export {
  isFunc,
}