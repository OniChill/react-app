import './App.css';
import './style/LandingPage.css'
import NavBar from './components/NavBar';
import Intro from './components/Intro';

function App() {
  return (
   
    <div>
      <div className='myBg'>
        <NavBar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
