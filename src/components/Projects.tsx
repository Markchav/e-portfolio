import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Project } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="text-white ">
      <h3 className="uppercase tracking-[20px] text-gray-400 text-3xl md:text-4xl max-w-[320px] mx-auto pt-[25vw] md:pt-[5vw] text-center">
        Projects
      </h3>

      <div className=" px-6 md:px-0 max-w-[1200px] mx-auto space-y-24 py-10 lgl:py-24">
        {projects?.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex-col flex ${
              i % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h4 className="text-5xl my-4 font-semibold text-white">
                <span className="underline decoration-[#F7AB0A] ">
                  {`0${i + 1}`}
                </span>
              </h4>

              <h4 className="text-3xl font-semibold py-4 text-white break-words">
                {project.title}
              </h4>

              <p className=" text-base md:text-lg py-4 pr-4 break-words text-white font-medium">
                {project?.summary}
              </p>

              <ul className="text-sm font-medium md:text-base tracking-wide flex gap-2 md:gap-5 text-[#F7AB0A;] items-center text-center flex-wrap justify-center md:justify-start">
                {project?.technologies.map((technology) => (
                  <li key={technology?._id}>{technology?.title}</li>
                ))}
              </ul>

              <div className=" w-full md:w-64 h-[1px] bg-gray-400 my-4 tracking-wide flex gap-5 md:gap-5 text-white justify-center md:justify-start">
                <a
                  className="hover:text-gray-400 duration-300 my-2"
                  href={project?.linkToGithub}
                  target="_blank"
                >
                  <TbBrandGithub className="md:h-8 md:w-8 h-8 w-8" />
                </a>
                <a
                  className="hover:text-gray-400 duration-300 my-2"
                  href={project?.linkToBuild}
                  target="_blank"
                >
                  <RxOpenInNewWindow className="md:h-8 md:w-8 h-8 w-8" />
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                alt=""
                src={urlForImage(project?.image).url()}
                className=" h-auto md:h-[350px] w-[600px] object-cover border rounded-gray-700"
                width={500}
                height={700}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
