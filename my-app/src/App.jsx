import { useState } from 'react';
import Manu from './Manu'; // Asigură-te că calea este corectă
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const menuItems = [
    { id: 1, name: "Acasa" },
    { id: 2, name: "Despre noi" },
    { id: 0, name: "Contacte" }
  ];

  return (
    <>
      <h1>Hello</h1>
      <Manu items={menuItems} />
    </>
  );
}

export default App;








