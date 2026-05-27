import { CSSProperties, ReactNode } from "react";

interface ArrowButtonProps {
    style?: CSSProperties;
    children: ReactNode;
}

export default function ArrowButton({ children, style, ...props }: ArrowButtonProps) {
    return (
        <>
            <button className="group flex flex-col items-start gap-1 text-[#00B4FD]" style={style}>
              <span className="flex items-center gap-2 text-sm font-semibold tracking-widest">
                {children}
                <span className="-translate-y-0.5">→</span>
              </span>
              <span className="block h-[1.5px] w-5 bg-[#00B4FD] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
        </>
    )
}