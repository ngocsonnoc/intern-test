import React from 'react'
import { Header, ProductItem, ProductWrapper, Wrapper } from './bbd.elm'
import bg from '../../assets/images/bes-bg.png'
import bp1 from '../../assets/images/best-image-01.png'
import bp2 from '../../assets/images/best-image-02.png'
import bp3 from '../../assets/images/best-image-03.png'
import ic3 from '../../assets/images/producticon-03.png'
import ic2 from '../../assets/images/producticon-02.png'
import ic1 from '../../assets/images/producticon-01.png'
const BestProduct = () => {
    return (
        <Wrapper>
            <div className='bg'>
                <img src={bg} alt="" />
            </div>
            <Header>
                <h2>Best Product</h2>
                <p>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </p>
            </Header>
            <ProductWrapper>
                <ProductItem>
                    <img src={bp1} alt="" />
                    <div className='product-footer'>
                        <span>How to create
                            mobile-optimized</span>
                        <div className='go'>Go</div>
                    </div>
                    <div className='flag'>
                        <img src={ic1} alt="" />
                    </div>
                </ProductItem>
                <ProductItem>
                    <img src={bp2} alt="" />
                    <div className='product-footer'>
                        <span>How to create
                            mobile-optimized</span>
                        <div className='go'>Go</div>
                    </div>
                    <div className='flag'>
                        <img src={ic2} alt="" />
                    </div>
                </ProductItem>
                <ProductItem>
                    <img src={bp3} alt="" />
                    <div className='product-footer'>
                        <span>How to create
                            mobile-optimized</span>
                        <div className='go'>Go</div>
                    </div>
                    <div className='flag'>
                        <img src={ic3} alt="" />
                    </div>
                </ProductItem>
            </ProductWrapper>
        </Wrapper>
    )
}

export default BestProduct
