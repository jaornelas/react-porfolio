import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  const style = {
    background: '#004346'
  }

  return (
    <div style={style}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
