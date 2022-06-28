import React from 'react'
import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'

export const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    'https://booking-2.herokuapp.com/api/hotels?featured=true&limit=4',
  )

  return (
    <div className="fp">
      {loading ? (
        'loading, please wait'
      ) : (
        <>
          {data.map((item, i) => (
            <div className="fpItem" key={i}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  )
}
