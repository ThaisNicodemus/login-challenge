import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import {clsx} from "clsx";

export interface HeadingProps {
    size?:  "xl" | "2xl" | "3xl";
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = "xl", children, asChild }: HeadingProps) {
    const HeadingComp = asChild ? Slot : 'h2';

    return ( <HeadingComp 
        className={clsx(
            "text-red-100  font-MarkPro",
            {
                'text-xl': size === "xl",
                'text-2xl': size === "2xl",
                'text-3xl': size === "3xl",
            }
        )}
        >
            {children}
    </HeadingComp>
    )
}
