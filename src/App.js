import "./App.scss";
import { Content, Header } from "./components/common";
import { CustomCursor } from './components/common';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <Content />
    </div>
  );
}

export default App;
