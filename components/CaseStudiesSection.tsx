"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Promotional } from "./ui/Promotional";
import ArrowButton from "./ui/ArrowButton";

const caseStudies = [
  {
    category: "GETTING STARTED",
    title: "How we help brands reach out to more people",
    company: "Zoomerr",
    companyIcon: "/assets/Companies/Zoomerr.svg",
    image: "/assets/Sections/Article.svg",
  }
];

export function CaseStudiesSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + caseStudies.length) % caseStudies.length);
  const next = () => setCurrent((i) => (i + 1) % caseStudies.length);

  const slide = caseStudies[current];

  return (
    <section className="bg-[linear-gradient(to_right,#000D12,#001824)] py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">

        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl font-light sm:text-6xl">Our Case Studies</h2>
        </div>

        <div className="flex items-center gap-10 max-w-4xl mx-auto bg-[#01141B] rounded-2xl p-8">
          <div className="flex flex-1 flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <p className="text-xs tracking-[0.2em] text-white/50 font-medium">
                {slide.category}
              </p>
              <h3 className="text-3xl lg:text-4xl font-light leading-snug">
                {slide.title}
              </h3>
              <div className="flex items-center gap-3">
                <Image
                  src={slide.companyIcon}
                  alt={slide.company}
                  width={90}
                  height={90}
                />
              </div>
              <Button href="#readMore" variant="secondary" size="lg">READ MORE</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto flex items-center">

          <div className="flex-1" />

          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors duration-200"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-[#00B4FD]" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors duration-200"
            >
              →
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <ArrowButton>VIEW ALL</ArrowButton>
          </div>

        </div>
      </div>

      <Promotional />
    </section>
  );
}