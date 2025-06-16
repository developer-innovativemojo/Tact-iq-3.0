import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2" | "h3" | "h4" | "p";

interface Props {
  children?: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onclick?: React.MouseEventHandler;
  Style?: React.CSSProperties;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as = "p", onclick, Style } = props;

    // Tailwind classes for each variant
    const variantClasses: Record<ComponentAs, string> = {
      h1: "font-montserrat font-bold text-[64px] leading-[76px] text-center",
      h2: "font-montserrat font-semibold text-[48px] leading-[60px] text-center",
      h3: "font-montserrat font-semibold text-[36px] leading-[48px] text-center",
      h4: "font-montserrat font-bold text-[28px] leading-[36px] text-center",
      p:  "font-montserrat font-bold text-[18px] leading-[24px] text-center",
    };

    const Tag = as;

    return (
      <Tag
        ref={ref}
        className={cn(variantClasses[as], className)}
        onClick={onclick}
        style={Style}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = "Text";

export default Text;
