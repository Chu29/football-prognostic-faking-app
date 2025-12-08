import Score from "./components/Score/Score";
import Team from "./components/Team/Team";
import "./App.css";
import Button from "./components/Button";
import { RxDownload } from "react-icons/rx";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <h1>Football Prognostiker</h1>
      <main>
        <Team description="Select Home Team" />
        <div className="scores">
          <Score />
          <span>-</span>
          <Score />
        </div>
        <Team description="Select Away Team" />
      </main>
      <div className="download-btn">
        <RxDownload />
        <Button />
      </div>
      <Modal />
    </>
  );
};

export default App;
