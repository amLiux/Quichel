import React from 'react'
import Image from 'next/image'

export const UserReview = () => {
    return (
        
        <figure className="user-reviews">
            <figure className="review">
                <blockquote className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="review__user">
                    <img className="review__photo" src="/images/user-1.jpg" />
                    <div className="review__user-box">
                        <p className="review__user-name">Nick Smith</p>
                        <p className="review__user-date">May 10, 2021</p>
                    </div>
                    <div className="review__rating">7.8</div>
                </figcaption>
            </figure>
            <figure className="review">
                <blockquote className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                </blockquote>
                <figcaption className="review__user">
                    <img className="review__photo" src="/images/user-2.jpg" />
                    <div className="review__user-box">
                        <p className="review__user-name">Mary Thomas</p>
                        <p className="review__user-date">Jan 23, 2021</p>
                    </div>
                    <div className="review__rating">7.8</div>
                </figcaption>
            </figure>
            <button className="btn-inline">Show all <span>&rarr;</span></button>
        </figure>
    )
}
