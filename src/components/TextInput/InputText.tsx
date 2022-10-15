import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

// Container for Input
export interface RootInputTextProps {
    children: ReactNode;
}

function RootInputText(props: RootInputTextProps) {
    return (
        <div className="flex items-center rounded-full px-5 w-[23.688rem] h-60 border-2 border-white bg-[transparent] focus-within:ring-1 ring-secondary-white ">
            {props.children}
        </div>
    );
}
RootInputText.displayName = 'RootInputText.Root'

// Icon for Input
export interface IconInputTextProps {
    children: ReactNode;
}

function IconInputText(props: IconInputTextProps) {
    return (
        <Slot className="w-5 h-5 text-secondary-white">
            {props.children}
        </Slot>
    )
}
IconInputText.displayName = 'IconInputText.Icon'

// Input for Input
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputText(props: InputTextProps) {
    return (
        <input className="flex-1 text-white font-MarkPro text-2sm  px-5 bg-[transparent] placeholder:text-white outline-none"
            {...props}
        />
    );
}
InputText.displayName = 'InputText.Input'

export const InputTextComp = {
    Root: RootInputText,
    Input: InputText,
    Icon: IconInputText,
}
