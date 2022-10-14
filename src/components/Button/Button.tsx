import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import {clsx} from "clsx";

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const ButtonComp = asChild ? Slot : 'button';

    return ( <ButtonComp 
        className={clsx(
            "text-white font-MarkPro font-bold py-6 px-4 bg-gradient-to-r from-red-300 to-red-200 rounded-full w-[23.688rem] text-md  " ,
            
        )}
        >
            {children}
    </ButtonComp>
    )
}
