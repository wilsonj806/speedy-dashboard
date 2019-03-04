import React, { ReactElement } from 'react';

import { Image } from '../../base/Image/Image';
import { Button } from '../../base/Button/Button';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { Card } from '../../presentational/Card/Card';
import { Heading } from '../../base/Heading/Heading';

export const EntryCard = (props: Local.EntryCardProps): ReactElement<any> | null => {
  const { cardSwitch, renderCards, handleClickFn } = props;
  switch(cardSwitch) {
    case 'basic1':
      return (
        <Card
          type='describer'
        >
        {{
          header: null,
          content: ([
            <Image
              key={0}
              src={undefined}
              alt='Basic card thumbnail'
            />,
            <Heading
              key={1}
              headingLvl={4}
            >
              Basic Card
            </Heading>,
            <Paragraph
              key={2}
            >
              A Basic Card
            </Paragraph>,
            <Button
              key={3}
              target={cardSwitch}
              handleClickFn={handleClickFn}
              innerText={renderCards[cardSwitch] === false ? 'Add Basic Card' : 'Remove Basic Card'}
            />
          ])
        }}
      </Card>
      )
    case 'basic2':
      return (
        <Card
          type='describer'
        >
        {{
          header: null,
          content: ([
            <Image
              key={0}
              src={undefined}
              alt='Basic card 2 thumbnail'
            />,
            <Heading
              key={1}
              headingLvl={4}
            >
            Basic Card 2
            </Heading>,
            <Paragraph
              key={2}
            >
              A Basic Card
            </Paragraph>,
            <Button
              key={3}
              target={cardSwitch}
              handleClickFn={handleClickFn}
              innerText={renderCards[cardSwitch] === false ? 'Add Basic Card 2' : 'Remove Basic Card 2'}
            />
          ])
        }}
      </Card>
      )
    case 'cat':
      return(
        <Card
          type='describer'
        >
        {{
          header: null,
          content: ([
            <Image
              key={0}
              src={undefined}
              alt='Cat Card thumbnail'
            />,
            <Heading
              key={1}
              headingLvl={4}
            >
            Cat Card
            </Heading>,
            <Paragraph
              key={2}
            >
              A Card for fetching a random cat fact, as well as a cat picture.
            </Paragraph>,
            <Button
              key={3}
              target={cardSwitch}
              handleClickFn={handleClickFn}
              innerText={renderCards[cardSwitch] === false ? 'Add Cat Card' : 'Remove Cat Card'}
            />
          ])
        }}
      </Card>
      )
    case 'lorem':
      return(
        <Card
          type='describer'
        >
          {{
            header: null,
            content: ([
              <Image
                key={0}
                src={undefined}
                alt='Lorem Card thumbnail'
              />,
              <Heading
                key={1}
                headingLvl={4}
              >
              Lorem Ipsum Card
              </Heading>,
              <Paragraph
                key={2}
              >
                A Card for generating a paragraph of Lorem Ipsum text.
              </Paragraph>,
              <Button
                key={3}
                target={cardSwitch}
                handleClickFn={handleClickFn}
                innerText={renderCards[cardSwitch] === false ? 'Add Lorem Card' : 'Remove Lorem Card'}
              />
            ])
          }}
        </Card>
      )
    case 'todo':
      return (
        <Card
          type='describer'
        >
        {{
          header: null,
          content: ([
            <Image
              key={0}
              src={undefined}
              alt='Todo Card thumbnail'
            />,
            <Heading
              key={1}
              headingLvl={4}
            >
            To Do Card
            </Heading>,
            <Paragraph
              key={2}
            >
              A Card for entering and tracking tasks that need to be done.
            </Paragraph>,
            <Button
              key={3}
              target={cardSwitch}
              handleClickFn={handleClickFn}
              innerText={renderCards[cardSwitch] === false ? 'Add Todo Card' : 'Remove Todo Card'}
            />
          ])
        }}
      </Card>
      )
    default:
      return null;
  }
}