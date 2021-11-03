import styled from 'styled-components';
export const Wrapper = styled.div`
width: 100%;
min-height: 300px;

`
export const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
li.header{
    font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.86;
  letter-spacing: normal;
  text-align: left;
  color: #111;
}
li{
    font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.21;
  letter-spacing: normal;
  text-align: left;
  color: #333;
}
`
export const Wrapper1 = styled.div`
flex: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center; 
p{
    width: 30%;
}
@media (max-width:700px){
    flex: 90%;
}
`
export const Wrapper2 = styled.div`
flex: 50%;
display: flex;
flex-direction: row;
justify-content: space-around;
@media (max-width:700px){
    flex: 90%;
}

`
export const Wrapper3 = styled.div`
flex: 50%;
display: flex;
justify-content: center;
align-items: center;
padding-left: 100px;
margin-top: 20px;
font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #a9a9a9;
  @media (max-width:700px){
    flex: 70%;
    padding-left: 20px;
}
`
export const Wrapper4 = styled.div`
flex: 50%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
margin-top: 20px;
ul{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: flex-end;
    li{
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}
@media (max-width:700px){
    flex: 30%;
}
`