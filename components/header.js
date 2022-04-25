import Image from "next/image";
import Link from "next/link";

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
              <a href="#" className="btn btn-outline">
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
