
import Header from "./Components/Header.jsx";
import AddData from "./Components/AddData.jsx";
import BottomNavigation from "./Components/Footer.jsx";
import "./Components/App.css";
import LogoImg from "./Components/Image.jsx";
import Logo from "/public/cheeseimg.png"
import BottomNav from "./Components/Footer.jsx"

function App() {
  return (
      <>
          <Header text="Market"/>
          <AddData />
          <BottomNav />
      </>
  )
}

export default App
