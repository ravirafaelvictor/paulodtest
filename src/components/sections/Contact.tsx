"use client";

import { Section } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { Instagram, Calendar, MessageCircle, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
    return (
        <Section id="contato" background="navy" className="relative scroll-mt-28 py-32">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Block A: Premium CTA */}
            <div className="text-center mb-20 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Vamos construir sua <span className="text-primary">evolução?</span>
                </h2>
                <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Não espere o momento perfeito. O primeiro passo para desbloquear seu potencial começa com uma decisão.
                </p>
                <div className="flex justify-center">
                    <Button
                        asChild
                        size="lg"
                        variant="cta"
                        className="rounded-full h-16 px-12 text-lg shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300"
                    >
                        <Link href={siteConfig.contact.whatsapp.fullUrl} target="_blank" rel="noopener noreferrer">
                            Agendar Sessão Agora
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Free Report Intro */}
            <div className="max-w-xl mx-auto text-center mb-12">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900/40 border border-slate-800 px-6 py-4 rounded-full">
                    <span className="text-sm text-slate-300">Prefere começar agora? Obtenha o relatório gratuito e depois me chame.</span>
                    <Button asChild variant="link" className="text-primary h-auto p-0 hover:text-blue-400 font-medium">
                        <a href={siteConfig.contact.tastingUrl} target="_blank" rel="noopener noreferrer">
                            {siteConfig.contact.tastingCtaLabel}
                        </a>
                    </Button>
                </div>
            </div>

            {/* Block B: Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* WhatsApp Card */}
                <Card className="bg-slate-900/40 border-slate-800 hover:border-green-500/50 hover:bg-slate-900/60 transition-all duration-300 group">
                    <CardContent className="flex flex-col items-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle className="w-7 h-7 text-green-500" />
                        </div>
                        <h3 className="text-white font-semibold text-xl mb-2">WhatsApp</h3>
                        <p className="text-slate-400 text-sm mb-6">Fale diretamente comigo</p>
                        <Button asChild variant="ghost" className="text-green-500 hover:text-green-400 hover:bg-green-500/10 group-hover:pr-6 transition-all">
                            <Link href={siteConfig.contact.whatsapp.url} target="_blank" rel="noopener noreferrer">
                                Iniciar conversa <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="bg-slate-900/40 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300 group">
                    <CardContent className="flex flex-col items-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <Mail className="w-7 h-7 text-slate-900" />
                        </div>
                        <h3 className="text-white font-semibold text-xl mb-2">E-mail</h3>
                        <p className="text-slate-400 text-sm mb-6">
                            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-400 transition-colors">
                                {siteConfig.contact.email}
                            </a>
                        </p>
                        <Button asChild variant="ghost" className="text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 group-hover:pr-6 transition-all">
                            <a href={`mailto:${siteConfig.contact.email}`}>
                                Enviar e-mail <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                {/* Instagram Card */}
                <Card className="bg-slate-900/40 border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 group">
                    <CardContent className="flex flex-col items-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Instagram className="w-7 h-7 text-purple-500" />
                        </div>
                        <h3 className="text-white font-semibold text-xl mb-2">Instagram</h3>
                        <p className="text-slate-400 text-sm mb-6">Acompanhe conteúdos diários</p>
                        <Button asChild variant="ghost" className="text-purple-500 hover:text-purple-400 hover:bg-purple-500/10 group-hover:pr-6 transition-all">
                            <Link href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer">
                                @eusoupaulodias <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
