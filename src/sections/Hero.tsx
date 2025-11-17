import heroImage from "@/assets/images/hero-image.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import DiamondIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div id="home" className="relative py-32 md:py-48 lg:py-60 z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image: linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5"
          style={
            { backgroundImage: `url(${grainImage.src})` }
          }></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={420} rotation={-15} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <DiamondIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <DiamondIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-40} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <DiamondIcon className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={170} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <DiamondIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={17} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <DiamondIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="8s">
          <DiamondIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <DiamondIcon className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="7s">
          <DiamondIcon className="size-15 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
          <DiamondIcon className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-73} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <DiamondIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={heroImage} className="w-[100px] h-[100px] object-cover" alt="Ranto" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium"> Open for New Projects 🤝</div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5x text-center mt-8 tracking-wide">Hi, I'm Ranto Marpaung👋</h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I'm a frontend developer with a passion for creating beautiful and
              functional websites.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10 hover:scale-105"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10 hover:scale-105"
            >
              <span>👋</span>
              <span className="font-semibold">Lets Connect</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
