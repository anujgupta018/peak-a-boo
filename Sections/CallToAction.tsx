"use client";
import ArrowRight from "../public/arrow-right.svg";
import StarImage from "../public/star.png";
import SpringImage from "../public/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function CallToAction() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celeberate the joy of accomplishment with an app designed to track
            your progress and motivate your results.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <Image
              src={ArrowRight}
              alt="ArrowRight"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
