import "./App.css";
import ContactComponent from "./components/contact";
import HeaderComponent from "./components/header";
import HomeComponent from "./components/homeComponent";
import SkillComponent from "./components/skillcomponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
      <SkillComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
