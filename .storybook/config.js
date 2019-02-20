import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/base.stories.tsx');
  require('../src/stories/stateful.stories.tsx');
  require('../src/stories/app-specific.stories.tsx');
  require('../src/stories/presentational.stories.tsx');
}

configure(loadStories, module);