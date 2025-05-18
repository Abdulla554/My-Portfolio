import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaDownload, FaEnvelope, FaPhone } from "react-icons/fa";

const CV = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionSubText}>Profile</p>
        <h2 className={styles.sectionHeadText}>Curriculum Vitae</h2>
      </motion.div>
      <div className="mt-16 flex flex-col items-center justify-center gap-8">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-14 mb-2">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.04}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className=""
          >
            <motion.a
              href="mailto:abdulla33alsaad8@gmail.com"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
                background:
                  "linear-gradient(to right, var(--tw-gradient-stops))",
                filter: "brightness(1.1)",
              }}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-md border border-white/20 text-base font-semibold select-text cursor-pointer transition-all duration-200"
            >
              <FaEnvelope className="h-5 w-5 text-white/80" />
              abdulla33alsaad8@gmail.com
            </motion.a>
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.04}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className=""
          >
            <motion.a
              href="tel:+964 7707598373"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
                background:
                  "linear-gradient(to right, var(--tw-gradient-stops))",
                filter: "brightness(1.1)",
              }}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-md border border-white/20 text-base font-semibold select-text cursor-pointer transition-all duration-200"
            >
              <FaPhone className="h-5 w-5 text-white/80" />
              07707598373
            </motion.a>
          </Tilt>
        </div>
        <Tilt className="md:w-[900px] my-10">
          <a href="/Cv1.pdf" target="_blank" rel="noopener noreferrer">
            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              className="md:w-[900px] h-[350px] bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/CV.png"
                alt="CV"
                className="object-fill p-3 w-full h-full rounded-2xl shadow-lg"
              />
            </motion.div>
          </a>
        </Tilt>
        <motion.a
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          href="/Cv1.pdf"
          download
          className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:from-secondary hover:to-primary transition-colors duration-200 border-2 border-white/10"
        >
          <FaDownload className="text-2xl" />
          Download CV
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(CV, "cv");
