import { trustedCompanies } from "../data/info";

export function TrustedCompanies() {
  return (
    <section className="bg-[#000D12] mx-auto max-w-screen-2xl px-6 py-10 lg:px-10">
      <div className="grid grid-cols-2 gap-6 rounded-4xl border border-white/10 bg-[#08121b] p-6 text-sm text-slate-300 sm:grid-cols-4">
        {trustedCompanies.map((logo) => (
          <div key={logo} className="flex items-center justify-center text-slate-400">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
