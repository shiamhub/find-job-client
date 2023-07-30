import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp?.posted_date) {
        const date = parseISO(timestamp?.posted_date)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    if (timestamp?.expiration_date) {
        const date = parseISO(timestamp?.expiration_date)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `Expired ${timePeriod}`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo