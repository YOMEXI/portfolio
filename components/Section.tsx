import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import Skills from "./Skills";
import Projects from "./Skills";

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

            <motion.div
              animate={{ x: 40 }}
              transition={{ ease: "easeOut", duration: 0.9 }}
              initial="hidden"
            >
              <p className="font-medium md:text-2xl lg:text-4xl mt-3 p-2">
                A fullstack Software developer.
              </p>
              <p className="font-medium md:text-xl lg:text-2xl mt-2 p-1">
                Email: abayomexy@gmail.com
              </p>
            </motion.div>
          </div>
          <div className="flex-auto p-4  flex justify-center items-center ">
            <motion.div animate={{ y: [0, 100, 0] }}>
              <img
                src="/img/alias.png"
                alt=""
                // className="w-52 md:w-64 lg:w-96 rounded-full h-52 md:h-64 lg:h-96  "
                className="profile-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Section;
