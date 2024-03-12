import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import VuezTheme from './VuezTheme';

addons.setConfig({
   theme: VuezTheme
});