'use client'

import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import playstationLogo from '../../public/playstationLogo.png'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const showMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <header className="bg-blue-950 flex flex-row justify-between items-center p-4">
      <Link href={"/"}>
        <Image
          src={playstationLogo}
          alt="playstationLogo"
          className="cursor-pointer"
          width={80}
          height={90}
          loading="lazy"
        />
      </Link>
      <nav className="gap-12 hidden md:flex flex-row">
        <Link href="about-section" className="text-xl text-gray-50">
          About
        </Link>
        <Link href="technics-section" className="text-xl text-gray-50">
          Technics
        </Link>
        <Link href="games-section" className="text-xl text-gray-50">
          Games
        </Link>
        <Link href="contact-section" className="text-xl text-gray-50">
          Contact
        </Link>
      </nav>
      <button
        type="button"
        className="flex text-gray-50 cursor-pointer text-2xl transition-all duration-150 md:hidden"
      >
        {isMenu ? (
          <IoClose className="text-gray-50" onClick={showMenu} />
        ) : (
          <FiAlignJustify className="text-gray-50" onClick={showMenu} />
        )}
      </button>

      {isMenu && (
        <div className="absolute right-0 top-16 bg-blue-950 w-48 h-56 z-50">
          <nav className="gap-4 mt-6 items-center flex flex-col">
            <Link href="about-section" className="text-xl text-gray-50">
              About
            </Link>
            <Link href="technics-section" className="text-xl text-gray-50">
              Technics
            </Link>
            <Link href="games-section" className="text-xl text-gray-50">
              Games
            </Link>
            <Link href="contact-section" className="text-xl text-gray-50">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header
