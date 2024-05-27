import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Projet from "./pages/Projet";



import Page404 from "./pages/Page404";
import { createContext } from "react";

export const GlobalContext = createContext();

function App() {
  return (
    <GlobalContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
         <Route path="/Projet" element={<Projet/>}></Route> 
        
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;