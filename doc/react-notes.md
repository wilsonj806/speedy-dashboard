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

- `React.cloneElement()`
  - [Medium article](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba)
  - [React.js docs entry on it](https://reactjs.org/docs/react-api.html#cloneelement)
  - [Relevant Stack Overflow](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)
- `React.Children.map()`
  - [React.js docs entry on it](https://reactjs.org/docs/react-api.html#reactchildrenmap)