import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './componentes/Index';
import Home from './componentes/Home';
import CountriesDetalle from './componentes/CountriesDetalle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/country/:id" component={CountriesDetalle} />
      </div>
    </BrowserRouter>
  );
}

export default App;
