import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    phonePrimary?: string;
    phoneSecondary?: string;
}

export function ContactModal({ isOpen, onClose, phonePrimary = "077 818 6403", phoneSecondary = "074 180 0904" }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="relative flex w-full max-w-[520px] flex-col gap-8 rounded-[22px] bg-white p-6 outline outline-1 outline-white/10 md:p-6">

                {/* Header */}
                <div className="flex items-start justify-between gap-8">
                    <h2 className="text-4xl font-medium leading-10 text-secondary tracking-tighter">
                        Call Jagath Enterprises
                    </h2>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center rounded-[11px] border border-primary p-2.5 transition-colors hover:bg-primary/10"
                    >
                        <HugeiconsIcon icon={Cancel01Icon} size={20} className="text-secondary" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center gap-8">
                    <div className="flex w-full flex-col items-center gap-8 text-center">
                        <p className="max-w-[446px] text-sm font-medium leading-[14px] text-[#1E1E1E]/70 tracking-tighter">
                            Get immediate assistance for gully bowser and waste disposal services.<br className="hidden sm:block" />
                            Our team is available 24/7 for emergency support.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 w-full items-center">
                        {/* Primary Phone */}
                        <div className="flex flex-col items-center gap-1 w-full">
                            <Button className="w-[220px] h-[44px] rounded-[12px] bg-primary text-secondary text-base font-semibold hover:bg-primary/90">
                                <HugeiconsIcon icon={Call02Icon} size={20} className="mr-2 text-secondary" />
                                {phonePrimary}
                            </Button>
                            <span className="text-xs font-medium text-[#1E1E1E]/70">(Primary)</span>
                        </div>

                        {/* Secondary Phones */}
                        <div className="flex flex-col items-center gap-2 w-full">
                            <div className="flex flex-wrap items-center justify-center gap-4 w-full px-2">
                                {["074 180 0904", "0779008874", "0723760441"].map((num) => (
                                    <Button
                                        key={num}
                                        variant="outline"
                                        className="h-[36px] min-w-[120px] rounded-[10px] border-[#C2C2C2] bg-transparent text-sm font-medium text-secondary hover:bg-gray-50 hover:text-secondary px-3"
                                    >
                                        <HugeiconsIcon icon={Call02Icon} size={16} className="mr-2 text-secondary" />
                                        {num}
                                    </Button>
                                ))}
                            </div>
                            <span className="text-xs font-medium text-[#1E1E1E]/70">(Secondary)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
