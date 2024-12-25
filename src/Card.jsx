import React, { useState } from 'react';
import './Card.css';

function Card() {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState("");

    function handleInputChange(e) {
        setNewJob(e.target.value);
    }

    function handleAddJob() {
        if (newJob.trim() !== "") {
            setJobs((j) => [...j, newJob]);
            setNewJob("");
        }
    }

    function handleRemoveJob(index) {
        setJobs((j) => j.filter((_, i) => i !== index));
    }
    
    function moveTaskUp(index){
        if(index > 0){
            const updatedJobs = [...jobs];
            [updatedJobs[index], updatedJobs[index - 1]] =
            [updatedJobs[index - 1],updatedJobs[index]];
            setJobs(updatedJobs);
        }
    }

    function moveTaskDown(index){
        if(index < jobs.length - 1){
            const updatedJobs = [...jobs];
            [updatedJobs[index],updatedJobs[index+1]] =
            [updatedJobs[index + 1],updatedJobs[index]];
            setJobs(updatedJobs);
        }
    }

    return (
        <div className="main">
            <h2>TO-DO APP</h2>
            <div className="maininput">
            <input
                type="text"
                id="JobInput"
                placeholder="Add Your Task here"
                value={newJob}
                onChange={handleInputChange}
            />

            <button onClick={handleAddJob}>ADD</button>
            </div>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => handleRemoveJob(index)}>Remove</button>
                        <button className="move-up" onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-down" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;