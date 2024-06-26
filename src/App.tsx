import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import SpeakerZX9 from "./components/SpeakerCard";
import ZX7Speaker from "./components/ZX7Speaker";
import YX1EarPhones from "./components/YX1EarPhones";
import AboutComoany from "./components/AboutComoany";

function App() {
  return (
    <>
      <Header />
      <Items />
      <SpeakerZX9 />
      <ZX7Speaker />
      <YX1EarPhones />
      <AboutComoany />
    </>
  );
}

export default App;
