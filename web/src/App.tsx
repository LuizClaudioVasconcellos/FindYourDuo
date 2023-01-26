import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdBanner } from "./components/CreateAdBanner";

import { GameBanner } from "./components/GamerBanner";

import "./styles/main.css";

import logoImg from "./assets/logo-nlw-esports.svg";
import { CreateAdModal } from "./components/CreateAdModal";

interface Game {
  id: string;
  name: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

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
      <div className="grid grid-cols-6 gap-6 mt-16 mx-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerURL}
            title={game.name}
            adsCount={game._count.ads}
          />
        ))}

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}

export default App;
