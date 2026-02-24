import { Instagram, Calendar, Smartphone, MapPin, Mail, Clock, BookOpen, Users, TrendingUp, Award } from "lucide-react";
import { contactConfig } from "./contact";

export const siteConfig = {
    name: "Paulo Dias",
    role: "Treinador Comportamental",
    description: "Desbloqueie sua alta performance através da clareza comportamental.",
    contact: contactConfig,
    nav: [
        { label: "Sobre", href: "#sobre" },
        { label: "Método", href: "#metodo" },
        { label: "Serviços", href: "#servicos" },
        { label: "Depoimentos", href: "#depoimentos" },

        { label: "Contato", href: "#contato" },
    ],
    stats: [
        { label: "Processo Estruturado", value: "Método Próprio", icon: BookOpen },
        { label: "Aplicação Prática", value: "Foco em Ação", icon: TrendingUp },
        { label: "Acompanhamento", value: "Suporte Contínuo", icon: Users },
    ],
    about: {
        summary: "Treinador comportamental especialista em desbloquear o potencial humano através do autoconhecimento estratégico. Entrego o mapa exato de como você funciona para gerar resultados reais.",
        mission: "Capacitar pessoas e equipes por meio de análises comportamentais personalizadas, palestras inspiradoras e orientações práticas.",
        vision: "Ser referência em análise comportamental e desenvolvimento humano.",
        values: ["Autenticidade", "Crescimento", "Conexão", "Empatia"]
    },
    methodStats: [
        { label: "Anos de Experiência", value: "+20", suffix: "anos" },
        { label: "Mapeamentos Realizados", value: "+70", suffix: "" },
        { label: "Horas de Devolutivas", value: "+60", suffix: "h" }
    ],
    audienceServices: [
        {
            badge: "Individual",
            title: "Atendimento Individual",
            subtitle: "Clareza comportamental para decisões e evolução consistente.",
            features: ["Mapeamento comportamental (DISC/CIS)", "Devolutiva individual e plano de ação", "Mentoria e acompanhamento (presencial/online)"],
            icon: Users
        },
        {
            badge: "Corporativo",
            title: "Empresas e Equipes",
            subtitle: "Performance, cultura e comunicação aplicada ao dia a dia.",
            features: ["Palestras e treinamentos in-company", "Desenvolvimento de equipes e lideranças", "Diagnóstico e plano por contexto"],
            icon: TrendingUp
        },
        {
            badge: "Educacional",
            title: "Escolas e Educação",
            subtitle: "Educação emocional e comunicação para ambientes saudáveis.",
            features: ["Oficinas e palestras educativas", "Formação de professores", "Projetos e encontros temáticos"],
            icon: BookOpen
        }
    ],
    clientId: "clients-carousel",
    clients: [
        { name: "Empresa 1", logo: "https://i.imgur.com/Jmcqvyt.png" },
        { name: "Empresa 2", logo: "https://i.imgur.com/tlYlNq4.png" },
        { name: "Empresa 3", logo: "https://i.imgur.com/8aS3GMA.png" },
        { name: "Empresa 4", logo: "https://i.imgur.com/jgmjeB5.png" },
        { name: "Empresa 5", logo: "https://i.imgur.com/jG3nC2Y.png" },
        { name: "Empresa 6", logo: "https://i.imgur.com/TG5PISn.png" },
        { name: "Empresa 7", logo: "https://i.imgur.com/b9MO3mb.png" },
        { name: "Empresa 8", logo: "https://i.imgur.com/BttW9TQ.jpeg" },
        { name: "Empresa 9", logo: "https://i.imgur.com/oV4yWos.png" },
        { name: "Empresa 10", logo: "https://i.imgur.com/pJO323i.png" },
        { name: "Empresa 11", logo: "https://i.imgur.com/cJ9oSyN.png" },
        { name: "Empresa 12", logo: "https://i.imgur.com/fffSAvF.png" },
        { name: "Empresa 13", logo: "https://i.imgur.com/xkb0D4b.png" },
        { name: "Empresa 14", logo: "https://i.imgur.com/sS5oZqH.png" },
    ],
    services: [
        {
            title: "Mapeamento Comportamental",
            description: "Entenda seus padrões naturais, pontos fortes e motivadores para tomar decisões melhores.",
            features: ["Análise de Perfil DISC", "Devolutiva Individual", "Relatório Completo"],
            icon: Users,
        },
        {
            title: "Mentoria de Alta Performance",
            description: "Acompanhamento estratégico para alcançar objetivos específicos na carreira ou vida pessoal.",
            features: ["Plano de Ação", "Encontros Quinzenais", "Suporte WhatsApp"],
            icon: TrendingUp,
            highlight: true,
        },
        {
            title: "Treinamento de Equipes",
            description: "Melhore a comunicação e a produtividade do seu time através da inteligência comportamental.",
            features: ["Workshops", "Dinâmicas", "Alinhamento de Cultura"],
            icon: Award,
        },
    ],
    methodSteps: [
        {
            title: "1. Diagnóstico",
            description: "Identificamos o estado atual, desafios e objetivos.",
            icon: MapPin,
        },
        {
            title: "2. Clareza",
            description: "Mapeamento profundo do perfil e padrões de comportamento.",
            icon: BookOpen,
        },
        {
            title: "3. Plano",
            description: "Construção de um plano de ação prático e direcionado.",
            icon: TrendingUp,
        },
        {
            title: "4. Execução",
            description: "Acompanhamento da implementação e ajustes de rota.",
            icon: Clock,
        },
    ]
};
