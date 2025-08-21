import FeatureCard from "./FeatureCard";
import DownloadCard from "./DownloadCard";
import bgPatternMain from "../assets/bg-pattern-main.svg";

export default function Main() {
  return (
    <section className="relative sm:px-500 md:px-1000 sm:pb-2500">
      <div className="relative max-w-[1120px] mx-auto">
        <div className="absolute top-0 left-0 right-0 bg-slate sm:rounded-xl h-[380px] sm:h-[600px] ">
          <img
            src={bgPatternMain}
            alt=""
            className="absolute left-1/2 -translate-x-1/2 sm:left-39 md:left-2/5"
          />
        </div>
        <div className="relative flex flex-col sm:flex-row md:justify-around">
          <FeatureCard />
          <DownloadCard />
        </div>
      </div>
    </section>
  );
}
