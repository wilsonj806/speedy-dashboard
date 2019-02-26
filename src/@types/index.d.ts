
// Type Declarations for the Speedy-Dashboard project
// Project repo: https://github.com/wilsonj806/speedy-dashboard
// Declarations by: Wilson Jiang

// tslint:disable-next-line:export-just-namespace
/// <reference types="react" />

import { ReactElement, ReactNode } from "react";

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

  type Modals = 'INFO' | 'ADD' | 'BASIC'
  type ListTypes = 'ul' | 'ol' // | 'dl'
  type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'

  /** NOTE Interfaces
   *
   *
   */

  interface BasicObj { [key: string]: any}

  interface VoidFn extends Function {
    (val: any): void
  }

  interface FetchParam {
    method  : Local.AccessTypes
    mode    : Local.FetchMode
    header ?: object
  }

  interface BasicCard {
    header   : React.ReactElement<any> | React.ReactElement<any>[] | null
    media   ?: React.ReactElement<any>
    content  : React.ReactElement<any> | React.ReactElement<any>[] | null
    action  ?: React.ReactElement<any> | React.ReactElement<any>[]
  }

  /** NOTE React Element Props and related interfaces
   *
   *
   */

  interface ListItemProps extends BasicObj {
    type ?: string
    children : React.ReactNode | React.ReactNode[]
  }

  interface FieldProps {
    id             ?: string
    type            : InputTypes
    name            : string
    handleChangeFn ?: VoidFn
    noLabel        ?: boolean
    value          ?: string
  }

  interface ButtonProps {
    id                ?: string
    type              ?: string
    innerText          : string | null
    isHTMLInputSubmit ?: boolean
    children          ?: React.ReactNode
    handleClickFn     ?: VoidFn
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
    type              ?: string
    AddCard            : React.ReactElement<any, any> | null
    children           : React.ReactElement<any, any> | null | React.ReactElement<any, any>[]
    handleCardCloseFn ?: any
  }

  interface ModalProps {
    id               : string
    type             : string,
    headerText       : string
    children         : ReactNode
    handleCloseFn   ?: any
    contentModifier ?: string
  }

  interface ListProps {
    type ?: string
    listType : ListTypes
    children : ReactNode
  }
  interface FormProps {
    type           ?: string
    handleSubmitFn  : VoidFn
    handleChangeFn ?: any
    children       ?: | ReactElement<any, any> | ReactElement<any, any>[]
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

  interface InfoModalProps {
    id             ?: string
    handleCloseFn  ?: any
  }

  interface AddCardProps {
    handleAddFn : any
  }

  interface InfoButtonProps {
    handleDisplayFn : any | null
  }

  interface TodoCardProps {
    handleChangeFn ?: VoidFn
    handleSubmitFn ?: VoidFn
  }

  /** NOTE State related
   *
   *
   */

  interface RenderCards {
    basic1 ?: boolean
    basic2 ?: boolean
    lorem  ?: boolean
    cat    ?: boolean
  }
}

declare module 'LocalProjectTypes' {
  export = LocalProjectTypes;
}