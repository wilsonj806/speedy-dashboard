/** REVIEW
 * Note weather gets returned after you send a 5 digit WOEID code for the location
 * Means the card has to ask for a location, query the API to make sure it's valid
 * fetch the WOEID code for it and only then can it make the API call for the weather
 *
 */

import React, { Component, ReactElement } from 'react';

import { Heading, Paragraph, Button, Card } from '../component.lib';

import './Comp-modifiers.css';

const fetchInit: Local.FetchParam = {
  method: 'GET',
  mode: 'cors',
}

const initialState: Local.BasicObj = {
}

type State = Readonly<typeof initialState>


const weatherEndpoint = 'https://www.metaweather.com/api/'
const externalCorsProxy ='https://cors-anywhere.herokuapp.com/';

export class WeatherCard extends Component<any, State> {

  readonly state: State = initialState;

  getWeather = async (): Promise<void> => {
    const responseStr = await fetch(externalCorsProxy + weatherEndpoint, fetchInit)
      .then((blob: any) => {console.log(blob);return blob.clone()})
      .then((val: any) => {
        console.log(val);
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