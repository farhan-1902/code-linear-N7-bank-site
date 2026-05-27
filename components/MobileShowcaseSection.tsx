import Image from "next/image";
import { Button } from "./ui/Button";
import Carousel from "./ui/Carousel";
import { Promotional } from "./ui/Promotional";

export function MobileShowcaseSection() {
  const regulatoryFeatures: string[] = [
    "Pre-integrated Security System",
    "Fully Compliant With Regulatory Requirement",
    "Digitally Connected Core"
  ];
  const digitalBankingFeatures: string[] = [
    "Adaptive & Intelligent API monetization",
    "Ambient User Experience",
    "Cloud-native With lower TCO"
  ];
  const outOfTheBoxFeatures: string[] = [
    "Branchless & Paperless Banking",
    "Digital Transformation Capability",
    "Optimized, Adoptable and Scalable"
  ];

  return (
    <>
      <Carousel />
      <section className="bg-[#E9F4F9] py-24 text-white">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl text-black font-light sm:text-4xl">
                Digital banking out-of-the-box
              </h2>
              <p className="max-w-xl leading-8 text-slate-600">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <Button href="#demo" variant="primary" size="lg">
                REQUEST DEMO
              </Button>
              <button className="group flex flex-col items-start gap-1 text-[#08759f]">
                <span className="flex items-center gap-2 text-sm font-semibold tracking-widest">
                  LEARN MORE
                  <span className="-translate-y-0.5">→</span>
                </span>
                <span className="block h-[1.5px] w-5 bg-[#00B4FD] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Image src="/assets/Sections/Phone-1.svg" alt="Mobile Showcase" width={250} height={250} className="object-contain w-full h-auto" />
              <div className="mt-10 sm:mt-0" style={{marginTop: "40px"}}>
                <p className="text-black text-2xl font-medium">Fully compliant with regulatory requirement</p>
                <p className="text-slate-600 mt-6 leading-relaxed">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.</p>
                <div className="mt-8 space-y-4">
                  {regulatoryFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Image
                        src="/assets/Sections/Checkmark.svg"
                        alt="Check Icon"
                        width={30}
                        height={30}
                        className="shrink-0 mt-0.5"
                      />
                      <p className="text-slate-600 mt-0.5">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10" style={{marginTop: "40px"}}>
                <p className="text-black text-2xl font-medium">No legacy IT systems</p>
                <p className="text-slate-600 mt-6 leading-relaxed">Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.</p>
                <div className="mt-8 space-y-4">
                  {digitalBankingFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Image
                        src="/assets/Sections/Checkmark.svg"
                        alt="Check Icon"
                        width={30}
                        height={30}
                        className="shrink-0 mt-0.5"
                      />
                      <p className="text-slate-600 mt-0.5">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Image src="/assets/Sections/Phone-2.svg" alt="Mobile Showcase" width={250} height={250} className="object-contain w-full h-auto" />

              <Image src="/assets/Sections/Phone-3.svg" alt="Mobile Showcase" width={250} height={250} className="object-contain w-full h-auto" />
              <div className="mt-10" style={{marginTop: "40px"}}>
                <p className="text-black text-2xl font-medium">No traditional branches</p>
                <p className="text-slate-600 mt-6 leading-relaxed">Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.</p>
                <div className="mt-8 space-y-4">
                  {outOfTheBoxFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Image
                        src="/assets/Sections/Checkmark.svg"
                        alt="Check Icon"
                        width={30}
                        height={30}
                        className="shrink-0 mt-0.5"
                      />
                      <p className="text-slate-600 mt-0.5">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Promotional />
      </section>
    </>
  );
}