"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import games from "../../public/games.json";

const Games = () => {
  const [background, setBackground] = useState("/playstationGames.png"); // Chemin par défaut de l'image de fond

  const handleMouseEnter = (value) => {
    setBackground(value);
  };

  const handleMouseLeave = (value) => {
    setBackground(value);
  };

  return (
    <section
      id="games-section"
      className="relative w-full h-full bg-cover bg-center pt-4 -b"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-center text-2xl font-bold mb-3 shadow-2xl text-white">
        Voici les jeux phares de la console :
      </h2>
      <div className="flex flex-wrap justify-center mx-auto gap-6 max-w-6xl px-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="p-4"
            onMouseEnter={() => handleMouseEnter(game.background)}
            onMouseLeave={() => handleMouseLeave("/playstationGames.png")}
          >
            <Link href={game.buy} target="_blank">
              <Image
                src={game.pict}
                alt={`Image of ${game.id}`}
                className="cursor-pointer opacity-75 rounded-md hover:opacity-100"
                loading="lazy"
                width={320}
                height={80}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
