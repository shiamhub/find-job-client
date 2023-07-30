import { useDispatch } from "react-redux";
import { reactionAdded, updateJob } from "./jobsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    // rocket: '🚀',
    // coffee: '☕'
}

const ReactionButtons = ({ job }) => {

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => {
                    dispatch(reactionAdded({ postId: job._id, reaction: name }))
                    // dispatch(updateJob(job))
                    dispatch(updateJob({ ...job, reactions: { ...job.reactions, [name]: job.reactions[name] + 1 } }))
                }
                }
            >
                {/* {emoji} */}
                {emoji} {job.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons