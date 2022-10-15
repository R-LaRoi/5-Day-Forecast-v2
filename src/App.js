import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "./video";
import Layout from "./layout";

function App() {
  return (
    <div className="Weather">
      <Video />
      <div className="container">
        <Layout />
        <br />
        <br />
        <a href="https://github.com/CrystalQuest112" target="_blank ">
          Open source code,
        </a>{" "}
        by Rachel
      </div>
    </div>
  );
}

export default App;
