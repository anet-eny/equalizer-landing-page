import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

export default function DownloadCard() {
  return (
    <section className="min-h-[625px] px-250 py-600 bg-orange">
      <h2 className="text-preset-3_5-bold">Premium EQ</h2>
      <p className="text-preset-5 mt-300">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className="flex items-center mt-500 gap-200">
        <span className="text-preset-2 font-bold">$4</span>
        <span className="text-preset-4 font-normal">/ month</span>
      </div>

      <div className="space-y-200 mt-600">
        <button className="w-full py-200 flex items-center justify-center gap-100 text-preset-6 font-medium text-white hover:text-slate bg-slate hover:bg-cyan rounded-xl cursor-pointer transition-colors duration-300">
          <FaApple size={24} />
          iOS Download
        </button>
        <button className="w-full py-200 flex items-center justify-center gap-100 text-preset-6 font-medium text-slate bg-white hover:bg-yellow rounded-xl cursor-pointer transition-colors duration-300">
          <GrAndroid size={24} />
          Android Download
        </button>
      </div>
    </section>
  );
}
