import "./App.css";
import Dashboard from "./components/Dashboard";
import Toolbar from "./components/Toolbar";
import { PageSection } from "./utils/util-styles";

function App() {
  return (
    <PageSection>
      <Toolbar />
      <Dashboard />
    </PageSection>
  );
}

export default App;
