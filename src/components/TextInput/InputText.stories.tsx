import { Meta, StoryObj } from "@storybook/react";
import { InputTextComp, RootInputTextProps, InputTextProps } from "./InputText";

export default {
    title: "Components/InputText",
    component: InputTextComp.Root,
    args: {
        children: (
            <InputTextComp.input placeholder="Usuário" />
        )
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
