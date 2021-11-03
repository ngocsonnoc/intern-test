import styled from 'styled-components';

export const AboutWrapper = styled.div`
width: 100%;
height: fit-content;
background: #0558c3;
background-size: contain;
background-repeat: no-repeat;
display: flex;
align-items: center;
position: relative;
overflow: hidden;
.bg{
    width: 100%;
    height: 100%;
    z-index: 0;
    img{
        width: 100%;
        height: 100%;
    }
}
.about-content{
    position: absolute;
   width: 50%;
   margin-left: 20%;
   z-index: 1;
   transition: all .3s ease-in;
}
h2{
    margin-bottom: 30px;
    font-family: Montserrat;
  font-size: 50px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 5px;
  text-align: left;
  color: #fff;
}
p{
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
}
@media (max-width:920px){
    
    .about-content{
        top: 80px;
        margin-bottom: 200px;
        width: 70%;
        h2{
            font-size: 30px;
        }
        p{
            font-size: 16px;
        }
    }
}
@media (max-width:700px){
    .about-content{
        top: 15px;
    }
}
@media (max-width:500px){
    .about-content{
        top: 10px;
        h2{
            font-size: 30px;
            margin-bottom: 0;
        }
        p{
            font-size: 12px;
            margin-top: 5px;
        }
    }
}
`