import React from 'react';
import yeasinm from '../../../assets/yeasinn.jpg';
import resume from '../../../assets/Md_Yeasin_resume.pdf';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 my-5 p-10'>
            <div>
                <img className='w-1/2  rounded-lg' src={yeasinm} alt="" />
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div className='mr-14'>
                    <h1 className='text-5xl font-bold my-5'>About Me</h1>
                    <p>
                        I am Md. Yeasin a Front-end Web Developer. I am working on this sector since 2022. I have completed a Full Stack Web Development course from <strong>Programming-Hero</strong>. I am expert in <strong>ReactJS, NodeJS, TailwindCSS, Bootstrap, MongoDB, HTML5 and CSS3</strong> etc.
                    </p>
                    <a href={resume} download={resume}><button className="btn btn-primary mt-5">Download Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Info;