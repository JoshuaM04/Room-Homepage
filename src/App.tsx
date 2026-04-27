import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="parent_container grid auto-rows-min gap-20 lg:gap-0 pt-10 pr-10 pl-10 min-h-dvh box-sizing">
      <Header 
        index={index}
        setIndex={setIndex}
      />
      <Main 
        index={index}
      />
      <Footer />
    </div>
  )
}