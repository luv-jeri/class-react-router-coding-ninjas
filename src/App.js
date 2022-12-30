import Hero from './pages/hero';
import Nav from './components/nav';
import Courses from './pages/courses';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Courses />
    </div>
  );
}

export default App;
