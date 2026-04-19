import Navbar from "./components/navbar";
import SliderSection from "./sections/sliderSection";
import HeroSection from "./sections/heroSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-8 px-4 bg-white dark:bg-black sm:items-start">

        <SliderSection />
        <HeroSection />

        <h1 className="text-5xl font-bold text-center mb-8">Welcome to Wall-V, the portfolio of Valeed Naeem!</h1>
        <p className="text-lg text-center mb-12">
          I am a full stack developer specializing in web development, software engineering, and technology solutions. Explore my projects, skills, and experience to see how I can help bring your ideas to life.
        </p>
        <div className="flex flex-row gap-4">
          <a href="/about" className="btn btn-primary btn-lg">Learn More</a>
          <a href="/contact" className="btn btn-secondary btn-lg">Contact Me</a>
        </div>
      </main>
    </div>
  );
}
