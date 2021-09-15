import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { useState, useEffect } from "react";

const REVIEWS = gql`
query GetReviews {
    reviews{
      id
      title
      rating
      body
      categories{
          name
      }
    }
  }
`

export default function Home() {

    const [sortDirection, setSortDirection] = useState(true)
    const [dataDispaly, setDataDisplay] = useState([])
    const { loading, error, data } = useQuery(REVIEWS)

    useEffect(() => {
        if (data)
            setDataDisplay(data.reviews.slice().sort((a, b) => {
                return b.rating - a.rating
            }))

    }, [data])
    useEffect(() => {
        if (data)
            if (sortDirection) {
                setDataDisplay(data.reviews.slice().sort((a, b) => {
                    return b.rating - a.rating
                }))
            } else {
                setDataDisplay(data.reviews.slice().sort((a, b) => {
                    return a.rating - b.rating
                }))
            }
    }, [sortDirection])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div>
            <div className="review-card-for-button">

                <button
                    onClick={() => setSortDirection(!sortDirection)}
                    className='sort-button'
                >
                    Sort
            </button>
            </div>
            {
                dataDispaly.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="rating">{review.rating}</div>
                        <h2>{review.title}</h2>
                        <small>{review.categories.map(category => category.name).join()}</small>
                        <p>{review.body.substring(0, 200)}...</p>
                        <Link to={`/details/${review.id}`}>Read More</Link>
                    </div>
                ))
            }
        </div >
    )
}
