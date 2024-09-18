import {
  BannerSection,
  FAQSection,
  FeaturesSection,
  SolutionsSection,
  TrustedBrandsSection,
  EaseInHandSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <TrustedBrandsSection />
      <FeaturesSection />
      <EaseInHandSection />
      <FAQSection />
      <SolutionsSection />
    </main>
  );
}
