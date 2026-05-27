import { Button } from "./Button";

export function Promotional() {
    return (
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 mt-24">
            <div className="bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] py-16 lg:py-24 px-8 lg:px-16 rounded-2xl">
                <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-semibold text-white sm:text-4xl">
                        Take the full advantage of going paper-less now.
                        </h2>
                        <p className="max-w-xl text-white/60">
                        CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
                        <Button href="#demo" variant="secondary" size="lg">
                        CONTACT US
                        </Button>
                        <Button href="#contact" variant="primary" size="lg">
                        REQUEST DEMO
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}