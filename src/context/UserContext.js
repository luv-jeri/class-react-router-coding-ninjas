import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import ErrorToast from '../components/error-toast/ErrorToast';
import Loader from '../components/loader/Loader';
const UserContext = createContext();

const useAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [error]);

  const login = async (email, password) => {
    try {
      const test = await signInWithEmailAndPassword(auth, email, password);
      console.log(test.user.uid);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const register = async (email, password) => {
    try {
      const test = await createUserWithEmailAndPassword(auth, email, password);
      console.log(test);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        register,
        user,
      }}
    >
      {error && <ErrorToast error={error} setError={setError} />}
      {loading ? <Loader /> : children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useAuth };
