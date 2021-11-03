import React from 'react'
import { Heading, Item, Main, WhpnIssue, Wrapper } from './issue.elm'
import newImg from '../../assets/images/news-img-01.png'
import img18 from '../../assets/images/img-18.png'
import img19 from '../../assets/images/img-19.png'
import img20 from '../../assets/images/img-20.png'
const Issue = () => {
    return (
        <Wrapper>
            <Main>
                <Heading>
                    <h1>Happened’s issue</h1>
                    <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                    <div className="btn-see-more"> <span>see more</span></div>
                </Heading>
                <WhpnIssue>
                    <Item bg='f50'>
                        <h1 className='header'>whpn
                            issue
                        </h1>
                        <div className='img-first'>
                            <img src={newImg} alt="" />
                        </div>
                    </Item>
                    <Item>
                        <h1 className='header-2'>b brand
                        </h1>
                        <div className='img-second'>
                            <img src={img18} alt="" />
                        </div>
                    </Item>
                    <Item >
                        <h1 className='header-2'>C brand
                        </h1>
                        <div className='img-second'>
                            <img src={img19} alt="" />
                        </div>
                    </Item>
                    <Item bg='f50'>
                        <h1 className='header-2'>d brand
                        </h1>
                        <div className='img-second'>
                            <img src={img20} alt="" />
                        </div>
                    </Item>
                    <Item>
                        <h1 className='header-2'>e brand
                        </h1>
                        <div className='img-second'>
                            <img src={img18} alt="" />
                        </div>
                    </Item>
                </WhpnIssue>
            </Main>
        </Wrapper>
    )
}

export default Issue
