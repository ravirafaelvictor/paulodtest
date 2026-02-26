"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";
import { Target, Brain, ShieldCheck, Zap, Instagram, Linkedin, MessageCircle, Mail, MapPin, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HistoriaPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30">
            <Header />

            {/* Hero Section of Page */}
            <Section id="historia-hero" background="navy" className="pt-32 pb-12">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" className="mb-8 text-slate-400 hover:text-white pl-0" asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para Home
                        </Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Quem sou eu <span className="text-primary">(História e Propósito)</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed border-l-4 border-primary pl-6">
                        "Amo me conectar com pessoas e transformar vidas."
                    </p>
                </div>
            </Section>

            {/* Main Content */}
            <Section id="historia-content" background="default" className="py-12">
                <article className="max-w-4xl mx-auto prose prose-invert prose-lg text-slate-400 leading-relaxed">
                    <p>
                        Acredito que pessoas emocionalmente conscientes transformam famílias, escolas, organizações e a sociedade. Essa crença não nasceu apenas do estudo, mas da vida, da convivência com pessoas reais, em contextos reais, enfrentando desafios reais.
                    </p>
                    <p>
                        Meu trabalho nasce da conexão humana, do autoconhecimento e da escuta verdadeira. Acredito profundamente que é quando alguém compreende o próprio comportamento que começa uma transformação consistente, possível e sustentável.
                    </p>
                    <p className="text-white font-semibold">
                        Sou Paulo Dias, soteropolitano, amor de Gil, pai de Paulinho e Maria, filho de Esmeralda e José Dias. Cresci aprendendo, dentro de casa, valores que carrego até hoje: respeito, esforço, fé e compromisso com o outro. Minha história, minhas raízes e minha identidade moldaram a forma como vejo pessoas: não como rótulos, mas como potenciais em construção.
                    </p>
                    <p>
                        Desde muito cedo, a comunicação, a liderança e o desenvolvimento humano fizeram parte da minha caminhada. Ao longo dos anos, atuei em diferentes contextos — educacionais, sociais, institucionais e profissionais — sempre lidando com comportamento humano, conflitos, escolhas, emoções e relações. Essas experiências me ensinaram que não existe transformação sem consciência, nem crescimento sem verdade.
                    </p>
                    <p>
                        Minha trajetória me levou a trabalhar com educação emocional, comportamento humano e desenvolvimento pessoal, unindo teoria, prática e vivência. Não falo a partir de um lugar distante ou idealizado. Falo a partir do chão da realidade, daquilo que observei, vivi e aprendi ao caminhar com pessoas, famílias, equipes e comunidades.
                    </p>
                    <p>
                        Sou alguém que acredita na escuta como ferramenta de mudança, na clareza como libertação e na conexão como ponte para resultados mais humanos. Por isso, minha atuação não é baseada em fórmulas prontas, mas em processos que respeitam a individualidade, a história e o tempo de cada pessoa.
                    </p>
                    <p>
                        Hoje, meu trabalho é ajudar pessoas a se conhecerem melhor, a compreenderem seus comportamentos, a se posicionarem com mais consciência e a construírem relações e escolhas mais alinhadas com quem realmente são.
                    </p>
                    <p className="italic border-l-2 border-slate-700 pl-4">
                        Sou, acima de tudo, resultado daquilo que ensino. Tudo o que compartilho foi vivido, testado e transformado em aprendizado. Se você acredita que o desenvolvimento humano começa pelo comportamento, pela escuta e pela conexão, será um prazer caminhar junto nessa jornada de transformação.
                    </p>

                    <div className="mt-12 pt-8 border-t border-slate-800/50">
                        <Button variant="outline" className="border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 bg-slate-900/30" asChild>
                            <a href="https://lattes.cnpq.br/4527428751064384" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" />
                                Currículo Acadêmico (Plataforma Lattes)
                            </a>
                        </Button>
                    </div>
                </article>
            </Section>

            {/* Mission / Vision / Values */}
            <Section id="historia-mvv" background="muted" className="py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Mission */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Missão</h2>
                        </div>
                        <p className="text-slate-300 text-lg">
                            {siteConfig.about.mission}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <Brain className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Visão</h2>
                        </div>
                        <p className="text-slate-300 text-lg">
                            {siteConfig.about.vision}
                        </p>
                    </div>

                    {/* Values */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Valores</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Manually recreating values with description based on provided text, or using siteConfig if descriptions were added there. 
                                Since siteConfig only has simple strings, I will enhance it here to match the "Material Content" descriptions if provided.
                                The prompt says "Currículo resumido: lista com os itens do material".
                                "Diferencial: lista com os pontos do material".
                                And "Valores" descriptions:
                                1. Autenticidade: valorizamos...
                                2. Crescimento: Acreditamos...
                                3. Conexão: Priorizamos...
                                4. Empatia: Agimos...
                            */}
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-colors">
                                <h3 className="text-white font-semibold mb-2">Autenticidade</h3>
                                <p className="text-slate-400 text-sm">Valorizamos a autenticidade nas interações e nos processos de desenvolvimento pessoal.</p>
                            </div>
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-colors">
                                <h3 className="text-white font-semibold mb-2">Crescimento</h3>
                                <p className="text-slate-400 text-sm">Acreditamos no crescimento contínuo — pessoal, profissional e emocional — como base para a transformação humana.</p>
                            </div>
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-colors">
                                <h3 className="text-white font-semibold mb-2">Conexão</h3>
                                <p className="text-slate-400 text-sm">Priorizamos a construção de conexões autênticas e significativas, que fortalecem vínculos e ampliam resultados.</p>
                            </div>
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-colors">
                                <h3 className="text-white font-semibold mb-2">Empatia</h3>
                                <p className="text-slate-400 text-sm">Agimos com empatia, escuta ativa e compreensão, respeitando a individualidade e a história de cada pessoa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Contact Info Block */}
            <Section id="historia-contato" background="navy" className="py-20 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Contato e Contratação</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6 text-left">
                            <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all group">
                                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Instagram</p>
                                    <p className="text-white">@eusoupaulodias</p>
                                </div>
                            </a>

                            <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all group">
                                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">LinkedIn</p>
                                    <p className="text-white">/paulodiastreinamentos</p>
                                </div>
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 text-left">
                            <a href={siteConfig.contact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all group">
                                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">WhatsApp</p>
                                    <p className="text-white">{siteConfig.contact.whatsapp.display}</p>
                                </div>
                            </a>

                            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all group">
                                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">E-mail</p>
                                    <p className="text-white">{siteConfig.contact.email}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2 text-slate-500">
                        <MapPin className="w-5 h-5" />
                        <span>{siteConfig.contact.location}</span>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
