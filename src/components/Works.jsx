import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDatabase } from "react-icons/fa";
import { FiEye, FiMonitor } from "react-icons/fi";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  admin_link,
}) => {
  return (
    <motion.div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary  p-2 rounded-2xl sm:w-[360px] w-full min-h-[500px] flex flex-col"
      >
        <div className="relative w-full h-[250px]">
          <img
            src={image}
            alt="project_image"
            className="w-full  h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              title="View Live Site"
              className=" bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
            >
              <FiMonitor className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="mt-2 text-secondary text-[14px]"
          >
            {description}
          </p>
        </div>

        <div className="my-6 flex items-center justify-center flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="flex gap-4 items-center justify-between px-2 md:px-0">
          <motion.a
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 32px 8px #3b82f6, 0 0 8px 2px #fff inset",
              background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
              color: "#fff",
              cursor: "pointer",
            }}
            style={{
              background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
              borderRadius: "2rem",
              boxShadow: "0 4px 24px 0 #3b82f655",
              border: "2px solid #fff3",
              backdropFilter: "blur(4px)",
              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
            }}
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            <FaExternalLinkAlt
              style={{ transition: "transform 0.3s", marginRight: 8 }}
            />
            View Live
          </motion.a>
          {admin_link && (
          <motion.a
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 32px 8px #a21caf, 0 0 8px 2px #fff inset",
              background: "linear-gradient(90deg, #a21caf 0%, #a21caf 100%)",
              color: "#fff",
              cursor: "pointer",
            }}
            href={admin_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold shadow-lg transition"
          >
            <FaDatabase />
              Admin Panel
            </motion.a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div id="projects" >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2  className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
