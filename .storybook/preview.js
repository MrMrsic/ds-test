/** @type { import('@storybook/react').Preview } */

import "monday-ui-react-core/tokens";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
