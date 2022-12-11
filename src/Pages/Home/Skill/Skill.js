import React from 'react';

const Skill = () => {
    return (
        <div className='sm:px-4 md:px-56'>
            <h1 className='text-3xl font-bold text-center'>My Skill</h1>
            <div className='grid grid-cols-1 gap-1'>
                <p className='text-xl font-semibold'>HTML: <progress className="progress progress-primary " value="80" max="100"></progress></p>
                <p className='text-xl font-semibold'>CSS: <progress className="progress progress-primary " value="84" max="100"></progress></p>
                <p className='text-xl font-semibold'>ReactJS: <progress className="progress progress-primary " value="86" max="100"></progress></p>
                <p className='text-xl font-semibold'>NodeJS: <progress className="progress progress-primary " value="75" max="100"></progress></p>
                <p className='text-xl font-semibold'>Tailwind CSS: <progress className="progress progress-primary " value="90" max="100"></progress></p>
                <p className='text-xl font-semibold'>Bootstrap: <progress className="progress progress-primary " value="95" max="100"></progress></p>
                <p className='text-xl font-semibold'>Visual Studio: <progress className="progress progress-primary " value="80" max="100"></progress></p>
                <p className='text-xl font-semibold'>GitHub: <progress className="progress progress-primary " value="78" max="100"></progress></p>
            </div>
        </div>
    );
};

export default Skill;