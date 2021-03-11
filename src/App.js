import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Particles from "react-particles-js"
import AboutMe from "./Components/AboutMe"
import Experience from "./Components/Experience"

function App() {
  return (
    <>
    <Particles 
    params={{
      particles:{
        number:{
          value:31,
          density:{
            enable:true,
            value_area: 1350
          }
        },
        shape:{
          type: "square",
          stroke:{
            width:8,
            color:"#f9ab00"
          }
        }
      }
    }}
    ></Particles>
    <Navbar />
    <Header/>
    <AboutMe/>
    <Experience/>
    </>
    
    
  );
}

export default App;
