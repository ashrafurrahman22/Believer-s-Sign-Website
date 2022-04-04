import { useEffect, useState } from "react";


const useReview = () => {
    const [reviewers, setReviewers] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviewers(data))
    }, [])

    return [reviewers, setReviewers];
}

export default useReview;