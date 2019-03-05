const isPrimative = (value: any): boolean =>
  typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'

const isFunc = (obj: any): obj is Function =>
  typeof obj === 'function' && obj != undefined;

const isTypedObj = <T extends object, P extends keyof T>(obj: T, keyFromType: P): obj is T =>
  isPrimative(obj) === false && obj != null && keyFromType in obj

// NOTE unsure if isSameReactEle() can handle stateful  components

const isSameReactEle = (ele: React.ReactElement<any, any>, eleToMatchWith: React.JSXElementConstructor<any>): boolean => {
  const nameToMatch: string = eleToMatchWith.name;
  return ele.type.name === nameToMatch;
}

export {
  isPrimative,
  isFunc,
  isTypedObj,
  isSameReactEle
}