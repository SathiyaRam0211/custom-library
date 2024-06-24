import "./App.css";
import Dashboard from "./components/Dashboard";
import Toolbar from "./components/Toolbar";
import PlayerContext from "./context/PlayerContext";
import { PageSection } from "./utils/util-styles";

function App() {
  return (
    <PlayerContext>
      <PageSection>
        <Toolbar />
        <Dashboard />
      </PageSection>
    </PlayerContext>
  );
}

export default App;
