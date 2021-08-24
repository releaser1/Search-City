import logo from './logo.svg';
import './App.css';
import CitiesCard from '../src/Search/CitiesCard'
import Header from '../src/Header/Header'
import PresentationPage from '../src/PresentationPage/PresentationPage'


function App() {
  return (
    <div>
      <Header />
      <PresentationPage />
      <CitiesCard />

    </div>
  );
}

export default App;
