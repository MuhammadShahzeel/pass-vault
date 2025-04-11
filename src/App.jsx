import "./App.css";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Manager />
      </div>
      <Footer />
    </div>
  );
}

export default App;