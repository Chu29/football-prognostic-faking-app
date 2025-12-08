import { FaPlus } from "react-icons/fa6";
import "./Team.css";

const Team = ({ description }) => {
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
