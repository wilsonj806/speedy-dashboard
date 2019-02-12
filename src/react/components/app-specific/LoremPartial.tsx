import React, { Component } from 'react';

import './Comp-modifiers.css';

import { Card } from '../presentational/Card/Card';
import { Heading } from '../base/Heading/Heading';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

/* NOTE This is an example of how an <App/> might integrate the Lorem card in and does not try to
fully integrate everything in.
Also note that the methods should be slightly renamed when copying them in
*/

// REVIEW If a Node server is integrated in for CORS AND it can do 'GET' on Loripsum.net, switch out the thing

type AccessTypes = 'GET' | 'POST' | 'PUT'
type FetchMode = 'cors' | 'no-cors' | 'same-origin'

interface FetchParam {
  method: AccessTypes
  mode: FetchMode
  header?: object
}

const fetchInit: FetchParam = {
  method: 'GET',
  mode: 'cors'
}

interface BasicObj { [key: string]: any}

const initialState: BasicObj = {
  loremStr: ''
}

type State = Readonly<typeof initialState>

const loremEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1';

export class LoremPartial extends Component<any, State> {
  readonly state: State = initialState;

  getLoremFetch = async () => {
    const responseStr = await fetch(loremEndpoint, fetchInit)
      .then((blob: any) => blob.clone().json())
      .then((val: any) => {
        const parsedJson = val[0];
        const response = parsedJson.toString();
        return response;
      })
    .catch((error: any) => console.error(error));
    this.setState({loremStr: responseStr});
  }

  getLoremXhr = () => {
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

  render() {
    const { loremStr } = this.state;
    return (
      <Card
        type='lorem'
        id='lorem'
      >
        {{
          header: (
            <Heading
              type=''
              headingLvl={2}
            >
              Bacon Ipsum Generator
            </Heading>
          ),
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
