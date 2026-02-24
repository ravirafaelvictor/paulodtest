import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: "default" | "muted" | "navy";
}

export function Section({ children, className, id, background = "default", ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 relative overflow-hidden",
                background === "default" && "bg-background",
                background === "muted" && "bg-slate-900/50",
                background === "navy" && "bg-slate-950",
                className
            )}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
