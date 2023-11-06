import BestService from 'src/partials/BestService';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <BestService />
      </main>
    </div>
  );
}

export default Home;