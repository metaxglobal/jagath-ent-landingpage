import Image from "next/image";
import { Container } from "@/components/ui/container";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook02Icon, Mail01FreeIcons } from "@hugeicons/core-free-icons";

export function Footer() {
    return (
        <footer className="w-full bg-surface pb-6 pt-8 lg:pt-16 lg:pb-6">
            <Container className="flex flex-col items-center gap-8 lg:gap-8 lg:px-[120px]">
                {/* Top: Branding & Socials */}
                <div className="flex w-full items-center justify-between lg:justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo mobile.png"
                            alt="Jagath Enterprises Logo"
                            width={53}
                            height={53}
                        />
                        <div className="hidden flex-col leading-[1] lg:flex lg:flex-row lg:gap-1.5 lg:items-center">
                            <span className="text-2xl font-extrabold text-[#0F172B] tracking-tighter">JAGATH</span>
                            <span className="text-2xl font-extrabold text-[#1C398E] tracking-tighter"> </span> {/* Space if needed or color variation */}
                            <span className="text-2xl font-extrabold text-[#FE9A00] tracking-tighter">ENTERPRISES</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Social Icons */}
                        <a
                            href="https://www.facebook.com/share/1FiUhJE2Xa/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C2C2C2] hover:bg-primary/10 transition-colors"
                        >
                            <HugeiconsIcon icon={Facebook02Icon} size={20} strokeWidth={2} className="text-primary" />
                        </a>
                        <a
                            href="mailto:jagathariyasinghe567@gmail.com"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C2C2C2] hover:bg-primary/10 transition-colors"
                        >
                            <HugeiconsIcon icon={Mail01FreeIcons} size={20} strokeWidth={2} className="text-primary" />
                        </a>
                    </div>
                </div>

                {/* Bottom: Copyright & Credit */}
                <div className="flex w-full flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
                    <p className="text-xs text-muted-foreground/75 leading-4 lg:w-[540px]">
                        © 2025 Jagath Enterprises. All rights reserved.<br className="sm:hidden" />
                        Reliable Gully Bowser & Waste Disposal Services.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground/75">
                        <span>Design & Develop by</span>
                        <a href="https://www.nexgenlab.global/" target="_blank" rel="noopener noreferrer">
                            <Image src="/nexgen logo.png" alt="Developer Logo" width={86} height={12} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
