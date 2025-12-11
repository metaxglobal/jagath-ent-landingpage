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
        <div className={cn("flex flex-col rounded-[22px] border border-[#C2C2C2] bg-white transition-all hover:shadow-md", className)}>
            <div
                className={cn(
                    "flex h-full w-full flex-col gap-3 rounded-[22px] border-l-4 border-l-primary bg-white p-5",
                    // Inner padding/style
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
        </div>
    );
}
