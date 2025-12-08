import { FaPlus } from "react-icons/fa6";
import "./Team.css";
import footballData from "../../meta/football.json";

const Team = ({ description }) => {
  const { clubs, countries } = footballData;
  console.log("Clubs: ", clubs);
  console.log("Countries: ", countries);
  return (
    <div className="select-team-ctn">
      <div className="select-team">
        <FaPlus className="add-team" />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Team;
