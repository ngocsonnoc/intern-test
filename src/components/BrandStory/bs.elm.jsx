import styled from 'styled-components';

export const BrandStoryWrapper = styled.div`
width: 100%;
height: 100vh;
background: #0565bb;
position: relative;
overflow: hidden;

@media (max-width:700px){
    height: 150vh;
}
@media (max-width:500px){
    height: 170vh;
}
`
export const Main = styled.div`
width: 100%;
height: 100%;
position: relative;
@media (max-width:1000px){
    
}
`
export const HeadBlock = styled.div`
position: absolute;
left: 30%;
width: 500px;
top: 70px;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
@media (max-width:1000px){
   width: 100%;
    left: 0%;
}

h1{
    font-family: Montserrat;
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 4.5px;
  text-align: left;
  color: #fcd32a;
  text-transform: uppercase;
  transition: all .3s ease;
}
p{
    text-align: center;
    font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: center;
  color: #fcd32a;
  transition: all .3s ease;
}
@media (max-width:700px){
    h1{
    
    }
    p{
        max-width: 80%;
        margin-bottom: 40px;
    }
}
`
export const Board = styled.div`
width: 1000px;
height: 360px;
border-top: 20px solid #000000;
border-left: 2px solid #000000;
border-right: 2px solid #000000;
border-bottom: 2px solid #000000;
margin-top: 20px;
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
transition: all .3s ease;
@media (max-width:1000px){
    width: 80%;
}

.vertical{
    position: absolute;
    width: 990px;
    height: 5px;
    border: 1px solid #0565bb;
    top: -13px;
}
.collaboration{
    width: 50%;
    transition: all .3s ease;
}
.story{
    width: 50%;
    background: #ffffff;
    border: 2px solid #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 50px;
    padding-top: 30px;
   
    transition: all .3s ease;
    .heading{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.4;
        letter-spacing: normal;
        text-align: left;
        color: #222;
        text-transform: uppercase;
    }
    .content{
        font-family: NotoSansCJKkr;
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.88;
        letter-spacing: normal;
        text-align: left;
        color: #222;
        margin-bottom: 20px;
    }
    button.btn-see-more{
        height: 30px;
        width: 80px;
        background: #ffffff;
        border: 2px solid #000000;
        cursor: pointer;
        transition: all .3s ease;
        &:hover{
            background: #f7c400;
            color: #ffffff;
        }
    }
}
@media (max-width:700px){
    flex-direction: column;
    height: auto;
    .collaboration{
        width: 100%;
        z-index: 1;
    }
    .story{
        width: 100%;
        z-index: 1;
        padding-bottom: 20px;
    }
}
`
export const LeftImage = styled.div`
transition: all .3s ease;
        .obj-1{
            position: absolute;
            left: 0;
            bottom: 0;
            height: 125px;
            width: 110px;
            top: 160px;
            left: 80px;
            transition: all .3s ease;
        }
        .obj-6{
            position: absolute;
            left: 0px;
            top: 310px;
            width: 130px;
            transition: all .3s ease;

        }
        .obj-7{
            width: 80px;
            position: absolute;
            top: 400px;
            left: 100px;
            transition: all .3s ease;
        }
        @media (max-width:700px){
            .obj-1{
                z-index: 2;
                top: 210px;
            }
            .obj-6{
                top: 440px;
                z-index: 2;
            }
        }
        @media (max-width:500px){
            .obj-1{
                width: 80px;
                height: 100px;
                top: 520px;
                left: 30px;
            }
            .obj-6{
                display: none;
            }
        }
`
export const RightImage = styled.div`
overflow: hidden;
transition: all .3s ease;
.obj-2{
    position: absolute;
    width: 90px;
    right: 200px;
    top: 80px;
    transition: all .3s ease;
}
.obj-3{
    position: absolute;
    width: 90px;
    right: 140px;
    top: 110px;
    transition: all .3s ease;
}
.obj-4{
    position: absolute;
    width: 150px;
    height: 350px;
    bottom: 30px;
    right: -20px;
    transition: all .3s ease;
}
.obj-5{
    position: absolute;
    width: 150px;
    height: 100px;
    bottom: 30px;
    right: 40px;
    transition: all .3s ease;
}
@media (max-width:700px){
    .obj-4{
        z-index: 0;
    }
    .obj-5{
        z-index: 2;
    }
    .obj-2{
        top: 220px;
        right: 100px;
        z-index: 2;
    }
    .obj-3{
        top: 240px;
        right: 30px;
        z-index: 2;
    }
}
@media (max-width:500px){
    .obj-2{
        width: 65px;
        top: 270px;
        right: 80px;
    }
    .obj-3{
        width: 65px;
        top: 290px;
    }
    .obj-5{
        width: 100px;
        height: 70px;
        bottom: 30px;
        right: -40px;
    }
    .obj-4{
        display: none;
    }
}
`
