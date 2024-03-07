import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Components/Header.jsx";
import AddData from "./Components/AddData.jsx";
import "./Components/header-additem.css";

function App() {
  return (
      <>
          <Header text="Market"/>
          <AddData />
      </>
  )
}

export default App
