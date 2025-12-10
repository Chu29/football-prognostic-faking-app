import { CgClose } from "react-icons/cg";
import data from "../../meta/football.json";
import "./Modal.css";
import { useState } from "react";

const Modal = ({ handleHideModal, onSelect }) => {
  const { clubs, countries } = data;
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const handleSelectConfirm = () => {
    if (selectedTeam) {
      onSelect({
        name: selectedTeam.name.toUpperCase(),
        flag: selectedTeam.flag,
      });
      handleHideModal();
    }
  };

  const allTeams = [
    ...clubs
      .filter((club) => (club.url !== null ? club.url : ""))
      .map((club) => ({
        name: club.name,
        flag: club.url,
        types: "club",
      })),
    ...countries
      .filter((country) => (country.flag !== null ? country.flag : ""))
      .map((country) => ({
        name: country.country,
        flag: country.flag,
        type: "country",
      })),
  ];

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-ctn">
        <h3 className="modal-header">
          Select Team{" "}
          <CgClose onClick={handleHideModal} className="close-btn" />
        </h3>

        <div className="flags-ctn">
          {allTeams.map((team, index) => (
            <div
              key={index}
              className="flags"
              onClick={() => handleTeamClick(team)}
            >
              <img key={index} src={team.flag} alt="Flag" loading="lazy" />
              <span>{team.name}</span>
            </div>
          ))}
        </div>

        <div className="btn-ctn">
          <button
            onClick={handleSelectConfirm}
            disabled={!selectedTeam}
            className="confirm-select-btn"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
