import React from "react";
import Header from './app/components/Header/Header';
import Page from './app/components/Page/Page';
import Footer from './app/components/Footer/Footer';
import './styles/font.css'


const App = () => (
  <div className="AllApp">
  <Header/>
  <Page/>
  <Footer/>
  </div>
);

export default App;
