import { solutionsN7, banking, socials } from "@/data/info";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_right,#000D12,#001824)] text-slate-400">
      <div className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Image src="/assets/Sections/FooterLogo.svg" alt="N7 Logo" width={500} height={900} />
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.3em] text-white">London</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.3em] text-white">Dubai</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5, Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.3em] text-white">Pune</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.
              </p>
            </div>

            <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-[0.3em] text-white">Solutions</h3>
                {solutionsN7.map((solution, i) => (
                    <p key={i} className="flex items-center gap-2 text-sm leading-relaxed text-slate-400">
                    {solution}
                    <span className="text-[#00B4FD] -translate-y-0.5">→</span>
                    </p>
                ))}
            </div>

            <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-[0.3em] text-white">N7 Banking</h3>
                {banking.map((solution, i) => (
                    <p key={i} className="flex items-center gap-2 text-sm leading-relaxed text-slate-400">
                    {solution}
                    <span className="text-[#00B4FD] -translate-y-0.5">→</span>
                    </p>
                ))}
            </div>

            <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-[0.3em] text-white">Our Socials</h3>
                {socials.map((solution, i) => (
                    <p key={i} className="flex items-center gap-2 text-sm leading-relaxed text-slate-400">
                    {solution}
                    <span className="text-[#00B4FD] -translate-y-0.5">→</span>
                    </p>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
          <span>© 2026 N7. Crafted for modern banking. Farhan Ansari</span>
          <span>Linktia Infosystems Ltd.</span>
        </div>
      </div>
    </footer>
  );
}