import styled from 'styled-components'
export const NoticeCon = styled.div`
background: linear-gradient(180deg, #FFFFF2 0%, #FFFFF6 0.01%, #D3DDC0 100%);

`

export const Title = styled.p`
position: absolute;
width: 80vw;
height: 26px;
left: 40px;
top: 120px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 26px;

color: #000000;

`
export const date = styled.p `
position: absolute;
width: 80vw;
height: 12px;
left: 47px;
top: 161px;

font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
/* identical to box height */

color: #000000;

opacity: 0.7;

`
export const contentBody = styled.div`
box-sizing: border-box;

position: absolute;
width: 344px;
height: 520px;
left: 43px;
top: 174px;
background: rgba(255, 255, 255, 0.44);
border: 1px solid rgba(255, 255, 255, 0.47);
backdrop-filter: blur(10.2px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 10px;

`
export const contentParagraph = styled.p`
position: absolute;
width: 229px;
height: 65px;
left: 50px;
top: 211px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #000000;

`

export const border = styled.div`
position: absolute;
width: 348px;
height: 0px;
left: 35px;
top: 157px;

border: 1px solid rgba(0, 0, 0, 0.5);
`
export const IconCon =styled.div`
position: absolute;
width: 80vw;
height: 26px;
left: 40px;
top: 90px;
display: flex; /* Flexbox를 활용 */
  justify-content: flex-end; /* 자식 요소들을 우측으로 정렬 */
  gap: 10px; /* IconImg 사이의 간격 설정 */
`
export const IconImg =styled.img`
width:20px;
height:23px;
`