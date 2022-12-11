import React from 'react';
import yeasin from '../../../assets/yeasin.png';
import resume from '../../../assets/Md_Yeasin_resume.pdf';

const Banner = () => {
    return (
        <div className="hero-content bg-base-200 text-center py-32  flex-col lg:flex-row">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold mb-4">Md. Yeasin</h1>
                <h3 className="text-2xl font-bold">Full Stack Web Developer</h3>
                <p className="py-6">Welcome! I am working as Web Developer from 2022. I have completed so many projects with <strong>ReactJS, JavaScript, Tailwind and BootStrap.</strong></p>
                <button className="btn btn-primary mr-4">Want to talk</button>
                <a href={resume} download={resume}><button className="btn btn-primary">Download Resume</button></a>

            </div>
            <img alt='' src={yeasin} className="max-w-sm rounded-lg p-6" />

        </div>

    );
};

export default Banner;