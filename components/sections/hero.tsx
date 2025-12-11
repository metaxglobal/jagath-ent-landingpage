"use client";

import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CallingIcon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { useState } from "react";
import { ContactModal } from "@/components/features/contact-modal";

export function HeroSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleCallNow = () => {
        if (window.innerWidth < 640) {
            window.location.href = "tel:0778186403";
        } else {
            setIsContactModalOpen(true);
        }
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/94778186403", "_blank");
    };

    return (
        <section id="home" className="relative w-full mt-[80px]"> {/* mt-[80px] for navbar height */}
            {/* Background Image */}
            {/* Desktop Background Image */}
            <Image
                src="/hero img.png"
                alt="Hero Background"
                fill
                className="hidden sm:block object-cover object-center"
                priority
            />
            {/* Mobile Background Image */}
            <Image
                src="/hero mobile img.png"
                alt="Hero Background"
                fill
                className="block sm:hidden object-cover"
                priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <Container className="relative z-10 flex min-h-[640px] flex-col items-center justify-end pb-20 pt-32 text-center sm:items-start sm:text-left lg:px-[120px]">
                <div className="flex w-full max-w-sm flex-col items-start gap-6 lg:max-w-[672px]">
                    {/* Headline */}
                    <h1 className="text-start leading-[1] lg:leading-[72px]">
                        <span className="block text-5xl font-semibold text-white tracking-tighter lg:text-[72px]">Fast & Reliable</span>
                        <span className="block text-5xl font-semibold text-primary tracking-tighter lg:text-[72px]">Gully Bowser</span>
                        <span className="block text-5xl font-semibold text-white tracking-tighter lg:text-[72px]">Service</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-start text-sm font-normal text-white leading-[1.2] lg:text-[22px] lg:leading-[28px]">
                        Professional waste disposal solutions for homes, hotels, businesses, and industries. We safely remove toilet waste, wastewater, and contaminated water.
                    </p>

                    {/* CTAs */}
                    <div className="flex w-full max-w-[400px] items-center gap-4">
                        <Button
                            onClick={handleCallNow}
                            className="h-11 flex-1 rounded-xl bg-primary text-secondary font-semibold text-base hover:bg-primary/90"
                        >
                            <HugeiconsIcon icon={CallingIcon} size={20} className="mr-2 text-secondary" />
                            Call Now
                        </Button>
                        <Button
                            onClick={handleWhatsApp}
                            className="h-11 flex-1 rounded-xl bg-[#1FAF38] text-white font-semibold text-base hover:bg-[#1FAF38]/90"
                        >
                            <HugeiconsIcon icon={WhatsappIcon} size={20} className="mr-2 text-white" />
                            WhatsApp
                        </Button>
                    </div>
                </div>
            </Container>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
}
