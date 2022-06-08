import React from 'react';
import './Engineer.css'

const Engineer = (props) => {
    // console.log(props);
    const { name, company, img, salary } = props.engineer;
    return (
        <div id='b' className='col-3 p-3 rounded text-center bg-info mt-5 text-color'> 
            <img className='img-common rounded-5' src={img} alt="" />
            <h5 className='text-start'>Name: {name}</h5>
            <h5 className='text-start'>Job: {company}</h5>
            <h5 className='text-start'>Salary: ${salary}</h5>
            <br />
            <button 
            onClick={() => props.handleAddSalary(props.engineer)}
            className="btn btn-warning fs-6"
            >Hire here</button> <br />
            <i className="fa-brands fa-facebook-f me-3 logo"></i>
            <i className="fa-brands fa-twitter logo"></i>
        </div>
    );
};

export default Engineer;