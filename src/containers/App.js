import VerClientesd from './VerClientesd';
import VerClientesdClass from './VerClientesdClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>

        </p>
      </header>
      <main>
        {/*area de submenu */}
        <div>
          {/* <VerClientesd appTitle="Clients Manager" /> */}
          <VerClientesdClass
            appTitle="Clients Manager Class Based"/>
        </div>
        <p>@hftamayo</p>
      </main>
    </div>
  );
}

export default App;
