import React, { Component, ReactElement } from 'react';

import { Heading } from '../base/Heading/Heading';
import { Image } from '../base/Image/Image';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

import { Card } from '../presentational/Card/Card';

import './Comp-modifiers.css';

const fetchInit: Local.FetchParam = {
  method: 'GET',
  mode: 'cors',
}

const initialState: Local.BasicObj = {
}

type State = Readonly<typeof initialState>


const weatherEndpoint = 'https://www.metaweather.com/api/'
const corsProxy = 'https://cors-anywhere.herokuapp.com/'

export class WeatherCard extends Component<any, State> {

  readonly state: State = initialState;

  getWeather = async (): Promise<void> => {
    const responseStr = await fetch(weatherEndpoint + corsProxy, fetchInit)
      .then((blob: any) => {console.log(blob);return blob.clone().json()})
      .then((val: any) => {
        const response = val.text;
        return response;
      })
    .catch((error: any) => console.error(error));
    this.setState({catFact: responseStr});
  }

  render = (): ReactElement<any, any> => {
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