import React, { Component } from 'react';

import './Comp-modifiers.css';

import { Card } from '../presentational/Card/Card';
import { Heading } from '../base/Heading/Heading';
import { Image } from '../base/Image/Image';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

type AccessTypes = 'GET' | 'POST' | 'PUT'
type FetchMode = 'cors' | 'no-cors' | 'same-origin'
type CredentialTypes = "same-origin" | "include" | "omit" | undefined

interface FetchParam {
  method: AccessTypes
  mode: FetchMode
  credentials?: CredentialTypes,
  header?: object
}

const fetchInit: FetchParam = {
  method: 'GET',
  mode: 'cors',
}

interface BasicObj { [key: string]: any}

const initialState: BasicObj = {
  catFact: '',
  catImg: ''
}

type State = Readonly<typeof initialState>


const weatherEndpoint = 'https://www.metaweather.com/api/'
const corsProxy = 'https://cors-anywhere.herokuapp.com/'

export class WeatherCard extends Component<any, State> {

  readonly state: State = initialState;

  getWeather = async () => {
    const responseStr = await fetch(weatherEndpoint + corsProxy, fetchInit)
      .then((blob: any) => {console.log(blob);return blob.clone().json()})
      .then((val: any) => {
        const response = val.text;
        return response;
      })
    .catch((error: any) => console.error(error));
    this.setState({catFact: responseStr});
  }

  render() {
    return(
      <Card
        type='weather'
        id='weather'
      >
        {{
          header: (
            <Heading
              headingLvl={2}
            >
              Weather yo
            </Heading>
          ),
          content: (
            <Paragraph>I dunno</Paragraph>
          ),
          action: (
            <Button
              innerText='Hi'
              handleClickFn={this.getWeather}
            />
          )
        }}
      </Card>

    )
  }
}