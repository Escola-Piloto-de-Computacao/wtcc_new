import * as React from "react";
import { cn } from "@/lib/utils";

const MinicourseCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "w-full h-full rounded-lg border bg-card text-card-foreground shadow-sm p-5 cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out",
            className
        )}
        {...props}
    />
));
MinicourseCard.displayName = "MinicourseCard";

const MinicourseCardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-1", className)}
        {...props}
    />
));
MinicourseCardHeader.displayName = "MinicourseCardHeader";

type MinicourseCardImageProps = React.HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
};
const MinicourseCardImage = React.forwardRef<
    HTMLImageElement,
    MinicourseCardImageProps
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("w-full h-56 rounded-lg py-5", className)}
        {...props}>
        <img
            className="w-full h-full object-cover rounded-lg"
            {...props}
        />
    </div>
));
MinicourseCardImage.displayName = "MinicourseCardImage";

const MinicourseCardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight pb-2",
            className
        )}
        {...props}
    />
));
MinicourseCardTitle.displayName = "MinicourseCardTitle";

const MinicourseCardSubtitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
MinicourseCardSubtitle.displayName = "MinicourseCardSubtitle";


export { MinicourseCard, MinicourseCardHeader, MinicourseCardTitle, MinicourseCardSubtitle, MinicourseCardImage }