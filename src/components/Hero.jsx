import Header from "./Header";
import bgMobile from "../assets/bg-mobile.png";
import bgTablet from "../assets/bg-tablet.png";
import bgDesktop from "../assets/bg-desktop.png";

export default function Hero() {
  return (
    <section className="relative bg-[#fafafa] pt-800 pb-2500 ">
      <img
        src={bgMobile}
        alt=""
        className="absolute -top-20 left-40 scale-200"
      />
      <div className="relative z-10 px-250">
        <Header />
        <h1 className="mt-800 text-preset-3_5-bold text-slate">
          We make your music sound extraordinary
        </h1>
        <p className="mt-500 text-preset-5 text-slate">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ &amp; volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </section>
  );
}
