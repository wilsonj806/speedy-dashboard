import React, { Component, ReactElement } from 'react';

import './Comp-modifiers.css';

import { Card } from '../presentational/Card/Card';
import { Heading } from '../base/Heading/Heading';
import { Image } from '../base/Image/Image';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

/* NOTE This is an example of how an <App/> might integrate the Cat card in and does not try to
fully integrate everything in.
Also note that the methods should be slightly renamed when copying them in
*/

// NOTE API site https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html

type AccessTypes = 'GET' | 'POST' | 'PUT'
type FetchMode = 'cors' | 'no-cors' | 'same-origin'
type CredentialTypes = "same-origin" | "include" | "omit" | undefined

interface FetchParam {
  method: AccessTypes
  mode: FetchMode
  credentials?: CredentialTypes,
  header?: object
}

const catHeader = new Headers()
catHeader.append('Access-Control-Allow-Origin', '*');
// catHeader.append('Access-Control-Allow-Credentials', 'true');


const fetchInit: FetchParam = {
  method: 'GET',
  mode: 'cors',
  header: catHeader,
}

interface BasicObj { [key: string]: any}

const initialState: BasicObj = {
  catFact: '',
  catImg: ''
}

type State = Readonly<typeof initialState>


// REVIEW THE BELOW CORS ANYWHERE ADDITION IS ONLY FOR DEVELOPMENT
// REMOVE THIS WHEN YOU DEPLOY OR IF YOU ADD A PROXY
const externalCorsProxy = 'https://cors-anywhere.herokuapp.com/';
const catEndpoint1 = 'https://cat-fact.herokuapp.com/facts/random';
const catEndpoint2 = 'https://aws.random.cat/meow';

export class CatCard extends Component<any, State> {
  readonly state: State = initialState;

  getCatFactFetch = async (): Promise<void> => {
    const responseStr: string | void = await fetch(externalCorsProxy + catEndpoint1, fetchInit)
      .then((blob: Response): Promise<Response> => {
        console.log(blob);
        return blob.clone().json()
      })
      .then((val: any): string => {
        const response = val.text;
        return response;
      })
    .catch((error: any) => console.error(error));
    this.setState({catFact: responseStr});
    const responseImg: string | void = await fetch(catEndpoint2, fetchInit)
      .then((blob: Response): Promise<Response> => {
        return blob.clone().json();
      })
      .then((val: any): string => {
        const response = val.file;
        return response;
      })
    .catch((error: any): void => console.error(error));
    this.setState({catImg: responseImg});
  }

  render = (): ReactElement<any, any> => {
    const { catFact, catImg } = this.state;
    return (
      <Card
        type='cat'
        id='cat'
      >
        {{
          header: (
            <Heading
              type=''
              headingLvl={2}
            >
              Cat Pics and Facts
            </Heading>
          ),
          content: (
            <>
            <Paragraph
              type='lorem'
            >
              {(catFact !== '') && (catImg !== '') ? catFact : 'Click the button to see a cat fact.'}
            </Paragraph>
            {catImg ? <Image src={catImg} alt='cat image'/> : null}
            </>
          ),
          action: (
            <Button
              innerText='Get Cat Fact'
              handleClickFn={this.getCatFactFetch}
            />
          )
        }}
      </Card>
    )
  }
}
