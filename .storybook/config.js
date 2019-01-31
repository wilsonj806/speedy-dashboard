/* Reference for configuring Storybook/ CRA, and Typescript:
http://www.joshschreuder.me/react-storybooks-with-typescript/ */

import { configure } from '@storybook/react';

function loadStories() {
  // require('../src/stories/component.stories.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);