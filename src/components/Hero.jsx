import Header from "./Header";
import bgMobile from "../assets/bg-mobile.png";
import bgTablet from "../assets/bg-tablet.png";
import bgDesktop from "../assets/bg-desktop.png";
import bgPattern from "../assets/bg-pattern-header.svg";

export default function Hero() {
  return (
    <section className="relative pt-800 pb-2500">
      <img
        src={bgMobile}
        alt=""
        className="absolute -top-20 left-40 scale-200"
      />
      <img
        src={bgTablet}
        alt=""
        className="absolute -top-20 scale-110 hidden sm:block md:hidden"
      />
      <img
        src={bgDesktop}
        alt=""
        className="absolute -top-20 hidden md:block max-w-[1500px]"
      />
      <img
        src={bgPattern}
        alt=""
        className="absolute -top-10 -right-10 md:right-0 hidden sm:block w-[250px]"
      />
      <div className="relative z-10 px-250 sm:px-500 md:px-1000">
        <Header />
        <h1 className="mt-800 text-preset-3_5-bold sm:text-preset-2 md:text-preset-1 text-slate sm:max-w-lg md:max-w-4xl ">
          We make your music sound extraordinary
        </h1>
        <p className="mt-500 text-preset-5 sm:text-preset-4 sm:text-lg md:text-preset-4 text-slate">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ &amp; volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </section>
  );
}
