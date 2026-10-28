import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[1240px] mx-auto px-5 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
