import { CgClose } from "react-icons/cg";
import data from "../../meta/football.json";
import "./Modal.css";

const Modal = () => {
  const { clubs, countries } = data;
  // const [filter, setFilter] = useState(true);

  const entries = Object.entries(data);
  console.log(entries);

  return (
    <div className="modal-ctn">
      <h3 className="modal-header">
        Select Team <CgClose className="close-btn" />
      </h3>
      <div className="team-cat">
        <div tabIndex={0}>All Teams</div>
        <div tabIndex={0}>National Teams</div>
        <div tabIndex={0}>Club Teams</div>
      </div>
      <div className="flags-ctn">
        {clubs.map(
          (club, index) =>
            (
              <div key={index} className="flags">
                <img key={index} src={club.url} alt="Flag" loading="lazy" />
                <span>{club.name}</span>
              </div>
            ) ||
            countries.map()((country, index) => (
              <div key={index} className="flags">
                <img key={index} src={country.url} alt="Flag" loading="lazy" />
                <span>{country.name}</span>
              </div>
            ))
        )}
        {/* {countries.map()((country, index) => (
          <div key={index} className="flags">
            <img key={index} src={country.url} alt="Flag" loading="lazy" />
            <span>{country.name}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Modal;
