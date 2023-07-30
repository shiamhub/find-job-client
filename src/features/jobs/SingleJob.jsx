import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchSingleJob } from "./jobsSlice";
// import { sub } from "date-fns";
import TimeAgo from "./TimeAgo";

const SingleJob = () => {
    const { id } = useParams();
    const { company, job_title, location, job_description, requirements, posted_date, skills, expiration_date } = useSelector(state => state.jobs.singleJob);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleJob(id))
    }, [dispatch, id])

    return (
        <div className="w-10/12 mx-auto my-24">
            <h1 className="text-2xl font-bold">Company Name: {company}</h1>
            <h1>{job_title}</h1>
            <h1>{location}</h1>
            <div className="border-4 border-black rounded-xl p-12 flex justify-around mt-10">
                <div>
                    <h1>{job_title}</h1>
                    <h1>{location}</h1>
                </div>
                <div>
                    <h1>Job Posted Date</h1>
                    <TimeAgo timestamp={{posted_date}}></TimeAgo>
                </div>
                <div>
                    <h1>Job Expiration Date</h1>
                    <TimeAgo timestamp={{expiration_date}}></TimeAgo>
                </div>
            </div>
            <h1 className="mt-10 text-2xl">About the Job:</h1>
            <p>{job_description}</p>
            <h1 className="mt-10 text-2xl">Skills:</h1>
            <div className="flex gap-5">
                {
                    skills?.map((a, i) => <div key={i}>
                        <p className="bg-gray-200 p-2 rounded-lg px-4">{a}</p>
                    </div>)
                }
            </div>
            <h1 className="mt-10 text-2xl">Requirements:</h1>
            <div>
                {
                    requirements?.map((a, i) => <div key={i}>
                        <p className="">{i + 1}. {a}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SingleJob;