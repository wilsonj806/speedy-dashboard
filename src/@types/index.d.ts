// Type Declarations for the Speedy-Dashboard project
// Project repo:
// Declarations by: Wilson Jiang

// tslint:disable-next-line:export-just-namespace

export = LocalTypes;
export as namespace Local;

declare namespace LocalTypes {
  /** Types for HTTP Requests
   *
  */
  type AccessTypes = 'GET' | 'POST' | 'PUT'
  type FetchMode = 'cors' | 'no-cors' | 'same-origin'
  type CredentialTypes = "same-origin" | "include" | "omit" | undefined


  /** Interfaces
   *
   *
  */

  interface BasicObj { [key: string]: any}

  interface FetchParam {
    method: Local.AccessTypes
    mode: Local.FetchMode
    header?: object
  }

}

declare module 'LocalProjectTypes' {
  export = LocalProjectTypes;
}