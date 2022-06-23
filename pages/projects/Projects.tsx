import React from "react";
import { SiGithub, SiInternetexplorer } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="  sm:flex sm:flex-col w-full sm:justify-center sm:items-center block text-center mb-5">
        <h3 className="text-lg sm:text-xl font-bold my-2 text-center">
          TechBlog (Fullstack)
        </h3>
        <p className="text-sm sm:text-lg my-1 text-center">
          A Tech Blog application built using{" "}
          <span className="font-medium ">reactjs</span>,{" "}
          <span className="font-medium">redux</span>,
          <span className="font-medium">Material Ui</span>,
          <span className="font-medium">Nestjs</span>,
          <span className="font-medium">Postgresql</span>
        </p>
        <a
          href="https://techblog-client.herokuapp.com
       "
        >
          {" "}
          <img
            src="/img/techblog.png"
            alt=""
            className=" sm:w-2/5 sm:h-2/5 px-4   w-4/5 m-auto cursor-pointer"
          />
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://techblog-client.herokuapp.com"
        >
          <span className="mr-2">
            <i className="fa fa-globe"></i>
          </span>{" "}
          https://techblog-client.herokuapp.com
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/chatty-api"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          api:https://github.com/YOMEXI/Techblog-api
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/chatty-client"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          client: https://github.com/YOMEXI/Techblog-client
        </a>
      </div>

      <div className="  sm:flex sm:flex-col w-full sm:justify-center sm:items-center block text-center mb-5">
        <h3 className="text-lg sm:text-xl font-bold my-2 text-center">
          Findeed (Fullstack)
        </h3>
        <p className="text-sm sm:text-lg my-1 text-center">
          An mini Indeed application built using <br />
          <span className="font-medium ">reactjs</span>,
          <span className="font-medium">Redux</span> ,
          <span className="font-medium">Nodejs</span> ,
          <span className="font-medium">Nestjs</span> ,
          <span className="font-medium">Postgresql</span>,
        </p>
        <a
          href="https://findeed-client.herokuapp.com
       "
        >
          {" "}
          <img
            src="/img/findeed.png"
            alt=""
            className=" sm:w-2/5 sm:h-2/5 px-4   w-4/5 m-auto cursor-pointer"
          />
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://findeed-client.herokuapp.com"
        >
          <span className="mr-2">
            <i className="fa fa-globe"></i>
          </span>{" "}
          https://findeed-client.herokuapp.com
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/indeed-clone-api"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          api:https://github.com/YOMEXI/indeed-clone-api
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/indeed-clone-client"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          client:https://github.com/YOMEXI/indeed-clone-client
        </a>
      </div>
    </>
  );
};

export default Projects;
