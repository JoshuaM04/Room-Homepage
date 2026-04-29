import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="[ parent_container ] [ grid auto-rows-min gap-5 ] [ min-h-dvh ] [ box-sizing ] [ lg:gap-0 ]">
      <Header 
        index={index}
        setIndex={setIndex}
      />
      <Main 
        index={index}
      />
    </div>
  )
}