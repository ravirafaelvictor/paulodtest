"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "nav-glass py-4" : "nav-hero py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tighter text-white z-50"
                >
                    PAULO <span className="text-primary">DIAS</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                isScrolled ? "text-slate-200" : "text-slate-100"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        size="lg"
                        variant="cta"
                        className="rounded-full"
                    >
                        <Link href="#contato">
                            Agendar Sessão
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {siteConfig.nav.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-white hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button asChild size="lg" className="mt-8 rounded-full text-lg px-8 shadow-xl shadow-primary/20">
                                <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                                    Agendar Sessão
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
