// Type Declarations for the Speedy-Dashboard project
// Project repo: https://github.com/wilsonj806/speedy-dashboard
// Declarations by: Wilson Jiang

// tslint:disable-next-line:export-just-namespace
/// <reference types="react" />

export = LocalTypes;
export as namespace Local;

declare namespace LocalTypes {
  /** Types for HTTP Requests
   *
   *
   */
  type AccessTypes = 'GET' | 'POST' | 'PUT'
  type FetchMode = 'cors' | 'no-cors' | 'same-origin'
  type CredentialTypes = "same-origin" | "include" | "omit" | undefined

  /** Other types
   *
   *
   */

  type Modals = 'HELP' | 'ADD' | 'BASIC'
  type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'
  type BasicCard = {
    header   : React.ReactElement<any> | React.ReactElement<any>[] | null,
    media   ?: React.ReactChild,
    content  : React.ReactElement<any> | React.ReactElement<any>[] | null,
    action  ?: React.ReactElement<any> | React.ReactElement<any>[]
  }

  /** Interfaces
   *
   *
   */

  interface BasicObj { [key: string]: any}

  interface FetchParam {
    method  : Local.AccessTypes
    mode    : Local.FetchMode
    header ?: object
  }

  /** React Element Props and related interfaces
   *
   *
   */

  interface FieldProps {
    type            : InputTypes
    name            : string
    handleChangeFn ?: any
    noLabel        ?: boolean
    value          ?: string
  }

  interface ButtonProps {
    id                ?: string
    type              ?: string
    innerText          : string | null
    isHTMLInputSubmit ?: boolean
    children          ?: React.ReactNode
    handleClickFn     ?: any
    target            ?: string
  }

  interface HeadingProps {
    type      ?: string
    headingLvl : number
    children   : string
  }

  interface ImageProps {
    type ?: string
    src   : string
    alt   : string
  }

  interface ParagraphProps {
    type    ?: string
    children : any
  }

  interface CardProps {
    id       ?: string
    type     ?: string
    index    ?: number
    children  : BasicCard
  }

  interface DashProps {
    type    ?: string
    AddCard  : React.ReactElement<any, any> | null
    children : React.ReactNode | null
  }

  interface ModalControllerProps {
    id           ?: string
    renderCards   : RenderCards
    handleCardFn  : any
    handleCloseFn : any
    toDisplay    ?: Modals | null
  }

  interface AddModalProps {
    id             ?: string
    renderCards     : RenderCards
    handleCloseFn  ?: any
    handleCardFn    : any
    cardsToDisplay ?: CardsToDisplay
  }

  interface AddCardProps {
    handleAddFn : any
  }

  /** State related
   *
   *
   */

  interface RenderCards {
    basic1 ?: boolean
    basic2 ?: boolean
    lorem  ?: boolean
    cat  ?: boolean
  }
}

declare module 'LocalProjectTypes' {
  export = LocalProjectTypes;
}