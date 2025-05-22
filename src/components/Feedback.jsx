"use client";

import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { PointerHighlight } from "./pointer-highlight";


export function InfiniteMovingCardsDemo() {
    return (
        <div
            className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <div className="mx-auto container  text-center mb-[20px]">
                <h1 className="text-[#000] sm:text-[40px] text-[30px] font-[900] mb-[15px]">
                    <PointerHighlight>
                        <span className="inline-block px-[7px]">Feedback</span>
                    </PointerHighlight> 
                    <span> from Users</span>
                </h1>
            </div>
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the fastest of tools, it was the cleanest of cuts. With a single click, my photos were transformed — no trace of background remained. Efficiency and precision in perfect harmony.",
        name: "Emily Carter",
        title: "Freelance Graphic Designer",
    },
    {
        quote:
            "To edit, or not to edit, is no longer the question. Your background remover makes it so simple, even complex images become clean and professional with ease. A true time-saver.",
        name: "Liam Thompson",
        title: "eCommerce Store Owner",
    },
    {
        quote:
            "All that I uploaded was instantly cleared — no background, no hassle. It's like magic in a click.",
        name: "Sofia Ramirez",
        title: "Social Media Manager",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a content creator in need of speed and quality must rely on your background remover. Flawless results, every single time.",
        name: "James Bennett",
        title: "Content Creator",
    },
    {
        quote:
            "Call me impressed. With countless apps promising perfection, yours actually delivers. Clean edges, smooth performance, and a beautifully simple interface.",
        name: "Aria Chen",
        title: "Product Photographer",
    },
];

