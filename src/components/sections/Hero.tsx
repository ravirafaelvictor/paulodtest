"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function HeroSection() {
    return (
        <section className="pt-32 md:pt-40 min-h-screen flex items-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Alta Performance e Comportamento
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Clareza comportamental para <span className="text-gradient-blue">decisões melhores</span> e evolução consistente.
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Descubra como seus padrões naturais influenciam seus resultados e desbloqueie seu próximo nível profissional e pessoal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button asChild size="lg" variant="cta" className="rounded-full text-base h-12 px-8">
                                <Link href="#contato">
                                    Agendar Sessão
                                </Link>
                            </Button>
                            <Button asChild variant="outline-cta" size="lg" className="rounded-full text-base h-12 px-8">
                                <a href={siteConfig.contact.tastingUrl} target="_blank" rel="noopener noreferrer">
                                    {siteConfig.contact.tastingCtaLabel}
                                </a>
                            </Button>
                        </div>

                        <p className="text-xs text-slate-500 mb-10 max-w-lg">
                            Ferramenta externa (CIS Assessment). Eu analiso suas respostas e te oriento com clareza.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                            {siteConfig.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                                        <stat.icon className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">{stat.label}</p>
                                        <p className="text-slate-500 text-xs">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl glass-card aspect-[4/5] max-w-md mx-auto group">
                            {/* Real Photo */}
                            <Image
                                src="/paulo-hero.jpg"
                                alt="Paulo Dias - Treinador Comportamental"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: "50% 25%" }} // Centering face
                                priority
                            />
                            {/* Gradient Overlay for integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                            {/* Optional: Contrast/Blend adjustments if needed */}
                            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-blue-500/20 rounded-[2rem] -z-10 bg-slate-900/20 backdrop-blur-sm" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
