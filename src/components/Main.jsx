import FeatureCard from "./FeatureCard";
import DownloadCard from "./DownloadCard";
import bgPatternMain from "../assets/bg-pattern-main.svg";

export default function Main() {
  return (
    <section className="relative sm:px-500 md:px-1000 sm:pb-2500">
      <div className="absolute inset-0 bg-slate w-full h-[380px] z-0">
        <img
          src={bgPatternMain}
          alt=""
          className="absolute left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="relative flex flex-col sm:flex-row md:items-start z-10">
        <FeatureCard />
        <DownloadCard />
      </div>
    </section>
  );
}
