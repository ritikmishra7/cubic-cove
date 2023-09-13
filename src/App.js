import Router from './Router';
import flare1 from './assets/images/bg_1.png'
import flare2 from './assets/images/bg_2.png'
import flare3 from './assets/images/bg_3.png'
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <div id='gradients' >
        <div className="App">
          <div className='fl-1 fadeIn'>
            <img src={flare1} alt="flare1" />
          </div>
          <div className='fl-2 fadeIn'>
            <img src={flare2} alt="flare2" />
          </div>
          <div className='fl-3 fadeIn'>
            <img src={flare3} alt="flare3" />
          </div>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
