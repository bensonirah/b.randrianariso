import { ProjectInfo } from "./project-info";
import { ProjectTech } from "./project-tech";
export function ProjectCard({
  title,
  description,
  techStacks,
  isPublic,
  team,
  webSiteUrl,
}) {
  return (
    <div href="#" className="project">
      <div className="project__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project__footer">
        <ProjectTech techStacks={techStacks} />
        <ProjectInfo isPublic={isPublic} team={team} webSiteUrl={webSiteUrl} />
      </div>
    </div>
  );
}
