import Header from "./components/header/header";
import "./App.css";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header header={props.store.header} />
    </div>
  );
};

export default App;
