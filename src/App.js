import logo from './logo.svg';
import './App.css';
import Addvechile from './components/Addvechile';
import VechSearch from './components/VechSearch';
import Vechdelete from './components/Vechdelete';
import ViewVehicle from './components/ViewVehcile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Addvechile/>}/>
      <Route path="/Search"element={<VechSearch/>}/>
      <Route path="/Delete"element={<Vechdelete/>}/>
      <Route path="/Add"element={<Addvechile/>}/>
      <Route path="/View"element={<ViewVehicle/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
