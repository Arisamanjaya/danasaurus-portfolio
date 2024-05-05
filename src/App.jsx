import React from 'react';
import DesignerSection from './component/Designer/DesignerSection';
import ExpSection from './component/Experience/ExpSection';
import DanaSection from './component/Danasaurus/DanaSection';
import Footer from './component/Footer';
import Header from './component/Header'

const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        {/* Tambahkan komponen DesignerSection di sini */}
        <DesignerSection />
        <ExpSection/>
        <DanaSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
