import Hero from './pages/app/hero/Hero';
import Nav from './components/nav';
import SignIn from './pages/auth/signin/SignIn';
import Courses from './pages/app/courses/Courses';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protected/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route
          path='/courses'
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
