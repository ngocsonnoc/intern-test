import React, { useState } from 'react'
import { ProductCard, ProductListWrapper, Wrapper } from './product.elm'

const Products = ({ data }) => {
    const [count, setCount] = useState(15)
    const renderProducts = (data) => {
        var result = null
        var temp = []
        for (var i = 0; i < count; i++) {
            temp.push(data[i])
        }
        if (temp) {
            result = temp.map((item, index) =>
                <ProductCard key={index}>
                    <div className='card-image'> <img src={item.image} alt="item.name" /></div>
                    <div className='card-footer'>
                        <span className='name'>{item.name}</span>
                        <div className='footer'>
                            <span>{item.price} won</span> <span><i className="fas fa-heart"></i>{item.heart}</span>
                        </div>
                    </div>
                </ProductCard>
            )
        }
        return result
    }
    const handleChangeList=()=>{
        if(count===15){
            setCount(data.length)
        }
        else setCount(15)
    }
    return (
        <Wrapper>
            <ProductListWrapper>
                {renderProducts(data)}
            </ProductListWrapper>
            <div className='see-more' onClick={handleChangeList}>{count===15?'See More':'Hide'}</div>

        </Wrapper>
    )
}

export default Products
