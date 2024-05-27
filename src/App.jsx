import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Page404 from "./pages/Page404";
import { createContext } from "react";

export const GlobalContext = createContext();

function App() {
  return (
    <GlobalContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
         
          <Route path="/Projets/" element={<Projets/>}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;