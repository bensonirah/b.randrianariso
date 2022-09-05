export default function Expertise() {
  return (
    <section className="section-exp">
      <div className="container">
        <h2>MY EXPERTISES</h2>
        <p>
          As a software engineer gratuated from National School of Computer
          Science,
        </p>
        <p>
          I can build your product from start to finish. Here is some keys
          points of my expertise
        </p>
        <div className="box">
          <a href="" className="box-card">
            <h3>Analys & conception</h3>
            <p>
              As a software engineer, this step is the basis of software quality
              and performance,the goal is to answer the customer requirement.
            </p>
          </a>
          <a href="" className="box-card">
            <h3>Agile Development</h3>
            <p>
              The product requirement change day to day so, I adopt the agile
              development to guarantee the delivery of product that respond
              customer requirement
            </p>
          </a>
          <a href="" className="box-card">
            <h3>Test & Deployment</h3>
            <p>
              To maintain a lunchable product, all functionnalities of the
              product should be tested localy before deployement in production.
              So I use a pipeline CI to automate the unit test and deployement
            </p>
          </a>
          <a href="" className="box-card">
            <h3>Documentation</h3>
            <p>
              A product without documentation is not a product,so to help the
              finaly customer to use the product, I write a documentation to
              facilitate the use of the finale product
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
