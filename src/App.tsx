import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="parent_container grid grid-rows-3 gap-5 min-h-dvh">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}