import { useState } from 'react'
import Header from './components/Header';
import Navigate from './components/Navigate'
import Footer from './components/Footer';
import Page from './components/Page';
import { useLocation } from 'react-router-dom';
// import './App.css'

function App() {
  const currentPage = useLocation().pathname;

  const style = {
    background: '#000000'
  }

  return (
    <div style={style}>
      <Header>
        <Navigate currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
