import { Button } from "./ui/Button";
import Image from "next/image";
import { Promotional } from "./ui/Promotional";
import ArrowButton from "./ui/ArrowButton";

export function ProductFeatureSection() {
  const featuresLeft = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ];

  const featuresRight = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];

  return (
    <section className="bg-[linear-gradient(to_right,#000D12,#001824)] py-24">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-white sm:text-4xl">
              A complete cloud-based core banking.
            </h2>
            <p className="max-w-xl text-white/60">
              Faster time to market with our cloud-based core banking services
            </p>
            <Button href="#demo" variant="primary" size="lg">
              REQUEST DEMO
            </Button>
            <ArrowButton>LEARN MORE</ArrowButton>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/assets/Sections/CloudBasedCoreBanking1.svg"
              alt="Feature Image"
              width={5000}
              height={5000}
              className="translate-x-[25%]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 mt-24">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden">
            <Image
              src="/assets/Sections/CloudBasedCoreBanking2.svg"
              alt="Feature Image"
              width={5000}
              height={5000}
              className="-translate-x-[25%]"
            />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-light text-white">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>

            <div>
              <p className="text-white font-bold mb-4">What you will get:</p>

              <div className="flex gap-8">
                <div className="flex flex-1 flex-col gap-4">
                  {featuresLeft.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Image
                        src="/assets/Sections/Checkmark.svg"
                        alt="Check Icon"
                        width={30}
                        height={30}
                        className="shrink-0 block"
                      />
                      <p className="text-white" style={{marginTop: "2px"}}>{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  {featuresRight.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Image
                        src="/assets/Sections/Checkmark.svg"
                        alt="Check Icon"
                        width={30}
                        height={30}
                        className="shrink-0 mt-0.5"
                      />
                      <p className="text-white" style={{marginTop: "5px"}}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Promotional />
    </section>
  );
}