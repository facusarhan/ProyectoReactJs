import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {NavBar} from './components/navBar/NavBar';
import {AppRouter} from './router/appRouter';



function App() {
  return (
    <BrowserRouter>
   
      <NavBar/>
      <AppRouter/>

    </BrowserRouter>
);
}

export default App;
