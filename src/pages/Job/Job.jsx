import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Job = () => {
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJob(data)
            })
    }, [])

    return (
        <div className="w-10/12 mx-auto grid grid-cols-4 gap-5 my-12">
            {
                job.map(a => <div key={a.job_id} className='p-8 rounded-xl bg-base-200'>
                    <h1 className='text-2xl font-bold'>{a.job_title}</h1>
                    <h5>{a.company}</h5>
                    <div className="flex justify-between my-3 flex-row">
                        <div className='flex items-center gap-1'>
                            <MdOutlineLocationOn></MdOutlineLocationOn>
                            <p>{a.location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AiOutlineFieldTime></AiOutlineFieldTime>
                        <p>{a.job_type}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/job/${a._id}`}><button  className="btn btn-primary">Apply Now</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Job;