import { create } from '@storybook/theming'

const common = {
  // Highlight color
  colorPrimary: 'hsl(199, 89%, 48%)', // highlight-5
  colorSecondary: 'hsl(199, 89%, 48%)', // highlight-5
  // Typography
  fontBase: '"Inter var", sans-serif',
  // Branding
  brandTitle: 'React Comments',
  brandUrl: 'https://moaijs.com'
}

export default create({
  ...common,
  base: 'dark',
  // UI
  appBg: 'hsl(216, 13%, 15%)', // gray-8
  appContentBg: 'hsl(220, 13%, 18%)', // gray-7
  appBorderColor: 'hsl(220, 09%, 46%)', // gray-4
  appBorderRadius: 2,
  // Text colors
  textColor: 'hsl(235, 18%, 98%)', // gray-0
  textMutedColor: 'hsl(218, 11%, 65%)', // gray-3
  // Toolbar default and active colors
  barTextColor: 'hsl(235, 18%, 98%)', // gray-0
  barSelectedColor: 'hsl(235, 18%, 98%)', // gray-0
  barBg: 'hsl(220, 13%, 18%)' // gray-7
})
