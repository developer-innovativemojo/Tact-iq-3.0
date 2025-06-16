import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const button = cva(
  [
    "py-2",
    "rounded-[29px]",
    "font-semibold",
    "text-[14px]",
    "leading-[36px]",
    "font-helvetica",
  ],
  // bg-gradient-to-r from-[#154454] to-black
  {
    variants: {
      variant: {
        primary: [
          "text-[#FFC300] font-semibold w-full text-[14px] flex justify-center items-center rounded-[10px]  h-[55px] bg-[#000000] font-dmsans",
        ],
      },
      size: {
        small: ["", ""],
        medium: [""],
      },
    },
    compoundVariants: [{ variant: "primary", size: "medium" }],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  isLoading,
  children,
  size,

  ...props
}) => (
  <button
    disabled={isLoading}
    className={cn(button({ variant, size, className }))}
    {...props}
  >
    {isLoading ? "Loading" : children}
  </button>
);

export default Button;
