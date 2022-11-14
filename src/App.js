import './App.css';
import './style/LandingPage.css'
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Trending from './components/Trending';

function App() {
  return (
   
    <div>
      {/* intro section */}
      <div className='myBg'>
        <NavBar />
        <Intro />
      </div>
      {/* end of intro section */}

      {/* trendin section */}
        <div className='trending'>
          <Trending/>
        </div>
      {/* end of trendin section */}
    </div>
  );
}

export default App;
