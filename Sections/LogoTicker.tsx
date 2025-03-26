"use client";
import AcmeLogo from "../app/assets/logo-acme.png";
import EchoLogo from "../app/assets/logo-echo.png";
import QuantumLogo from "../app/assets/logo-quantum.png";
import ApexLogo from "../app/assets/logo-apex.png";
import CelestialLogo from "../app/assets/logo-celestial.png";
import PulseLogo from "../app/assets/logo-pulse.png";
import { motion } from "framer-motion";
import Image from "next/image";
function LogoTicker() {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] py-5">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <Image src={AcmeLogo} alt="Acme" className="Logo-ticker-image" />
            <Image src={EchoLogo} alt="echo" className="Logo-ticker-image" />
            <Image
              src={QuantumLogo}
              alt="quantum"
              className="Logo-ticker-image"
            />
            <Image src={ApexLogo} alt="apex" className="Logo-ticker-image" />
            <Image
              src={CelestialLogo}
              alt="celestial"
              className="Logo-ticker-image"
            />
            <Image src={PulseLogo} alt="pulse" className="Logo-ticker-image" />
            <Image src={AcmeLogo} alt="Acme" className="Logo-ticker-image" />
            <Image src={EchoLogo} alt="echo" className="Logo-ticker-image" />
            <Image
              src={QuantumLogo}
              alt="quantum"
              className="Logo-ticker-image"
            />
            <Image src={ApexLogo} alt="apex" className="Logo-ticker-image" />
            <Image
              src={CelestialLogo}
              alt="celestial"
              className="Logo-ticker-image"
            />
            <Image src={PulseLogo} alt="pulse" className="Logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
