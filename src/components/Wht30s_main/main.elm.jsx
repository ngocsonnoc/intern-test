import styled from 'styled-components';
export const Wrapper = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
padding-top: 100px;
margin-bottom: 50px;
 transition: all .6s ease-in;
.obj{
    position: absolute;
}
.obj-4{
    width: 220px;
    height: 290px;
    left: 0;
    overflow: hidden;
}
.obj-7{
width: 100px;
height: 100px;
right: 100px;
top: 160px;
}
.obj-6{
    width: 60px;
height: 60px;
right: 180px;
top: 230px;
}
.obj-8{
    width: 195px;
  height: 274px;
  right: 40px;
  bottom: -20px;
  z-index: 1;
}
.obj-1{
width: 200px;
height: 80px;
left: 180px;
bottom: 0;
z-index: 1;
}
.obj-3{
    width: 100px;
height: 100px;
bottom: 10px;
left: 100px;
}
.obj-9{
    right: -20px;
  bottom: 170px;
  width: 150px;
  height: 150px;

}
@media (max-width:700px){
    .obj-7{
width: 100px;
height: 100px;
right: 100px;
top: 100px;
}
.obj-6{
    width: 60px;
height: 60px;
right: 180px;
top: 160px;
}
.obj-8{
    display: none;
}
.obj-1{
left: 180px;
bottom: 30px;
z-index: 2;
}
.obj-4{
    display: none;
}
}
@media (max-width:500px){
    .obj-7{
width: 100px;
height: 100px;
right: 60px;
top: 100px;
}
.obj-6{
    width: 60px;
height: 60px;
right: 140px;
top: 160px;
}
}
`
export const Main= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
z-index: 2;
.image-box{
    width: 70%;
    height: 500px;
    margin-top: 50px;
}
padding-bottom: 100px;
@media (max-width:700px){
.image-box{
    width: 90%;
}
}
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
