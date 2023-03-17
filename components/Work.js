import React from "react";

const Work = () => {
  return (
    <div id="Work" className="w-full md:h-screen p-2 flex items-center mb-64">
      <div className="max-w-[1240px] m-auto ">
        <div className="w-full h-full mx-auto py-5 p-2 flex flex-col justify-center items-center">
          <h2 className="py-4">Work Experience</h2>
          <p className="font-bold p-4 text-purple-800 uppercase">What I have Done</p>
        </div>

        <div className="px-5 py-5 w-full h-full mx-auto p-2 flex flex-wrap md:flex-nowrap text-center md:text-left justify-center items-center">
          <div>
            <h2 className="py-4">
              IT Computer Operator Assistant & Web Developer at IBBR
            </h2>
            <h3 className="text-purple-600">(May 2022 - Present)</h3>
          </div>

          <p className="text-center p-4 font-bold text-grey-500 max-w-[70%] m-auto">
            {" "}
            Act as IT support for employees at IBBR. Provide basic IT support as
            well as help Organize events in the Auditorium. Also take part in
            Web development projects on the IBBR Website using Laravel, PHP and
            Tailwind CSS.
          </p>
        </div>
        <div className="px-5 py-5 w-full h-full mx-auto p-2 flex flex-wrap md:flex-nowrap text-center md:text-left justify-center items-center">
          <div>
            <h2 className="py-4">University of Maryland - TerpEngage Intern</h2>
            <h3 className="text-purple-600">(January 2022 - Present)</h3>
          </div>

          <p className="text-center p-4 font-bold text-grey-500 max-w-[70%] m-auto">
            {" "}
            Help with Data Analysis and Salesforce related work. Also dealing
            with large number of Student record data and managing IT tickets
          </p>
        </div>
        <div className="px-5 py-5 w-full h-full mx-auto p-2 flex flex-wrap md:flex-nowrap text-center md:text-left justify-center items-center">
          <div>
            <h2 className="py-4">Bakery Clerk at Costco Wholesale (Wheaton)</h2>
            <h3 className="text-purple-600">(November 2019 - August 2022)</h3>
          </div>

          <p className="text-center p-4 font-bold text-grey-500 max-w-[70%] m-auto">
            {" "}
            Prepping and Baking bakery items as well as keeping the department
            clean. helping compile Bakery production sheets in order to
            determine sales and next day production.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Work;
