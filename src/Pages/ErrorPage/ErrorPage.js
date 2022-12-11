import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='m-52'>
            <h1 className='text-3xl'>This is Error page Because of Missing something...</h1>
            <Link to="/"><button className='btn btn-wide btn-secondary my-10 mx-auto'>Home</button></Link>
        </div>
    );
};

export default ErrorPage;