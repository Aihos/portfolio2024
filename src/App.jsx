import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio   from "./pages/Portfolio";
import Profil from "./pages/Profil";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import { createContext } from "react";

export const GlobalContext = createContext();

function App() {
  return (
    <GlobalContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
         <Route path="/Portfolio/" element={<Portfolio/>}></Route>
         <Route path="/Profil/" element={<Profil/>}></Route>
         <Route path="/Contact/" element={<Contact/>}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;