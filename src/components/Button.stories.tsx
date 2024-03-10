import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

type ButtonStory = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: {
        look: 'outlined'
    }
}

export default meta

export const Default: ButtonStory = {
    render: args => <Button {...args} />
}