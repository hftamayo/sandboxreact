import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu';
import Cliente from './01Jsx/Cliente';
import Homework01 from './01Jsx/Homework01';
import Lists from './02Lists';
import Homework02 from './02Lists/Homework02';
import Styling from './03Styling/Styling';
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
          {/*<Homework01 /> */}
          {/*<Lists /> */}
          <Homework02 />
        </div>
        <div>
          <Styling />
        </div>
        <p>@hftamayo</p>
      </main>
    </div>
  );
}

export default App;
