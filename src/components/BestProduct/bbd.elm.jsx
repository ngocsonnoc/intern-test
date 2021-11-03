import styled from 'styled-components';
export const Wrapper = styled.div`
height: 100vh;
background: #fcd32a;
position: relative;
.bg{
    z-index: 0;
    width: 100%;
    height: 100%;
    img{
    width: 100%;
    height: 100%;
    }
}
@media (max-width:600px){
    height: 199vh;
}
@media (max-width:500px){
    height: 235vh;
}
@media (max-width:375px){
    height: 150vh;
}
`
export const Header = styled.div`
height: 30vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #f96400;
position: absolute;
top: 50px;
z-index: 2;
h2{
    font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
}
p{
    font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  margin-top: 20px;
  max-width: 700px;
}
@media (max-width:600px){
    h2{
        font-size: 35px;
    }
    p{
        font-size: 17px;
        max-width: 90%;
    }
}
`
export const ProductWrapper = styled.div`
position: absolute;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
top: 260px;
width: 100%;
@media (max-width:600px){
    flex-direction: column;
}
`
export const ProductItem = styled.div`
width: 25%;
position: relative;
cursor: pointer;
transition: all .3s ease;
img{
    width: 100%;
    height: 100%;
}
.product-footer{
    position: absolute;
    width: 80%;
    height: 60px;
    border: 3px solid #000;
    z-index: 15;
    bottom: -20px;
    left: 40px;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    span{

    }
    .go{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #000;
        color: #ffffff;
        text-align: center;
        padding-top: 4px;
        cursor: pointer;
    }
}
.flag{
    position: absolute;
    width: 70px;
    height: 70px;
    top: -30px;
    left: 0px;
    
    img{
        width: 100%;
    height: 100%;
    }
}
@media (max-width:600px){
    width: 50%;
    margin-bottom: 70px;
}
@media (max-width:500px){
    width: 80%;
}
`