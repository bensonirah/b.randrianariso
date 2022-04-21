export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <article>
          <h1>A fullstack developer based in Madagascar</h1>
          <p>
            Need for a developer to build your digital product with quality and
            well designed software?
          </p>
          <p>Good luck, your are on the right</p>
          <a href="" className="btn btn-border-white">
            View my projects
          </a>
        </article>
      </div>
      <div className="banner__right">
          <img src="/images/bnner.jpg"/>
      </div>
    </div>
  );
}
