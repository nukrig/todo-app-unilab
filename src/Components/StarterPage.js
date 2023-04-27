import styled from "styled-components";
import todoImg from '../media/todoImg.svg'

function StarterPage() {
  return (
    <StarterDiv>
      <TodoImg src={todoImg} alt="todoImg" />
      <StarterH1>Keep Track Of Daily Tasks In Life</StarterH1>
      <StarterButton>Get Started</StarterButton>
    </StarterDiv>
  );
}

export default StarterPage;

const StarterDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TodoImg = styled.img`
  width:90px;
  height:165px;
  margin-top: 74px;
`
const StarterH1 = styled.h1`
  color: #ffffff;
  font-size: 54px;
  margin-top: 46px;
  font-weight: 600;
  text-align: center;

  @media (max-width:600px){
    font-size: 40px;
  }
`
const StarterButton = styled.button`
  margin-top: 140px;
  margin-bottom: 40px;
  width: 388px;
  height: 98px;
  border-radius: 4px;
  background-color: #5efc8d;
  color: #000000;
  font-size: 48px;
  transition: linear .3s ;
  cursor: pointer;

  &:hover{
    background-color: #ffffff;
  }

  @media (max-width:600px){
    font-size: 36px;
    width: 288px;
    height: 80px;
  }
`

