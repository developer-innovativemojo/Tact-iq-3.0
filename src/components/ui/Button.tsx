import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const button = cva(
  [
    "py-2",
    "rounded-[8px]",
    "font-semibold",
    "text-[16px]",
    "leading-[36px]",
    "font-helvetica",
  ],
  // bg-gradient-to-r from-[#154454] to-black
  {
    variants: {
      variant: {
        primary: [
          "text-[#FFFFFF] font-semibold w-full text-[16px] flex justify-center items-center rounded-[8px] bg-accent font-montserrat",
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
