import { Circle, CircleProps } from '@piste-icons/react-native'
import { Story } from '@storybook/react-native'

export default {
  title: 'Ratings/Circle',
  component: Circle,
  argTypes: {
    color: {
      control: "select",
      options: ["black", "blue", "green", "orange", "red"],
    },
    size: {
      control: "select",
      options: [18, 24, 36, 48],
    },
  },
}

const Template: Story<CircleProps> = (args) => <Circle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'green',
  size: 24,
}