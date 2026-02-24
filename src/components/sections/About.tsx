"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";
import { ArrowRight, Target, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
    return (
        <Section id="sobre" background="muted">
            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Biography Content */}
                <div className="order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Quem é <span className="text-primary">Paulo Dias</span>?
                    </h2>
                    <div className="text-slate-400 leading-relaxed text-lg mb-8 max-w-xl">
                        <p>
                            {siteConfig.about.summary}
                        </p>
                    </div>

                    {/* Mission & Vision - Compact Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 hover:border-slate-700 transition-colors">
                            <h3 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                                <Target className="w-3.5 h-3.5 text-primary" /> Missão
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{siteConfig.about.mission}</p>
                        </div>
                        <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 hover:border-slate-700 transition-colors">
                            <h3 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                                <Brain className="w-3.5 h-3.5 text-primary" /> Visão
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{siteConfig.about.vision}</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mb-8">
                        <Button asChild variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium group text-base">
                            <Link href="/historia">
                                Conhecer minha história completa <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Values Tags - Small Chips */}
                    <div className="flex flex-wrap gap-2">
                        {siteConfig.about.values.map((value) => (
                            <span key={value} className="px-2.5 py-1 bg-slate-900/60 text-slate-400 text-[10px] uppercase tracking-wider font-semibold rounded-md border border-slate-800">
                                {value}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Block - Kept Intact */}
                <div className="order-2 relative">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl group max-w-md mx-auto lg:max-w-none">
                        <Image
                            src="/paulo-sobre.jpg"
                            alt="Paulo Dias"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{ objectPosition: "50% 20%" }} // Centering face
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />

                        {/* Caption */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                <p className="text-white font-semibold">Paulo Dias</p>
                                <p className="text-sm text-blue-400">Treinador Comportamental</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
