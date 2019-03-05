# React Notes

## Component Management/ Development

- Developing components in isolation from each other is great since you only code what is necessary for that component to work properly
  - integration on the other hand is going to be interesting since it's going to involve typing disparate pieces of the puzzle together

- Wrapping a base component in a wrapper to extend functionality is very easy due to React's compositional nature and should be a normal pattern to use
  - e.g
  ```ts
  import { Card } from './components/base/Card';
  const ComponentWrapper = (props: Props) => {
    const getApiData = () => {
      const dataToPresent = fetch(apiEndpoint)
        .then((blob) => blob.clone().text())
    }
    return (
      <Card
        type='apiThing'
        handleSomething={getApiData}
        {...props}
      >
        {{
          header: (<h1>Hi</hi>),
          content: (<p>{getApiData}</p>)
        }}
      </Card>
    )
  }
  ```
  - which might render to:
  ```ts
  const Card = (props: Props) => {
    const { propA, propB, propC, handleSomething, children } = this.props

    return(
      <div
        {...props}
        onclick={handleSOmething}
      >
        {children}
      </div>
    )
  }
  ```

- Modals:
  - [Medium article on it](https://codeburst.io/modals-in-react-f6c3ff9f4701)
    - current implementation seen in Storybook is a weird hodgepodge of the first and third options for implementing Modals.
      - i.e a Modal Conductor, and a plain old wrapper
  - [React portals](https://reactjs.org/docs/portals.html)
  - [Different medium article](https://medium.com/@danparkk/react-modals-scalable-customizable-neat-components-f2088d60f3d3)
  - [Another medium article](https://blog.bitsrc.io/build-a-modal-component-with-react-469eced1d564)

## Element Transforms

This section is for dealing with the manipulation and transformation of React children. It should be pretty self-explantory why this exists or why you might need it.

- `React.cloneElement()` is the goto method for adding new properties to a component. There situations where you'll need to add properties to a component, but the parent won't know if the component will have that property when its passed in.
  - the input parameters are as follows:
    ```js
      const newReactEle = React.cloneElement(element, [...newProps], [...elementChildren])
    ```
  - this is very similar to the below:
    ```jsx
      <element.type {...element.props} {...newProps}>{elementChildren}</element.type>
    ```
  - note that if a `key` prop or a `ref` is present on the element being passed in, it *WILL* be preserved and passed into the cloned element
  - below is an example of a real use for `React.cloneElement()`
    ```ts
      if (React.isValidElement(child) && child.type !== 'fieldset') {
        const addedProp = {
          ['key']: index,
          ['handleChangeFn']: handleChangeCheck
        }
        const modifiedChild = React.cloneElement(child, addedProp);
      return modifiedChild;
    }
    ```
- Additional resources on `React.cloneElement()` below:
  - [Medium article](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba)
  - [React.js docs entry on it](https://reactjs.org/docs/react-api.html#cloneelement)
  - [Relevant Stack Overflow](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)

- React also provides a series of utilities to help deal with the opaque data structure of `this.props.children`
- These utilities are exposed via `React.Children` and let you do a variety of things
- Also note that not all of the utility methods are discusssed here

- `React.Children.map()` is analogous to `Array.prototype.map() with the following parameters:
  ```js
    const { children } = this.props;
    const callbackFn = (child): ReactElement<any> => child;
    const newChildrenArr = React.Children.map(children, callbackFn);
  ```
  - [React.js docs entry on it](https://reactjs.org/docs/react-api.html#reactchildrenmap)