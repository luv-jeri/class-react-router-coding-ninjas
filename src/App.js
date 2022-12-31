import Hero from './pages/app/hero/Hero';
import Nav from './components/nav';
import SignIn from './pages/auth/signin/SignIn';
import Courses from './pages/app/courses/Courses';
import Learn from './pages/app/learn/Learn';
import Details from './pages/app/details/Details';
import Chapter from './pages/app/chapter/Chapter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protected/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/courses'>
          <Route
            index
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path=':id'
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path='/learn/:id' element={<Learn />}>
          <Route path='chapter/:chap' element={<Chapter />} />
        </Route>

        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
