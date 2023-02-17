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
      <div className="w-full p-5 mx-auto h-2/5">
        <div>
          <h1 className=" text-center font-bold text-lg">With Technology at heart</h1>
        </div>
      </div>
      <SkillComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
