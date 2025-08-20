import bgPatternMain from "../assets/bg-pattern-main.svg";
import illustrationApp from "../assets/illustration-app.png";

export default function FeatureCard() {
  return (
    <section className="">
      <div className="sm:rounded-xl sm:h-[600px] md:max-w-[1120px]">
        <img
          src={illustrationApp}
          alt=""
          className=" -mt-1600 mx-auto mb-800 w-[210px] sm:w-[270px] md:w-[330px]"
        />
        {/* <img
          src={bgPatternMain}
          alt=""
          className="w-5/6 mx-auto sm:mx-0 sm:w-[300px] md:mx-auto"
        /> */}
      </div>
    </section>
  );
}
