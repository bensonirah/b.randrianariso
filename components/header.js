import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav className="container d-flex">
          <h1 className="logo">Bensonirah.</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
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
