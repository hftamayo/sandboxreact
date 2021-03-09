import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu';
import Cliente from './Jsx/Cliente';
import Homework01 from './Jsx/Homework01'
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
        {/*area de submenu */}
        <div>
          <Submenu />
        </div>
        <div>
          {/*<Cliente />*/}
          <Homework01 />
        </div>
        <p>@hftamayo</p>
      </main>
    </div>
  );
}

export default App;
