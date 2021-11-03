import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 15px 120px 27px 97px;
  background-color: #111;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffff;
  transition: all .3s ease-in;
  .navbar__logo{
      padding-top: 15px;
      width: 230px;
      min-width: 230px;
      img{
          width: 100%;
      }
  }
.navbar__center{
    transition: all .3s ease-in;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    cursor: pointer;
    border-right: 2px solid #ffff;
    width: 50%;
    margin-left: 50px;
    
    .navbar__center-item{
        transition: all .2s ease-in;
        width: 120px;
        height: auto;
        margin: 10px 30px 8px 30px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.14;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        padding-bottom: 51px;
        &.active{
        border-bottom: 5px solid #4287f6;
    }
    }
}
.navbar__right{
    transition: all .3s ease-in;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 30px;
    cursor: pointer;
    .navbar__right-item{
        width: 155px;
        height: 11px;
        margin: 10px 0 8px 2px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.14;
        letter-spacing: normal;
        text-align: center;
        color: #fff; 
    }
}
    .menu-icon{
        display: none;
        cursor: pointer;
        position: absolute;
        right: 60px;
    }
@media (max-width:975px){
    flex-direction: column;
    height: ${({ active }) => active ? '450px' : "80px"};
    .navbar__center{
        display: ${({ active }) => active ? 'flex' : "none"};
        flex-direction: column;
        border: none;
        width: 100%;
        align-items: center;
        padding: 0;
        margin: 0;
        .navbar__center-item{
            margin: 10px 0 10px 0;
            padding: 10px 0 10px 0;
        }
    }
    .navbar__right{
        display: ${({ active }) => active ? 'flex' : 'none'};
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0 0 100px 0;
        margin: 0;
        .navbar__right-item{
            margin-top: 20px;
            text-transform: uppercase;
        }
    }
    .menu-icon{
        display: block;
        padding-top: 20px;
        font-size: 26px;
    }
}

`
