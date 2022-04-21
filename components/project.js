import Divider from "./divider";

export default function Project() {
  return (
    <section className="section-project">
      <div className="container">
        <h2>PROJECTS DONE</h2>
        <p>
          Since four years of experience as software developer, here is some
          project I have build from my previous company and my personal project
        </p>
        <div className="box">
          <a href="" className="project">
            <h3>Current project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa
              magnam ullam accusamus dolore dolorem obcaecati cumque, ipsa
              magnam ullam accusamus dolore dolorem obcaecati cumque
            </p>
          </a>
          <a href="" className="project">
            <h3>Latest project-1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa
              magnam ullam accusamus dolore dolorem obcaecati cumque, ipsa
              magnam ullam accusamus dolore dolorem obcaecati cumque
            </p>
          </a>
          <a href="" className="project">
            <h3>Current project-2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa
              magnam ullam accusamus dolore dolorem obcaecati cumque, ipsa
              magnam ullam accusamus dolore dolorem obcaecati cumque
            </p>
          </a>
        </div>
        <Divider labelText="See all project" />
      </div>
      
    </section>
  );
}
