import { Meta, StoryObj } from "@storybook/react";
import { Lock, User } from "phosphor-react";
import { InputTextComp, RootInputTextProps } from "./InputText";

export default {
  title: "Components/InputText",
  component: InputTextComp.Root,
  args: {
    children: <InputTextComp.Input placeholder="Type here!" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  }
} as Meta<RootInputTextProps>;

export const Default: StoryObj<RootInputTextProps> = {};

export const UserName: StoryObj<RootInputTextProps> = {
  args: {
    children: [
      <InputTextComp.Input placeholder="Usuário" />,
      <InputTextComp.Icon>
        <User />
      </InputTextComp.Icon>,
    ],
  },
};

export const Password: StoryObj<RootInputTextProps> = {
  args: {
    children: [
      <InputTextComp.Input placeholder="Senha" />,
      <InputTextComp.Icon>
        <Lock />
      </InputTextComp.Icon>,
    ],
  },
};
