import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
position: relative;
padding-top: 50px;
padding-bottom: 50px;
.see-more{
    width: 190px;
    height: 30px;
    border: 3px solid #020001;
    margin: auto;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
    transition:  all .6s ease;
    font-size: 18px;
    font-weight: 500;
    &:hover{
        background: #f7c400;
        color: #fff;
    }
}
`
export const ProductListWrapper = styled.div`
display: flex;
justify-content: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 90%;
margin: auto;
transition: all .6s ease-in-out;
@media (max-width:380px){
    width: 100%;
}
`
export const ProductCard = styled.div`
flex: 18%;
max-width: 220px;
height: 377px;
position: relative;
margin: 15px;
margin-right: 10px;
.product-image{
    width: 300px;
    height: 300px;
    position: relative;
}
.card-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .footer{
        margin: 10px;
        display: flex;
        float: row;
        width: 200px;
        justify-content: space-between;
        i{
            color: #fa7b26;
            font-size: 18px;
            margin-right: 5px;
        }
        span{
            font-size: 16px;
            line-height: 35px;
        }
    }
}
@media (max-width:500px){
    max-width: 330px;
}
@media (max-width:375px){
    max-width: 300px;
}
`