import logo from './logo.svg';
import './App.css';

import CryptoChoose from "./CryptoChoose";
import {CriptoProvider} from "./CryptoContext";
import CoinDisplayer from "./CoinDisplayer";
function App() {
  return (
    <div className="App">

      <CriptoProvider>
          <CoinDisplayer/>

          <CryptoChoose/>

      </CriptoProvider>
    </div>
  );
}

export default App;
