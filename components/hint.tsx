import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';

interface HintProps {
    children: React.ReactNode;
    label: string;
}

export const Hint = ({ label, children }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent
                    side="right"
                    sideOffset={8}
                    className="bg-white text-violet-70000"
                >
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
