
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    variant?: "primary" | "secondary";
    features?: string[]; // Only for primary variant often
}

export function ServiceCard({
    title,
    description,
    image,
    variant = "secondary",
    features = [],
}: ServiceCardProps) {
    const isPrimary = variant === "primary";

    return (
        <div
            className={cn(
                "flex w-full flex-col overflow-hidden rounded-[22px] transition-shadow hover:shadow-lg", // custom radius 22px
                "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)]", // shadow-card
                isPrimary
                    ? "bg-transparent lg:flex-row lg:items-stretch lg:h-[400px]" // Primary: Horizontal on Desktop
                    : "outline outline-1 outline-[#C2C2C2]"
            )}
        >
            <div className={cn(
                "relative h-[270px] w-full overflow-hidden shrink-0",
                isPrimary ? "lg:h-full lg:w-[67%] lg:rounded-l-[22px] lg:rounded-r-none rounded-t-[22px]" : "rounded-t-[22px]"
            )}>
                {/* Using Next.js Image with fill for responsiveness, or static height if preferred. Design says h=270. */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div
                className={cn(
                    "flex flex-col justify-center gap-6 p-6 shrink-0",
                    isPrimary
                        ? "bg-secondary text-white rounded-b-[22px] lg:rounded-r-[22px] lg:rounded-l-none lg:w-[33%] lg:p-8"
                        : "bg-white text-foreground rounded-b-[22px]"
                )}
            >
                <div className="flex flex-col gap-3">
                    <h3 className={cn(
                        "font-sans font-semibold leading-tight",
                        isPrimary ? "text-white text-xl lg:text-4xl tracking-tighter" : "text-xl text-secondary tracking-tight"
                    )}>
                        {title}
                    </h3>
                    <p className={cn(
                        "font-medium leading-tight",
                        isPrimary ? "text-white text-sm lg:text-base" : "text-sm text-muted-foreground/75 font-normal tracking-tight"
                    )}>
                        {description}
                    </p>
                </div>

                {/* Features List (Primary only usually, but flexible) */}
                {features.length > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                {/* Dot Icon */}
                                <div className="relative flex h-3 w-3 items-center justify-center shrink-0">
                                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                                </div>
                                <span className={cn("text-sm font-semibold text-white", isPrimary && "lg:text-sm")}>{feature}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
