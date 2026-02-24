"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServicesSection() {
    return (
        <Section id="servicos" background="default">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Soluções para sua <span className="text-primary">Evolução</span>
                </h2>
                <p className="text-slate-400 text-lg">
                    Formatos flexíveis de atendimento para atender sua necessidade específica, seja individual ou empresarial.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                {siteConfig.services.map((service, idx) => (
                    <Card
                        key={idx}
                        className={cn(
                            "flex flex-col border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-primary/50",
                            service.highlight && "border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-slate-900/80 scale-105 z-10"
                        )}
                    >
                        <CardHeader>
                            <div className="mb-4 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                            <CardDescription className="text-slate-400 mt-2">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-300">
                                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="pt-4 border-t border-slate-800/50">
                            <div className="w-full">
                                <p className="text-xs text-slate-500 text-center mb-3">
                                    Investimento sob consulta
                                </p>
                                <Button asChild className="w-full rounded-full" variant="cta">
                                    <Link href="#contato">
                                        Agendar Conversa
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Audience Services Subsection */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Atuação por <span className="text-primary">Público</span>
                    </h3>
                    <p className="text-slate-400">Soluções personalizadas para cada contexto.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {siteConfig.audienceServices.map((service, idx) => (
                        <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 rounded-xl hover:border-blue-500/30 transition-all hover:bg-slate-900/60 group flex flex-col h-full relative overflow-hidden">
                            {/* Badge */}
                            <div className="absolute top-0 right-0 p-4">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                                    {service.badge}
                                </span>
                            </div>

                            {/* Header */}
                            <div className="flex flex-col gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex items-center justify-center">
                                    <service.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                    <p className="text-sm text-slate-400 leading-snug min-h-[40px]">{service.subtitle}</p>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mt-auto">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="text-sm text-slate-300 flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
