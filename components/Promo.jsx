import React from 'react'

export const Promo = () => {
    return (
        <div className="cta">
            <h2 className="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
            </h2>
            <button className="btn">
                <span className="btn-visible">
                    Book now
                </span>
                <span className="btn-invisible">
                    Only 4 rooms left
                </span>
            </button>
        </div>
    )
}
