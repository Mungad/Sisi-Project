import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-forest">
      <Navbar />

      <main className="flex-1">
        <h1 className="py-20 text-center text-6xl font-black tracking-tighter">
          SISI<span className="text-primary-green">.</span>
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;