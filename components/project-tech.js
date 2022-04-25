export function ProjectTech({ techStacks = [] }) {
  return (
    <ul className="project__tech">
      {techStacks.map((t) => (
        <li>{t}</li>
      ))}
    </ul>
  );
}
