import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';
import Salary from '../Salary/Salary';
import './Engineers.css'

const Engineers = () => {
    const [engineers, setEngineers] = useState([])
    const [salaries, setSalaries] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setEngineers(data))
    }, [])

    const handleAddSalary = sales => {
        const newSalary = [...salaries, sales];
        setSalaries(newSalary);

    }

    return (
        <div id='grid' >
            <div className='row margin mb-5'>
                {
                    engineers.map(engineer => <Engineer
                        handleAddSalary={handleAddSalary}
                        key={engineer.name}
                        engineer={engineer}
                    ></Engineer>)
                }
            </div>
            <div className='mt-5'>
                <Salary salaries={salaries}></Salary>
            </div>
        </div>
    );
};

export default Engineers;