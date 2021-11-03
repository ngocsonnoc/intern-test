import React from 'react'
import { BrandStoryWrapper, Main, HeadBlock, Board, LeftImage, RightImage } from './bs.elm'
import col from '../../assets/images/img.png'
import obj1 from '../../assets/images/object-01.png'
import obj2 from '../../assets/images/object-02.png'
import obj3 from '../../assets/images/object-03.png'
import obj4 from '../../assets/images/object-04.png'
import obj5 from '../../assets/images/object-05.png'
import obj6 from '../../assets/images/object-06.png'
import obj7 from '../../assets/images/object-07.png'
const BrandStory = () => {
    return (
        <BrandStoryWrapper>
            <Main>
                <LeftImage>
                    <div className='obj-1'>
                        <img src={obj1} alt="obj1" />

                    </div>
                    <div className='obj-6'><img src={obj6} alt="obj6" className='obj-06' /></div>
                    <div className='obj-7'><img src={obj7} alt="obj7" className='obj-07'/></div>
                    {/* <img src={obj6} alt="obj6" className='obj-06'/>
                    <img src={obj7} alt="obj7" className='obj-07'/> */}
                </LeftImage>
                <HeadBlock>
                    <h1>Brand Story</h1>
                    <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                    <Board>
                        <div className='vertical'></div>
                        <div className='collaboration'><img src={col} alt="abc" /></div>
                        <div className='story'>
                            <div className='heading'>What Happened’s Brand story</div>
                            <div className='content'>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                            </div>
                            <button className='btn-see-more'>See More</button>
                        </div>
                    </Board>
                </HeadBlock>
                <RightImage>
                <div className='obj-2'>
                        <img src={obj2} alt="obj1" />

                    </div>
                     <div className='obj-3'><img src={obj3} alt="obj6"  /></div>
                    <div className='obj-4'><img src={obj4} alt="obj7" /></div> 
                    <div className='obj-5'><img src={obj5} alt="obj7" /></div> 
                </RightImage>
            </Main>
        </BrandStoryWrapper>
    )
}

export default BrandStory
