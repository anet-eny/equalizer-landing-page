import bgPatternMain from "../assets/bg-pattern-main.svg";
import illustrationApp from "../assets/illustration-app.png";

export default function FeatureCard() {
  return (
    <section className="">
      <div className="sm:rounded-xl sm:h-[600px] md:max-w-[1120px]">
        <img
          src={illustrationApp}
          alt=""
          className="-mt-1600 mx-auto sm:ml-500 mb-800 w-[210px] sm:max-w-[270px] md:w-[330px]"
        />
      </div>
    </section>
  );
}
