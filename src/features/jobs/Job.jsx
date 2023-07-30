import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './jobsSlice';
import ReactionButtons from './ReactionButtons';
const Job = () => {
    const { jobs, loading, error } = useSelector(state => state.jobs)
    console.log(jobs, loading, error)

    const orderedPosts = jobs.slice().sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date))
    // const [job, setJob] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchJobs())

    }, [dispatch])


    return (
        <div className="w-10/12 mx-auto grid grid-cols-4 gap-5 my-12">
            {!loading &&
                orderedPosts?.map(a => <div key={a.job_id} className='p-8 rounded-xl bg-base-200'>
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
                    <ReactionButtons job={a}></ReactionButtons>
                    <div>
                        <Link to={`/job/${a._id}`}><button className="btn btn-primary">Apply Now</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Job;