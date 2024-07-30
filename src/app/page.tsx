import About from "./_components/About";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className=""
        style={{
          maxHeight: 0,
          overflow: "clip",
          animation: "appear-100 0.2s linear 8.2s forwards",
        }}
      >
        <About />
        <Projects />
      </div>
    </div>
  );
}
