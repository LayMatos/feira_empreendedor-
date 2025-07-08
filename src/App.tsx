import Header from "./components/header";
import Hero from "./components/Contagem";
import Metricas from "./components/MetricaSection";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import Secao from "./components/Secao";
import Evento from "./components/Evento";
import MomentosMarcantes from "./components/MomentosMarcantes";
import NewsBlock from "./components/New";
import SponsorshipSection from "./components/Patrocinio";

function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <Metricas />
      <Secao />
      <Evento />
      <Galeria />
      <MomentosMarcantes />
      <NewsBlock />
      <SponsorshipSection />
      <Footer />
    </div>
  );
}

export default App;
