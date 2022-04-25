import Divider from "./divider";
import { ProjectCard } from "./project-card";

export default function Project() {
  const projects = [
    {
      title: "Shopinmada",
      description:
        " A centralized e-commerce website that allow customer to search and buy its product in the other hand and sell product for provider from his marketplace management",
      techStacks: ["Angular", "Symfony", "MySQL"],
      isPublic: false,
      team: 4,
      webSiteUrl: "#",
    },
    {
      title: "Sikaradev",
      description:
        " A start up company website for freelancer developer to show up their services and expertises",
      techStacks: ["NodeJs", "NextJs", "JSON"],
      isPublic: true,
      team: 1,
      webSiteUrl: "https://sikara-dev.vercel.app/",
    },
    {
      title: "Devflow",
      description:
        " A cli app writing in bash to automate my daily work as softare developer. It is an open source",
      techStacks: ["Bash", "Linux"],
      isPublic: true,
      team: 1,
      webSiteUrl: "#",
    },
  ];
  return (
    <section className="section-project">
      <div className="container">
        <h2>PROJECTS DONE</h2>
        <p>
          Since four years of experience as software developer, here is some
          project I have build from my previous company and my personal project
        </p>
        <div className="box">
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
        <Divider labelText="See all project" />
      </div>
    </section>
  );
}
