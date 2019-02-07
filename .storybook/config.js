import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/components.stories.tsx');
  require('../src/stories/groups.stories.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);