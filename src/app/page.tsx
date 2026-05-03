import { Navbar5 } from "./components/navbar";
import { Footer2 } from "./components/footer";
import { HeroSection } from "./sections/heroSection";
// import { About3 } from "./sections/aboutSection";
import { Cta4 } from "./sections/ctaSection";

export default function Home() {
  return (
    <>
      <Navbar5 />
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col justify-between py-4 bg-white dark:bg-black sm:items-start">
        <HeroSection />
      </main>
        {/* <About3 /> */}
      <Cta4 />
      </div>
      <Footer2 />
    </>
  );
}
