import React from 'react';
import Navbar from './component/navbar';  // Assuming Navbar is the correct component name

import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <Navbar /> {/* Render the Navbar component */}
    </div>
  );
}

export default App;
