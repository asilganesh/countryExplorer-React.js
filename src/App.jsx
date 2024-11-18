
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./Layouts/MainLayout";
import Starting from "./Layouts/Starting";
import CountryDetails from "./Layouts/CountryDetails";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Starting/>}/>
      <Route path='/exploreCountries' element={<MainLayout/>}/>
      <Route path='/CountryDetails/:name' element={<CountryDetails/>}/>

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
