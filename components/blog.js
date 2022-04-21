import Divider from "./divider";

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2>LATEST BLOGS</h2>
        <p>
          To master a new technologies and improve my learning, I write a blog
          for a topic on the thing I’ve learning with
        </p>
        <div className="box-flex">
          <div className="main">
            <div className="main-banner"></div>
            <div className="banner-text">
              <h4>Dockerize your Symfony App</h4>
              <p>April 13,2022</p>
            </div>
          </div>
          <div className="main">
            <div className="main-banner"></div>
            <div className="banner-text">
              <h4>A custome go cli app to manage my workflow</h4>
              <p>April 13,2022</p>
            </div>
          </div>
          <div className="main">
            <div className="main-banner"></div>
            <div className="banner-text">
              <h4>How to build a nextjs app</h4>
              <p>April 13,2022</p>
            </div>
          </div>
        </div>
        <Divider labelText="See all post" />
      </div>
    </section>
  );
}
