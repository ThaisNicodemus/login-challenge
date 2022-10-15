import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import {clsx} from "clsx";

export interface HeadingProps {
    size?:  "xl" | "2xl" | "3xl";
    color?: 'text-black' | 'text-white' | 'text-secondary-white' | 'text-primary-yellow' | 'text-gray-200' | 'text-gray-100' | 'text-red-300' | 'text-red-200' | 'text-red-100';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = "xl", color, children, asChild }: HeadingProps) {
    const HeadingComp = asChild ? Slot : 'h2';

    return ( <HeadingComp 
        className={clsx(
            "text-red-300 font-MarkPro",
            {
                'text-xl': size === "xl",
                'text-2xl': size === "2xl",
                'text-3xl': size === "3xl",
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
            }

        )}
        >
            {children}
    </HeadingComp>
    )
}
