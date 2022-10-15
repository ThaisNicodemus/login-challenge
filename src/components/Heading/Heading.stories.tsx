import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Login Compass",
    size: "xl",
  },
  argTypes: {
    size: {
      options: ["xl", "2xl", "3xl"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    color: {
      options: [
        "black",
        "white",
        "secondary-white",
        "gray-100",
        "gray-200",
        "red-300",
        "red-200",
        "red-100",
        "primary-yellow",
      ],
      control: {
        type: "color",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const X2Large: StoryObj<HeadingProps> = {
  args: {
    size: "2xl",
  },
};

export const x3Large: StoryObj<HeadingProps> = {
  args: {
    size: "3xl",
  },
};

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <p>Text Custom</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
