import Image from "next/image";
import { Button } from "./ui/Button";
import { trustedCompanies } from "../data/info";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_right,#000D12,#001824)] pb-20 pt-16 sm:pb-24">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The new foundation of modern banking.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We provide innovation and growth, provide seamless customer experience and operational excellence
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#demo" variant="primary">
                REQUEST DEMO
              </Button>
              <Button href="#contact" variant="secondary">
                CONTACT US
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>Trusted By:</span>
              <div className="flex flex-wrap items-center gap-3">
                {trustedCompanies.map((logo) => (
                  <span key={logo} className="text-slate-500 transition hover:text-slate-100">
                    <Image
                    src={`/assets/Companies/${logo}.svg`}
                    alt={`${logo} logo`}
                    width={90}
                    height={90}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(to-right,#000D12,#001824)] shadow-slate-950/20">
              <Image
                src="/assets/Sections/HeroSection.svg"
                alt="Hero section visual"
                width={720}
                height={520}
                className="relative h-auto w-full object-cover"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
