import { themes } from '@storybook/theming';
import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: ['black', 'white', 'secondary-white', 'gray-100', 'gray-200', 'red-300', 'red-200', 'red-100', 'primary-yellow'],
  },
  docs: {
    theme: themes.dark,
  }
}