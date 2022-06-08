import React from 'react';
import './Salary.css'

const Salary = (props) => {
    const {salaries} = props;

    let total = 0;
    let img = '';
    let name = '';
    let job = '';
    let education = '';
    for (const engineer of salaries){
        total = total + engineer.salary
        img = engineer.img;
        name = engineer.name;
        job = engineer.company;
        education = engineer.education;
    }
    return (
        <div className='text-center salary-container'>
            <h5>Engineer Added: {salaries.length}</h5>
            <h5>Salary: ${total}</h5>
            <img className='rounded-5 img-salary' src={img} alt="" />
            <p>{name}</p>
            <p>Job: {job}</p>
            <p>Education: {education}</p>
        </div>
    );
};

export default Salary;