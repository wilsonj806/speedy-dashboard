import React, { Component } from 'react';
import '../presentational/Card/Card';
import { Card } from '../presentational/Card/Card';
import { Heading } from '../base/Heading/Heading';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

// NOTE Need to stub an app real fast and initialize state


const fetchInit: object = {
  method: 'GET',
  mode: 'cors'
}

const loremEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1';

const fetchedStr = fetch(loremEndpoint, fetchInit)
.catch((error: any) => console.error(error));

interface BasicObj { [key: string]: any}

const initialState: BasicObj = {
  loremStr: ''
}

type State = Readonly<typeof initialState>

export class LoremStub extends Component<any, State> {
  readonly state: State = initialState;

  getLoremFetch = async () => {
    const response = await fetchedStr
    .then((blob: any) => {
      return blob.text()
    })
    .then((val: any) => {
      const parsedJson = JSON.parse(val);
      return parsedJson[0];
    });
    this.setState({loremStr: response});
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
              Lorem Generator
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
            [
              <Button
                innerText='Generate Lorem'
                handleClickFn={this.getLoremXhr}
              />
            ]
          )
        }}
      </Card>
    )
  }
}
/* export {
  callLoremXhr,
  callLoremFetch,
  LoremCard
} */