// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/header'
// import DesignerS from './components/designerS';
// import Card from './components/card'
import Footer from './components/footer'
import NavigationJsx from './components/navigation';

function Navigation() {
  return (
    <>
      <Header />
      <NavigationJsx />
      <Footer />
    </>
  );
}

export default Navigation;
