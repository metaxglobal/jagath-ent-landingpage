"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CallingIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ContactModal } from "@/components/features/contact-modal";

export function Navbar() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "services", "about", "contact"];
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCallNow = () => {
        if (window.innerWidth < 640) {
            window.location.href = "tel:0778186403";
        } else {
            setIsContactModalOpen(true);
        }
    };

    const navLinks = [
        { name: "Home", href: "/#home", id: "home" },
        { name: "Services", href: "#services", id: "services" },
        { name: "About Us", href: "#about", id: "about" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
                <Container className="flex h-[80px] items-center justify-between lg:px-[120px]">
                    <Link href="/#home" className="flex items-center gap-3">
                        <div className="relative h-[53px] w-[53px]">
                            <Image
                                src="/logo mobile.png"
                                alt="Jagath Enterprises Logo"
                                width={53}
                                height={53}
                                className="object-contain" // Ensure it fits
                            />
                        </div>
                        <div className="hidden flex-col leading-[1] lg:flex lg:flex-row lg:gap-1.5 lg:items-center">
                            <span className="text-2xl font-extrabold text-secondary tracking-tighter">JAGATH</span>
                            <span className="text-2xl font-extrabold text-primary tracking-tighter">ENTERPRISES</span>
                        </div>
                    </Link>

                    {/* Desktop Nagivation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-base transition-colors hover:text-primary",
                                    activeSection === link.id
                                        ? "font-medium text-primary" // Active Style
                                        : "font-normal text-secondary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button
                            onClick={handleCallNow}
                            className="h-11 px-5 py-2.5 bg-primary text-secondary hover:opacity-90 font-semibold text-base rounded-[12px]"
                        >
                            <div className="mr-2 flex items-center justify-center">
                                <HugeiconsIcon icon={CallingIcon} size={20} strokeWidth={2} className="text-secondary " />
                            </div>
                            Call Now
                        </Button>
                    </div>
                </Container>
            </header>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
