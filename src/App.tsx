import {Navbar} from "./components/Navbar";
import {Introtron} from "./components/Introtron";
import {Skills} from "./components/Skills";
import Resume from "./components/Resume";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <>
      <Navbar/>
      <div id="main-content">
        <Introtron/>
        <Skills/>
        <Resume/>
      </div>
      <Blog/>
    </>
  )
}

export default App
