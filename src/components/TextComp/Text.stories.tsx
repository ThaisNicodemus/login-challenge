import { Meta, StoryObj } from '@storybook/react'
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
            options: ["md", '2md'],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
              disable: true,
            },
          },
        color: {
            options: ['black', 'white', 'secondary-white', 'gray-100', 'gray-200', 'red-300', 'red-200', 'red-100', 'primary-yellow' ],
            control: {
                type: 'color'
            },
        },
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps>  = {}

export const small: StoryObj<TextProps>  = {
    args: {
        size: 'sm',
    },
    argTypes: {
        size: {
            options: ["sm", '2sm'] ,
            control: {
                type: 'inline-radio'
            }
        }
    }
}

export const large: StoryObj<TextProps>  = {
    args: {
        size: 'lg',
    },
    argTypes: {
        size: {
            options: ["lg", '2lg', "3lg"],
            control: {
                type: 'inline-radio'
            }
        }
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
        },
        size: {
            options: ["xs", "sm", '2sm', "md", '2md', "lg", '2lg', "3lg"],
            control: {
                type: 'inline-radio'
            }
        }
    }
}