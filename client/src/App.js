import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './componentes/Index';
import Home from './componentes/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
