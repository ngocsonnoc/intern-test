import styled from 'styled-components';
export const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
background: #fccb05;
`
export const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Heading = styled.div`
max-width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 90px;
h1{
    font-family: Montserrat;
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 4.5px;
  text-align: left;
  color: #110e03;
  text-transform: uppercase;

}
p{
    font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: center;
  color: #110e03;
  margin-bottom: 15px;
}
.btn-see-more{
    width: 120px;
    border: 3px solid #000;
    text-align: center;
    height: 35px;
    padding-top: 5px;
    cursor: pointer;
    
    span{
        margin-top: 7px;
        text-transform: uppercase;
    }
}
`
export const WhpnIssue = styled.div`
width: 100%;
display: flex;
float: row;
margin-top: 40px;
flex-wrap: wrap;

`
export const Item = styled.div`
flex: 20%;
width: 20%;
background: ${({bg})=>bg?`#${bg}`:'#000000'};
height: 280px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
transition: all .5s ease-in-out;
.header{
    font-family: Montserrat;
  font-size: 35px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: normal;
  text-align: center;
  color: #110e03;
  width: 50%;
  text-transform: uppercase;
}
.img-first{
    width: 40%;
    cursor: pointer;
}
.header-2{
    height: 25%;
    font-family: Montserrat;
  font-size: 30px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  text-transform: uppercase;

}
.img-second{
    height: 80%;
    width: 100%;
}
@media (max-width:793px){
    max-width: 50%;
    flex: 50%;
    .header{
font-size: 25px;
    }
}
`