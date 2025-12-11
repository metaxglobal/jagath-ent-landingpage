import { Container } from "@/components/ui/container";

import { HugeiconsIcon } from "@hugeicons/react";
import { CallingIcon, Mail01Icon, Location06Icon } from "@hugeicons/core-free-icons";

export function ContactSection() {
    return (
        <section id="contact" className="w-full py-16 bg-white">
            <Container className="flex flex-col gap-8 lg:px-[220px]">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <h4 className="text-base font-semibold uppercase text-primary tracking-tighter">Contact Us</h4>
                    <h2 className="text-[28px] font-medium text-secondary tracking-tighter">Need Immediate Service?</h2>
                    <p className="text-sm font-normal text-muted-foreground/75 tracking-tight">
                        Our team is ready to assist you. Contact us now for a free quote or emergency service.
                    </p>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                    {/* Map Image Placeholder */}
                    <div className="relative h-[230px] w-full shrink-0 overflow-hidden rounded-[22px] lg:h-[446px] lg:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.670046467449!2d79.9665347!3d6.7494149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f0057ad7205%3A0x1bbc210fdcfba783!2sJagath%20Enterprises%2C%20gully%20bowser%20service!5e0!3m2!1sen!2slk!4v1765434353834!5m2!1sen!2slk"
                            className="h-full w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-12 lg:w-1/2 lg:justify-center">
                        {/* Info Block */}
                        <div className="flex flex-col gap-8">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C2C2C2]">
                                    <HugeiconsIcon icon={CallingIcon} size={24} className="text-primary" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base font-medium text-secondary tracking-tighter">Phone</span>
                                    <span className="text-base text-muted-foreground/75 leading-[1] tracking-tight">077 818 6403</span>
                                    <span className="text-base text-muted-foreground/75 leading-[1] tracking-tight">074 180 0904</span>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C2C2C2]">
                                    <HugeiconsIcon icon={Mail01Icon} size={24} className="text-primary" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base font-medium text-secondary tracking-tighter">Email</span>
                                    <span className="text-base text-muted-foreground/75 leading-[1] text-break-all tracking-tight">jagathariyasinghe567@gmail.com</span>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C2C2C2]">
                                    <HugeiconsIcon icon={Location06Icon} size={24} className="text-primary" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base font-medium text-secondary tracking-tighter">Address</span>
                                    <span className="text-base text-muted-foreground/75 leading-[1] tracking-tight">Bandaragama, Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        {/* Coverage Areas */}
                        <div className="flex flex-col gap-3">
                            <span className="text-base font-medium text-secondary">Service Coverage Areas</span>
                            <p className="text-base text-muted-foreground/75 tracking-tight">
                                We provide our services across the following areas and surrounding locations:
                            </p>
                            <p className="text-base font-semibold text-muted-foreground/75 tracking-tight">
                                Dehiwala, Mount Lavinia, Piliyandala, Kesbewa, Horana, Mathugama, Ingiriya, Dodangoda, Kalutara, Wadduwa, Waskaduwa, Panadura, Kadawatha, Bandaragama
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
