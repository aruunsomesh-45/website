import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import ProcessSteps from "@/components/ProcessSteps";
import ManifestoCurve from "@/components/ManifestoCurve";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const servicesQuery = `*[_type == "service"] | order(id asc) {
    _id,
    id,
    title,
    tagline,
    description,
    "imageUrl": image.asset->url
  }`;

  const projectsQuery = `*[_type == "project"] | order(id asc) {
    _id,
    id,
    title,
    clientTag,
    description,
    backgroundColor,
    accentColor,
    projectUrl,
    "imageUrl": image.asset->url
  }`;

  const stepsQuery = `*[_type == "processStep"] | order(order asc) {
    _id,
    order,
    step,
    title,
    description,
    deliverables
  }`;

  let sanityServices = [];
  let sanityProjects = [];
  let sanitySteps = [];

  try {
    [sanityServices, sanityProjects, sanitySteps] = await Promise.all([
      client.fetch(servicesQuery, {}, { next: { revalidate: 0 } }),
      client.fetch(projectsQuery, {}, { next: { revalidate: 0 } }),
      client.fetch(stepsQuery, {}, { next: { revalidate: 0 } }),
    ]);
  } catch (error) {
    console.warn("Sanity fetch fallback:", error);
  }

  return (
    <main>
      <Hero />
      <About />
      <Services sanityServices={sanityServices} />
      <Process />
      <Projects sanityProjects={sanityProjects} />
      <ManifestoCurve />
      <ProcessSteps sanitySteps={sanitySteps} />
      <Contact />
    </main>
  );
}

