import { CgClose } from "react-icons/cg";
import data from "../../meta/football.json";
import "./Modal.css";
import { useEffect, useMemo, useRef, useState } from "react";

const ALL_TEAMS = [
  ...data.clubs
    .filter((club) => Boolean(club.url))
    .map((club) => ({
      id: `club-${club.name}-${club.url}`,
      name: club.name,
      flag: club.url,
      type: "club",
    })),
  ...data.countries
    .filter((country) => Boolean(country.flag))
    .map((country) => ({
      id: `country-${country.code}-${country.country}`,
      name: country.country,
      flag: country.flag,
      type: "country",
    })),
];

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Clubs", value: "club" },
  { label: "Countries", value: "country" },
];

const Modal = ({ handleHideModal, onSelect }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const listRef = useRef(null);

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

  const normalizedQuery = query.trim().toLowerCase();

  const filteredTeams = useMemo(() => {
    return ALL_TEAMS.filter((team) => {
      const matchesCategory = category === "all" || team.type === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        team.name.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, normalizedQuery]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: 0 });
  }, [category, query]);

  return (
    <>
      <div className="modal-overlay" onClick={handleHideModal}></div>
      <div
        className="modal-ctn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
      >
        <h3 className="modal-header">
          <span id="team-modal-title">Select Team</span>
          <button
            type="button"
            onClick={handleHideModal}
            className="close-btn"
            aria-label="Close team selector"
          >
            <CgClose />
          </button>
        </h3>

        <div className="team-controls">
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedTeam(null);
            }}
            className="team-search"
            placeholder="Search teams"
            aria-label="Search teams"
          />

          <div className="team-cat" aria-label="Filter teams">
            {CATEGORIES.map((item) => (
              <button
                key={item.value}
                type="button"
                className={category === item.value ? "active" : ""}
                onClick={() => {
                  setCategory(item.value);
                  setSelectedTeam(null);
                }}
                aria-pressed={category === item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <p className="team-results-count">
          Showing {filteredTeams.length} of {ALL_TEAMS.length} teams
        </p>

        <div
          key={`${category}-${normalizedQuery}`}
          className="flags-ctn"
          ref={listRef}
        >
          {filteredTeams.map((team) => {
            const isSelected = selectedTeam?.id === team.id;

            return (
              <button
                key={team.id}
                type="button"
                className={`flags ${isSelected ? "selected" : ""}`}
                onClick={() => handleTeamClick(team)}
              >
                <img src={team.flag} alt={`${team.name} flag`} loading="lazy" />
                <span>{team.name}</span>
              </button>
            );
          })}

          {filteredTeams.length === 0 && (
            <p className="empty-results">No teams found</p>
          )}
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
