"use client";

import { Section } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { testimonials as videoTestimonials } from "@/data/testimonials";
import { useState } from "react";



export function TestimonialsSection() {
    // State to manage active video to ensure it stops playing when closed
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <Section id="depoimentos" background="muted">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Histórias de <span className="text-primary">Transformação</span>
                </h2>
                <p className="text-slate-400 text-lg">
                    Veja o impacto real na vida e carreira de quem já passou pelo processo.
                </p>
            </div>

            {/* Video Carousel */}
            <div className="max-w-6xl mx-auto mb-20 px-4 md:px-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {videoTestimonials.map((video, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Dialog onOpenChange={(open) => !open && setActiveVideo(null)}>
                                        <DialogTrigger asChild>
                                            <div
                                                className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group bg-slate-800 border-slate-700/50 border shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                                                onClick={() => setActiveVideo(video.videoUrl)}
                                            >
                                                {/* Thumbnail / Poster */}
                                                <div className="absolute inset-0 bg-slate-950">
                                                    <Image
                                                        src={video.poster}
                                                        alt={`Depoimento ${index + 1}`}
                                                        fill
                                                        className="object-cover opacity-90 group-hover:opacity-70 transition-all duration-700"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                                </div>
                                                [...]
                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                                            <Play className="w-5 h-5 text-white fill-white ml-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        [...]
                                        <DialogContent className="bg-slate-950/95 backdrop-blur-xl border-slate-800 text-white max-w-4xl p-0 overflow-hidden w-[calc(100%-2rem)] md:w-full aspect-[9/16] md:h-[85vh] flex items-center justify-center">
                                            <DialogTitle className="sr-only">Assista ao depoimento em vídeo</DialogTitle>
                                            {activeVideo === video.videoUrl && (
                                                <video
                                                    src={video.videoUrl}
                                                    controls
                                                    autoPlay
                                                    playsInline
                                                    className="w-full h-full object-contain bg-black"
                                                >
                                                    Seu navegador não suporta vídeos.
                                                </video>
                                            )}
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-12 h-12 w-12 bg-slate-900/50 border-slate-800 text-white hover:bg-primary hover:border-primary transition-all duration-300" />
                        <CarouselNext className="-right-12 h-12 w-12 bg-slate-900/50 border-slate-800 text-white hover:bg-primary hover:border-primary transition-all duration-300" />
                    </div>
                </Carousel>
            </div>

        </Section>
    );
}
