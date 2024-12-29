import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Benifits from './components/Benifits/Benifits';
import Overview from './components/Overview/Overview';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <section className="main-content">
        <Benifits />
        <Overview />
        <Download />
      </section>
      <Footer />
    </div>
  );
}

export default App;
