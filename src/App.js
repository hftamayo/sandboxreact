import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Menu />
        </p>
      </header>
      <main>
      <div>
          <Submenu />
        </div>
        
        <p>@hftamayo</p>
      </main>
    </div>
  );
}

export default App;
