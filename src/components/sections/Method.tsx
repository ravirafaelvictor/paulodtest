"use client";

import { Section } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MethodSection() {
    return (
        <Section id="metodo" className="bg-slate-950">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Como funciona o <span className="text-primary">Processo</span>
                </h2>
                <p className="text-slate-400 text-lg">
                    Uma metodologia estruturada em 4 passos para garantir clareza, direção e resultados consistentes.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

                {/* Free Report Mini-Card */}
                <div className="max-w-2xl mx-auto mb-16 bg-slate-900/40 border border-slate-800 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 relative z-10 backdrop-blur-sm">
                    <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-white font-semibold mb-2">Comece com o relatório gratuito</h3>
                        <p className="text-sm text-slate-400 mb-1">
                            Você responde um inventário rápido no CIS Assessment (ferramenta externa).
                        </p>
                        <p className="text-xs text-slate-500">
                            Relatório completo (opcional) é contratado diretamente na plataforma.
                        </p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="shrink-0 border-primary/50 text-primary hover:bg-primary/10">
                        <a href={siteConfig.contact.tastingUrl} target="_blank" rel="noopener noreferrer">
                            {siteConfig.contact.tastingCtaLabel}
                        </a>
                    </Button>
                </div>

                <div className="space-y-4 md:space-y-12">
                    {siteConfig.methodSteps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "flex flex-row gap-2 md:gap-8 items-center relative",
                                idx % 2 === 0 ? "text-right" : "flex-row-reverse text-left"
                            )}
                        >
                            {/* Content Side */}
                            <div className="flex-1 w-full">
                                <div className={cn(
                                    "bg-slate-900/40 border border-slate-800 p-3 md:p-6 rounded-xl md:rounded-2xl hover:border-primary/30 transition-colors",
                                    idx % 2 === 0 ? "ml-auto" : "mr-auto"
                                )}>
                                    <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:text-white md:mb-2">{step.title}</h3>
                                    <p className="text-[10px] md:text-base text-slate-400 leading-tight md:leading-normal">{step.description}</p>
                                </div>
                            </div>

                            {/* Icon/Dot Center */}
                            <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-900 border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.3)] md:shadow-[0_0_20px_rgba(59,130,246,0.5)] shrink-0">
                                <step.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                            </div>

                            {/* Empty Side (for balance) */}
                            <div className="flex-1 block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
