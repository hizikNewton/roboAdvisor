import BestService from 'partials/BestService';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import WhyChooseUs from 'partials/WhyChooseUs';
import RiskFeature from 'partials/RiskFeature';
import Footer from 'partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <BestService />
        <WhyChooseUs />
        <RiskFeature />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
