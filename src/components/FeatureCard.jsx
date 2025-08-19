import bgPatternMain from "../assets/bg-pattern-main.svg";
import illustrationApp from "../assets/illustration-app.png";

export default function FeatureCard() {
  return (
    <section className="">
      <div className="relative bg-slate sm:rounded-xl sm:h-[600px]">
        <img
          src={illustrationApp}
          alt=""
          className="absolute w-3/5 left-1/2 sm:left-10 -translate-x-1/2 sm:translate-0 -mt-1600 sm:max-w-[270px]"
        />
        <img
          src={bgPatternMain}
          alt=""
          className="w-5/6 mx-auto sm:mx-0 sm:max-w-1/2"
        />
      </div>
    </section>
  );
}
