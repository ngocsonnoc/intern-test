import React from 'react'
import { Heading, Main, Wrapper } from './main.elm'
import mainImg from '../../assets/images/what-happen.png'
import vd_obj7 from '../../assets/images/video-object-07.png'
import vd_obj6 from '../../assets/images/video-object-06.png'
import vd_obj8 from '../../assets/images/video-object-08.png'
import vd_obj1 from '../../assets/images/video-object-01.png'
import vd_obj3 from '../../assets/images/video-object-03.png'
import vd_obj4 from '../../assets/images/video-object-04.png'
import vd_obj9 from '../../assets/images/video-object-09.png'




const Wht30sMain = () => {
    return (
        <Wrapper>
            <Main>
                <Heading>
                    <h1>what happened</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first </p>
                    <div className="btn-see-more"> <span>see more</span></div>
                </Heading>
                <div className='image-box'>
                    <img src={mainImg} alt="" />
                </div>
            </Main>
            <div className='obj obj-7'>
                <img src={vd_obj7} alt="" />
            </div>
            <div className='obj obj-6'>
                <img src={vd_obj6} alt="" />
            </div>
            <div className='obj obj-8'>
                <img src={vd_obj8} alt="" />
            </div>
            <div className='obj obj-1'>
                <img src={vd_obj1} alt="" />
            </div>
            <div className='obj obj-3'>
                <img src={vd_obj3} alt="" />
            </div>
            <div className='obj obj-4'>
                <img src={vd_obj4} alt="" />
            </div>
            <div className='obj obj-9'>
                <img src={vd_obj9} alt="" />
            </div>
        </Wrapper>
    )
}

export default Wht30sMain
