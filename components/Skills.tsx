import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="flex justify-center items-center text-2xl  text-white cursor-pointer">
        <span className="p-2 bg-black rounded">
          <Link href="/projects/Projects">
            <a>Click to view Projects</a>
          </Link>
        </span>
      </div>
      <div className="block sm:flex sm:flex-wrap p-3 m-3 gap-3 justify-around">
        <div className="flex-auto p-3 bg-black text-white rounded">
          <h3 className="mb-4 text-sm md:text-xl lg:text-2xl font-medium ">
            Frontend skills
          </h3>

          <div className=" ">
            <div className="block sm:flex sm:flex-row sm:justify-between">
              <div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3 ">
                  <span className=" sm:text-xl text-sm"> Html 5</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-orange-600 p-1  frontend_img_circle">
                    <AiFillHtml5 />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Css 3</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-blue-600 frontend_img_circle">
                    <DiCss3 />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> JavaScript</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-yellow-300 p-2 bg-white frontend_img_circle">
                    <SiJavascript />
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> TypeScript</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-blue-900 p-2 bg-white frontend_img_circle">
                    <SiTypescript />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Reactjs</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-blue-900 p-2 bg-white frontend_img_circle">
                    <SiReact />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Redux</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-blue-900 p-2 bg-white frontend_img_circle">
                    <SiRedux />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-3  bg-black text-white rounded">
          <h3 className="mb-4 text-sm md:text-xl lg:text-2xl font-medium ">
            Backend skills
          </h3>

          <div className=" ">
            <div className="block sm:flex sm:flex-row sm:justify-between">
              <div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3 ">
                  <span className="sm:text-xl text-sm">Nodejs</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-green-600 p-1  frontend_img_circle">
                    <SiNodedotjs />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Expressjs</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-black frontend_img_circle">
                    <SiExpress />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Nestjs</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-black p-2 bg-white frontend_img_circle">
                    <SiNestjs />
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Postgresql</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-blue-900 p-2 bg-white frontend_img_circle">
                    <SiPostgresql />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> MongoDb</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-green-900 p-2 bg-white frontend_img_circle">
                    <SiMongodb />
                  </p>
                </div>
                <div className="font-medium flex justify-between items-center  md:w-64 mb-3">
                  <span className="sm:text-xl text-sm"> Jest</span>{" "}
                  <p className="text-2xl sm:text-4xl justify-end text-red-500 p-2 bg-white frontend_img_circle">
                    <SiJest />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
