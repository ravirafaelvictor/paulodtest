import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Mail, MapPin, MessageCircle } from "lucide-react"; // Added imports for new icons

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                            PAULO <span className="text-primary">DIAS</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            {siteConfig.description}
                        </p>
                        {/* Social links removed from here, as per the provided Code Edit structure */}
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Navegação</h4>
                        <ul className="space-y-4 text-slate-400">
                            {siteConfig.nav.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Redes Sociais</h4>
                        <div className="flex gap-4 mb-8">
                            <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-primary/20 hover:text-primary transition-all group">
                                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                            </a>
                            <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-primary/20 hover:text-primary transition-all group">
                                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                            </a>
                        </div>

                        <h4 className="text-white font-semibold mb-6">Contato</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3">
                                <MessageCircle className="w-4 h-4 text-primary" />
                                <a href={siteConfig.contact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    {siteConfig.contact.whatsapp.display}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{siteConfig.contact.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Paulo Dias. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/termos-de-uso" className="hover:text-slate-300">Termos de Uso</Link>
                        <Link href="/politica-de-privacidade" className="hover:text-slate-300">Política de Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
