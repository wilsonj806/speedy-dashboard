
// Type Declarations for the Speedy-Dashboard project
// Project repo: https://github.com/wilsonj806/speedy-dashboard
// Declarations by: Wilson Jiang

// tslint:disable-next-line:export-just-namespace
/// <reference types="react" />

import { ReactElement, ReactNode } from "react";

export = SpeedyDashboardTypes;
export as namespace Local;

declare namespace SpeedyDashboardTypes {
  /** Types for HTTP Requests
   *
   *
   */
  type AccessTypes     = 'GET' | 'POST' | 'PUT'
  type FetchMode       = 'cors' | 'no-cors' | 'same-origin'
  type CredentialTypes = "same-origin" | "include" | "omit" | undefined

  /** Other types
   *
   *
   */

  type Modals     = 'INFO' | 'ADD' | 'BASIC'
  type DashCardOptions = 'todo' | 'cat' | 'lorem' | 'basic1' | 'basic2'
  type ListTypes  = 'ul' | 'ol' // | 'dl'
  type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'

  /** NOTE Interfaces and types for commonly used things
   *
   *
   */

  type VoidFn = (val: any) => void

  interface BasicObj { [key: string]: any }

  interface FetchParam {
    method  : Local.AccessTypes
    mode    : Local.FetchMode
    header ?: object
  }

  type BasicCard = {
    header   : React.ReactElement<any> | React.ReactElement<any>[] | null
    media   ?: React.ReactElement<any>
    content  : React.ReactElement<any> | React.ReactElement<any>[] | null
    action  ?: React.ReactElement<any> | React.ReactElement<any>[]
  }

  /** NOTE React Element Props and related types
   *
   *
   */

  type ListItemProps = {
    type    ?: string
    index   ?: number
    children : React.ReactNode | React.ReactNode[]
  }

  type FieldProps = {
    id             ?: string
    type            : InputTypes
    name            : string
    handleChangeFn ?: VoidFn | undefined
    handleClickFn  ?: VoidFn | undefined
    noLabel        ?: boolean
    value          ?: string
    required       ?: boolean
    inputName      ?: string
    labelName      ?: string
  }

  type ButtonProps = {
    id                ?: string
    type              ?: string
    innerText          : string | null
    isHTMLInputSubmit ?: boolean
    children          ?: React.ReactNode
    handleClickFn     ?: VoidFn | undefined
    target            ?: string
    className         ?: string
  }

  type HeadingProps = {
    type      ?: string
    headingLvl : number
    children   : string
  }

  type ImageProps = {
    type ?: string
    src   : string | undefined
    alt   : string
  }

  type ParagraphProps = {
    type    ?: string
    children : any
  }

  type CardProps = {
    id       ?: string
    type     ?: string
    index    ?: number
    children  : BasicCard
  }

  type DashProps = {
    type              ?: string
    AddCardEle            : React.ReactElement<any, any> | null
    children           : React.ReactElement<any, any> | null | React.ReactElement<any, any>[]
    handleCardCloseFn ?: any
  }

  type ModalProps = {
    id               : string
    type             : string,
    headerText       : string
    children         : ReactNode
    handleCloseFn   ?: any
    contentModifier ?: string
  }

  type ListProps = {
    type ?: string
    listType : ListTypes
    children : ReactNode
  }
  type FormProps = {
    id             ?: string
    type           ?: string
    handleSubmitFn  : VoidFn
    handleChangeFn ?: any
    children       ?: | ReactElement<any, any> | ReactElement<any, any>[]
  }

  type ModalControllerProps = {
    id           ?: string
    renderCards   : RenderCards
    handleCardFn  : any
    handleCloseFn : any
    toDisplay    ?: Modals | null
  }

  type AddModalProps = {
    id             ?: string
    renderCards     : RenderCards
    handleCloseFn  ?: any
    handleCardFn    : any
    cardsToDisplay ?: CardsToDisplay
  }

  type InfoModalProps = {
    id             ?: string
    handleCloseFn  ?: any
  }

  type AddCardProps = {
    handleAddFn : VoidFn | undefined
  }

  interface InfoButtonProps {
    handleDisplayFn : any | null
  }

  type TodoCardProps = {
    handleChangeFn ?: VoidFn
    handleSubmitFn ?: VoidFn
  }

  type TodoEntryProps = {
    index          : string
    task           : 'High' | 'Medium' | 'Low'
    priority       : string
    handleDeleteFn : VoidFn
  }

  type EntryCardProps = {
    cardSwitch    : DashCardOptions
    renderCards   : RenderCards
    handleClickFn : VoidFn | undefined
  }

  /** NOTE State related
   *
   *
   */

  interface RenderCards extends BasicObj{
    [cardName: DashCardOptions] : boolean
  }
}

declare module 'SpeedyDashboardTypes' {
  export = SpeedyDashboardTypes;
}