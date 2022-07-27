import './App.css';
import Listing from './components/Listing';

function App() {

  const etsyData = require('./etsy.json');

  return (
    <div className="App">
      <Listing items={etsyData} />
    </div>
  );
}

export default App;
