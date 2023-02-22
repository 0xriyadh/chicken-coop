import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import WhichClassesAreAvailable from "./Pages/WhichClassesAreAvailable/WhichClassesAreAvailable";

function App() {
    return (
        <div className="App container mx-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mt-14">Chicken Coop!</h1>
                <p className="mx-4 mt-2">
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
