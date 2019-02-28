const isPrimative = (value: any): boolean =>
  typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'

const isFunc = (obj: any): obj is Function =>
  typeof obj === 'function' && obj != undefined;

const isTypedObj = <T extends object, P extends keyof T>(obj: T, keyFromType: P): obj is T =>
  isPrimative(obj) === false && obj != null && keyFromType in obj

export {
  isPrimative,
  isFunc,
  isTypedObj,
}