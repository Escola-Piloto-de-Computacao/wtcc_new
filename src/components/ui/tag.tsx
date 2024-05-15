import * as React from "react";
import { cn } from "@/lib/utils";

const Tag = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "w-fit rounded-md border shadow-sm p-1 text-sm font-light",
            className,
        )}
        {...props}
    />
));
Tag.displayName = "Tag";

export { Tag };