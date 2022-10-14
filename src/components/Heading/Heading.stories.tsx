import { Meta, StoryObj } from '@storybook/react'

import { Children } from 'react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Login Compass',
        size: 'xl',
    },
    argTypes: {
        size: {
            options: ["xl", "2xl", "3xl"],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps>  = {}

export const X2Large: StoryObj<HeadingProps>  = {
    args: {
        size: '2xl',
    }
}

export const x3Large: StoryObj<HeadingProps>  = {
    // Type '{ color: black }',
    args: {
        size: '3xl',
    }
    // argTypes: {
    //     meshColors: {
    //         control: {
    //           type: 'color',
    //           presetColors: ['#ff0000', '#00ff00', '#0000ff'],
    //         },
    //       },
    // },
}

export const CustomHeading: StoryObj<HeadingProps>  = {
    args: {
        asChild: true,
        children: (
            <p>Text Custom</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}