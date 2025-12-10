import "./Team.css";

const Team = ({ handleShowModal, team }) => {
  const isTeamSelected = false;

  return (
    <div className="select-team-ctn">
      <div className="select-team" onClick={handleShowModal}>
        {!isTeamSelected ? (
          <img src={team.flag} alt="Team Flag" className="selected-flag" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Team;
