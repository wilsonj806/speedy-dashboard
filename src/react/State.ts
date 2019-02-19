/* NOTE State for various App Fragments
At some point should combine them into one object,
or use Object.assign() to clone them into one object */

const RenderModalState: Local.BasicObj = {
  toDisplay: ''
}

const AddCardState: Local.BasicObj = {
  basic1: false,
  basic2: false
}

const LoremGETState: Local.BasicObj = {
  loremStr: ''
}

const CatGETState: Local.BasicObj = {
    catFact: '',
    catImg: ''
}

const AppState: Local.BasicObj = {
  toDisplay: null,
  renderCards: {
    basic1: false,
    basic2: false,
    lorem: false,
    cat: false,
  },
  loremStr: null,
  catFact: null,
  catImg: null,
}

export {
  AppState,
  AddCardState,
  RenderModalState,
  LoremGETState,
  CatGETState,
}