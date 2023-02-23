import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import WhichClassesAreAvailable from "./Pages/WhichClassesAreAvailable/WhichClassesAreAvailable";
import chickenCoopLogo from "./assets/images/logo.png";
import ReactGA from "react-ga";

const TRACKING_ID = "G-EGYQS9DNB8";
ReactGA.initialize(TRACKING_ID);

function App() {
    return (
        <div className="App container mx-auto mt-12">
            <img className="mx-auto w-32" src={chickenCoopLogo} alt="" />
            <div className="mb-6 mt-4">
                <h1 className="text-4xl text-gray-800 font-bold">Chicken Coop!</h1>
                <p className="mx-4 mt-2 text-gray-600">
                    You can find all the available classrooms of BRACU at any
                    given time, by selecting the day and time below.
                </p>
            </div>
            <Home />
            <WhichClassesAreAvailable />
            <Footer />
        </div>
    );
}

export default App;
