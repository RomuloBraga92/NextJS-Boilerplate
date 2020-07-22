import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
}

export const Basic = () => (
  <Main
    title={text('Title', 'Next.JS Boilerplate')}
    description={text(
      'Description',
      'A boilerplate for your Next.JS application!',
    )}
  />
)
