import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import Skills from "./Skills";

const Section = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0 },
  };
  return (
    <>
      <div>
        <div className=" flex  flex-wrap  my-4 gap-3 p-5 mx-4 justify-center items-center ">
          <div className="flex-auto  text-center  ">
            <h1 className="text-lg md:text-2xl lg:text-4xl flex justify-center items-center">
              Hi, i am Akinfolajimi Abayomi{" "}
              <p className="text-xl sm:text-4xl justify-end text-black ml-1 sm:p-2 sm:bg-white frontend_img_circle">
                <a href="https://github.com/YOMEXI">
                  {" "}
                  <SiGithub />
                </a>
              </p>
            </h1>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Section;
