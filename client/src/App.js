import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './componentes/Index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Index} />
      </div>
    </BrowserRouter>
  );
}

export default App;
