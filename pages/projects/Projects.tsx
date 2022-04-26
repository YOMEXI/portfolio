import React from "react";
import { SiGithub, SiInternetexplorer } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="  sm:flex sm:flex-col w-full sm:justify-center sm:items-center block text-center mb-5">
        <h3 className="text-lg sm:text-xl font-bold my-2 text-center">
          TechBlog
        </h3>
        <p className="text-sm sm:text-lg my-1 text-center">
          A Tech Blog application built using{" "}
          <span className="font-medium ">reactjs</span>,{" "}
          <span className="font-medium">redux</span>,
          <span className="font-medium">Nodejs</span>,
          <span className="font-medium">Expressjs</span>,
          <span className="font-medium">MongoDb</span>
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
    </>
  );
};

export default Projects;
