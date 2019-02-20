import React, { Component, ReactElement } from 'react';


import { Heading } from '../base/Heading/Heading';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

import { Card } from '../presentational/Card/Card';

import { LoremGETState } from '../../State';

import './Comp-modifiers.css';

/* NOTE This is an example of how an <App/> might integrate the Lorem card in and does not try to
fully integrate everything in.
Also note that the methods should be slightly renamed when copying them in
*/

// TODO Remove one of the Lorem methods, don't need both Fetch and XHR

// REVIEW If a Node server is integrated in for CORS AND it can do 'GET' on Loripsum.net, switch out the thing

const fetchInit: Local.FetchParam = {
  method: 'GET',
  mode: 'cors'
}

const initialState: Local.BasicObj = { ...LoremGETState }

type State = Readonly<typeof initialState>

const externalCorsProxy = 'https://cors-anywhere.herokuapp.com/';
const loremEndpoint = 'https://loripsum.net/api/1/short/plaintext';

export class LoremCard extends Component<any, State> {
  readonly state: State = initialState;

  getLoremFetch = async (): Promise<void> => {
    const responseStr = await fetch(externalCorsProxy + loremEndpoint, fetchInit)
      .then((blob: any): Promise<Response> => blob.clone())
      .then((val: Response): Promise<string> => {
        const response = val.text();
        return response;
      })
    .catch((error: any) => console.error(error));
    this.setState({loremStr: responseStr});
  }

  getLoremXhr = (): void => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', loremEndpoint, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const length = xhr.responseText.length;
        const xhrStr = xhr.responseText.toString().slice(2, length - 2);
        this.setState({loremStr: xhrStr});
      }
    }
    xhr.send();
  }

  render = (): ReactElement<any, any> => {
    const { loremStr } = this.state;
    return (
      <Card
        type='lorem'
        id='lorem'
      >
        {{
          header: ([
            <Heading
              type=''
              headingLvl={2}
            >
              Lorem Ipsum Generator
            </Heading>,
            <Button
              type='close'
              target='lorem'
              innerText='&times;'
            />
          ]),
          content: (
            <Paragraph
              type='lorem'
            >
              {loremStr ? loremStr : 'Generate Lorem text to see it here.'}
            </Paragraph>
          ),
          action: (
            <Button
              innerText='Generate Lorem'
              handleClickFn={this.getLoremFetch}
            />
          )
        }}
      </Card>
    )
  }
}
