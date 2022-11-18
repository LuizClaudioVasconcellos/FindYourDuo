import { MagnifyingGlassPlus } from "phosphor-react";

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
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-sm text-zinc-300 block">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-sm text-zinc-300 block">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300 block">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Worcraft
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúcios</span>
          </div>
        </a>
        <div className="pt-1 bg-nlw-gradient col-span-6 rounded-lg mt-8 overflow-hidden">
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">
                Não encontrou seu duo?
              </strong>
              <span className="text-zinc-400 block">
                Publique um anúncio para encontrar novos players!
              </span>
            </div>

            <button className="px-3 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              &#160;Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;