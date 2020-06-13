import React from 'react';
import Navigation from './components/Navigation'
import AuthContextProvider from './contexts/AuthContext';
import Prueba from './components/Prueba';

function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Navigation/>
        <h1>Hola Mundo</h1>
        <Prueba />
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
