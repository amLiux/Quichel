import React from 'react'
import { Description } from './Description'
import { UserReview } from './UserReview'

export const Detail = () => {
    return (
        <div className="detail">
            <Description/>
            <UserReview/>
        </div>
    )
}
