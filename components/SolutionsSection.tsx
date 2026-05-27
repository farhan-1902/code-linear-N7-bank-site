import { solutions } from "../data/info";
import ArrowButton from "./ui/ArrowButton";
import { Button } from "./ui/Button";
import Image from "next/image";

export function SolutionsSection() {
  return (
    <section className="bg-[linear-gradient(to_right,#000D12,#001824)] py-20">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-white sm:text-4xl">
              All of our solutions are tailor-made to your needs
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#demo" variant="secondary" size="lg">
                REQUEST DEMO
              </Button>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {solutions.map((item) => (
              <div key={item.title} className="space-y-4">
                <Image
                    src={`/assets/Solutions/${item.key}.svg`}
                    alt="Solutions Logo"
                    width={40}
                    height={40}
                />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                <ArrowButton>LEARN MORE</ArrowButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
