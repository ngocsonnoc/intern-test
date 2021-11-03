import React from 'react'
import {  BannerWrapper } from './banner.elm'

const Banner = ({banner}) => {
    return (
        <BannerWrapper >
            <div className='bg'>
                <img src={banner} alt="bg" />
            </div>
        </BannerWrapper>
    )
}

export default Banner
