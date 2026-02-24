"use client";

import { Section } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function StatsSection() {
    return (
        <Section id="method-stats" background="navy" className="py-20 border-t border-slate-800/50">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Números que sustentam o <span className="text-primary">Método</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {siteConfig.methodStats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center justify-center p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {stat.value}<span className="text-2xl text-slate-500 ml-1">{stat.suffix}</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
