import { GameBanner } from "./components/Gamerbanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import "./styles/main.css";

import logoImg from "./assets/logo-nlw-esports.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <div className="my-20">
        <img src={logoImg} alt="NLW eSports" />
      </div>
      <div>
        <h1 className="text-6xl text-white font-black text-center">
          Seu&#160;
          <span className="bg-nlw-gradient bg-clip-text text-transparent">
            duo
          </span>
          &#160;está aqui.
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={5}
        />
        <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={3} />

        <CreateAdBanner />
      </div>
    </div>
  );
}

export default App;
