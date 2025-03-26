import React from "react";
import logo from "../app/assets/logosaas.png";
import Image from "next/image";
import X from "../app/assets/social-x.svg";
import Insta from "../app/assets/social-insta.svg";
import LinkedIn from "../app/assets/social-linkedin.svg";
import Pin from "../app/assets/social-pin.svg";
import Youtube from "../app/assets/social-youtube.svg";

function Footer() {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container ">
        <div
          className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full 
    before:absolute before:bg-gradient-to-r before:from-[#F87BFF] before:via-[#FB92CF] 
    before:via-[#FFDD9B] before:via-[#C2F0B1] before:to-[#2FD8FE]"
        >
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 ">
          <X />
          <Insta />
          <LinkedIn />
          <Pin />
          <Youtube />
        </div>
        <p className="mt-6">&copy; 2025 anujj , Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
