import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";

export function ServicesSection() {
    return (
        <section id="services" className="w-full bg-surface py-16 lg:py-16">
            <Container className="flex flex-col gap-8 lg:gap-12 lg:px-[120px]">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-3 text-center lg:gap-3">
                    <h4 className="text-base font-semibold uppercase text-primary tracking-tighter lg:text-lg">Our Services</h4>
                    <h2 className="text-[28px] font-medium text-secondary tracking-tighter lg:text-6xl lg:leading-none">Complete Waste Solutions</h2>
                    <p className="text-sm font-normal text-muted-foreground/75 tracking-tight lg:text-base lg:max-w-[590px]">
                        From residential homes to large industrial facilities, we provide comprehensive waste disposal and maintenance services.
                    </p>
                </div>

                {/* Services Grid - Mobile: Flex Col / Stack, Desktop: Grid */}
                <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
                    {/* Primary Card - Gully Bowser */}
                    <div className="lg:col-span-3">
                        <ServiceCard
                            title="Gully Bowser Services"
                            description="Our core service: Professional removal of toilet waste, wastewater, and contaminated water using modern gully bowser trucks at reasonable rates."
                            image="/gully.png"
                            variant="primary"
                            features={["Fast Dispatch", "High Capacity Tanks", "Hygienic Disposal"]}
                        />
                    </div>

                    {/* Other Cards */}
                    <ServiceCard
                        title="Filter System Repair"
                        description="Expert maintenance and repair for industrial filtration systems."
                        image="/filter.png"
                    />

                    <ServiceCard
                        title="Sludge & Mud Removal"
                        description="Deep cleaning and removal of accumulated sludge and mud."
                        image="/sludge.png"
                    />

                    <ServiceCard
                        title="Toilet Pipeline Maintenance"
                        description="Clearing blockages and maintaining sanitary pipelines."
                        image="/pipeline.png"
                    />

                    <ServiceCard
                        title="Septic Pit Excavation"
                        description="Professional excavation and cleaning of septic pits."
                        image="/septic.png"
                    />

                    <ServiceCard
                        title="Cylinder Lowering Services"
                        description="Safe and precise concrete cylinder lowering solutions."
                        image="/cylinder.png"
                    />

                    <ServiceCard
                        title="Chemical Waste Disposal"
                        description="Safe collection and disposal of industrial chemical waste."
                        image="/chemical.png"
                    />

                </div>
            </Container>
        </section>
    );
}
