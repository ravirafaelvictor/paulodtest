"use client";

import { Section } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function ClientsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            // Calculate one "page" width based on current visible items
            // We can approximate this by checking the container width
            // Since we use snap-start and flex-basis, one page = container width
            const containerWidth = scrollContainerRef.current.clientWidth;
            const scrollAmount = direction === "left" ? -containerWidth : containerWidth;

            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <Section id="clients" background="default" className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Empresas <span className="text-primary">Treinadas</span>
                </h2>
                <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 group">
                {/* Navigation Buttons */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-full shadow-xl -ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-full shadow-xl -mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </Button>

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        touchAction: 'pan-x',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {siteConfig.clients.map((client, idx) => (
                        <div
                            key={idx}
                            // Responsive sizing: 2 items (mobile), 3 items (tablet), 4 items (desktop)
                            className="flex-shrink-0 snap-start w-1/2 md:w-1/3 lg:w-1/4 flex justify-center px-2"
                        >
                            <div className="w-[101px] h-[101px] bg-slate-900/40 border border-slate-800 rounded-xl flex items-center justify-center hover:border-primary/20 transition-all duration-300 hover:bg-slate-900/60 p-4">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={client.logo || ""}
                                        alt={client.name}
                                        fill
                                        className="object-contain"
                                        sizes="101px"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
