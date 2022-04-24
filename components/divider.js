import { faArrowRight, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Divider({ labelText }) {
  return (
    <>
      <hr />
      <div class="slide">
        <a href="" class="slide-show">
          <FontAwesomeIcon icon={faArrowRight}/>
        </a>
        <p>{labelText}</p>
      </div>
    </>
  );
}
