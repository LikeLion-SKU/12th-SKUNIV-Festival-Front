import styled from 'styled-components';
import espaImage from '../../public/esapa.svg';
import Haswa from '../../public/timetable/haswa2.svg'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 컨테이너들을 세로로 배열 */
  align-items: center; /* 수직 정렬 */
  margin-bottom: 5%;
`;
// 부모 컨테이너 스타일
const SpecaiContainer = styled.div`

margin-top: 30%;  
margin-left: 50%;
margin-botoom: 30%;

`;

// 자식 컨테이너 스타일
const ItemContainer = styled.div`
position: relative; 
width: 140px;
height: 22vh;
background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top: 10%;
margin-bottom: 10%; 

`;

const ImageContainer = styled.div`
  position: relative;
  
`;

const Image = styled.img`
 
  width: 100%;  
  height: auto; /* 높이는 자동으로 조정됩니다. */
  border-radius: 20px; /* 컨테이너와 일치하도록 둥근 모서리 설정 */
  
`;
const Title = styled.div`
  position: relative;
  padding-top: 5%; 
  text-align: center; 
  color: #2E4966;
  font-size: 22px;
  font-family: 'Pretendard Variable';
  font-weight: 900;
`;

const Time = styled.div`
  position: relative;
  text-align: center; 
  padding-top: 5%; 
  color: black;
  font-size: 15px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  opacity: 0.7;
  
`;





const SpecialComponent = () => {
  return (
    <Wrapper>
    <SpecaiContainer>
    <ItemContainer>
      <ImageContainer>
        <Image src={Haswa} alt="에스파 이미지" />
        <Time>14:50 ~ 15:30</Time>
        <Title>화사</Title>
      </ImageContainer>
    </ItemContainer>
  </SpecaiContainer>
  </Wrapper>
  );
};

export default SpecialComponent;


