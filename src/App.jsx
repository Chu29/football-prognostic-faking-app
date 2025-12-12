import Score from "./components/Score/Score";
import Team from "./components/Team/Team";
import "./App.css";
import Button from "./components/Button";
import { RxDownload } from "react-icons/rx";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import html2canvas from "html2canvas";
import download from "downloadjs";

const initialState = {
  name: "TEAM",
  score: 0,
  flag: "./plus.png",
};

const App = () => {
  const [homeTeam, setHomeTeam] = useState(initialState);
  const [awayTeam, setAwayTeam] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [teamToSelect, setTeamToSelect] = useState(null);

  const onButtonClick = async () => {
    const canvas = await html2canvas(document.body, {
      useCORS: true,
      allowTaint: true,
    });
    const dataULR = canvas.toDataURL("image/png");
    download(dataULR, "score.png", "image/png");
  };

  const handleScoreChange = (teamKey, action) => {
    const setter = teamKey === "home" ? setHomeTeam : setAwayTeam;
    setter((prev) => {
      let newScore = prev.score;
      if (action === "increment") {
        newScore += 1;
      } else if (action === "decrement" && newScore > 0) {
        newScore -= 1;
      }
      return { ...prev, score: newScore };
    });
  };

  const handleShowModal = (teamKey) => {
    setTeamToSelect(teamKey);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleTeamSelect = (selectedTeamData) => {
    const setter = teamToSelect === "home" ? setHomeTeam : setAwayTeam;
    setter((prev) => ({
      ...prev,
      name: selectedTeamData.name,
      flag: selectedTeamData.flag,
    }));
  };

  return (
    <>
      <h1>Football Prognostiker</h1>
      <main>
        <Team handleShowModal={() => handleShowModal("home")} team={homeTeam} />
        <div className="scores">
          <Score
            score={homeTeam.score}
            onIncrement={() => handleScoreChange("home", "increment")}
            onDecrement={() => handleScoreChange("home", "decrement")}
          />
          <span>-</span>
          <Score
            score={awayTeam.score}
            onIncrement={() => handleScoreChange("away", "increment")}
            onDecrement={() => handleScoreChange("away", "decrement")}
          />
        </div>
        <Team handleShowModal={() => handleShowModal("away")} team={awayTeam} />
      </main>
      <div className="download-btn" onClick={onButtonClick}>
        <RxDownload />
        <Button />
      </div>
      <div>
        {showModal && (
          <Modal
            handleHideModal={handleHideModal}
            onSelect={handleTeamSelect}
          />
        )}
      </div>
    </>
  );
};

export default App;
