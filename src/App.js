import Header from "./components/header";
import "./App.css";

function App() {
  /* For Data fetching */
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
