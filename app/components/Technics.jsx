import React from "react";
import Image from "next/image";
import PS5 from "../../public/playstation5.png";

const Technics = () => {
  return (
    <section id="technics-section" className="bg-gray-50 py-6">
      <h2 className="text-center text-2xl font-bold">
        Fiche technique de la Playstation 5
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center mt-6">
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src={PS5}
            alt="playstation-5"
            width={450}
            height={120}
            loading="lazy"
            layout="responsive"
          />
        </div>

        {/* Technical Details */}
        <div className="w-full">
          <ul className="text-xl text-center leading-10">
            <li>x86-64-AMD Ryzen™ “Zen 2”</li>
            <li>Moteur graphique basé sur AMD Radeon™ RDNA 2</li>
            <li>Barrette de RAM GDDR6 16Go</li>
            <li>825Go SSD NVMe</li>
            <li>Compatibilité avec les téléviseurs 4K 120Hz et 8K, VRR</li>
          </ul>
          <a
            href="https://direct.playstation.com/fr-fr/hardware/ps5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="border-solid border-2 border-gray-950 block mx-auto mt-4 rounded-md text-md font-semibold p-2 transition-all duration-150 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-950"
            >
              VOIR LES VERSIONS
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technics;
