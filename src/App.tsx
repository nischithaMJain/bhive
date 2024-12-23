import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Benifits from './components/Benifits/Benifits';
import Overview from './components/Overview/Overview';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Intro />
      <section className={styles.MainContent}>
        <Benifits />
        <Overview />
        <Download />
      </section>
      <Footer />
    </div>
  );
}

export default App;
