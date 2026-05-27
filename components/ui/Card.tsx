import Image from "next/image";
import { Button } from "./Button";

interface CardProps {
  category?: string;
  title: string;
  author: string;
  date: string;
  iconSrc?: string;
  className?: string;
  variant?: "horizontal" | "vertical";
}

export function Card({
  category,
  title,
  author,
  date,
  iconSrc,
  className = "",
  variant = "vertical",
}: CardProps) {
  const isHorizontal = variant === "horizontal";

  const cardContent = (
    <div className={`flex flex-col grow h-full space-y-4 ${isHorizontal ? "lg:ml-12" : ""}`}>
      {category ? (
        <p className="text-sm font-semibold tracking-widest text-[#00B4FD] uppercase">
          {category}
        </p>
      ) : null}

      <h3 className="text-xl lg:text-3xl leading-tight font-medium text-white">{title}</h3>

      <div className="flex gap-4 text-slate-400 text-sm">
        <span>{author}</span>
        <span>{date}</span>
      </div>

      <div className="mt-auto pt-4">
        <Button href="#readMore" variant="secondary" size="sm" className="cardButton w-full">
          READ MORE
        </Button>
      </div>
    </div>
  );

  return (
    <div
      className={`rounded-4xl border border-white/10 bg-slate-900/80 p-6 lg:p-8 flex ${
        isHorizontal
          ? "flex-col lg:flex-row items-stretch"
          : "flex-col space-y-8"
      } ${className}`}
    >
      {iconSrc ? (
        <div className={`shrink-0 flex items-center ${isHorizontal ? "w-full lg:w-1/2" : "w-full"}`}>
          <Image
            src={iconSrc}
            alt={title}
            width={300}
            height={300}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      ) : null}
      {cardContent}
    </div>
  );
}