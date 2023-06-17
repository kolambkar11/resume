import "./App.css";
import Footer from "./component/footer/Footer";
import Third from "./component/third/Third";
import Twothird from "./component/twothird/Twothird";

function App() {
  return (
    <>
      <div className="w3-container w3-margin-top">
        <div className="w3-row-padding">
          <Third />
          <Twothird />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
