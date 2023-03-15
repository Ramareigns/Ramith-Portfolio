import React from "react";

const About = () => {
    return (
       
        <div id="About" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto ">
                <div className="w-full h-full mx-auto py-5 p-2 flex flex-col justify-center items-center">
                    <h2 className="py-4">About Me</h2>
                    <p className="font-bold p-4 text-purple-800 uppercase">What Am I</p>
                </div>
            <div>

            </div>
            <div className = "text-left px-4">
                <p className="py-4 font-bold text-grey-500 max-w-[70%]  mt-0 inline">
                    I am an undergraduate student, currently pursuing a degree in
                    Information Science and I am interested in the fields of Data
                    Science, Data Analyst, Software Development, Web Development,
                    Solution Specialist and Game Development. I am aspiring to have
                    great achievements within my career and work hard to attain the
                    goals I have set for myself.{" "}
                    <span className="hidden md:block">
                    Therefore, I am looking for Internships/job opportunities relating
                    to the field of Information and Computer science in order to
                    enhance my skills and gain experience.
                    </span>
                    </p>
            </div>
            </div>
        </div>
       

    );
};

export default About;