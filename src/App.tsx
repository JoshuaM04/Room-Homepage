import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="parent_container grid auto-rows-min gap-20 p-10 min-h-dvh">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}