import React from "react";
import profilePic from "../assets/pic.png";
import cssLogo from "../assets/css.jpeg";
import htmlLogo from "../assets/html.jpeg";
import reactLogo from "../assets/react.jpeg";
import gitLogo from "../assets/git.jpeg";
import bootstrapLogo from "../assets/bootstrap.jpeg";
import jquerryLogo from "../assets/jquerry.jpeg";
import tailwindLogo from "../assets/tailwind.jpeg";
import jsLogo from "../assets/js.jpeg";

const About = () => {
  return (
    <div className="h-90">
      <div className="grid grid-cols-2 place-items-center">
        <section className="flex flex-col mt-10">
          <span className="text-5xl font-bold bg-gradient-to-r from-pink-900 to-indigo-200 bg-clip-text text-transparent glowing-text">
            Web Developer
          </span>
          <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
            AI & IT Support
          </span>
        </section>
        <img
          src={profilePic}
          alt="picture"
          className="row-start-1 row-end-3 col-start-2"
        />
        <section className="w-5/6 text-xl text-gray-400 border-2 rounded-lg border-gray-800 mt-10  ">
          Helping businesses build and design sleek,responsive websites while
          providing smart,AI-driven IT support solutions.whether you're a
          startup needing a fast launch or a growing team looking for reliable
          tech support, I deliver modern, scalable, and user-friendly digital
          solutions that work.
        </section>
      </div>
      <section className="logo flex mt-10  marquee-track">
        <img src={htmlLogo} alt="html" className="  mx-9" />
        <img src={cssLogo} alt="html" className="  mx-9" />
        <img src={jsLogo} alt="html" className="   mx-9" />
        <img src={reactLogo} alt="html" className="  mx-9" />
        <img src={bootstrapLogo} alt="html" className="   mx-9" />
        <img src={jquerryLogo} alt="html" className="  mx-9" />
        <img src={gitLogo} alt="html" className="   mx-9" />
        <img src={tailwindLogo} alt="html" className="  mx-9" />

        <img src={htmlLogo} alt="html" className="  mx-9" />
        <img src={cssLogo} alt="html" className="  mx-9" />
        <img src={jsLogo} alt="html" className="   mx-9" />
        <img src={reactLogo} alt="html" className="  mx-9" />
        <img src={bootstrapLogo} alt="html" className="   mx-9" />
        <img src={jquerryLogo} alt="html" className="  mx-9" />
        <img src={gitLogo} alt="html" className="   mx-9" />
        <img src={tailwindLogo} alt="html" className="  mx-9" />
      </section>
    </div>
  );
};

export default About;
