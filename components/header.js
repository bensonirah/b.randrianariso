import Image from "next/image";
import github from "../public/images/github.svg";
export default function Header() {
  return (
    <>
      <header>
        <nav className="container d-flex">
          <h1 className="logo">Bensonirah.</h1>
          <ul className="menu">
            <li className="menu__item">
              <a href="#">Home</a>
            </li>
            <li className="menu__item">
              <a href="#">About</a>
            </li>
            <li className="menu__item">
              <a href="#">Blog</a>
            </li>
            <li className="menu__item">
              <a href="#">Projects</a>
            </li>
            <li className="menu__item">
              <a
                href="https://github.com/bensonirah/b.randrianarison"
                target={"_blank"}
              >
                <Image src={github} width={20} height={20} />
                Source
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
