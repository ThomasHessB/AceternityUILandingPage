import Image from "next/image";
import { HeroParallaxComponent } from "./components/heroparallaxcomponent";
import { TextWithEffect } from "./components/text-with-effect";
import ScrollCarousel from "./components/ScrollCarousel";
import ScrollCarousel2 from "./components/ScrollCarousel2";
import { LayoutGridComponent } from "./components/layout-grid-component";
import { MouseImageTrailComponent } from "./components/MouseImageTrail";
import TrippyScroll from "./components/TrippyScroll";
import FuzzyOverlayComponent from "./components/FuzzyOverlay";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeroParallaxComponent />
      </div>
      <div className="texteffect p-10 ">
        <TextWithEffect />
      </div>
      <div>
        <MouseImageTrailComponent />
      </div>
      <div className="">
        <ScrollCarousel />
      </div>
      <div className="">
        <ScrollCarousel2 />
      </div>
      <div className="relative">
        <LayoutGridComponent />
      </div>
      <TrippyScroll />
      <div className="overflow-hidden">
        <FuzzyOverlayComponent />
      </div>
    </main>
  );
}
