# Typescript notes

## General notes

- NOTE: when the code gets minified, internal property names are probably going to get changed which will mess with type checking.
  - to mitigate this do the below:
      ```ts
      // BAD, WILL BREAK ON DEPLOY
      const isTypedObj = <T extends object, P extends keyof T>(ele: T, prop: P): ele is T => {
        obj != null && prop in obj
      }
      console.log(isTypedObj(blah, 'type') && ele.type.name === 'Name'); // BAD ele.type.name will change on minification;

      // BETTER
      const isTypedObj = () => {} // Same implementation as the above
      const isSpecificEle = (ele: ReactElement<any, any>): boolean => {
        const SpecificEleName: string = SpecificEle.type.name; // GOOD have a reference to the actual Element name or property
        return isTypedObj(ele, 'type') && ele.type.name === SpecificEleName
      }

      // GREAT/ is more reusable
      const isTypedObj = () => {} // Same as the above
      const isReactEle = (ele: ReactElement<any>, eleToMatchWith: ReactElement<any>): ele is eleToMatchWith => {
        const nameToMatch: string = eleToMatchWith.type.name;
        return isTypedObj(ele, 'type') && ele.type.name === nameToMatch;
      }
    ```
    - as a general explanation, the function:
        ```ts
          function <T extends object, P extends keyofT>isTypedObj(obj: T, key: P)
        ```
      checks to make sure that the input `key` exists as a key of the input object `ele`
  - this works because you are:
    a.) extending a fairly basic function already so you're not repeating yourself
    b.) have a specific variable reference to the desired property that won't get lost on minification

## Declaration files

- Declaration files let you make and share commonly used stuff which is nice
- Local declaration files can be specified in `tsconfig.json` with the "typeRoots" option
  - e.g for this project:
  ```json
  {
    "typeRoots": [
        "./node_modules/@types",
        "./src/@types"
      ],
  }
  ```
- For this project as we want to be able to call our custom types anywhere without imports, we add it as a namespace so that it can be accessed globally
- However, we also add it as a module export so you can manually import it into files

## Types Versus Interfaces

- **NOTE** The [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/advanced-types.html) section on type aliases versus interfaces is not actually up to date as of March 02, 2019
- First let's correct what the docs are saying:
  1. “One difference is, that interfaces create a new name that is used everywhere. Type aliases don’t create a new name — for instance, error messages won’t use the alias name.”
    - this is wrong, errors for type aliases will use the type name in the error message
  2. “A second more important difference is that type aliases cannot be extended or implemented from”
    - also incorrect, you can do that but aaaa

- TL;DR of the important points:
  - you cannot implement a type alias that has a union type inside!
    ```ts
      type RectangleShape = ( Shape | Perimeter ) & Point; // where Shape, Perimeter, and Point are a class, type, and interface
      class Rectangle implements RectangleShape {} // This will throw an exception
    ```
  - interfaces allow declaration merges while type aliases don't
    - i.e
      ```ts
        interface obj {
          foo: string
        }
        interface obj {
          bar: string
        }
      ```
    compiles to:
      ```ts
        interface obj {
          foo: string
          bar: string
        }
    ```
- So for React Components, it's more prudent to have the Props be a type alias rather than an interface
- References below:
  - [Medium article](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

## Decorators

- Aspect Oriented Programming/ separation of cross-cutting concerns