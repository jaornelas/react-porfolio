//Import necessary modules and components
import { useState } from 'react'
import Header from './components/Header';
import Navigate from './components/Navigate'
import Footer from './components/Footer';
import Page from './components/Page';
import { useLocation } from 'react-router-dom';

function App() {
  //Get the current page path using useLocation hook
  const currentPage = useLocation().pathname;

  //Define a style object for the packground color
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
