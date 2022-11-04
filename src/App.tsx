import { greet } from "./utils/greet";
import MainContent from "./components/MainContent";
import PageHeader from "./components/PageHeader";

function App(): JSX.Element {
  return (<>
    <PageHeader/>
    <MainContent/>
  </>
  );
}

export default App;
