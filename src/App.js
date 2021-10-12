import "./App.css";
import "./screens/Main";
import "./screens/Commits";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/left_panel/Sidebar";
import Main from "./screens/Main";

function App() {
  return (
    <div className="App">
      <Header title="GITHUB BROWSER" />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
