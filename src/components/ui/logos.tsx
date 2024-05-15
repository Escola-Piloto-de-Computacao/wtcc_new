import * as React from 'react';
import { cn } from '@/lib/utils';
import { CgWebsite } from "react-icons/cg";

type FrontEndLogoProps = React.HTMLAttributes<HTMLDivElement> & { size?: number; };
const FrontEndLogo = React.forwardRef<
    HTMLDivElement,
    FrontEndLogoProps
>(({ className, size = 15, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "",
            className,
        )}
        {...props}
    >
        <CgWebsite size={size} />
    </div>
));
FrontEndLogo.displayName = 'FrontEndLogo';

export { FrontEndLogo };