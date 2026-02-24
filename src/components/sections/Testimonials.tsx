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
                    <CarouselContent>
                        {videoTestimonials.map((video, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Dialog onOpenChange={(open) => !open && setActiveVideo(null)}>
                                        <DialogTrigger asChild>
                                            <div
                                                className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group bg-slate-800 border-slate-700 border"
                                                onClick={() => setActiveVideo(video.videoUrl)}
                                            >
                                                {/* Thumbnail / Poster */}
                                                <div className="absolute inset-0 bg-slate-900">
                                                    <Image
                                                        src={video.poster}
                                                        alt={`Depoimento ${index + 1}`}
                                                        fill
                                                        className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                                    />
                                                </div>

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20 shadow-xl">
                                                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="bg-slate-950 border-slate-800 text-white max-w-4xl p-0 overflow-hidden w-full aspect-video md:aspect-auto md:h-[80vh] flex items-center justify-center">
                                            <DialogTitle className="sr-only">Assista ao depoimento em vídeo</DialogTitle>
                                            {activeVideo === video.videoUrl && (
                                                <video
                                                    src={video.videoUrl}
                                                    controls
                                                    autoPlay
                                                    className="w-full h-full max-h-[80vh] object-contain bg-black"
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
                    <CarouselPrevious className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white" />
                    <CarouselNext className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white" />
                </Carousel>
            </div>

        </Section>
    );
}
