import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        

        <p className="text-xl mt-20">
        To pursue a highly rewarding career,
        seeking for a job in challenging and
        healthy work environment demanding all
        my skills and efforts to explore and adapt
        myself in different fields and realize my
        potential where I get the opportunity for
        continuous learning. To serve the notion
        in technical advancement.
        </p>

        
      </div>
    </div>
  );
};

export default About;