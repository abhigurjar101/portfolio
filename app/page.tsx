import Hero from "@/components/hero/Hero";
import Expertise from "@/components/expertise/Expertise";
import KnowledgeGraph from "@/components/expertise/KnowledgeGraph";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Credentials from "@/components/credentials/Credentials";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <KnowledgeGraph />
      <Projects />
      <Experience />
      <Skills />
      <Credentials />
      <Contact />
    </>
  );
}
