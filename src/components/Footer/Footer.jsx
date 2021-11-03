import React from 'react'
import { Main, Wrapper, Wrapper1, Wrapper2, Wrapper3, Wrapper4 } from './footer.elm'
import snsicon_03 from '../../assets/images/snsicon-03.png'
import snsicon_02 from '../../assets/images/snsicon-02.png'
import snsicon_01 from '../../assets/images/snsicon-01.png'
const Footer = () => {
    return (
        <Wrapper>
            <Main>
                <Wrapper1>
                    <ul className="block-1">
                        <li className='header'>What happen</li>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li>[공지] 29CM 강남 스토어 영업 종료</li>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                    </ul>
                </Wrapper1>
                <Wrapper2>
                    <ul className="block-1">
                        <li className='header'>about us</li>
                        <li>회사 소개</li>
                        <li>인재 채용</li>
                        <li>상시 할인 혜택</li>
                    </ul>
                    <ul className="block-1">
                        <li className='header'>my order</li>
                        <li>회사 소개</li>
                        <li>인재 채용</li>
                        <li>상시 할인 혜택</li>
                    </ul>
                    <ul className="block-1">
                        <li className='header'>my account</li>
                        <li>회사 소개</li>
                        <li>인재 채용</li>
                        <li>상시 할인 혜택</li>
                    </ul>
                    <ul className="block-1">
                        <li className='header'>help</li>
                        <li>1 : 1 상담 내역
                        </li>
                        <li>상품 Q &amp; A 내역</li>
                        <li>공지 사항</li>
                        <li>자주하는 질문</li>
                        <li>고객의 소리</li>
                    </ul>

                </Wrapper2>
                <Wrapper3>
                    <p>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                        서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                </Wrapper3>
                <Wrapper4>
                    <ul>
                        <li> <img src={snsicon_01} alt="" /></li>
                        <li> <img src={snsicon_02} alt="" /></li>
                        <li> <img src={snsicon_03} alt="" /></li>
                    </ul>
                </Wrapper4>
            </Main>
        </Wrapper>
    )
}

export default Footer
