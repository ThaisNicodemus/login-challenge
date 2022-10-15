import { InputHTMLAttributes, ReactNode } from "react";

export interface RootInputTextProps {
    children: ReactNode;
}


function RootInputText(props: RootInputTextProps) {
    return (
        <div className="flex items-center rounded-full px-5 w-[23.688rem] h-60 border-2 border-white bg-[transparent] focus-within:ring-1 ring-primary-yellow ">
            {props.children}
        </div>
    );
}

// function IconInputText() {}

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputText(props: InputTextProps) {
    return (
        <input className="flex-1 text-white font-MarkPro text-2sm  px-5 bg-[transparent] placeholder:text-white outline-none"
            {...props}
        />
    );
}

export const InputTextComp = {
    Root: RootInputText,
    input: InputText,
}
