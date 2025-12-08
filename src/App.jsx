import Score from "./components/Score";
import Team from "./components/Team";
import "./App.css";
import Button from "./components/Button";
import { RxDownload } from "react-icons/rx";

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
    </>
  );
};

export default App;
