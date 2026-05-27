import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { SolutionsSection } from "../components/SolutionsSection";
import { ProductFeatureSection } from "../components/ProductFeatureSection";
import { MobileShowcaseSection } from "../components/MobileShowcaseSection";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { Footer } from "../components/Footer";
import { ArticlesSection } from "@/components/ArticlesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_right,#000D12,#001824)] text-white">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <ProductFeatureSection />
      <MobileShowcaseSection />
      <ArticlesSection />
      <CaseStudiesSection />
      <Footer />
    </main>
  );
}
