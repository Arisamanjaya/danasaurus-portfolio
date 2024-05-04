import React from 'react';
import DesignerSection from './component/Designer/DesignerSection';
import ExpSection from './component/Experience/ExpSection';
import DanaSection from './component/Danasaurus/DanaSection';

const App = () => {
  return (
    <div>
      <header>
        {/* Tambahkan header Anda di sini */}
      </header>
      <main>
        {/* Tambahkan komponen DesignerSection di sini */}
        <DesignerSection />
        <ExpSection/>
        <DanaSection/>
      </main>
      <footer>
        {/* Tambahkan footer Anda di sini */}
      </footer>
    </div>
  );
}

export default App;
