import { Meta, StoryObj } from '@storybook/react'
import { Children } from 'react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Login Compass',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ["xs", "sm", '2sm', "md", '2md', "lg", '2lg', "3lg", "xl", "2xl", "3xl"],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps>  = {}

export const small: StoryObj<TextProps>  = {
    args: {
        size: 'sm',
    }
}

export const large: StoryObj<TextProps>  = {
    args: {
        size: 'lg',
    }
}

export const xLarge: StoryObj<TextProps>  = {
    args: {
        size: 'xl',
    }
}

export const CustomText: StoryObj<TextProps>  = {
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