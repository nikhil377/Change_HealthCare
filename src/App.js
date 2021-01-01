import './App.css';
import Header from './component/header/Header'
import AsideFilter from './component/aside-filter/AsideFilter';
import AsideResult from './component/aside-results/AsideResult';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="aside-boxes">
          <AsideFilter/>
          <AsideResult/>
        </div>
    </div>
  );
}

export default App;
