import React, { Component } from 'react';

import './Comp-modifiers.css';

import { Card } from '../presentational/Card/Card';
import { Heading } from '../base/Heading/Heading';
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
catHeader.append('Access-Control-Allow-Credentials', 'true');


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

const catEndpoint1 = 'https://cat-fact.herokuapp.com/facts/random';
const catEndpoint2 = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1';

export class CatPartial extends Component<any, State> {
  readonly state: State = initialState;

  getCatFactFetch = async () => {
    console.log(catHeader.has('Access-Control-Allow-Origin'));
    console.log(fetchInit.credentials);
    const responseStr = await fetch(catEndpoint1, fetchInit)
      .then((blob: any) => {console.log(blob);blob.clone()})
      .then((val: any) => {
        console.log(val);
        const parsedJson = val[0];
        const response = parsedJson.toString();
        return response;
      })
    .catch((error: any) => console.error(error));
    this.setState({catFact: responseStr});
  }

  /* NOTE the below is from Traversy Media and it works
  getUsers = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = () => {
      if(xhr.status == 200){
        const users = JSON.parse(xhr.responseText);

        var output = '';
        for(var i in users){
          output +=
            '<div class="user">' +
            '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
            '<ul>' +
            '<li>ID: '+users[i].id+'</li>' +
            '<li>Login: '+users[i].login+'</li>' +
            '</ul>' +
            '</div>';
        }
        this.setState({catFact: output});
      }
    }

    xhr.send();
  } */

  render() {
    const { catFact } = this.state;
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
            <Paragraph
              type='lorem'
            >
              {catFact ? catFact : 'Click the button to see a cat fact.'}
            </Paragraph>
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
