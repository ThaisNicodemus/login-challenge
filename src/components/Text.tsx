import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";

export interface TextProps {
    size?: "xs" | "sm" | '2sm' | "md" | '2md' | "lg" | '2lg' | "3lg" | "xl" | "2xl" | "3xl";
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
    const TextComp = asChild ? Slot : 'span';

    return ( <TextComp 
        className={clsx(
            "text-white",
            {
                'text-xs': size === "xs",
                'text-sm': size === "sm",
                'text-2sm': size === "2sm",
                'text-md': size === "md",
                'text-2md': size === "2md",
                'text-lg': size === "lg",
                'text-2lg': size === "2lg",
                'text-3lg': size === "3lg",
                'text-xl': size === "xl",
                'text-2xl': size === "2xl",
                'text-3xl': size === "3xl",
            }
        )}
        >
            {children}
    </TextComp>
    )
}
