import "./Team.css";

const Team = ({ handleShowModal, team }) => {
  return (
    <div className="select-team-ctn">
      <button
        type="button"
        className="select-team"
        onClick={handleShowModal}
        aria-label={`Select ${team.name}`}
      >
        <img src={team.flag} alt={`${team.name} flag`} className="selected-flag" />
      </button>
      <p className="selected-team-name">{team.name}</p>
    </div>
  );
};

export default Team;
