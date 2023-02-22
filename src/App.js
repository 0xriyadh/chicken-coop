import './App.css';
import Home from './Pages/Home/Home';
import WhichClassesAreAvailable from './Pages/WhichClassesAreAvailable/WhichClassesAreAvailable';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Home />
      <WhichClassesAreAvailable />
    </div>
  );
}

export default App;
