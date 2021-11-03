import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
}
.ts-4{
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 48px;
    font-size: 64px;
}
.ts-5{
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    line-height: 60px;
    font-weight: bold;
}
.ts-3{
    font-family: 'Montserrat', sans-serif;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: 4.5px;
    font-weight: bold;
}
.ts-2{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 35px;
    line-height: 30px;
}
.ts-1{
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 4.5px;
}
img{
    width: 100% !important;
    height: 100%;
}
li{
    list-style: none;
    cursor: pointer;
}
`