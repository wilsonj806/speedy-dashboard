import React, { Component, ReactElement } from 'react';

import { Heading, Paragraph, Button, Card } from '../component.lib';

import { LoremGETState } from '../../State';

import './Comp-modifiers.css';

/* const loremHeader = new Headers()
loremHeader.append('Access-Control-Allow-Origin', 'https://wilsonj806.github.io/speedy-dashboard/');
loremHeader.append('Content-Type', 'text/html; charset=utf-8');

const sendHeader = process.env.NODE_ENV === 'development' ? undefined : loremHeader
 */
const fetchInit: Local.FetchParam = {
  method: 'GET',
  mode: 'cors',
}


const initialState: Local.BasicObj = { ...LoremGETState }

type State = Readonly<typeof initialState>

// const externalCorsProxy = process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : '';
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


/* getLoremXhr = (): void => {
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
} */