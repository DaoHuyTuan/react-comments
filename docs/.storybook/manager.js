import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import darkTheme from './theme.js'

addons.setConfig({
  theme: darkTheme,
  previewTabs: {
    initialActive: 'addons',
    'storybook/docs/panel': 'Docs',
    canvas: { hidden: true, disabled: true }
  }
})
