"use client";

import { Section } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Mic, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const contents = [
    { title: "Como ter mais foco no trabalho", type: "Vídeo", time: "10 min", icon: PlayCircle },
    { title: "O poder do autoconhecimento", type: "Artigo", time: "5 min leitura", icon: FileText },
    { title: "Ansiedade e Performance", type: "Áudio", time: "15 min", icon: Mic },
    { title: "Liderança Comportamental", type: "Vídeo", time: "12 min", icon: PlayCircle },
    { title: "Tomada de Decisão com DISC", type: "Artigo", time: "7 min leitura", icon: FileText },
    { title: "Mindset de Crescimento", type: "Áudio", time: "20 min", icon: Mic },
];

export function ContentSection() {
    return (
        <Section id="conteudos" background="default">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Conteúdo <span className="text-primary">Estratégico</span>
                    </h2>
                    <p className="text-slate-400">
                        Materiais para você aprofundar seu conhecimento e começar a aplicar mudanças hoje mesmo.
                    </p>
                </div>
                <Button variant="outline" className="text-slate-400 border-slate-700 hover:text-white hover:bg-slate-800">
                    Ver todos
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contents.map((content, idx) => (
                    <Card key={idx} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors group cursor-pointer">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary" className="bg-slate-800 text-primary hover:bg-slate-700 border-none">
                                    <content.icon className="w-3 h-3 mr-1" />
                                    {content.type}
                                </Badge>
                                <span className="text-xs text-slate-500">{content.time}</span>
                            </div>
                            <CardTitle className="text-lg text-white group-hover:text-primary transition-colors line-clamp-2">
                                {content.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-sm line-clamp-3">
                                Resumo breve do conteúdo para gerar interesse e clique. Este é um placeholder de texto para simular a descrição.
                            </p>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <span className="text-sm font-medium text-slate-500 group-hover:text-white transition-colors flex items-center">
                                Acessar <ArrowRight className="ml-2 w-4 h-4" />
                            </span>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
