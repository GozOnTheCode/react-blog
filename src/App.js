// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <h1 className="title">Blog</h1>
      <Card />
      <Footer />
    </>
  );
}

export default App;
