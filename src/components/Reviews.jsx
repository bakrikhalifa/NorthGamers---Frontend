import axios from "axios"
import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://bakrisncgames.onrender.com/api/reviews`).then((response) => {
            setReviews(response.data.reviews)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
        }
                

    return (
        <ReviewCard reviews={reviews}/>
    )
}

export default Reviews