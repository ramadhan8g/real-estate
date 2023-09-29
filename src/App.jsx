import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import "./App.css"
import Recidencies from "./Components/Residencies/Recidencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
        <Recidencies/>

        <Value/>
        <Contact/>
    </div>
    </>
  );
}

export default App;
