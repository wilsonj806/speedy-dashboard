/* NOTE State for various App Fragments
At some point should combine them into one object,
or use Object.assign() to clone them into one object */

interface BasicObj {
  [ keys: string ] : any
}

const RenderModalState: BasicObj = {
  toDisplay: ''
}

const AddCardState: BasicObj = {
  basic1: false,
  basic2: false
}

const LoremGETState: BasicObj = {
  loremStr: ''
}

const CatGETState: BasicObj = {
    catFact: '',
    catImg: ''
}

export {
  AddCardState,
  RenderModalState,
  LoremGETState,
  CatGETState,
}