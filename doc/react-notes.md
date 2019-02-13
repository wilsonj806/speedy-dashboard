# React Notes

## Component Management/ Development

- Developing components in isolation from each other is great since you only code what is necessary for that component to work properly
  - integration on the other hand is going to be interesting since it's going to involve typing disparate pieces of the puzzle together

- Modals:
  - [Medium article on it](https://codeburst.io/modals-in-react-f6c3ff9f4701)
    - current implementation seen in Storybook is a weird hodgepodge of the first and third options for implementing Modals.
      - i.e a Modal Conductor, and a plain old wrapper

## Element Transforms

- `React.cloneElement()`
  - [Medium article](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba)
  - [React.js docs entry on it](https://reactjs.org/docs/react-api.html#cloneelement)
  - [Relevant Stack Overflow](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)
- `React.Children.map()`
  - [React.js docs entry on it](https://reactjs.org/docs/react-api.html#reactchildrenmap)