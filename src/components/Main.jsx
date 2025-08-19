import FeatureCard from "./FeatureCard";
import DownloadCard from "./DownloadCard";

export default function Main() {
  return (
    <section className="relative sm:px-500 sm:pb-2500 bg-[#fafafa]">
      <FeatureCard />
      <DownloadCard />
    </section>
  );
}
