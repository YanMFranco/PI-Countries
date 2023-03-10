import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './componentes/Index';
import Home from './componentes/Home';
import CountriesDetalle from './componentes/CountriesDetalle';
import CrearActividad from './componentes/CrearActividad';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route path='/' component={NavBar}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/country/:id" component={CountriesDetalle} />
        <Route exact path="/createActivity" component={CrearActividad} />
      </div>
    </BrowserRouter>
  );
}

export default App;
