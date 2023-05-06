import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Second from './Component/Second/Second';
import Address from './Component/Address/Address';
import Eta from './Component/Eta/Eta';
import Commission from './Component/Commission/Commission';
import Communication from './Component/Communication/Communication';
import Total_earned from './Component/Total_earned/Total_earned';
import Portfolyo from './Component/Portfolyo/Portfolyo';

function App() {
  return (
    <div className="App">
<Navbar/>
<Second/>
<Address/>
<Eta/>
<Commission/>
<Total_earned/>
<Portfolyo/>
    </div>
  );
}

export default App;
