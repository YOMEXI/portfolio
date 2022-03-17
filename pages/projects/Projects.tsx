import React from "react";
import { SiGithub, SiInternetexplorer } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="  sm:flex sm:flex-col w-full sm:justify-center sm:items-center block text-center mb-5">
        <h3 className="text-lg sm:text-xl font-bold my-2 text-center">
          Chatty
        </h3>
        <p className="text-sm sm:text-lg my-1 text-center">
          A mini-social media application built using{" "}
          <span className="font-medium ">reactjs</span>,{" "}
          <span className="font-medium">redux</span>,
          <span className="font-medium">Nodejs</span>,
          <span className="font-medium">Expressjs</span>,
          <span className="font-medium">MongoDb</span>
        </p>
        <a
          href="https://chatty-front.herokuapp.com/
       "
        >
          {" "}
          <img
            src="/img/chatty.png"
            alt=""
            className=" sm:w-2/5 sm:h-2/5 px-4   w-4/5 m-auto cursor-pointer"
          />
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://chatty-front.herokuapp.com/"
        >
          <span className="mr-2">
            <i className="fa fa-globe"></i>
          </span>{" "}
          https://chatty-front.herokuapp.com/
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/chatty-api"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          api: https://github.com/YOMEXI/chatty-api
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/chatty-client"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          client: https://github.com/YOMEXI/chatty-client
        </a>
      </div>

      <div className="  sm:flex sm:flex-col w-full sm:justify-center sm:items-center block text-center">
        <h3 className="text-lg sm:text-xl font-bold my-2 text-center">
          Shoe-ecommerce
        </h3>
        <p className="text-sm sm:text-lg my-1 text-center">
          A mini shoe ecommerce application built using{" "}
          <span className="font-medium ">reactjs</span>,{" "}
          <span className="font-medium">redux</span>,
          <span className="font-medium">Nodejs</span>,
          <span className="font-medium">Expressjs</span>,
          <span className="font-medium">Postgresql</span>
        </p>
        <a
          href="https://shoe-client.herokuapp.com/
       "
        >
          {" "}
          <img
            src="/img/shoe.png"
            alt=""
            className=" sm:w-2/5 sm:h-2/5 px-4   w-4/5 m-auto cursor-pointer"
          />
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://shoe-client.herokuapp.com/"
        >
          <span className="mr-2">
            <i className="fa fa-globe"></i>
          </span>{" "}
          https://shoe-client.herokuapp.com/
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/chatty-api"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          api: https://github.com/YOMEXI/shoe-ecommerce-api
        </a>
        <a
          className="cursor-pointer mt-3 flex justify-center items-center text-sm "
          href="https://github.com/YOMEXI/chatty-client"
        >
          <span className="mr-2">
            <SiGithub />
          </span>{" "}
          client: https://github.com/YOMEXI/shoe-client
        </a>
      </div>
    </>
  );
};

export default Projects;
