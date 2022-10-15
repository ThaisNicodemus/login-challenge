import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import {clsx} from "clsx";

export interface TextProps {
    size?: "xs" | "sm" | '2sm' | "md" | '2md' | "lg" | '2lg' | "3lg";
    color?: 'text-black' | 'text-white' | 'text-secondary-white' | 'text-primary-yellow' | 'text-gray-200' | 'text-gray-100' | 'text-red-300' | 'text-red-200' | 'text-red-100';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({ size = "md", color, children, asChild, className }: TextProps) {
    const TextComp = asChild ? Slot : 'span';

    return ( <TextComp 
        className={clsx(
            "font-MarkPro",
            {
                'text-xs': size === "xs",
                'text-sm': size === "sm",
                'text-2sm': size === "2sm",
                'text-md': size === "md",
                'text-2md': size === "2md",
                'text-lg': size === "lg",
                'text-2lg': size === "2lg",
                'text-3lg': size === "3lg",
            },
            {
                'text-black': color ===  'text-black',
                'text-white': color === 'text-white',
                'text-secondary-white': color === 'text-secondary-white',
                'text-primary-yellow': color === 'text-primary-yellow',
                'text-gray-200': color === 'text-gray-200',
                'text-gray-100': color === 'text-gray-100',
                'text-red-300': color === 'text-red-300',
                'text-red-200': color === 'text-red-200',
                'text-red-100': color === 'text-red-100',
                current: 'currentColor'
            },
            className
        )}
        >
            {children}
    </TextComp>
    )
}
