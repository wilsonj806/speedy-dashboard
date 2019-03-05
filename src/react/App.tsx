import React, { Component, ReactElement, MouseEvent } from 'react';

import {
  Dash,
  ModalController,
  Info,
  AddCard,
  CatCard,
  TodoCard,
  TodoEntry,
  LoremCard
} from './components/component.lib';

import { BasicCard, BasicCard2 } from './components/Placeholder'

import { AppState } from './State'

import './main.css';

type State = Readonly<typeof AppState>;

export class App extends Component<any, State> {
  readonly state: State = AppState;

  handleModalDisplay: Local.VoidFn = (event: React.MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) throw new Error(`Expecting a HTMLElement as the target of the event, got ${event.target} instead`);
    const { target } = event.target.dataset;
    this.setState({
      toDisplay: target
    });
  }

  hideModal: Local.VoidFn = (event: MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) throw new Error(`Expecting a HTMLElement as the target of the event, got ${event.target} instead`);

    const targetModalClass = ['modal-wrapper', 'btn--close'];
    const { classList } = event.target;

    const classCheck = (classList.contains(targetModalClass[0]) || classList.contains(targetModalClass[1]));

    if (classCheck === true) {
      event.stopPropagation();
      this.setState({
        toDisplay: null
      })
      return;
    }
  }

  handleSubmit = (childState: any): any => {
    this.setState((prevState: State) => {
      const { listEle } = prevState;
      listEle.push(childState);
      return (
        {
          'listEle': listEle,
        }
      )
    });
  }

  handleEntryDelete = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLElement) {
      const { target } = event.target.dataset;
      const index = parseInt(target!);
      this.setState((prevState: State): State => {
        const { listEle: prevList } = prevState;
        prevList.splice(index, 1);
        return {};
      })
    }
  }

  renderTemplate = (val: Local.BasicObj, index: number): ReactElement<any> => {
    const { task, priority } = val;
    return (
      <TodoEntry
        key={index}
        index={`${index}`}
        task={task}
        priority={priority}
        handleDeleteFn={this.handleEntryDelete}
      />
    )
  }


  toggleCardState = (event: MouseEvent<HTMLElement>): void => {
    if (event.target instanceof HTMLElement) {
      const { target } = event.target.dataset;
      if (typeof target !== 'string') return;
      if (Object.keys(this.state.renderCards).includes(target)) {
        this.setState((prevState: State) => {
          const { renderCards } = prevState;
          return (
            {
              renderCards: {
                ...renderCards,
                [target]: !renderCards[target]
              }
            }
          )
        });
      }
    } else {
      throw new Error(`Expecting event target to be an instance of HTMLElement,
      got ${event.target} instead`)
    }
  }

  renderCardsState = (): ReactElement<any, any>[] | null => {
    const { renderCards } = this.state;
    // TODO find a way to fetch the current list of children
    /*
      so instead of using switches and boolean, just use an array of strings?
      Like so: renderCardState =  ['cat', 'lorem', 'basic1']
      and then search through the array and if something there is familiar then
      push that into a childArr var
      so the above becomes [<CatCard/>, <LoremCard/>, BasicCard]

      Then in the case of already rendered cards signified by the entry already being
      in the renderCardState array, just find the index of it and then splice it out of both State and childArr
     */
    const childArr: Array<ReactElement<any, any>> = [];
    for (const key in renderCards) {
      switch (key) {
        case 'cat':
          if (renderCards[key] === true) {
            const Card = <CatCard/>;
            childArr.push(Card);
            break;
          }
        case 'lorem':
          if (renderCards[key] === true) {
            const Card = <LoremCard/>;
            childArr.push(Card);
            break;
          }
        case 'todo':
          if (renderCards[key] === true) {
            const { listEle } = this.state
            const toRender = listEle.length > 0 ? listEle.map(this.renderTemplate) : null;
            const Card = <TodoCard
              handleSubmitFn={this.handleSubmit}
            >
            { toRender }
            </TodoCard>
            ;
            childArr.push(Card);
            break;
          }
        case 'basic1':
          if (renderCards[key] === true) {
            const Card = BasicCard;
            childArr.push(Card);
            break;
          }
        case 'basic2':
          if (renderCards[key] === true) {
            const Card = BasicCard2;
            childArr.push(Card);
            break;
          }
        default:
          break;
      }
    }
    const length = childArr.length;
    return length === 0 ? null : childArr;
  }

  // TODO add Card rendering using React.cloneElement()
  // TODO add keys to each card
  render = (): ReactElement<any, any> => {
    const { toDisplay, renderCards } = this.state
    const childrenFromState = this.renderCardsState();
    return (
      <>
        <ModalController
          toDisplay={toDisplay}
          renderCards={renderCards}
          handleCloseFn={this.hideModal}
          handleCardFn={this.toggleCardState}
        />
        <main>
          <Dash
            AddCardEle={
              <AddCard
                handleAddFn={this.handleModalDisplay}
              />
            }
            handleCardCloseFn={this.toggleCardState}
          >
            {childrenFromState}
          </Dash>
        </main>
        <Info
          handleDisplayFn={this.handleModalDisplay}
        />
      </>
    )
  }
}
