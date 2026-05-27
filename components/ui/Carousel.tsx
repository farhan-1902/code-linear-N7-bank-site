import Marquee from "react-fast-marquee";
import Image from "next/image";

type MarqueeItem =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt: string };

export default function Carousel() {
  const marqueeItems: MarqueeItem[] = [
    {
      type: "text",
      content: "Say 👋 to the new way of banking"
    },
    { type: "image", src: "/assets/Sections/Star.svg", alt: "Star" },
    { type: "image", src: "/assets/Sections/N7.svg", alt: "N7 Logo" },
    { type: "image", src: "/assets/Sections/Star.svg", alt: "Star" },
  ];

  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
  <div className="bg-white py-6 text-black font-bold tracking-widest text-2xl overflow-hidden">
    <Marquee speed={50} gradient={false} pauseOnHover={false}>
      <div className="flex items-center">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center shrink-0 pr-16 select-none">
            {item.type === "text" ? (
              <span>{item.content}</span>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={60}
                height={60}
                className="object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </Marquee>
  </div>
);
}