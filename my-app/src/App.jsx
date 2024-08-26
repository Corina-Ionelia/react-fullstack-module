import React from 'react';
import Manu from './Manu';  // Verifică dacă această cale este corectă
import Button from './Button';  // Verifică dacă această cale este corectă
import SearchBar from './SearchBar';  // Verifică dacă această cale este corectă

function App() {
  const menuItems = [
    { id: 1, name: "Acasa" },
    { id: 2, name: "Despre noi" },
    { id: 0, name: "Contacte" }
  ];

  const functionClick1 = () => console.log("Scrie asa");
  const functionClick2 = () => console.log("altceva");

  const isVisible = true;
  const price = 23;

  return (
    <>
      <h1>Hello</h1>
      <Manu items={menuItems} />
      <Button text="Button" icon="&" handleClick={functionClick1} />
      <Button text="Alt buton" icon="xy" handleClick={functionClick2} />
      <SearchBar text="Idk" isVisible={isVisible} price={price} />
    </>
  );
}

export default App;
