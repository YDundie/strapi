import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'


export default function ReviewDetails() {
    const { id } = useParams()
    const { loading, error, data } = useFetch(`http://localhost:1337/reviews/${id}`)
    console.log('data', data)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    return (
        <div className="review-card">
            <Link to={`/`}>Go Back</Link>
            <div className="rating">{data.rating}</div>
            <h2>{data.title}</h2>
            <small>console list</small>
            <p>{data.body}</p>
            <Link to={`/`}>Go Back</Link>
        </div>
    )
}
