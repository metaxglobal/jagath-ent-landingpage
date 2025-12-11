import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, Wallet01Icon, UserGroup03Icon, SecurityCheckIcon, Building06Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export function WhyChooseUsSection() {
    return (
        <section id="about" className="w-full py-16 bg-white lg:py-16">
            <Container className="flex flex-col gap-8 lg:gap-12 lg:px-[120px]">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-3 text-center lg:gap-3">
                    <h4 className="text-base font-semibold uppercase text-primary tracking-tighter lg:text-lg">Why Choose Us</h4>
                    <h2 className="text-[28px] font-medium text-secondary tracking-tighter lg:text-6xl lg:leading-none">The Standard in Sanitation</h2>
                    <p className="text-sm font-normal text-muted-foreground/75 tracking-tight lg:text-base lg:max-w-[646px]">
                        We combine speed, safety, and reliability to deliver the best service in the industry.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-6">
                    <div className="col-span-2 lg:col-span-1">
                        <FeatureCard
                            title="Fast Response"
                            description="Urgent dispatch for emergency waste disposal needs."
                            icon={<HugeiconsIcon icon={Clock01Icon} size={32} className="text-primary" />}
                        />
                    </div>

                    <FeatureCard
                        title="Fair Pricing"
                        description="Transparent rates with no hidden charges."
                        icon={<HugeiconsIcon icon={Wallet01Icon} size={32} className="text-primary" />}
                        className="col-span-1"
                    />

                    <FeatureCard
                        title="Expert Team"
                        description="Highly trained professionals in waste management."
                        icon={<HugeiconsIcon icon={UserGroup03Icon} size={32} className="text-primary" />}
                        className="col-span-1"
                    />

                    <FeatureCard
                        title="Safe Handling"
                        description="Strict adherence to safety and hygiene protocols."
                        icon={<HugeiconsIcon icon={SecurityCheckIcon} size={32} className="text-primary" />}
                        className="col-span-1"
                    />

                    <FeatureCard
                        title="Trusted Service"
                        description="Serving homes, hotels, and industries island-wide."
                        icon={<HugeiconsIcon icon={Building06Icon} size={32} className="text-primary" />}
                        className="col-span-1"
                    />
                </div>
            </Container>
        </section>
    );
}
