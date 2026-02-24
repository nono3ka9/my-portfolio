"use client";
import Contact from "../sections/ContactButton";
import Image from "next/image";

export default function Header() {
  const handleContact = () => {
    const target = document.getElementById("contact");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="h-[88px] flex items-center">
      <div className="max-w-[1100px] mx-auto w-full flex justify-between items-center px-[1px]">
        <div className="font-serif text-[20px] tracking-[0.05em]">NK</div>

        <nav className="flex font-serif items-center gap-[45px] text-[16px] tracking-[0.18em]">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>

          <button
            className="border bg-white px-[22px] py-[7px] rounded-full text-[16px]"
            onClick={handleContact}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
