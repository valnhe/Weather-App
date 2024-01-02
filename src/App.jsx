import CityInfo from './components/CityInfo';
import ForecastSection from './components/ForecastSection';
import './App.css'

function App() {

  return (
    <div className='general-app'>
      <ForecastSection/>
      <CityInfo/>
    </div>
  )
}

export default App;
