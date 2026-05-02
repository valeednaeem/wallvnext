import { Navbar5 } from "./components/navbar";
import { Footer2 } from "./components/footer";
import { Hero47 } from "./components/heroSection";
import { About3 } from "./sections/aboutSection";
import { Cta4 } from "./sections/ctaSection";

export default function Home() {
  return (
    <>
      <Navbar5 />
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col justify-between py-4 bg-white dark:bg-black sm:items-start">
        <Hero47 />
      </main>
        <About3
          About3Props={{
            title: "About Me",
            description:
              "I am a passionate full stack developer with expertise in web development, software engineering, and technology solutions. With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic and responsive web applications that deliver exceptional user experiences. My goal is to leverage my skills to build innovative solutions that meet the needs of clients and users alike.",
            mainImage: {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-6-wide.svg",
              alt: "Placeholder",
            },
            breakout: {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
              alt: "Placeholder",
              title: "Breakout Project",
              description:
                "Discover my standout project that showcases my skills and creativity. This project highlights my ability to solve complex problems and deliver innovative solutions.",
              buttonText: "View Project",
              buttonUrl: "#",
            },
            companies: [
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/airbnb.svg",
                alt: "Airbnb",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/amazon.svg",
                alt: "Amazon",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/netflix.svg",
                alt: "Netflix",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify.svg",
                alt: "Spotify",
              },
            ],
            achievementsTitle: "Achievements",
            achievementsDescription:
              "Recognized for excellence in software development and innovation, I have received several awards and accolades throughout my career. These achievements reflect my commitment to delivering high-quality solutions and my passion for pushing the boundaries of technology.",
            achievements: [
              {
                label: "Projects Completed",
                value: "50+",
              },
              {
                label: "Years of Experience",
                value: "5",
              },
              {
                label: "Awards Won",
                value: "10",
              },
            ],
          }}
        
        />
      <Cta4 />
      </div>
      <Footer2 />
    </>
  );
}
