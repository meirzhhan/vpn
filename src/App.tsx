import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './pages/Home';
import { Suspense, useState } from 'react';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Start from './pages/Start';
import Manager from './pages/Manager';

function App() {
  const [isLogged, setIsLogged] = useState('');

  return (
    <div className="App">
      <Header isLogged={isLogged} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <Suspense fallback={<></>}>
              <Login setIsLogged={setIsLogged} />
            </Suspense>
          }
        />

        {isLogged === 'user' && (
          <Route
            path="/start"
            element={
              <Suspense fallback={<></>}>
                <Start />
              </Suspense>
            }
          />
        )}
        {isLogged === 'admin' && (
          <Route
            path="/manager"
            element={
              <Suspense fallback={<></>}>
                <Manager />
              </Suspense>
            }
          />
        )}

        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
