import React from 'react';

const ProjectsCard = ({ project }) => {

    const { title, img, technology, live_site } = project;

    return (
        <div className="card card-compact bg-base-100 shadow-xl my-5">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{technology}</p>
                <div className="card-actions justify-end">
                    <a href={live_site}><button className="btn btn-primary">Live Site</button ></a>
                </div>
            </div>
        </div >
    );
};

export default ProjectsCard;