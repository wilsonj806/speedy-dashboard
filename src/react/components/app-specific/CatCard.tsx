import React, { Component, ReactElement } from 'react';

import { Heading } from '../base/Heading/Heading';
import { Image } from '../base/Image/Image';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

import { Card } from '../presentational/Card/Card';

import { CatGETState } from '../../State';

import './Comp-modifiers.css';

// NOTE API site https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html

/* const catHeader = new Headers()
catHeader.append('Access-Control-Allow-Origin', '*');

const sendHeader = process.env.NODE_ENV === 'development' ? undefined : catHeader
 */const fetchInit: Local.FetchParam = {
  method: 'GET',
  mode: 'cors',
}

const initialState: Local.BasicObj = {...CatGETState }

type State = Readonly<typeof initialState>

// const externalCorsProxy = process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : '';
const externalCorsProxy = 'https://cors-anywhere.herokuapp.com/';
const catEndpoint1 = 'https://cat-fact.herokuapp.com/facts/random';
const catEndpoint2 = 'https://aws.random.cat/meow';

export class CatCard extends Component<any, State> {
  readonly state: State = initialState;

  getCatFactFetch = async (): Promise<void> => {
    const responseStr: string | void = await fetch(externalCorsProxy + catEndpoint1, fetchInit)
      .then((blob: Response): Promise<Response> => {
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
          header: ([
            <Heading
              type=''
              headingLvl={2}
            >
              Cat Pics and Facts
            </Heading>,
            <Button
              type='close'
              target='cat'
              innerText='&times;'
            />
          ]),
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
