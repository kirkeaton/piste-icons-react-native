import { Diamond, DiamondProps } from '@piste-icons/react-native'
import { Story } from '@storybook/react-native'

export default {
  title: 'Ratings/Diamond',
  component: Diamond,
  argTypes: {
    color: {
      control: "select",
      options: ["black"],
    },
    size: {
      control: "select",
      options: [18, 24, 36, 48],
    },
  },
}

const Template: Story<DiamondProps> = (args) => <Diamond {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'black',
  size: 24,
}