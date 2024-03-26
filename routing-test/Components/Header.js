import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="font-bold text-3xl mb-4 flex items-center justify-between px-5 py-5 bg-red-400 text-white rounded-md">
        <h1>
          <Link href="/">LOGO</Link>
        </h1>
        <div className="flex gap-10">
          <h3>
            <Link href="/About">About</Link>
          </h3>
          <h3>
            <Link href="/Contact">Contact</Link>
          </h3>
          <h3>
            <Link href="/Cource">Cource</Link>
          </h3>
          <h3>
            <Link href="/Fetures">Fetures</Link>
          </h3>
          <h3>
            <Link href="/Account">Acount</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
