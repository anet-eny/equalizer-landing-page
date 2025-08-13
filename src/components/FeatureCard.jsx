import bgPatternMain from "../assets/bg-pattern-main.svg";
import illustrationApp from "../assets/illustration-app.png";

export default function FeatureCard() {
  return (
    <section className="">
      <div className="relative bg-slate">
        <img
          src={illustrationApp}
          alt=""
          className="absolute w-3/5 left-1/2 -translate-x-1/2 -mt-1600"
        />
        <img src={bgPatternMain} alt="" className="w-5/6 mx-auto" />
      </div>
    </section>
  );
}
