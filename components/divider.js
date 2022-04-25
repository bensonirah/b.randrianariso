import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Divider({ labelText }) {
  return (
    <>
      <hr />
      <div className="slide">
        <a href="" className="slide-show">
          <FontAwesomeIcon icon={faArrowRight}/>
        </a>
        <p>{labelText}</p>
      </div>
    </>
  );
}
