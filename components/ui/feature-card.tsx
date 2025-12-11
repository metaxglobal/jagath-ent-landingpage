import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
    return (
        <div
            className={cn(
                "flex h-full w-full flex-col gap-3 rounded-[22px] bg-white p-5 transition-all hover:shadow-md",
                "border-t border-r border-b border-t-[#C2C2C2] border-r-[#C2C2C2] border-b-[#C2C2C2]",
                "border-l-[4px] border-l-primary",
                className
            )}
        >
            <div className="flex items-center gap-3 text-primary">
                {icon}
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-secondary tracking-tighter">{title}</h3>
                <p className="text-sm text-muted-foreground/75 tracking-tight">{description}</p>
            </div>
        </div>
    );
}
