import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedVideo from './components/FeaturedVideo';
import EditorsPicks from './components/EditorsPicks';
import Standings from './components/Standings';
import DriversGrid from './components/DriversGrid';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <Hero />
      <main className="main-content">
        <FeaturedVideo />
        <EditorsPicks />
        <Standings />
        <DriversGrid />
        <Highlights />
      </main>
      <Footer />
    </>
  );
}

export default App;
