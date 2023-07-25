import { useLoaderData } from "react-router-dom";

const SingleJob = () => {
    const singleJob = useLoaderData();
    console.log(singleJob);
    return (
        <div>
            <h1>{singleJob.com}</h1>
        </div>
    );
};

export default SingleJob;